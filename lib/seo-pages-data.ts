import type { Metadata } from 'next'
import type { SeoContentPageProps } from '@/components/seo-content-page'
import { SITE_URL } from '@/lib/site-config'
import { formatCommunityPriceRange, SIENNA_RIDGE } from '@/lib/sienna-ridge-community'
import { SIENNA_RIDGE_KEYWORD_PAGES } from '@/lib/sienna-ridge-keyword-pages'
import {
  formatCollectionPrice,
  SIENNA_RIDGE_COLLECTIONS,
  siennaRidgeCommunityPriceRange,
} from '@/lib/sienna-ridge-collections'
import { FEATURED_LISTINGS } from '@/lib/listings-data'
import {
  buildHowToSchema,
  buildParkSchema,
  buildPlaceSchema,
  buildResidentialComplexSchema,
  type FaqItem,
} from '@/lib/structured-data'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'

export type SeoPageConfig = {
  path: string
  metadata: Metadata
  props: SeoContentPageProps
}

const relatedZipLinks = [
  { href: '/89117-homes-for-sale', label: '89117 Homes for Sale', description: 'Spring Valley established homes' },
  { href: '/89147-homes-for-sale', label: '89147 Homes for Sale', description: 'Sienna Ridge & Caldera Hills' },
  { href: '/89148-homes-for-sale', label: '89148 Homes for Sale', description: 'Newer SW Las Vegas builds' },
  { href: '/neighborhoods/89117', label: '89117 Neighborhood Guide', description: 'Spring Valley overview' },
  { href: '/neighborhoods/89147', label: '89147 Neighborhood Guide', description: 'Southwest Las Vegas' },
  { href: '/neighborhoods/89148', label: '89148 Neighborhood Guide', description: '215 corridor homes' },
]

function meta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: { title, description, url: `${SITE_URL}${path}` },
  }
}

