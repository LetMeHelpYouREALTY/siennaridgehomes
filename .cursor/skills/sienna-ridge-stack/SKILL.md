---
name: sienna-ridge-stack
description: Sienna Ridge Homes project skill — Next.js 15 real estate site with RealScout MLS widgets, SEO structured data, Vercel deployment, and Southwest Las Vegas market pages. Use for any feature, bugfix, or optimization in this repository.
---

# Sienna Ridge Homes — Project Skill

Real estate marketing site for **Dr. Jan Duffy** (Spring Valley / Southwest Las Vegas, zips 89117, 89147, 89148).

## Architecture

```
app/                    # Next.js App Router pages
lib/site-config.ts      # SITE_URL, NAP, AGENT_ENCODED_ID, REVIEW_PROFILES
lib/structured-data.ts  # Organization, RealEstateAgent, Review, RealEstateListing JSON-LD
lib/sitemap-pages.ts    # Single source of truth for sitemap URLs
lib/listings-data.ts    # Featured Sienna Ridge Lennar model homes
lib/sienna-ridge-community.ts  # Location, features, base price range ($564,890–$860,000+)
lib/seo-pages-data.ts          # SEO/AEO landing page content (guides, FAQs, comparisons)
lib/reviews-data.ts     # Client testimonials
components/json-ld.tsx  # Server-rendered structured data
components/realscout-script.tsx
components/third-party-scripts.tsx  # GA (lazyOnload)
middleware.ts           # www + HTTPS canonical redirects
```

## RealScout widgets

Agent ID: `QWdlbnQtMjI1MDUw` (from `lib/site-config.ts`).

| Web component | Use case |
|---|---|
| `realscout-simple-search` | Quick property search |
| `realscout-advanced-search` | Filtered search |
| `realscout-office-listings` | Featured MLS listings (price-min/max attrs) |
| `realscout-home-value` | Home valuation widget |

Types declared in `types/realscout.d.ts`. Load script via `RealScoutScript` only — never inline duplicate scripts.

## SEO checklist for new pages

1. Add `metadata` export with title, description, `alternates.canonical`.
2. Register path in `lib/sitemap-pages.ts`.
3. Add `BreadcrumbSchema` via `breadcrumbTrail()` from `lib/breadcrumb-presets.ts`.
4. Internal link from footer or related landing pages.
5. Validate with Google Rich Results Test after deploy.

## Performance priorities

1. Third-party scripts: `lazyOnload` (GA, RealScout).
2. Images: Next.js `<Image>` with `sizes`; AVIF/WebP via `next.config.js`.
3. Static generation: prefer Server Components; `'use client'` only for interactivity.
4. No render-blocking scripts in `<head>` except JSON-LD.

## Verification

```bash
npm run build
npm run start
# curl -I https://www.siennaridgehomes.com/sitemap-index.xml
```

## External links

- Production: https://www.siennaridgehomes.com
- RealScout search: https://drjanduffy.realscout.com/homesearch/map?for_sale=1&for_rent=0
- GitHub: LetMeHelpYouREALTY/siennaridgehomes
