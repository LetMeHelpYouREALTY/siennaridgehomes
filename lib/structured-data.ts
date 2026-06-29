import {
  AGENT_ENCODED_ID,
  agentHeadshotUrl,
  NAP,
  OFFICE_GEO,
  OFFICE_MAPS_URL,
  REALSCOUT_SEARCH_URL,
  SAME_AS_PROFILES,
  SITE_URL,
} from '@/lib/site-config'
import type { ClientReview } from '@/lib/reviews-data'
import type { FeaturedListing } from '@/lib/listings-data'
import { listingUrl } from '@/lib/listings-data'
import { formatCommunityPriceRange, SIENNA_RIDGE } from '@/lib/sienna-ridge-community'

export const STRUCTURED_DATA_IDS = {
  organization: `${SITE_URL}/#organization`,
  realEstateAgent: `${SITE_URL}/#realestateagent`,
  website: `${SITE_URL}/#website`,
  person: `${SITE_URL}/about#person`,
} as const

export type FaqItem = {
  question: string
  answer: string
}

export type BreadcrumbItem = {
  name: string
  path: string
}

const postalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: NAP.streetAddress,
  addressLocality: NAP.city,
  addressRegion: NAP.state,
  postalCode: NAP.postalCode,
  addressCountry: 'US',
}

const geoCoordinates = {
  '@type': 'GeoCoordinates' as const,
  latitude: OFFICE_GEO.latitude,
  longitude: OFFICE_GEO.longitude,
}

const contactPoint = {
  '@type': 'ContactPoint' as const,
  telephone: NAP.phoneTel,
  email: NAP.email,
  contactType: 'customer service',
  areaServed: 'US',
  availableLanguage: ['English'],
}

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: 'What areas does Dr. Jan Duffy serve in Southwest Las Vegas?',
    answer:
      'Dr. Jan Duffy specializes in Spring Valley and Southwest Las Vegas, specifically serving the zip codes 89117, 89147, and 89148. She has extensive knowledge of these neighborhoods and can help you find the perfect home in any of these areas.',
  },
  {
    question: 'How much do homes cost in Sienna Ridge by Lennar?',
    answer: `Sienna Ridge new construction base prices range from ${formatCommunityPriceRange()}. Pricing varies by floor plan, elevation, and lot. Contact Dr. Jan Duffy for current availability, incentives, and buyer representation at the Sienna Ridge sales center.`,
  },
  {
    question: 'What features does Sienna Ridge offer?',
    answer: `${SIENNA_RIDGE.location} Floor plans often include ${SIENNA_RIDGE.features[0]}, ${SIENNA_RIDGE.features[1].toLowerCase()}, and ${SIENNA_RIDGE.features[2].toLowerCase()}.`,
  },
  {
    question: 'How much do homes cost in Spring Valley Las Vegas?',
    answer:
      'Spring Valley home prices range from $350,000 to $650,000+ for established homes in 89117 and 89147. New construction at Sienna Ridge by Lennar (89147) starts from approximately $588,990 with Bellevue Next Gen® from $662,990.',
  },
  {
    question: 'Is Spring Valley a good area to buy a home in Las Vegas?',
    answer:
      'Yes, Spring Valley is an excellent area for home buyers. It offers established neighborhoods, great schools, convenient access to the Strip and airport, and strong appreciation potential. The area is expected to outperform metro averages in 2025.',
  },
  {
    question: 'What makes Dr. Jan Duffy the best Spring Valley real estate agent?',
    answer:
      'Dr. Jan Duffy has helped over 100 families find their dream homes in Spring Valley and Southwest Las Vegas. She offers personalized service, expert local knowledge, and specializes in buyer representation for families, investors, and first-time buyers.',
  },
  {
    question: 'How can I get a free home valuation for my Las Vegas property?',
    answer:
      'You can get a free, instant home valuation using our online tool above, or contact Dr. Jan Duffy directly for a comprehensive market analysis. She provides accurate, data-driven valuations for all Southwest Las Vegas properties.',
  },
  {
    question: 'What types of homes are available in Southwest Las Vegas zip codes 89117, 89147, 89148?',
    answer:
      "Southwest Las Vegas offers diverse housing options including single-story homes (1,800-2,400 sq ft), two-story homes (2,200-3,200 sq ft), and executive properties (3,000+ sq ft). You'll find established neighborhoods, new construction, and excellent investment opportunities.",
  },
]

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': STRUCTURED_DATA_IDS.organization,
    name: NAP.businessName,
    legalName: NAP.businessName,
    url: SITE_URL,
    logo: agentHeadshotUrl(),
    image: agentHeadshotUrl(),
    telephone: NAP.phoneTel,
    email: NAP.email,
    address: postalAddress,
    contactPoint,
    sameAs: [...SAME_AS_PROFILES],
  }
}