export const SIENNA_RIDGE_LENNAR_PAGE: SeoPageConfig = {
  path: '/sienna-ridge-lennar-las-vegas',
  metadata: meta(
    'Sienna Ridge by Lennar Las Vegas | New Homes 89147 | Dr. Jan Duffy',
    `Sienna Ridge by Lennar in Las Vegas 89147 — Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen® from ${siennaRidgeCommunityPriceRange()}. Buyer agent Dr. Jan Duffy.`,
    '/sienna-ridge-lennar-las-vegas',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Sienna Ridge by Lennar', path: '/sienna-ridge-lennar-las-vegas' }),
    heroImageAlt: 'Sienna Ridge by Lennar new homes Las Vegas 89147',
    badges: ['Lennar New Construction', '89147', 'Spring Valley Area'],
    title: 'Sienna Ridge by Lennar — Las Vegas New Homes',
    subtitle: 'Master-planned community near Desert Breeze Park & I-215',
    leadAnswer: `Sienna Ridge by Lennar is a new construction community at 8370 Caldera Hills Avenue, Las Vegas NV 89147, with four active floor plan collections — Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen® — priced from ${siennaRidgeCommunityPriceRange()}. Dr. Jan Duffy represents buyers at the sales center, not the builder.`,
    stats: [
      { label: 'Community From', value: formatCollectionPrice(581_990) },
      { label: 'Top Plan From', value: formatCollectionPrice(662_990) },
      { label: 'Collections', value: '4 Plans' },
      { label: 'Zip Code', value: '89147' },
    ],
    features: [
      { title: 'Next Gen® Suites', description: 'Multi-generational floor plans with private suites for extended family or rental income.' },
      { title: 'Energy Smart', description: 'Solar panels and energy-saving features available on select Lennar homes.' },
      { title: 'Easy Commute', description: 'Minutes to I-215, Desert Breeze Park, and Southwest Las Vegas shopping.' },
      { title: 'Downstairs Bedrooms', description: 'Single-story and main-floor bedroom options for accessibility and guests.' },
      { title: 'Buyer Representation', description: 'Dr. Jan Duffy negotiates on your behalf — incentives, upgrades, and closing costs.' },
      { title: 'Live MLS Search', description: 'Compare Sienna Ridge inventory with resale homes across 89147 and nearby zips.' },
    ],
    bodySections: [
      {
        title: 'Where is Sienna Ridge located?',
        content:
          'Sienna Ridge sits in Southwest Las Vegas zip code 89147, near Caldera Hills Avenue and the I-215 beltway. The community is close to Desert Breeze Park, Spring Valley amenities, and a short drive to the Las Vegas Strip and Harry Reid International Airport.',
      },
      {
        title: 'Why use a buyer\'s agent for Lennar new construction?',
        content:
          'The on-site sales team represents the builder. Dr. Jan Duffy represents you — reviewing contracts, comparing incentives across communities, and ensuring you do not overpay for upgrades or lot premiums.',
      },
    ],
    faqs: [
      {
        question: 'How much do Sienna Ridge homes cost?',
        answer: `Lennar lists Sienna Ridge from $581,990 to $662,990+ depending on collection — Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen®. Contact Dr. Jan Duffy for current incentives.`,
      },
      {
        question: 'What floor plans are available at Sienna Ridge?',
        answer: 'Lennar currently offers Kingsbury (2,051 sq ft), Skyland (2,270 sq ft), Glenbrook (1,966 sq ft), and Bellevue Next Gen® (2,640 sq ft). See our collection guides for pricing and layouts.',
      },
      {
        question: 'Is Sienna Ridge the same as Sienna senior apartments?',
        answer: 'No. Sienna Ridge by Lennar is single-family new construction in 89147. Sienna senior apartments is a separate product — this site covers Lennar homes for sale only.',
      },
      {
        question: 'Is Sienna Ridge in Summerlin?',
        answer: 'No. Sienna Ridge is in Southwest Las Vegas zip code 89147 near Caldera Hills and I-215 — not the Summerlin master plan. Buyers searching "Siena Summerlin homes" should verify the correct community name and location.',
      },
      {
        question: 'What are Sienna Ridge reviews like?',
        answer: 'Sienna Ridge buyers value Lennar new construction warranties, Next Gen® floor plan options, and proximity to Desert Breeze Park and I-215. Dr. Jan Duffy helps you compare builder reviews with resale options in 89147 before you buy.',
      },
      {
        question: 'Is Sienna Ridge in Spring Valley?',
        answer: 'Sienna Ridge is marketed as Las Vegas 89147 but sits in the Spring Valley area of Southwest Las Vegas, near established neighborhoods and new construction along Caldera Hills.',
      },
      {
        question: 'Does Lennar offer solar at Sienna Ridge?',
        answer: 'Yes — many Lennar homes include energy-saving features and solar options. Ask Dr. Jan Duffy which elevations and plans currently qualify.',
      },
      {
        question: 'Can I tour Sienna Ridge model homes?',
        answer: 'Yes. Schedule a 15-minute consultation with Dr. Jan Duffy to plan your model tour and buyer strategy before visiting the sales center.',
      },
      {
        question: 'How do I compare Sienna Ridge to resale homes in 89147?',
        answer: 'Use our MLS search widgets and zip code guides to compare new construction pricing, HOA fees, and appreciation against established neighborhoods nearby.',
      },
    ] satisfies FaqItem[],
    relatedLinks: [
      { href: '/kingsbury-homes-sienna-ridge', label: 'Kingsbury Homes', description: '2,051 sq ft from $589,990' },
      { href: '/bellevue-nextgen-sienna-ridge', label: 'Bellevue Next Gen®', description: 'Multi-gen 2,640 sq ft' },
      { href: '/skyland-sienna-ridge', label: 'Skyland', description: '4 bed executive plan' },
      { href: '/glenbrook-homes-sienna-ridge', label: 'Glenbrook', description: 'Entry single-family plan' },
      { href: '/siena-homes-for-sale-las-vegas', label: 'Siena Homes (Misspelling)', description: 'Common search alias' },
      { href: '/sienna-ridge-floor-plans', label: 'All Floor Plans', description: 'Compare collections' },
      { href: '/next-gen-homes-sienna-ridge', label: 'Next Gen® Homes', description: 'Multi-generational Lennar plans' },
      { href: '/lennar-buyer-agent-las-vegas', label: 'Lennar Buyer Agent Guide', description: 'Why you need representation' },
      ...relatedZipLinks.slice(1, 4),
    ],
    itemList: FEATURED_LISTINGS.map((l) => ({
      name: l.name,
      url: `/listings/${l.slug}`,
      description: l.description,
    })),
    ctaTitle: 'Ready to Buy at Sienna Ridge?',
    ctaDescription: 'Dr. Jan Duffy provides expert buyer representation for Lennar new construction in 89147.',
    schemaExtras: [buildResidentialComplexSchema(), buildPlaceSchema({
      name: 'Sienna Ridge Sales Center',
      description: SIENNA_RIDGE.location,
      path: '/sienna-ridge-lennar-las-vegas',
      latitude: 36.11058,
      longitude: -115.274467,
      address: { streetAddress: '8370 Caldera Hls Ave', postalCode: '89147' },
    })],
  },
}

