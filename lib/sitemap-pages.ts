import { AGENT_HEADSHOT_PATH, SITE_URL } from '@/lib/site-config'
import { FEATURED_LISTINGS } from '@/lib/listings-data'
import { GSC_PRIORITY_PATHS } from '@/lib/seo-guide-pages'
import { SEO_EXPANSION_PAGES } from '@/lib/seo-pages-data'

export type SitemapPage = {
  path: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

/** Stable lastmod dates — update only when page content meaningfully changes. */
export const SITEMAP_LASTMOD = {
  core: '2026-06-17',
  guides: '2026-06-29',
  expansion: '2026-06-16',
  legal: '2026-01-01',
} as const

/** GSC priority guide pages — segmented sitemap for crawl efficiency. */
export const SITEMAP_GUIDE_PAGES: SitemapPage[] = GSC_PRIORITY_PATHS.map((path) => ({
  path,
  lastModified: SITEMAP_LASTMOD.guides,
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}))

export const SITEMAP_PAGES: SitemapPage[] = [
  { path: '', lastModified: SITEMAP_LASTMOD.core, changeFrequency: 'weekly', priority: 1 },
  { path: '/about', lastModified: SITEMAP_LASTMOD.core, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/listings', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'daily', priority: 0.9 },
  ...FEATURED_LISTINGS.map((listing) => ({
    path: `/listings/${listing.slug}`,
    lastModified: listing.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  })),
  { path: '/neighborhoods/89117', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods/89147', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods/89148', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'weekly', priority: 0.9 },
  ...SITEMAP_GUIDE_PAGES,
  { path: '/neighborhoods', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'weekly', priority: 0.85 },
  { path: '/faq', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'weekly', priority: 0.8 },
  ...SEO_EXPANSION_PAGES.map((page) => ({
    path: page.path,
    lastModified: SITEMAP_LASTMOD.expansion,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  })),
  { path: '/sitemap', lastModified: SITEMAP_LASTMOD.expansion, changeFrequency: 'monthly', priority: 0.3 },
  { path: '/privacy', lastModified: SITEMAP_LASTMOD.legal, changeFrequency: 'monthly', priority: 0.3 },
  { path: '/terms', lastModified: SITEMAP_LASTMOD.legal, changeFrequency: 'monthly', priority: 0.3 },
]

export const SITEMAP_CHILD_LASTMOD = {
  pages: SITEMAP_LASTMOD.expansion,
  guides: SITEMAP_LASTMOD.guides,
  images: SITEMAP_LASTMOD.expansion,
} as const

export type SitemapImage = {
  pagePath: string
  loc: string
  caption: string
  title: string
}

export const SITEMAP_IMAGES: SitemapImage[] = [
  {
    pagePath: '/',
    loc: `${SITE_URL}/images/hero-homepage.jpg`,
    caption: 'Southwest Las Vegas Real Estate - Beautiful homes in Spring Valley',
    title: 'Spring Valley Real Estate Agent Dr. Jan Duffy',
  },
  {
    pagePath: '/about',
    loc: `${SITE_URL}/images/hero-about.jpg`,
    caption: 'Dr. Jan Duffy - Southwest Las Vegas Real Estate Expert',
    title: 'Meet Dr. Jan Duffy - Premier Real Estate Agent',
  },
  {
    pagePath: '/listings',
    loc: `${SITE_URL}/images/hero-listings.jpg`,
    caption: 'Southwest Las Vegas Homes for Sale - Spring Valley Listings',
    title: 'Available Homes in Spring Valley and Southwest Las Vegas',
  },
  {
    pagePath: '/neighborhoods/89117',
    loc: `${SITE_URL}/images/hero-spring-valley.jpg`,
    caption: 'Spring Valley Real Estate - Beautiful neighborhood in Southwest Las Vegas',
    title: 'Spring Valley Neighborhood Guide - 89117',
  },
  {
    pagePath: '/about',
    loc: `${SITE_URL}${AGENT_HEADSHOT_PATH}`,
    caption: 'Dr. Jan Duffy - Professional Real Estate Agent',
    title: 'Professional Headshot - Dr. Jan Duffy Real Estate',
  },
  {
    pagePath: '/listings/1594-sienna-ridge',
    loc: `${SITE_URL}/images/property-sample-1.jpg`,
    caption: 'New construction home in Spring Valley',
    title: '1594 Sienna Ridge - Single Story Home Model',
  },
  {
    pagePath: '/listings/1760-sienna-ridge',
    loc: `${SITE_URL}/images/property-sample-2.jpg`,
    caption: 'Available home in Southwest Las Vegas',
    title: '1760 Sienna Ridge - Two Story Home Model',
  },
  {
    pagePath: '/listings/2270-sienna-ridge',
    loc: `${SITE_URL}/images/property-sample-3.jpg`,
    caption: 'Investment opportunity in Las Vegas',
    title: '2270 Sienna Ridge - Executive Home Model',
  },
]

export function pageUrl(path: string) {
  return `${SITE_URL}${path}`
}
