import { SITE_URL } from '@/lib/site-config'
import { SIENNA_RIDGE } from '@/lib/sienna-ridge-community'

export type FeaturedListing = {
  slug: string
  name: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
  neighborhood: string
  status: 'New Construction Model' | 'Available Now' | 'Coming Soon'
  beds: number
  baths: number
  sqft: number
  price: number
  priceMin: string
  priceMax: string
  image: string
  imageAlt: string
  description: string
  highlights: string[]
  lastModified: string
}

export const FEATURED_LISTINGS: FeaturedListing[] = [
  {
    slug: '1594-sienna-ridge',
    name: 'Glenbrook at Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'New Construction Model',
    beds: 3,
    baths: 2.5,
    sqft: 1966,
    price: 588990,
    priceMin: '588990',
    priceMax: '620000',
    image: '/images/property-sample-1.jpg',
    imageAlt: 'Glenbrook Lennar model home at Sienna Ridge near Desert Breeze Park, Las Vegas',
    description:
      'Glenbrook single-family Lennar plan at Sienna Ridge with open living, 3 bedrooms, and 2.5 baths across ~1,966 sq ft. Near Desert Breeze Park and I-215 with energy-saving features available.',
    highlights: [
      'Single-story living with open great room',
      'Downstairs bedroom options',
      'Energy-saving features including solar panels',
      'Minutes from Desert Breeze Park and I-215',
    ],
    lastModified: '2026-06-16',
  },
  {
    slug: '1760-sienna-ridge',
    name: 'Skyland at Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'Available Now',
    beds: 4,
    baths: 3,
    sqft: 2270,
    price: 612990,
    priceMin: '590000',
    priceMax: '650000',
    image: '/images/property-sample-2.jpg',
    imageAlt: 'Skyland two-story Lennar model home at Sienna Ridge, Las Vegas',
    description:
      'Skyland two-story Lennar plan at Sienna Ridge with 4 bedrooms, 3 baths, and 2,270 sq ft. Executive single-family layout near Desert Breeze Park with easy I-215 access.',
    highlights: [
      'Two-story layout with flexible living space',
      'Downstairs bedroom available on select plans',
      "Lennar's Next Gen® suite options for multi-generational living",
      'Solar and energy-efficient features available',
    ],
    lastModified: '2026-06-16',
  },
  {
    slug: '2270-sienna-ridge',
    name: 'Bellevue Next Gen® at Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'Coming Soon',
    beds: 4,
    baths: 3,
    sqft: 2640,
    price: 662990,
    priceMin: '640000',
    priceMax: '662990',
    image: '/images/property-sample-3.jpg',
    imageAlt: 'Bellevue Next Gen Lennar model home at Sienna Ridge, Las Vegas',
    description:
      'Bellevue Next Gen® Lennar plan at Sienna Ridge with 4 bedrooms, 3 baths, and 2,640 sq ft including a private multi-generational suite.',
    highlights: [
      'Bellevue Next Gen® private suite layout',
      "Lennar's multi-generational living with separate entrance",
      '2,640 sq ft executive floor plan',
      'Energy-saving solar features on select homes',
    ],
    lastModified: '2026-06-16',
  },
]

export function getListingBySlug(slug: string) {
  return FEATURED_LISTINGS.find((listing) => listing.slug === slug)
}

export function listingUrl(slug: string) {
  return `${SITE_URL}/listings/${slug}`
}

export function formatListingPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
