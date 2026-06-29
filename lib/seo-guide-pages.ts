/** Priority SEO landing pages — keep in sync with sitemap-pages.ts */
export type SeoGuidePage = {
  href: string
  label: string
  description: string
  category: 'area' | 'zip' | 'buyer'
}

export const SEO_GUIDE_PAGES: SeoGuidePage[] = [
  {
    href: '/spring-valley-real-estate',
    label: 'Spring Valley Real Estate',
    description: 'Area overview, zip codes, and buyer resources for Spring Valley.',
    category: 'area',
  },
  {
    href: '/southwest-las-vegas-homes',
    label: 'Southwest Las Vegas Homes',
    description: 'Homes for sale across 89117, 89147, and 89148.',
    category: 'area',
  },
  {
    href: '/89117-homes-for-sale',
    label: '89117 Homes for Sale',
    description: 'Spring Valley established homes and neighborhoods.',
    category: 'zip',
  },
  {
    href: '/89147-homes-for-sale',
    label: '89147 Homes for Sale',
    description: 'Sienna Ridge new construction and Southwest LV resale.',
    category: 'zip',
  },
  {
    href: '/89148-homes-for-sale',
    label: '89148 Homes for Sale',
    description: 'Newer builds and 215 corridor communities.',
    category: 'zip',
  },
  {
    href: '/first-time-home-buyer-las-vegas',
    label: 'First-Time Home Buyer Guide',
    description: 'Step-by-step Las Vegas buying process for new buyers.',
    category: 'buyer',
  },
  {
    href: '/las-vegas-home-valuation',
    label: 'Free Home Valuation',
    description: 'Instant property estimate for Southwest Las Vegas homes.',
    category: 'buyer',
  },
  {
    href: '/las-vegas-investment-properties',
    label: 'Investment Properties',
    description: 'Rental analysis and investor opportunities in Spring Valley.',
    category: 'buyer',
  },
]

export const GSC_PRIORITY_PATHS = SEO_GUIDE_PAGES.map((page) => page.href)