export const DESERT_BREEZE_PARK_PAGE: SeoPageConfig = {
  path: '/homes-near-desert-breeze-park',
  metadata: meta(
    'Homes Near Desert Breeze Park Las Vegas | 89117 Real Estate',
    'Find homes near Desert Breeze Park in Spring Valley Las Vegas. Parks, aquatics, and family-friendly neighborhoods in 89117 and nearby 89147. Dr. Jan Duffy buyer agent.',
    '/homes-near-desert-breeze-park',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Homes Near Desert Breeze Park', path: '/homes-near-desert-breeze-park' }),
    heroImageAlt: 'Homes near Desert Breeze Park Spring Valley Las Vegas',
    badges: ['89117', 'Family Friendly', 'Parks & Recreation'],
    title: 'Homes Near Desert Breeze Park',
    leadAnswer:
      'Desert Breeze Park at 8275 Spring Mountain Rd anchors one of Spring Valley\'s most family-friendly areas. Buyers in 89117 and nearby 89147 enjoy 119 acres of parks, aquatics, trails, and skate facilities — with easy access to Sienna Ridge new construction and established resale neighborhoods.',
    stats: [
      { label: 'Park Size', value: '119 acres' },
      { label: 'Primary Zip', value: '89117' },
      { label: 'Nearby New Homes', value: '89147' },
      { label: 'Commute to Strip', value: '~15 min' },
    ],
    features: [
      { title: 'Desert Breeze Aquatic Center', description: 'Pools and water features for year-round family recreation.' },
      { title: 'Trails & Open Space', description: 'Walking paths connecting neighborhoods to park amenities.' },
      { title: 'Established 89117', description: 'Mature landscaping, larger lots, and proven neighborhoods.' },
      { title: 'Sienna Ridge Proximity', description: 'New Lennar homes in 89147 just minutes from the park corridor.' },
    ],
    faqs: [
      { question: 'What zip code is Desert Breeze Park in?', answer: 'Desert Breeze Park is located at 8275 Spring Mountain Rd, Las Vegas NV 89117, in the Spring Valley area of Southwest Las Vegas.' },
      { question: 'Are there new homes near Desert Breeze Park?', answer: 'Yes — Sienna Ridge by Lennar in 89147 offers new construction a short drive from Desert Breeze, with floor plans from $581,990.' },
      { question: 'Is 89117 good for families?', answer: '89117 is popular with families for park access, CCSD schools, and established neighborhoods with space and value.' },
      { question: 'How far is Desert Breeze from Sienna Ridge?', answer: 'Sienna Ridge at Caldera Hills is roughly 10–15 minutes from Desert Breeze Park via surface streets and I-215.' },
    ],
    relatedLinks: [
      { href: '/desert-breeze-park-spring-valley', label: 'Desert Breeze Park Guide', description: 'Amenities and lifestyle' },
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge New Homes', description: 'Lennar 89147 community' },
      { href: '/89117-homes-for-sale', label: '89117 Homes for Sale', description: 'Spring Valley listings' },
    ],
    ctaTitle: 'Find Homes Near Desert Breeze Park',
    ctaDescription: 'Dr. Jan Duffy helps buyers compare 89117 resale and 89147 new construction near Desert Breeze.',
    schemaExtras: [
      buildParkSchema(
        'Desert Breeze Park',
        '119-acre Clark County park with aquatics, trails, and recreation in Spring Valley 89117.',
        '/homes-near-desert-breeze-park',
        36.1265,
        -115.2547,
      ),
    ],
  },
}

