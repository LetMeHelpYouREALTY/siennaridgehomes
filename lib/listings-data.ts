import { SITE_URL } from '@/lib/site-config'

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
    streetAddress: 'Sienna Ridge Drive',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89148',
    neighborhood: 'Sienna Ridge',
    status: 'New Construction Model',
    beds: 3,
    baths: 2.5,
    sqft: 1594,
    price: 485000,
    priceMin: '450000',
    priceMax: '520000',
    image: '/images/property-sample-1.jpg',
    imageAlt: '1594 Sienna Ridge single-story model home in Sienna Ridge, Las Vegas',
    description:
      'Single-story Sienna Ridge model with open living, 3 bedrooms, and 2.5 baths across 1,594 sq ft. Ideal for buyers seeking a low-maintenance floor plan in Southwest Las Vegas.',
    highlights: [
      'Single-story living with open great room',
      'Primary suite with walk-in closet',
      'Two-car garage and covered patio',
      'Minutes from Spring Valley amenities',
    ],
    lastModified: '2026-06-16',
  },
  {
    slug: '1760-sienna-ridge',
    name: '1760 Sienna Ridge',
    streetAddress: 'Sienna Ridge Drive',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89148',
    neighborhood: 'Sienna Ridge',
    status: 'Available Now',
    beds: 4,
    baths: 3,
    sqft: 1760,
    price: 525000,
    priceMin: '500000',
    priceMax: '560000',
    image: '/images/property-sample-2.jpg',
    imageAlt: '1760 Sienna Ridge two-story model home in Sienna Ridge, Las Vegas',
    description:
      'Two-story Sienna Ridge floor plan offering 4 bedrooms, 3 baths, and 1,760 sq ft. A strong fit for growing families who want separation between living and sleeping areas.',
    highlights: [
      'Two-story layout with loft option',
      'Four bedrooms including guest suite',
      'Large kitchen with island seating',
      'Southwest Las Vegas location near 89148',
    ],
    lastModified: '2026-06-16',
  },
  {
    slug: '2270-sienna-ridge',
    name: '2270 Sienna Ridge',
    streetAddress: 'Sienna Ridge Drive',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89148',
    neighborhood: 'Sienna Ridge',
    status: 'Coming Soon',
    beds: 5,
    baths: 3.5,
    sqft: 2270,
    price: 675000,
    priceMin: '600000',
    priceMax: '700000',
    image: '/images/property-sample-3.jpg',
    imageAlt: '2270 Sienna Ridge executive model home in Sienna Ridge, Las Vegas',
    description:
      'Executive Sienna Ridge model with 5 bedrooms, 3.5 baths, and 2,270 sq ft. Designed for buyers who want premium finishes and flexible space for work-from-home or multi-generational living.',
    highlights: [
      'Executive floor plan with 5 bedrooms',
      'Dedicated office or flex space',
      'Premium finishes and expanded primary suite',
      'Strong long-term value in master-planned community',
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
