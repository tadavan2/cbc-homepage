/**
 * FNM (Fresas Nuevos Materiales) Site Scraper
 * Extracts content structure and ideas for CBC homepage
 */

const fs = require('fs');
const path = require('path');

// Pages to scrape - FNM site structure
const pagesToScrape = [
  { url: 'https://www.fresasnm.com/fresas-nuevos-materiales/?lang=en', name: 'homepage', title: 'Homepage' },
  { url: 'https://www.fresasnm.com/rd/?lang=en', name: 'rd', title: 'R&D' },
  { url: 'https://www.fresasnm.com/variedades/?lang=en', name: 'varieties', title: 'Varieties' },
  { url: 'https://www.fresasnm.com/variedades/marisma-fnm/?lang=en', name: 'marisma', title: 'Marisma FNM' },
  { url: 'https://www.fresasnm.com/variedades/noelia/?lang=en', name: 'noelia', title: 'Noelia' },
  { url: 'https://www.fresasnm.com/contacto/?lang=en', name: 'contact', title: 'Contact' },
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
  
  // Extract main content
  let mainContent = '';
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
                    html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  
  if (mainMatch) {
    mainContent = mainMatch[1];
  }
  
  // Extract headings
  const headings = [];
  const h1Matches = mainContent.matchAll(/<h1[^>]*>([^<]+)<\/h1>/gi);
  const h2Matches = mainContent.matchAll(/<h2[^>]*>([^<]+)<\/h2>/gi);
  const h3Matches = mainContent.matchAll(/<h3[^>]*>([^<]+)<\/h3>/gi);
  
  for (const match of h1Matches) headings.push({ level: 1, text: match[1].trim() });
  for (const match of h2Matches) headings.push({ level: 2, text: match[1].trim() });
  for (const match of h3Matches) headings.push({ level: 3, text: match[1].trim() });
  
  // Extract paragraphs
  const paragraphs = [];
  const pMatches = mainContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const match of pMatches) {
    const text = match[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, '-')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .trim();
    if (text && text.length > 20) {
      paragraphs.push(text);
    }
  }
  
  // Extract lists
  const lists = [];
  const ulMatches = mainContent.matchAll(/<ul[^>]*>([\s\S]*?)<\/ul>/gi);
  for (const match of ulMatches) {
    const listItems = [];
    const liMatches = match[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    for (const liMatch of liMatches) {
      const itemText = liMatch[1]
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .trim();
      if (itemText) listItems.push(itemText);
    }
    if (listItems.length > 0) lists.push(listItems);
  }
  
  // Extract section structure
  const sections = [];
  const sectionMatches = mainContent.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi);
  for (const match of sectionMatches) {
    const sectionHtml = match[1];
    const sectionTitle = sectionHtml.match(/<h[1-3][^>]*>([^<]+)<\/h[1-3]>/i);
    sections.push({
      title: sectionTitle ? sectionTitle[1].trim() : '',
      content: sectionHtml.substring(0, 500)
    });
  }
  
  return {
    pageName,
    title,
    description,
    headings,
    paragraphs: paragraphs.slice(0, 30), // Limit to first 30
    lists: lists.slice(0, 10), // Limit to first 10 lists
    sections: sections.slice(0, 10), // Limit to first 10
    rawHtml: mainContent.substring(0, 15000) // First 15k chars
  };
}

async function main() {
  console.log('🚀 Scraping FNM competitor site...\n');
  
  const results = [];
  const outputDir = path.join(__dirname, '../data/competitor-research/fnm');
  
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
        
        fs.writeFileSync(
          path.join(outputDir, `${page.name}.json`),
          JSON.stringify(content, null, 2)
        );
        console.log(`   ✅ Saved: ${page.name}.json`);
        console.log(`      - Headings: ${content.headings.length}`);
        console.log(`      - Paragraphs: ${content.paragraphs.length}`);
        console.log(`      - Lists: ${content.lists.length}`);
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Be respectful
  }
  
  // Save summary
  const summary = {
    scrapedAt: new Date().toISOString(),
    site: 'Fresas Nuevos Materiales (FNM)',
    totalPages: results.length,
    pages: results.map(r => ({
      name: r.pageName,
      title: r.title,
      headingsCount: r.headings.length,
      paragraphsCount: r.paragraphs.length,
      listsCount: r.lists.length,
      sectionsCount: r.sections.length
    }))
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'summary.json'),
    JSON.stringify(summary, null, 2)
  );
  
  fs.writeFileSync(
    path.join(outputDir, 'all-content.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log(`\n✅ Scraping complete!`);
  console.log(`   📁 Output: ${outputDir}`);
  console.log(`   📊 Total pages: ${results.length}`);
}

main().catch(console.error);

