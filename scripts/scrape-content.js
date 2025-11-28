/**
 * Content Scraper for cbcberry.com
 * Extracts content from all pages for migration to new Next.js app
 */

const fs = require('fs');
const path = require('path');

// Pages to scrape based on navigation structure
const pagesToScrape = [
  { url: 'https://www.caberrycultivars.com/', name: 'home', title: 'Home' },
  { url: 'https://www.caberrycultivars.com/cultivar/', name: 'cultivar', title: 'Cultivar' },
  { url: 'https://www.caberrycultivars.com/about-us/', name: 'about-us', title: 'About Us' },
  { url: 'https://www.caberrycultivars.com/about-us/how-it-all-started/', name: 'how-it-started', title: 'How It Started' },
  { url: 'https://www.caberrycultivars.com/about-us/partners/', name: 'partner', title: 'Partner' },
  { url: 'https://www.caberrycultivars.com/about-us/team/', name: 'team', title: 'Team' },
  { url: 'https://www.caberrycultivars.com/about-us/faq/', name: 'faq', title: 'FAQ' },
  { url: 'https://www.caberrycultivars.com/breeding-program/', name: 'breeding-program', title: 'Breeding Program' },
  { url: 'https://www.caberrycultivars.com/breeding-program/philosophy/', name: 'philosophy', title: 'Philosophy' },
  { url: 'https://www.caberrycultivars.com/breeding-program/current-efforts/', name: 'current-effort', title: 'Current Effort' },
  { url: 'https://www.caberrycultivars.com/breeding-program/innovating/', name: 'innovation', title: 'Innovation' },
  { url: 'https://www.caberrycultivars.com/newsroom/', name: 'newsroom', title: 'Newsroom' },
  { url: 'https://www.caberrycultivars.com/contact/', name: 'contact-us', title: 'Contact Us' },
];

async function scrapePage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      console.warn(`⚠️  Failed to fetch ${url}: ${response.status}`);
      return null;
    }
    
    const html = await response.text();
    return html;
  } catch (error) {
    console.error(`❌ Error scraping ${url}:`, error.message);
    return null;
  }
}

function extractContent(html, pageName) {
  if (!html) return null;
  
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  // Extract meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const description = descMatch ? descMatch[1].trim() : '';
  
  // Extract main content (try to find main/article/content areas)
  let mainContent = '';
  
  // Try to find main content area
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
                    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                    html.match(/<div[^>]*class=["'][^"']*content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
  
  if (mainMatch) {
    mainContent = mainMatch[1];
  } else {
    // Fallback: get body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      mainContent = bodyMatch[1];
    }
  }
  
  // Extract headings
  const headings = [];
  const h1Matches = mainContent.matchAll(/<h1[^>]*>([^<]+)<\/h1>/gi);
  const h2Matches = mainContent.matchAll(/<h2[^>]*>([^<]+)<\/h2>/gi);
  const h3Matches = mainContent.matchAll(/<h3[^>]*>([^<]+)<\/h3>/gi);
  
  for (const match of h1Matches) headings.push({ level: 1, text: match[1].trim() });
  for (const match of h2Matches) headings.push({ level: 2, text: match[1].trim() });
  for (const match of h3Matches) headings.push({ level: 3, text: match[1].trim() });
  
  // Extract paragraphs (clean HTML)
  const paragraphs = [];
  const pMatches = mainContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const match of pMatches) {
    const text = match[1]
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
    if (text && text.length > 20) { // Only keep substantial paragraphs
      paragraphs.push(text);
    }
  }
  
  // Extract links
  const links = [];
  const linkMatches = mainContent.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi);
  for (const match of linkMatches) {
    links.push({
      url: match[1],
      text: match[2].trim()
    });
  }
  
  // Extract images
  const images = [];
  const imgMatches = mainContent.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?/gi);
  for (const match of imgMatches) {
    images.push({
      src: match[1],
      alt: match[2] || ''
    });
  }
  
  return {
    pageName,
    title,
    description,
    headings,
    paragraphs,
    links,
    images,
    rawHtml: mainContent.substring(0, 5000) // First 5000 chars for reference
  };
}

async function main() {
  console.log('🚀 Starting content scrape...\n');
  
  const results = [];
  const outputDir = path.join(__dirname, '../data/scraped-content');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (const page of pagesToScrape) {
    console.log(`📄 Scraping: ${page.title} (${page.url})`);
    const html = await scrapePage(page.url);
    
    if (html) {
      const content = extractContent(html, page.name);
      if (content) {
        results.push(content);
        
        // Save individual page
        fs.writeFileSync(
          path.join(outputDir, `${page.name}.json`),
          JSON.stringify(content, null, 2)
        );
        console.log(`   ✅ Saved: ${page.name}.json`);
      }
    }
    
    // Be nice to the server
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Save summary
  const summary = {
    scrapedAt: new Date().toISOString(),
    totalPages: results.length,
    pages: results.map(r => ({
      name: r.pageName,
      title: r.title,
      headingsCount: r.headings.length,
      paragraphsCount: r.paragraphs.length,
      linksCount: r.links.length,
      imagesCount: r.images.length
    }))
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'summary.json'),
    JSON.stringify(summary, null, 2)
  );
  
  // Save all content
  fs.writeFileSync(
    path.join(outputDir, 'all-content.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log(`\n✅ Scraping complete!`);
  console.log(`   📁 Output: ${outputDir}`);
  console.log(`   📊 Total pages: ${results.length}`);
}

main().catch(console.error);

