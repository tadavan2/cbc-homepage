# CBC Homepage - New Next.js App

**Purpose:** Rebuild of www.cbcberry.com as a modern Next.js application

## Project Structure

```
cbc-homepage/
├── app/                    # Next.js app directory
├── components/             # React components
├── data/                   # Content and data files
│   └── scraped-content/   # Content scraped from old site
├── scripts/                # Utility scripts
│   └── scrape-content.js  # Content scraper
└── shared/                 # Shared theme/components (to be added)
```

## Content Scraping

Content has been scraped from the old WordPress site at https://www.caberrycultivars.com/

**Scraped Pages:**
- Home
- About Us (and subpages: How It Started, Partners, Team, FAQ)
- Breeding Program (and subpages: Philosophy, Current Efforts, Innovation)
- Newsroom
- Contact

**Content Files:**
- `data/scraped-content/all-content.json` - All scraped content
- `data/scraped-content/summary.json` - Overview
- `data/scraped-content/[page-name].json` - Individual pages

See `CONTENT_SUMMARY.md` for detailed breakdown.

## Next Steps

1. ✅ Content scraped from old site
2. ⏳ Review and organize scraped content
3. ⏳ Design layout structure
4. ⏳ Decide on theme sharing with cultivar explorer
5. ⏳ Build page templates
6. ⏳ Implement navigation
7. ⏳ Add shared theme (optional)

## Theme Sharing

This app can optionally share theme files from `cbc-cultivar-explorer/shared/theme/`:
- `variables.css` - Design tokens
- `base.css` - Base glassmorphism styles
- `components.css` - Reusable component styles

See `../cbc-cultivar-explorer/docs/THEME_EXTRACTION_GUIDE.md` for details.

## Development

```bash
npm run dev
```

## Deployment

This will be deployed as a separate Vercel project for www.cbcberry.com