export const ZIP_COMPARISON_PAGE: SeoPageConfig = {
  path: '/89117-vs-89147-vs-89148',
  metadata: meta(
    '89117 vs 89147 vs 89148 | Spring Valley Zip Code Comparison',
    'Compare Spring Valley zip codes 89117, 89147, and 89148 — prices, home types, commute, and best fit for buyers. Expert guide by Dr. Jan Duffy.',
    '/89117-vs-89147-vs-89148',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: '89117 vs 89147 vs 89148', path: '/89117-vs-89147-vs-89148' }),
    heroImageAlt: 'Compare Spring Valley zip codes 89117 89147 89148',
    badges: ['Comparison Guide', 'Spring Valley', 'Buyer Resource'],
    title: '89117 vs 89147 vs 89148',
    subtitle: 'Which Southwest Las Vegas zip is right for you?',
    leadAnswer:
      '89117 offers established Spring Valley neighborhoods near Desert Breeze Park ($350K–$550K). 89147 mixes resale with Sienna Ridge new construction ($350K–$860K+). 89148 features newer builds near the 215 corridor ($450K–$650K). The best zip depends on budget, commute, and new vs resale preference.',
    comparison: {
      title: 'Spring Valley Zip Code Comparison',
      headers: ['Factor', '89117', '89147', '89148'],
      rows: [
        { label: 'Typical Price Range', values: ['$350K–$550K', '$350K–$860K+', '$450K–$650K'] },
        { label: 'Home Age', values: ['Established', 'Mixed + New', 'Newer builds'] },
        { label: 'Highlights', values: ['Desert Breeze Park', 'Sienna Ridge Lennar', '215 corridor'] },
        { label: 'Best For', values: ['Value & space', 'New construction', 'Modern amenities'] },
        { label: 'Commute to Strip', values: ['~15 min', '~18 min', '~20 min'] },
      ],
    },
    faqs: [
      { question: 'Which zip is cheapest in Spring Valley?', answer: '89117 and established 89147 resale often offer the lowest entry prices. Sienna Ridge new construction in 89147 starts higher but includes builder warranties and modern layouts.' },
      { question: 'Which zip has the newest homes?', answer: '89148 and new construction in 89147 (Sienna Ridge) have the newest inventory. 89117 is primarily established neighborhoods.' },
      { question: 'Is 89147 the same as Spring Valley?', answer: '89147 is one of several Spring Valley zip codes, covering Southwest Las Vegas including Caldera Hills and Sienna Ridge.' },
    ],
    relatedLinks: relatedZipLinks,
    ctaTitle: 'Not Sure Which Zip Fits You?',
    ctaDescription: 'Schedule a consultation — Dr. Jan Duffy will match neighborhoods to your budget and lifestyle.',
  },
}

export const LENNAR_BUYER_AGENT_PAGE: SeoPageConfig = {
  path: '/lennar-buyer-agent-las-vegas',
  metadata: meta(
    'Do You Need a Buyer Agent for Lennar? | Las Vegas New Construction',
    'Yes — a buyer\'s agent protects your interests when buying Lennar new construction in Las Vegas. Dr. Jan Duffy represents Sienna Ridge buyers at no extra cost to you.',
    '/lennar-buyer-agent-las-vegas',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Lennar Buyer Agent Guide', path: '/lennar-buyer-agent-las-vegas' }),
    heroImageAlt: 'Lennar buyer agent Las Vegas new construction',
    badges: ['Buyer Representation', 'New Construction', 'Sienna Ridge'],
    title: 'Do You Need a Buyer\'s Agent for Lennar?',
    leadAnswer:
      'Yes. The Lennar sales team represents the builder. A buyer\'s agent like Dr. Jan Duffy represents you — reviewing contracts, comparing incentives, negotiating upgrades, and ensuring you understand HOA, timelines, and closing costs. Buyer agent commissions are typically paid by the builder or seller.',
    bodySections: [
      {
        title: 'What a buyer\'s agent does at Sienna Ridge',
        content:
          'Dr. Jan Duffy helps you compare floor plans, evaluate lot premiums, coordinate inspections, review purchase agreements, and negotiate builder credits — all while you focus on choosing the right home.',
      },
    ],
    faqs: [
      { question: 'Does Lennar pay the buyer agent commission?', answer: 'In most new construction transactions, the builder compensates the buyer\'s agent. Dr. Jan Duffy can confirm current incentive structures for Sienna Ridge.' },
      { question: 'Can I use an agent if I already visited the model home?', answer: 'Yes — register your agent before your next visit to ensure representation from contract through closing.' },
      { question: 'What if I don\'t use a buyer agent?', answer: 'You negotiate alone against the builder\'s sales team. An experienced buyer agent levels the field and often saves more than their cost through negotiations.' },
    ],
    relatedLinks: [
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge Community', description: 'Lennar 89147 new homes' },
      { href: '/first-time-home-buyer-las-vegas', label: 'First-Time Buyer Guide', description: 'Step-by-step process' },
    ],
    ctaTitle: 'Get Buyer Representation at Sienna Ridge',
    ctaDescription: 'Schedule a free 15-minute call before you sign a Lennar purchase agreement.',
    schemaExtras: [
      buildHowToSchema('How to buy Lennar new construction with a buyer agent', 'Steps for Southwest Las Vegas new home buyers.', [
        { name: 'Schedule consultation', text: 'Book a 15-minute call with Dr. Jan Duffy to discuss floor plans and budget.' },
        { name: 'Register your agent', text: 'Register Dr. Jan Duffy at the Lennar sales center before your next visit.' },
        { name: 'Tour and compare', text: 'Tour models at Sienna Ridge and compare with resale options in 89147.' },
        { name: 'Review contract', text: 'Have your agent review the purchase agreement, upgrades, and closing timeline.' },
        { name: 'Close with confidence', text: 'Complete inspections, final walkthrough, and closing with expert guidance.' },
      ]),
    ],
  },
}