function realEstateAgentSchema() {
  return {
    '@type': 'RealEstateAgent',
    '@id': STRUCTURED_DATA_IDS.realEstateAgent,
    name: NAP.name,
    description:
      'Premier Spring Valley real estate agent specializing in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors, and first-time home buyers.',
    url: SITE_URL,
    telephone: NAP.phoneTel,
    email: NAP.email,
    image: agentHeadshotUrl(),
    address: postalAddress,
    geo: geoCoordinates,
    priceRange: '$$',
    parentOrganization: { '@id': STRUCTURED_DATA_IDS.organization },
    areaServed: [
      { '@type': 'City', name: 'Spring Valley' },
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'PostalCode', postalCode: '89117' },
      { '@type': 'PostalCode', postalCode: '89147' },
      { '@type': 'PostalCode', postalCode: '89148' },
    ],
    knowsAbout: [
      'Spring Valley real estate',
      'Southwest Las Vegas homes',
      'Las Vegas investment properties',
      'First time home buyers',
      'Real estate market analysis',
      'Home valuations',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: NAP.license,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    memberOf: {
      '@type': 'Organization',
      name: NAP.brokerage,
    },
    sameAs: [...SAME_AS_PROFILES],
    hasMap: OFFICE_MAPS_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  }
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': STRUCTURED_DATA_IDS.website,
    url: SITE_URL,
    name: NAP.businessName,
    description:
      'Southwest Las Vegas real estate services with Dr. Jan Duffy — MLS search, buyer representation, and home valuations in Spring Valley (89117, 89147, 89148).',
    publisher: { '@id': STRUCTURED_DATA_IDS.organization },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${REALSCOUT_SEARCH_URL}&q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** Global schemas for Organization, Local Business (RealEstateAgent), and WebSite. */
export function buildGlobalStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      realEstateAgentSchema(),
      websiteSchema(),
      realEstateServiceSchema(),
    ],
  }
}

/** FAQ content must match visible on-page FAQ text. */
export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/** Profile page schema for /about — Google-supported ProfilePage type. */
export function buildProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Person',
      '@id': STRUCTURED_DATA_IDS.person,
      name: NAP.name,
      jobTitle: 'Real Estate Agent',
      url: `${SITE_URL}/about`,
      image: agentHeadshotUrl(),
      telephone: NAP.phoneTel,
      email: NAP.email,
      worksFor: { '@id': STRUCTURED_DATA_IDS.organization },
      knowsAbout: [
        'Spring Valley real estate',
        'Southwest Las Vegas homes',
        'Sienna Ridge community',
        'Las Vegas buyer representation',
      ],
    },
  }
}

/** Breadcrumb navigation — Google-supported Breadcrumb type. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function listingSearchTarget() {
  return `${SITE_URL}/listings?agent=${AGENT_ENCODED_ID}`
}

/** Review snippets — each review must match visible on-page content. */
export function buildReviewsSchema(reviews: ClientReview[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': reviews.map((review) => ({
      '@type': 'Review',
      '@id': `${SITE_URL}/#review-${review.id}`,
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.quote,
      itemReviewed: {
        '@id': STRUCTURED_DATA_IDS.realEstateAgent,
      },
      publisher: {
        '@type': 'Organization',
        name: review.source,
      },
    })),
  }
}

/** RealEstateListing schema for individual property detail pages. */
export function buildRealEstateListingSchema(listing: FeaturedListing) {
  const url = listingUrl(listing.slug)

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `${url}#listing`,
    name: listing.name,
    url,
    description: listing.description,
    datePosted: listing.lastModified,
    image: `${SITE_URL}${listing.image}`,
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability:
        listing.status === 'Coming Soon'
          ? 'https://schema.org/PreOrder'
          : 'https://schema.org/InStock',
      seller: {
        '@id': STRUCTURED_DATA_IDS.realEstateAgent,
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.streetAddress,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.postalCode,
      addressCountry: 'US',
    },
    numberOfBedrooms: listing.beds,
    numberOfBathroomsTotal: listing.baths,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: listing.sqft,
      unitCode: 'FTK',
    },
  }
}

