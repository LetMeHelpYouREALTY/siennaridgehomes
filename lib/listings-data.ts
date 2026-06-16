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
    name: '1594 Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'New Construction Model',
    beds: 3,
    baths: 2.5,
    sqft: 1594,
    price: 564890,
    priceMin: '564890',
    priceMax: '620000',
    image: '/images/property-sample-1.jpg',
    imageAlt: '1594 Sienna Ridge single-story Lennar model home near Desert Breeze Park, Las Vegas',
    description:
      'Single-story Lennar floor plan at Sienna Ridge with open living, 3 bedrooms, and 2.5 baths across 1,594 sq ft. Near Desert Breeze Park and I-215 with energy-saving features available.',
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
    name: '1760 Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'Available Now',
    beds: 4,
    baths: 3,
    sqft: 1760,
    price: 620000,
    priceMin: '590000',
    priceMax: '720000',
    image: '/images/property-sample-2.jpg',
    imageAlt: '1760 Sienna Ridge two-story Lennar model home in Sienna Ridge, Las Vegas',
    description:
      'Two-story Lennar floor plan at Sienna Ridge with 4 bedrooms, 3 baths, and 1,760 sq ft. Ideal for growing families near Desert Breeze Park with easy I-215 access.',
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
    name: '2270 Sienna Ridge',
    streetAddress: '8370 Caldera Hls Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: SIENNA_RIDGE.postalCode,
    neighborhood: SIENNA_RIDGE.name,
    status: 'Coming Soon',
    beds: 5,
    baths: 3.5,
    sqft: 2270,
    price: 860000,
    priceMin: '750000',
    priceMax: '860000',
    image: '/images/property-sample-3.jpg',
    imageAlt: '2270 Sienna Ridge executive Lennar model home in Sienna Ridge, Las Vegas',
    description:
      'Executive Lennar model at Sienna Ridge with 5 bedrooms, 3.5 baths, and 2,270 sq ft. Premium option with Next Gen® suite potential for multi-generational or work-from-home living.',
    highlights: [
      'Executive floor plan with 5 bedrooms',
      "Lennar's Next Gen® suite for multi-generational living",
      'Downstairs bedroom and flex space options',
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