export const NEXT_GEN_PAGE: SeoPageConfig = {
  path: '/next-gen-homes-sienna-ridge',
  metadata: meta(
    'Next Gen® Homes Sienna Ridge | Multi-Generational Lennar Las Vegas',
    'Lennar Next Gen® suite homes at Sienna Ridge Las Vegas — private suites for multi-generational living. Dr. Jan Duffy buyer agent 89147.',
    '/next-gen-homes-sienna-ridge',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Next Gen® Homes', path: '/next-gen-homes-sienna-ridge' }),
    heroImageAlt: 'Next Gen multi-generational homes Sienna Ridge Lennar',
    badges: ['Next Gen®', 'Multi-Generational', '89147'],
    title: 'Next Gen® Homes at Sienna Ridge',
    leadAnswer:
      'Lennar\'s Next Gen® suite at Sienna Ridge is featured in the Bellevue Next Gen® plan — 2,640 sq ft with a private suite for multi-generational living in Las Vegas 89147, starting from $662,990. Ideal for aging parents, adult children, or home-office guests.',
    features: [
      { title: 'Bellevue Next Gen® Plan', description: '2,640 sq ft with 4 beds, 3 baths, and a private suite at Sienna Ridge — Lennar\'s top Next Gen collection in 89147.' },
      { title: 'Private Suite', description: 'Separate entrance, bedroom, and living area within one home.' },
      { title: 'Rental Potential', description: 'Some buyers use the suite for long-term rental income where permitted by HOA and city rules.' },
      { title: 'Family Flexibility', description: 'Keep loved ones close while maintaining privacy and independence.' },
    ],
    faqs: [
      { question: 'What is a Lennar Next Gen home?', answer: 'Next Gen is Lennar\'s multi-generational floor plan with a private suite including its own entrance and living space.' },
      { question: 'Which Next Gen plan is at Sienna Ridge?', answer: 'Bellevue Next Gen® is the active Next Gen collection at Sienna Ridge — 2,640 sq ft from $662,990 with 4 beds and 3 baths.' },
      { question: 'Are Lennar Next Gen floor plans available in Las Vegas?', answer: 'Yes. Sienna Ridge in 89147 offers Bellevue Next Gen®. Dr. Jan Duffy can compare Next Gen with standard Kingsbury, Skyland, and Glenbrook plans.' },
    ],
    relatedLinks: [
      { href: '/bellevue-nextgen-sienna-ridge', label: 'Bellevue Next Gen® Guide', description: 'Full plan details' },
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge Overview', description: 'Community guide' },
      { href: '/sienna-ridge-floor-plans', label: 'All Floor Plans', description: 'Compare collections' },
    ],
    ctaTitle: 'Explore Next Gen® at Sienna Ridge',
    ctaDescription: 'Book a consultation to tour Next Gen models and compare floor plans.',
  },
}