export type WebPageSchemaInput = {
  path: string
  name: string
  description: string
  dateModified?: string
}

/** WebPage schema for SEO/AEO landing pages. */
export function buildWebPageSchema({ path, name, description, dateModified = '2026-06-29' }: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    datePublished: '2026-06-16',
    dateModified,
    inLanguage: 'en-US',
    isPartOf: { '@id': STRUCTURED_DATA_IDS.website },
    about: { '@id': STRUCTURED_DATA_IDS.realEstateAgent },
    author: { '@id': STRUCTURED_DATA_IDS.person },
    publisher: { '@id': STRUCTURED_DATA_IDS.organization },
    mainEntity: { '@id': STRUCTURED_DATA_IDS.realEstateAgent },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead-answer', '.aeo-answer'],
    },
  }
}

/** Service schema for buyer representation — supports local + AEO entity clarity. */
function realEstateServiceSchema() {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/#buyer-representation`,
    name: 'Southwest Las Vegas Buyer Representation',
    description:
      'Expert buyer agent services for Spring Valley and Southwest Las Vegas homes in zip codes 89117, 89147, and 89148.',
    provider: { '@id': STRUCTURED_DATA_IDS.realEstateAgent },
    areaServed: [
      { '@type': 'PostalCode', postalCode: '89117' },
      { '@type': 'PostalCode', postalCode: '89147' },
      { '@type': 'PostalCode', postalCode: '89148' },
      { '@type': 'City', name: 'Spring Valley' },
      { '@type': 'City', name: 'Las Vegas' },
    ],
    serviceType: 'Real estate buyer representation',
    url: SITE_URL,
  }
}

/** Standalone Service JSON-LD for pages that need it outside the global graph. */
export function buildRealEstateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    ...realEstateServiceSchema(),
  }
}

export type ItemListEntry = {
  name: string
  url: string
  description?: string
}

/** ItemList for comparisons, floor plans, guides. */
export function buildItemListSchema(items: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      description: item.description,
    })),
  }
}

export type PlaceSchemaInput = {
  name: string
  description: string
  path: string
  latitude: number
  longitude: number
  address?: {
    streetAddress?: string
    postalCode?: string
  }
}

/** Place schema for parks, neighborhoods, communities. */
export function buildPlaceSchema(input: PlaceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}${input.path}#place`,
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: input.latitude,
      longitude: input.longitude,
    },
    ...(input.address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: input.address.streetAddress,
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            postalCode: input.address.postalCode,
            addressCountry: 'US',
          },
        }
      : {}),
  }
}

/** ResidentialComplex for master-planned communities like Sienna Ridge. */
export function buildResidentialComplexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    '@id': `${SITE_URL}/sienna-ridge-lennar-las-vegas#community`,
    name: 'Sienna Ridge by Lennar',
    description: `${SIENNA_RIDGE.location} Lennar new construction community in Las Vegas 89147. Base prices ${formatCommunityPriceRange()}.`,
    url: `${SITE_URL}/sienna-ridge-lennar-las-vegas`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.city,
      addressRegion: NAP.state,
      postalCode: SIENNA_RIDGE.postalCode,
      addressCountry: 'US',
    },
    geo: geoCoordinates,
    amenityFeature: SIENNA_RIDGE.features.map((feature) => ({
      '@type': 'LocationFeatureSpecification',
      name: feature,
      value: true,
    })),
  }
}

export type HowToStep = {
  name: string
  text: string
}

/** HowTo schema for buyer guides and process pages. */
export function buildHowToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

/** Article schema for market reports and guides. */
export function buildArticleSchema(path: string, headline: string, description: string, dateModified = '2026-06-16') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    dateModified,
    author: { '@id': STRUCTURED_DATA_IDS.person },
    publisher: { '@id': STRUCTURED_DATA_IDS.organization },
    mainEntityOfPage: `${SITE_URL}${path}`,
  }
}

/** Park schema for Desert Breeze and lifestyle pages. */
export function buildParkSchema(name: string, description: string, path: string, latitude: number, longitude: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Park',
    name,
    description,
    url: `${SITE_URL}${path}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8275 Spring Mountain Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
  }
}
