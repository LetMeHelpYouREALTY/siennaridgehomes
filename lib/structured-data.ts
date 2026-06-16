import { AGENT_ENCODED_ID, NAP, OFFICE_GEO, SITE_URL } from '@/lib/site-config'
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
      'Spring Valley home prices range from $350,000 to $650,000+ for established homes in 89117 and 89147. New construction at Sienna Ridge by Lennar (89147) starts from approximately $564,890 and reaches $860,000+ depending on floor plan.',
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
    logo: `${SITE_URL}/images/professional-photo.jpg`,
    image: `${SITE_URL}/images/professional-photo.jpg`,
    telephone: NAP.phoneTel,
    email: NAP.email,
    address: postalAddress,
    contactPoint,
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
    image: `${SITE_URL}/images/professional-photo.jpg`,
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
        urlTemplate: `${SITE_URL}/listings?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** Global schemas for Organization, Local Business (RealEstateAgent), and WebSite. */
export function buildGlobalStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), realEstateAgentSchema(), websiteSchema()],
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
      image: `${SITE_URL}/images/professional-photo.jpg`,
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
