import type { Metadata } from 'next'
import type { SeoContentPageProps } from '@/components/seo-content-page'
import { SITE_URL } from '@/lib/site-config'
import {
  formatCollectionPrice,
  getCollectionBySlug,
  SIENNA_RIDGE_COLLECTIONS,
  SIENNA_RIDGE_SALES_CENTER,
  siennaRidgeCommunityPriceRange,
} from '@/lib/sienna-ridge-collections'
import { buildResidentialComplexSchema, type FaqItem } from '@/lib/structured-data'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'

export type SiennaRidgeKeywordPageConfig = {
  path: string
  metadata: Metadata
  props: SeoContentPageProps
}

function meta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: { title, description, url: `${SITE_URL}${path}` },
  }
}

const communityLinks = [
  { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge Community', description: 'Full Lennar 89147 guide' },
  { href: '/89147-homes-for-sale', label: '89147 Homes for Sale', description: 'MLS search in zip code' },
  { href: '/lennar-buyer-agent-las-vegas', label: 'Lennar Buyer Agent', description: 'Why you need representation' },
  { href: '/next-gen-homes-sienna-ridge', label: 'Next Gen® Overview', description: 'Multi-generational homes' },
]

function collectionFaqs(collectionName: string, priceFrom: number): FaqItem[] {
  return [
    {
      question: `How much does ${collectionName} cost at Sienna Ridge?`,
      answer: `${collectionName} at Lennar Sienna Ridge starts from ${formatCollectionPrice(priceFrom)}. Final price depends on homesite, elevation, and options. Dr. Jan Duffy provides current availability and incentive details.`,
    },
    {
      question: `Where is Sienna Ridge located?`,
      answer: `Sienna Ridge is at ${SIENNA_RIDGE_SALES_CENTER.streetAddress}, ${SIENNA_RIDGE_SALES_CENTER.city}, ${SIENNA_RIDGE_SALES_CENTER.state} ${SIENNA_RIDGE_SALES_CENTER.postalCode} — Southwest Las Vegas zip code 89147, near Desert Breeze Park and I-215. Google Plus Code: ${SIENNA_RIDGE_SALES_CENTER.plusCodeDisplay}.`,
    },
    {
      question: 'Do I need a buyer agent for Lennar new construction?',
      answer: 'Yes. The Lennar sales team represents the builder. Dr. Jan Duffy represents you — reviewing contracts, comparing incentives, and negotiating on your behalf at no direct cost to the buyer in most transactions.',
    },
    {
      question: 'Is Sienna Ridge in Summerlin?',
      answer: 'No. Sienna Ridge is in Southwest Las Vegas zip code 89147, not Summerlin. It sits near Caldera Hills Avenue and I-215 in the Spring Valley area — a different submarket with its own pricing and inventory.',
    },
    {
      question: 'Is Sienna Ridge senior apartments?',
      answer: 'No. Sienna Ridge by Lennar is a single-family new construction community. It is not the Sienna senior apartments property — buyers searching for Lennar homes should look at floor plan collections like Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen®.',
    },
  ]
}

function buildCollectionPage(slug: string): SiennaRidgeKeywordPageConfig {
  const collection = getCollectionBySlug(slug)
  if (!collection) {
    throw new Error(`Unknown Sienna Ridge collection: ${slug}`)
  }

  const bathLabel = `${collection.beds} bed / ${collection.baths} bath${collection.halfBaths ? ` / ${collection.halfBaths} half bath` : ''}`

  return {
    path: collection.path,
    metadata: meta(
      `${collection.name} | Lennar Las Vegas 89147 | Dr. Jan Duffy`,
      `${collection.description.slice(0, 155)}… Buyer agent Dr. Jan Duffy at Sienna Ridge sales center.`,
      collection.path,
    ),
    props: {
      breadcrumbs: breadcrumbTrail({ name: collection.shortName, path: collection.path }),
      heroImageAlt: `${collection.name} Lennar new homes Las Vegas 89147`,
      badges: [collection.planType, 'Sienna Ridge', '89147'],
      title: collection.name,
      subtitle: `Lennar new construction at Sienna Ridge — ${SIENNA_RIDGE_SALES_CENTER.postalCode}`,
      leadAnswer: collection.description,
      stats: [
        { label: 'Starting From', value: formatCollectionPrice(collection.priceFrom) },
        { label: 'Square Feet', value: collection.sqft.toLocaleString() },
        { label: 'Layout', value: bathLabel },
        { label: 'Community Range', value: siennaRidgeCommunityPriceRange() },
      ],
      features: collection.highlights.map((highlight) => ({
        title: highlight.split('—')[0]?.split(' with ')[0] ?? 'Feature',
        description: highlight,
      })),
      bodySections: [
        {
          title: `About the ${collection.shortName} floor plan`,
          content: `${collection.shortName} is one of four active Lennar collections at Sienna Ridge in Las Vegas. The plan offers ${collection.sqft.toLocaleString()} sq ft with ${bathLabel}. Visit the welcome center at ${SIENNA_RIDGE_SALES_CENTER.streetAddress} — open ${SIENNA_RIDGE_SALES_CENTER.hours}.`,
        },
        {
          title: 'Compare Sienna Ridge collections',
          content: `Sienna Ridge also offers ${SIENNA_RIDGE_COLLECTIONS.filter((c) => c.slug !== slug)
            .map((c) => c.shortName)
            .join(', ')}. Dr. Jan Duffy helps buyers compare layouts, pricing, and incentives across all Lennar plans before you sign a purchase agreement.`,
        },
      ],
      faqs: collectionFaqs(collection.shortName, collection.priceFrom),
      relatedLinks: [
        ...SIENNA_RIDGE_COLLECTIONS.filter((c) => c.slug !== slug).map((c) => ({
          href: c.path,
          label: c.shortName,
          description: `From ${formatCollectionPrice(c.priceFrom)} · ${c.sqft.toLocaleString()} sq ft`,
        })),
        ...communityLinks,
      ],
      ctaTitle: `Tour ${collection.shortName} at Sienna Ridge`,
      ctaDescription: `Schedule a consultation with Dr. Jan Duffy before visiting the Lennar sales center for ${collection.shortName}.`,
      schemaExtras: [buildResidentialComplexSchema()],
    },
  }
}

export const KINGSBURY_PAGE = buildCollectionPage('kingsbury')
export const BELLEVUE_NEXTGEN_PAGE = buildCollectionPage('bellevue-nextgen')
export const SKYLAND_PAGE = buildCollectionPage('skyland')
export const GLENBROOK_PAGE = buildCollectionPage('glenbrook')

/** Targets common "Siena" misspellings — canonical community is Sienna Ridge. */
export const SIENA_HOMES_PAGE: SiennaRidgeKeywordPageConfig = {
  path: '/siena-homes-for-sale-las-vegas',
  metadata: meta(
    'Siena Homes for Sale Las Vegas | Sienna Ridge Lennar 89147',
    'Searching "Siena" homes for sale in Las Vegas? You mean Sienna Ridge by Lennar — new construction in 89147 from $588,990. Dr. Jan Duffy buyer agent.',
    '/siena-homes-for-sale-las-vegas',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Siena Homes for Sale', path: '/siena-homes-for-sale-las-vegas' }),
    heroImageAlt: 'Siena homes for sale Las Vegas — Sienna Ridge Lennar community',
    badges: ['Common Search', 'Sienna Ridge', '89147'],
    title: 'Siena Homes for Sale in Las Vegas',
    subtitle: 'Looking for "Siena"? You mean Sienna Ridge by Lennar',
    leadAnswer:
      'If you searched for Siena homes for sale in Las Vegas, you are likely looking for Sienna Ridge by Lennar — a new construction community at 8370 Caldera Hills Avenue, Las Vegas NV 89147 with floor plans from $588,990 including Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen®.',
    stats: [
      { label: 'Correct Name', value: 'Sienna Ridge' },
      { label: 'Builder', value: 'Lennar' },
      { label: 'Zip Code', value: '89147' },
      { label: 'From', value: formatCollectionPrice(588_990) },
    ],
    features: SIENNA_RIDGE_COLLECTIONS.map((c) => ({
      title: c.shortName,
      description: `${c.sqft.toLocaleString()} sq ft from ${formatCollectionPrice(c.priceFrom)} — ${c.planType}`,
    })),
    bodySections: [
      {
        title: 'Siena vs Sienna — same Lennar community',
        content:
          'Many buyers misspell the community as "Siena" when searching for homes for sale in Las Vegas. The official Lennar community name is Sienna Ridge (two N\'s), located in Southwest Las Vegas 89147 — not Summerlin and not senior apartments.',
      },
      {
        title: 'Homes for sale in Siena Las Vegas NV',
        content:
          'Active Lennar inventory at Sienna Ridge includes move-in ready homesites on Rochelle Avenue and Caldera Hills Avenue. Dr. Jan Duffy provides buyer representation, compares resale in 89147, and helps you tour models before you commit to a builder contract.',
      },
    ],
    faqs: [
      {
        question: 'Are Siena and Sienna Ridge the same community?',
        answer: 'Yes. "Siena" is a common misspelling. The official Lennar community is Sienna Ridge at 8370 Caldera Hills Avenue, Las Vegas NV 89147.',
      },
      {
        question: 'Is Sienna Ridge in Summerlin?',
        answer: 'No. Sienna Ridge is in Southwest Las Vegas 89147 near Caldera Hills and I-215 — not the Summerlin master plan.',
      },
      {
        question: 'Is Sienna Ridge the same as Sienna senior apartments?',
        answer: 'No. Sienna Ridge by Lennar is single-family new construction. Sienna senior apartments is a separate product type — this page covers Lennar homes for sale only.',
      },
      {
        question: 'What Lennar floor plans are at Sienna Ridge?',
        answer: 'Current collections include Kingsbury (2,051 sq ft), Skyland (2,270 sq ft), Glenbrook (1,966 sq ft), and Bellevue Next Gen® (2,640 sq ft).',
      },
      {
        question: 'Can I rent a Siena home at Sienna Ridge?',
        answer: 'Sienna Ridge sells new construction homes — not rentals. Some buyers purchase Bellevue Next Gen® plans with suites that may allow accessory use where permitted; confirm HOA and city rules with your agent.',
      },
    ],
    relatedLinks: [
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge Community', description: 'Official community guide' },
      ...SIENNA_RIDGE_COLLECTIONS.map((c) => ({
        href: c.path,
        label: c.shortName,
        description: `From ${formatCollectionPrice(c.priceFrom)}`,
      })),
      { href: '/89147-homes-for-sale', label: '89147 Homes for Sale', description: 'MLS + new construction' },
    ],
    ctaTitle: 'Find Sienna Ridge Homes (Not Senior Apartments)',
    ctaDescription: 'Dr. Jan Duffy helps buyers searching "Siena homes" find the right Lennar floor plan at Sienna Ridge.',
    schemaExtras: [buildResidentialComplexSchema()],
  },
}

export const SIENNA_RIDGE_KEYWORD_PAGES: SiennaRidgeKeywordPageConfig[] = [
  KINGSBURY_PAGE,
  BELLEVUE_NEXTGEN_PAGE,
  SKYLAND_PAGE,
  GLENBROOK_PAGE,
  SIENA_HOMES_PAGE,
]
