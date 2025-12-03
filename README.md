# CBC Homepage

**Live Site:** [www.cbcberry.com](https://www.cbcberry.com)  
**Purpose:** Marketing website for California Berry Cultivars

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2
- **Styling:** Tailwind CSS 4
- **Email:** Resend
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics & Speed Insights

## Project Structure

```
cbc-homepage/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── api/               # API routes (contact, apply)
│   ├── breeding/          # Breeding program page
│   ├── careers/           # Careers listing page
│   ├── contact/           # Contact page
│   ├── cultivar-sublicense/  # Sublicense info
│   ├── privacy/           # Privacy policy
│   └── where-to-buy/      # Nursery directory
├── components/            # React components
├── data/                  # Reference content (not used in prod)
├── lib/                   # Utilities (brand data, cultivars)
├── public/                # Static assets
│   ├── docs/              # PDFs (sublicense, job descriptions)
│   └── images/            # Images and logos
└── shared/theme/          # Shared CSS variables
```

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with scroll-snap sections |
| `/about` | Company story, team, mission |
| `/breeding` | Breeding program details |
| `/where-to-buy` | Nursery directory with interactive blob map |
| `/careers` | Job openings |
| `/contact` | Contact form |

## Experimental Pages

| Route | Description |
|-------|-------------|
| `/test-waves-xyz789` | R&D page for layered SVG wave backgrounds (Keynote-style) |

## Components

| Component | Status | Description |
|-----------|--------|-------------|
| `NavBar.tsx` | Active | Glassmorphism navigation bar |
| `Footer.tsx` | Active | Site-wide footer |
| `IntroOverlay.tsx` | Active | Homepage intro animation with scroll reveal |
| `ContactForm.tsx` | Active | Contact page form (Resend integration) |
| `ApplicationForm.tsx` | Active | Careers application form |
| `ScrollReveal.tsx` | Unused | Utility for scroll-triggered animations (kept for future use) |

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Required in `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
```

## Deployment

Deployed automatically via Vercel on push to main branch.

---

*Last updated: December 2025*
