import { SITE_URL } from '@/lib/site-config'
import { FEATURED_LISTINGS } from '@/lib/listings-data'

export type SitemapPage = {
  path: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

/** Stable lastmod dates — update only when page content meaningfully changes. */
export const SITEMAP_PAGES: SitemapPage[] = [
  { path: '', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', lastModified: '2026-01-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/listings', lastModified: '2026-06-16', changeFrequency: 'daily', priority: 0.9 },
  ...FEATURED_LISTINGS.map((listing) => ({
    path: `/listings/${listing.slug}`,
    lastModified: listing.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  })),
  { path: '/neighborhoods/89117', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods/89147', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods/89148', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/spring-valley-real-estate', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/southwest-las-vegas-homes', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/89117-homes-for-sale', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/89147-homes-for-sale', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/89148-homes-for-sale', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.8 },
  {
    path: '/las-vegas-investment-properties',
    lastModified: '2026-06-16',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/first-time-home-buyer-las-vegas',
    lastModified: '2026-06-16',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  { path: '/las-vegas-home-valuation', lastModified: '2026-06-16', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/sitemap', lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/privacy', lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.3 },
]

export const SITEMAP_CHILD_LASTMOD = {
  pages: '2026-06-16',
  images: '2026-06-16',
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
    loc: `${SITE_URL}/images/professional-photo.jpg`,
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
