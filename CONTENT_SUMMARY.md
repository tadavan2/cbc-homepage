# Content Scraping Summary

**Scraped from:** https://www.caberrycultivars.com/  
**Date:** November 24, 2025  
**Total Pages Scraped:** 13 pages ✅

## Navigation Structure

Based on the scraped content, here's the site structure:

### Main Navigation
- **Cultivar** → Links to `http://cultivars.cbcberry.com` (separate app)
- **About Us** (dropdown)
  - How It Started → `/about-us/how-it-all-started/`
  - Partners → `/about-us/partners/`
  - Team → `/about-us/team/`
  - FAQs → `/about-us/faq/`
- **Breeding Program** (dropdown)
  - Philosophy → `/breeding-program/philosophy/`
  - Current Efforts → `/breeding-program/current-efforts/`
  - Innovation → `/breeding-program/innovating/`
- **Newsroom** → `/newsroom/`
- **Contact Us** → `/contact/`

## Pages Scraped

### ✅ Successfully Scraped (13 pages)

1. **Home** (`/`)
   - Title: "Home - California Berry Cultivars"
   - Key Content:
     - Heading: "We Are Future Focused"
     - Text: "Rapid development of productive cultivars with high quality fruit and disease resistance that will meet the current and future needs of our customers."
     - Sections: "Team of Expert", "Always Innovating"
     - CTA: "Visit our new Cultivar Explorer" (links to cultivars.cbcberry.com)

2. **Cultivar** (`/cultivar/`)
   - Appears to redirect or link to cultivars.cbcberry.com

3. **About Us** (`/about-us/`)
   - Title: "About Us - California Berry Cultivars"
   - Heading: "About Us"
   - Contains navigation links to subpages

4. **Partners** (`/partner/`)
   - Title: "Partners - California Berry Cultivars"
   - Has heading content

5. **Team** (`/about-us/team/`)
   - Title: "Team - California Berry Cultivars"
   - Has heading and paragraph content

6. **FAQ** (`/faq/`)
   - Title: "FAQ - California Berry Cultivars"
   - Contains images

7. **Breeding Program** (`/breeding-program/`)
   - Title: "Breeding Program - California Berry Cultivars"
   - Has heading and navigation links

8. **Philosophy** (`/breeding-program/philosophy/`)
   - Title: "Philosophy - California Berry Cultivars"
   - Has heading and paragraph content

9. **Current Efforts** (`/breeding-program/current-effort/`)
   - Title: "Current Efforts - California Berry Cultivars"
   - Has paragraph and image content

10. **Newsroom** (`/newsroom/`)
    - Title: "Newsroom - California Berry Cultivars"
    - Has paragraph and link content

11. **How It Started** (`/about-us/how-it-all-started/`)
    - Title: "How it all started - California Berry Cultivars"
    - Contains images

12. **Innovation** (`/breeding-program/innovating/`)
    - Title: "Innovating - California Berry Cultivars"
    - Heading: "We're always Innovating"
    - Content about high-quality scientific research and methyl-bromide research
    - Contains images

13. **Contact** (`/contact/`)
    - Title: "Contact - California Berry Cultivars"
    - "Sales Contact" section with email addresses:
      - Kyle VandenLangenberg: kyle@cbcberry.com
      - Lucky Wetwood: lw8756@icloud.com
    - "Connect with Us" section (social media links)
    - "Ask Us a Question" contact form

## Key Content Elements

### Homepage Sections
1. **Hero Section**
   - "We Are Future Focused"
   - Description about rapid development of productive cultivars
   - CTA: "Tell Me More"

2. **Team Section**
   - "Team of Expert"
   - CTA: "Meet the Team"

3. **Innovation Section**
   - "Always Innovating"
   - Text: "We are committed to consistent development and improvement of strawberry cultivars, a key component of supporting and growing the international strawberry industry."
   - CTA: "Learn More"

### Common Elements
- **Logo:** California Berry Cultivars logo (appears in header and footer)
- **Contact Form:** Appears in footer (WordPress Contact Form 7)
- **Footer Links:** About Us, Breeding Program, Newsroom, Contact Us

## Next Steps

1. **Manual Review Needed:**
   - Some pages may have JavaScript-rendered content that wasn't captured
   - Need to manually review each page for complete content extraction
   - Check for images, videos, and other media assets

2. **Content Organization:**
   - Organize scraped content into structured data files
   - Create page templates based on content structure
   - Map old URLs to new Next.js routes

3. **Design Decisions:**
   - Decide on layout structure
   - Determine if we'll use shared theme from cultivar explorer
   - Plan component structure

## Files Generated

- `data/scraped-content/summary.json` - Overview of all scraped pages
- `data/scraped-content/all-content.json` - Complete content from all pages
- `data/scraped-content/[page-name].json` - Individual page content files

## Notes

- The site appears to be a WordPress site
- Some content may be dynamically loaded via JavaScript
- Contact form uses WordPress Contact Form 7
- Logo and branding assets will need to be extracted separately
- Links to cultivar explorer should be updated to point to the new URL structure