export const SIENNA_RIDGE_FLOOR_PLANS_PAGE: SeoPageConfig = {
  path: '/sienna-ridge-floor-plans',
  metadata: meta(
    'Sienna Ridge Floor Plans | 1594, 1760, 2270 Models | Lennar Las Vegas',
    'Compare Sienna Ridge Lennar floor plans — 1594, 1760, and 2270 sq ft models with pricing, beds, baths, and features. Dr. Jan Duffy buyer agent.',
    '/sienna-ridge-floor-plans',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Sienna Ridge Floor Plans', path: '/sienna-ridge-floor-plans' }),
    heroImageAlt: 'Sienna Ridge Lennar floor plans Las Vegas',
    badges: ['Floor Plans', 'Lennar', '89147'],
    title: 'Sienna Ridge Floor Plans',
    leadAnswer:
      `Sienna Ridge by Lennar offers four floor plan collections in 89147 — Glenbrook (1,966 sq ft), Kingsbury (2,051 sq ft), Skyland (2,270 sq ft), and Bellevue Next Gen® (2,640 sq ft) — priced from ${siennaRidgeCommunityPriceRange()}.`,
    comparison: {
      title: 'Sienna Ridge Lennar Collections',
      headers: ['Collection', 'Sq Ft', 'Beds/Baths', 'From'],
      rows: SIENNA_RIDGE_COLLECTIONS.map((c) => ({
        label: c.shortName,
        values: [
          c.sqft.toLocaleString(),
          `${c.beds} / ${c.baths}${c.halfBaths ? `.${c.halfBaths}` : ''}`,
          formatCollectionPrice(c.priceFrom),
        ],
      })),
    },
    itemList: SIENNA_RIDGE_COLLECTIONS.map((c) => ({
      name: c.name,
      url: c.path,
      description: c.description,
    })),
    faqs: [
      { question: 'What is the smallest floor plan at Sienna Ridge?', answer: 'Glenbrook is the entry plan at 1,966 sq ft with 3 beds and 2.5 baths, starting from $588,990.' },
      { question: 'What is the largest Sienna Ridge plan?', answer: 'Bellevue Next Gen® is the largest at 2,640 sq ft with a private suite, starting from $662,990.' },
      { question: 'What Lennar collections are at Sienna Ridge?', answer: 'Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen® are the four active collections at the 89147 sales center.' },
    ],
    relatedLinks: [
      ...SIENNA_RIDGE_COLLECTIONS.map((c) => ({
        href: c.path,
        label: c.shortName,
        description: `${c.sqft.toLocaleString()} sq ft`,
      })),
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Community Guide', description: 'Location and amenities' },
      { href: '/listings', label: 'Featured Models', description: 'Browse model pages' },
    ],
    ctaTitle: 'Tour Sienna Ridge Models',
    ctaDescription: 'Schedule a consultation before your model home visit.',
  },
}

export const SPRING_VALLEY_SCHOOLS_PAGE: SeoPageConfig = {
  path: '/spring-valley-schools',
  metadata: meta(
    'Spring Valley Schools | CCSD Guide for 89117 89147 89148 Buyers',
    'Spring Valley and Southwest Las Vegas schools guide for home buyers in 89117, 89147, and 89148. CCSD zones, family neighborhoods, and Dr. Jan Duffy.',
    '/spring-valley-schools',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Spring Valley Schools', path: '/spring-valley-schools' }),
    heroImageAlt: 'Spring Valley Las Vegas schools CCSD',
    badges: ['CCSD', 'Family Buyers', '89117 89147 89148'],
    title: 'Spring Valley Schools Guide',
    leadAnswer:
      'Spring Valley homes in 89117, 89147, and 89148 are served by Clark County School District (CCSD). Popular schools include Roger Bryan Elementary, Clifford Lawrence Junior High, and Spring Valley High School — verify current zones before you buy.',
    features: [
      { title: 'CCSD Public Schools', description: 'Clark County School District serves all three Spring Valley zip codes.' },
      { title: 'Verify Before You Buy', description: 'School zones change — confirm assignment for your specific address.' },
      { title: 'Family Neighborhoods', description: '89117 and 89147 are popular with families near parks and schools.' },
    ],
    faqs: [
      { question: 'What schools serve 89117?', answer: '89117 is served by CCSD schools including Roger Bryan Elementary and Spring Valley High School depending on address. Always verify with CCSD for your lot.' },
      { question: 'Are there good schools near Sienna Ridge?', answer: 'Sienna Ridge in 89147 is near CCSD schools in Southwest Las Vegas. Dr. Jan Duffy can help you compare neighborhoods by school zone.' },
    ],
    relatedLinks: [
      { href: '/moving-to-spring-valley-las-vegas', label: 'Moving to Spring Valley', description: 'Relocation guide' },
      { href: '/89117-vs-89147-vs-89148', label: 'Zip Comparison', description: 'Compare all three zips' },
    ],
    ctaTitle: 'Find Family-Friendly Homes',
    ctaDescription: 'Dr. Jan Duffy helps families choose neighborhoods by school zone and lifestyle.',
  },
}

