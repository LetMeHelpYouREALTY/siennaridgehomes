/** Lennar Sienna Ridge floor plan collections — synced with lennar.com community page. */
export type SiennaRidgeCollection = {
  slug: string
  path: string
  name: string
  shortName: string
  planType: 'Single Family' | 'Next Gen®'
  beds: number
  baths: number
  halfBaths: number
  sqft: number
  priceFrom: number
  description: string
  highlights: string[]
  keywords: string[]
}

export const SIENNA_RIDGE_SALES_CENTER = {
  streetAddress: '8370 Caldera Hls Ave',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89147',
  phone: '800-509-9720',
  hours: 'Daily 8:30 AM – 7:00 PM',
} as const

export const SIENNA_RIDGE_COLLECTIONS: SiennaRidgeCollection[] = [
  {
    slug: 'kingsbury',
    path: '/kingsbury-homes-sienna-ridge',
    name: 'Kingsbury at Sienna Ridge',
    shortName: 'Kingsbury',
    planType: 'Single Family',
    beds: 3,
    baths: 2,
    halfBaths: 1,
    sqft: 2051,
    priceFrom: 589_990,
    description:
      'The Kingsbury plan at Lennar Sienna Ridge offers 2,051 sq ft of single-family living with 3 bedrooms, 2.5 baths, and flexible downstairs space — ideal for buyers searching Kingsbury NV homes for sale in Las Vegas 89147.',
    highlights: [
      '2,051 sq ft single-family layout',
      '3 bedrooms with 2 full baths and a half bath',
      'Downstairs flex space for office or guest use',
      'Energy-efficient Lennar features available',
    ],
    keywords: ['kingsbury homes', 'kingsbury nv homes for sale', 'kingsbury nevada homes for sale'],
  },
  {
    slug: 'bellevue-nextgen',
    path: '/bellevue-nextgen-sienna-ridge',
    name: 'Bellevue Next Gen® at Sienna Ridge',
    shortName: 'Bellevue Next Gen',
    planType: 'Next Gen®',
    beds: 4,
    baths: 3,
    halfBaths: 1,
    sqft: 2640,
    priceFrom: 662_990,
    description:
      'Bellevue Next Gen® at Sienna Ridge is Lennar\'s multi-generational floor plan in Las Vegas — 2,640 sq ft with a private suite, perfect for buyers searching Lennar Next Gen homes Las Vegas and Bellevue floor plans in 89147.',
    highlights: [
      '2,640 sq ft Next Gen® multi-generational layout',
      'Private suite with separate entrance',
      '4 bedrooms, 3 full baths, and a half bath',
      'Lennar\'s most searched Next Gen plan in Southwest Las Vegas',
    ],
    keywords: [
      'lennar bellevue',
      'lennar next gen homes las vegas',
      'lennar next gen floor plans',
      'nextgen las vegas',
      'next gen las vegas',
    ],
  },
  {
    slug: 'skyland',
    path: '/skyland-sienna-ridge',
    name: 'Skyland at Sienna Ridge',
    shortName: 'Skyland',
    planType: 'Single Family',
    beds: 4,
    baths: 3,
    halfBaths: 0,
    sqft: 2270,
    priceFrom: 612_990,
    description:
      'The Skyland plan at Lennar Sienna Ridge delivers 2,270 sq ft with 4 bedrooms and 3 baths — a popular two-story single-family option for buyers comparing Skyland NV homes and executive layouts in 89147.',
    highlights: [
      '2,270 sq ft two-story single-family design',
      '4 bedrooms and 3 full baths',
      'Open great room with upstairs loft potential',
      'Move-in ready homesites available on Rochelle Ave and Caldera Hills',
    ],
    keywords: ['skyland property', 'skyland nv', 'skyland properties', 'lennar sienna hills'],
  },
  {
    slug: 'glenbrook',
    path: '/glenbrook-homes-sienna-ridge',
    name: 'Glenbrook at Sienna Ridge',
    shortName: 'Glenbrook',
    planType: 'Single Family',
    beds: 3,
    baths: 2,
    halfBaths: 1,
    sqft: 1966,
    priceFrom: 588_990,
    description:
      'Glenbrook at Lennar Sienna Ridge offers 1,966 sq ft with 3 bedrooms and 2.5 baths — an entry-level single-family plan for buyers exploring Glenbrook and Caldera Hills new construction in Las Vegas 89147.',
    highlights: [
      '1,966 sq ft single-family floor plan',
      '3 bedrooms with 2 full baths and a half bath',
      'Single-level living with open kitchen and great room',
      'Homesites on Rochelle Avenue near the sales center',
    ],
    keywords: ['lennar ashbrook', 'glenbrook south', 'digital id glenbrook south'],
  },
]

export function getCollectionBySlug(slug: string): SiennaRidgeCollection | undefined {
  return SIENNA_RIDGE_COLLECTIONS.find((collection) => collection.slug === slug)
}

export function getCollectionByPath(path: string): SiennaRidgeCollection | undefined {
  return SIENNA_RIDGE_COLLECTIONS.find((collection) => collection.path === path)
}

export function formatCollectionPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

export function siennaRidgeCommunityPriceRange() {
  const prices = SIENNA_RIDGE_COLLECTIONS.map((c) => c.priceFrom)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return `${formatCollectionPrice(min)} to ${formatCollectionPrice(max)}+`
}

export function siennaRidgeCollectionLinks() {
  return SIENNA_RIDGE_COLLECTIONS.map((c) => ({
    href: c.path,
    label: c.shortName,
    description: `From ${formatCollectionPrice(c.priceFrom)} · ${c.sqft.toLocaleString()} sq ft`,
  }))
}