export const MOVING_TO_SPRING_VALLEY_PAGE: SeoPageConfig = {
  path: '/moving-to-spring-valley-las-vegas',
  metadata: meta(
    'Moving to Spring Valley Las Vegas | Relocation Guide 2026',
    'Moving to Spring Valley Las Vegas? Guide to neighborhoods, zip codes 89117-89148, cost of living, and buying with Dr. Jan Duffy.',
    '/moving-to-spring-valley-las-vegas',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Moving to Spring Valley', path: '/moving-to-spring-valley-las-vegas' }),
    heroImageAlt: 'Moving to Spring Valley Las Vegas relocation guide',
    badges: ['Relocation', 'Spring Valley', 'Southwest LV'],
    title: 'Moving to Spring Valley, Las Vegas',
    leadAnswer:
      'Spring Valley is an unincorporated Clark County community in Southwest Las Vegas spanning zips 89117, 89147, and 89148. It offers established neighborhoods, new construction at Sienna Ridge, park access, and strong value compared to Summerlin — with convenient I-215 commutes.',
    faqs: [
      { question: 'Is Spring Valley a good place to live?', answer: 'Yes — Spring Valley offers family-friendly parks, diverse housing from $350K to $860K+, and easy access to the Strip and airport.' },
      { question: 'What zip codes are in Spring Valley?', answer: 'Primary zips include 89117, 89147, and 89148, each with distinct price points and housing stock.' },
    ],
    relatedLinks: relatedZipLinks,
    ctaTitle: 'Relocate with Confidence',
    ctaDescription: 'Schedule a consultation for a personalized Spring Valley neighborhood tour plan.',
    schemaExtras: [
      buildHowToSchema('How to move to Spring Valley Las Vegas', 'Steps for relocating buyers.', [
        { name: 'Research zip codes', text: 'Compare 89117, 89147, and 89148 for budget and lifestyle fit.' },
        { name: 'Get pre-approved', text: 'Secure financing before touring homes.' },
        { name: 'Tour neighborhoods', text: 'Visit Desert Breeze area, Caldera Hills, and Sienna Ridge with your agent.' },
        { name: 'Make an offer', text: 'Dr. Jan Duffy negotiates on your behalf for resale or new construction.' },
      ]),
    ],
  },
}

export const CALDERA_HILLS_PAGE: SeoPageConfig = {
  path: '/caldera-hills-homes-las-vegas',
  metadata: meta(
    'Caldera Hills Homes Las Vegas | 89147 Real Estate & Sienna Ridge',
    'Homes on Caldera Hills Avenue and surrounding 89147 neighborhoods. Sienna Ridge Lennar new construction and established Southwest Las Vegas resale.',
    '/caldera-hills-homes-las-vegas',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Caldera Hills Homes', path: '/caldera-hills-homes-las-vegas' }),
    heroImageAlt: 'Caldera Hills Avenue homes Las Vegas 89147',
    badges: ['89147', 'Caldera Hills', 'Sienna Ridge'],
    title: 'Caldera Hills Homes — Las Vegas 89147',
    leadAnswer:
      'Caldera Hills Avenue in 89147 is home to the Sienna Ridge by Lennar sales center and surrounding established neighborhoods. Buyers choose this corridor for I-215 access, new construction options, and Southwest Las Vegas value.',
    relatedLinks: [
      { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge', description: 'Lennar community' },
      { href: '/89147-homes-for-sale', label: '89147 Listings', description: 'MLS search' },
    ],
    faqs: [
      { question: 'Where is Caldera Hills in Las Vegas?', answer: 'Caldera Hills is in Southwest Las Vegas zip code 89147, near the I-215 beltway and Sienna Ridge new construction.' },
    ],
    ctaTitle: 'Explore Caldera Hills & Sienna Ridge',
    ctaDescription: 'Dr. Jan Duffy knows the 89147 corridor — schedule a consultation today.',
    schemaExtras: [
      buildPlaceSchema({
        name: 'Caldera Hills',
        description: 'Southwest Las Vegas neighborhood corridor in 89147 including Sienna Ridge.',
        path: '/caldera-hills-homes-las-vegas',
        latitude: 36.11058,
        longitude: -115.274467,
        address: { streetAddress: 'Caldera Hills Ave', postalCode: '89147' },
      }),
    ],
  },
}

export const DESERT_BREEZE_LIFESTYLE_PAGE: SeoPageConfig = {
  path: '/desert-breeze-park-spring-valley',
  metadata: meta(
    'Desert Breeze Park Spring Valley | Amenities & Lifestyle Guide',
    'Desert Breeze Park in Spring Valley 89117 — 119 acres, aquatics, trails, and family recreation. Lifestyle guide for Southwest Las Vegas home buyers.',
    '/desert-breeze-park-spring-valley',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Desert Breeze Park', path: '/desert-breeze-park-spring-valley' }),
    heroImageAlt: 'Desert Breeze Park Spring Valley Las Vegas amenities',
    badges: ['89117', 'Parks', 'Lifestyle'],
    title: 'Desert Breeze Park — Spring Valley',
    leadAnswer:
      'Desert Breeze Park spans 119 developed acres at 8275 Spring Mountain Rd in 89117, featuring aquatics, skate parks, dog parks, trails, and sports fields — a centerpiece for Spring Valley family living.',
    features: [
      { title: 'Aquatic Center', description: 'Seasonal pools and water recreation for all ages.' },
      { title: 'Sports & Skate', description: 'Courts, fields, and skate facilities for active families.' },
      { title: 'Trails', description: 'Walking and biking paths through landscaped open space.' },
    ],
    relatedLinks: [
      { href: '/homes-near-desert-breeze-park', label: 'Homes Near the Park', description: 'Real estate guide' },
    ],
    faqs: [
      { question: 'What amenities does Desert Breeze Park have?', answer: 'Desert Breeze includes aquatics, skate park, dog park, sports fields, trails, and picnic areas across 119 acres.' },
    ],
    ctaTitle: 'Live Near Desert Breeze Park',
    ctaDescription: 'Find homes in 89117 and nearby 89147 with Dr. Jan Duffy.',
    schemaExtras: [
      buildParkSchema('Desert Breeze Park', 'Clark County park in Spring Valley 89117.', '/desert-breeze-park-spring-valley', 36.1265, -115.2547),
    ],
  },
}

export const SPRING_VALLEY_VS_SUMMERLIN_PAGE: SeoPageConfig = {
  path: '/spring-valley-vs-summerlin',
  metadata: meta(
    'Spring Valley vs Summerlin | Las Vegas Neighborhood Comparison',
    'Compare Spring Valley and Summerlin for Las Vegas home buyers — price, commute, amenities, and value. Guide by Dr. Jan Duffy.',
    '/spring-valley-vs-summerlin',
  ),
  props: {
    breadcrumbs: breadcrumbTrail({ name: 'Spring Valley vs Summerlin', path: '/spring-valley-vs-summerlin' }),
    heroImageAlt: 'Spring Valley vs Summerlin Las Vegas comparison',
    badges: ['Comparison', 'Las Vegas', 'Buyer Guide'],
    title: 'Spring Valley vs Summerlin',
    leadAnswer:
      'Spring Valley (89117, 89147, 89148) typically offers lower entry prices and larger lots than Summerlin, with strong access to I-215 and Desert Breeze Park. Summerlin commands premium pricing for master-planned amenities and golf communities. Spring Valley suits value-focused buyers and investors.',
    comparison: {
      title: 'Spring Valley vs Summerlin',
      headers: ['Factor', 'Spring Valley', 'Summerlin'],
      rows: [
        { label: 'Entry Price', values: ['$350K–$650K+', '$500K–$1M+'] },
        { label: 'Vibe', values: ['Established + new mix', 'Master-planned premium'] },
        { label: 'Commute to Strip', values: ['~15–20 min', '~20–25 min'] },
        { label: 'New Construction', values: ['Sienna Ridge Lennar', 'Multiple builders'] },
      ],
    },
    faqs: [
      { question: 'Is Spring Valley cheaper than Summerlin?', answer: 'Generally yes — Spring Valley offers lower median prices, especially in established 89117 and 89147 resale.' },
    ],
    relatedLinks: [
      { href: '/89117-vs-89147-vs-89148', label: 'Zip Code Comparison', description: 'Within Spring Valley' },
      { href: '/spring-valley-real-estate', label: 'Spring Valley Real Estate', description: 'Area overview' },
    ],
    ctaTitle: 'Compare Neighborhoods with an Expert',
    ctaDescription: 'Dr. Jan Duffy helps you weigh Spring Valley vs Summerlin for your budget and goals.',
  },
}

/** All SEO expansion pages for sitemap registration */
export const SEO_EXPANSION_PAGES: SeoPageConfig[] = [
  SIENNA_RIDGE_LENNAR_PAGE,
  ...SIENNA_RIDGE_KEYWORD_PAGES,
  DESERT_BREEZE_PARK_PAGE,
  ZIP_COMPARISON_PAGE,
  LENNAR_BUYER_AGENT_PAGE,
  NEXT_GEN_PAGE,
  SIENNA_RIDGE_FLOOR_PLANS_PAGE,
  SPRING_VALLEY_SCHOOLS_PAGE,
  MOVING_TO_SPRING_VALLEY_PAGE,
  CALDERA_HILLS_PAGE,
  DESERT_BREEZE_LIFESTYLE_PAGE,
  SPRING_VALLEY_VS_SUMMERLIN_PAGE,
]

export const ALL_FAQS: FaqItem[] = [
  ...SEO_EXPANSION_PAGES.flatMap((p) => p.props.faqs),
]
