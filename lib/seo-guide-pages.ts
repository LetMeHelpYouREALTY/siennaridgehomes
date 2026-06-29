import type { FaqItem } from '@/lib/structured-data'

/** Priority SEO landing pages — keep in sync with sitemap-pages.ts */
export type SeoGuidePage = {
  href: string
  label: string
  description: string
  leadAnswer: string
  faqs: FaqItem[]
  category: 'area' | 'zip' | 'buyer'
}

export const SEO_GUIDE_PAGES: SeoGuidePage[] = [
  {
    href: '/spring-valley-real-estate',
    label: 'Spring Valley Real Estate',
    description: 'Area overview, zip codes, and buyer resources for Spring Valley.',
    leadAnswer:
      'Dr. Jan Duffy is a Spring Valley real estate specialist serving zip codes 89117, 89147, and 89148 with MLS search, buyer representation, and free home valuations across Southwest Las Vegas.',
    faqs: [
      {
        question: 'What zip codes make up Spring Valley Las Vegas?',
        answer:
          'Spring Valley spans 89117, 89147, and 89148 in Southwest Las Vegas. Each zip offers different housing stock — established homes in 89117, Sienna Ridge new construction in 89147, and newer 215-corridor communities in 89148.',
      },
      {
        question: 'Is Spring Valley a good place to buy a home in Las Vegas?',
        answer:
          'Yes. Spring Valley offers established neighborhoods, strong schools, convenient Strip and airport access, and appreciation potential. Median home prices range from $350,000 to $650,000+ depending on zip code and property type.',
      },
      {
        question: 'Who is the best real estate agent for Spring Valley?',
        answer:
          'Dr. Jan Duffy specializes in Spring Valley buyer representation with local market expertise across 89117, 89147, and 89148. She provides MLS search, negotiation, and step-by-step guidance for families, investors, and first-time buyers.',
      },
    ],
    category: 'area',
  },
  {
    href: '/southwest-las-vegas-homes',
    label: 'Southwest Las Vegas Homes',
    description: 'Homes for sale across 89117, 89147, and 89148.',
    leadAnswer:
      'Southwest Las Vegas homes for sale span zip codes 89117, 89147, and 89148. Dr. Jan Duffy helps buyers compare neighborhoods, search live MLS listings, and navigate offers with expert local guidance.',
    faqs: [
      {
        question: 'What areas are included in Southwest Las Vegas?',
        answer:
          'Southwest Las Vegas includes Spring Valley and surrounding communities in zip codes 89117, 89147, and 89148. The area sits west of the Strip with easy access to Red Rock Canyon, the 215 beltway, and McCarran International Airport.',
      },
      {
        question: 'How much do Southwest Las Vegas homes cost?',
        answer:
          'Southwest Las Vegas home prices typically range from $350,000 for established resale to $860,000+ for new construction at Sienna Ridge by Lennar in 89147. Price varies by zip code, square footage, and lot size.',
      },
      {
        question: 'How do I search Southwest Las Vegas MLS listings?',
        answer:
          'Use the live MLS search on siennaridgehomes.com or contact Dr. Jan Duffy for a curated list matched to your budget, preferred zip code, and must-have features across 89117, 89147, and 89148.',
      },
    ],
    category: 'area',
  },
  {
    href: '/89117-homes-for-sale',
    label: '89117 Homes for Sale',
    description: 'Spring Valley established homes and neighborhoods.',
    leadAnswer:
      '89117 homes for sale in Spring Valley Las Vegas range from $350,000 to $550,000 for established single-family homes and townhomes. Dr. Jan Duffy provides buyer representation and MLS search for zip code 89117.',
    faqs: [
      {
        question: 'What is the average home price in 89117?',
        answer:
          '89117 home prices typically range from $350,000 to $550,000 for established single-family homes and townhomes. Larger executive properties and updated homes can exceed $600,000 depending on location and upgrades.',
      },
      {
        question: 'What neighborhoods are in zip code 89117?',
        answer:
          '89117 includes established Spring Valley neighborhoods near Desert Breeze Park, Spring Mountain Road corridors, and mature residential communities with tree-lined streets and larger lot sizes compared to newer southwest developments.',
      },
      {
        question: 'Is 89117 good for first-time home buyers?',
        answer:
          'Yes. 89117 offers diverse price points, established infrastructure, and strong rental demand. Dr. Jan Duffy helps first-time buyers compare 89117 against 89147 and 89148 to find the best fit for budget and lifestyle.',
      },
    ],
    category: 'zip',
  },
  {
    href: '/89147-homes-for-sale',
    label: '89147 Homes for Sale',
    description: 'Sienna Ridge new construction and Southwest LV resale.',
    leadAnswer:
      '89147 homes for sale include Sienna Ridge by Lennar new construction starting near $564,890 plus established Southwest Las Vegas resale. Dr. Jan Duffy represents buyers at the Sienna Ridge sales center and across 89147 MLS listings.',
    faqs: [
      {
        question: 'What new construction is available in 89147?',
        answer:
          'Sienna Ridge by Lennar is the primary new construction community in 89147, with base prices from approximately $564,890 to $860,000+ depending on floor plan. Options include single-story, two-story, and executive models.',
      },
      {
        question: 'Where is Sienna Ridge located in 89147?',
        answer:
          'Sienna Ridge is located at 8370 Caldera Hls Ave, Las Vegas, NV 89147 in Southwest Las Vegas. The community offers Lennar new construction with modern floor plans and access to the 215 beltway.',
      },
      {
        question: 'Do I need a buyer agent for Lennar new construction?',
        answer:
          'Yes. Dr. Jan Duffy provides independent buyer representation at Lennar communities including Sienna Ridge, helping you compare incentives, negotiate upgrades, and protect your interests through contract and closing.',
      },
    ],
    category: 'zip',
  },
  {
    href: '/89148-homes-for-sale',
    label: '89148 Homes for Sale',
    description: 'Newer builds and 215 corridor communities.',
    leadAnswer:
      '89148 homes for sale feature newer construction and 215-corridor communities in Southwest Las Vegas with prices typically from $400,000 to $700,000. Dr. Jan Duffy helps buyers search MLS listings and compare 89148 against neighboring zip codes.',
    faqs: [
      {
        question: 'What type of homes are in 89148?',
        answer:
          '89148 features newer single-family homes, master-planned communities, and properties along the 215 beltway corridor. Housing stock is generally newer than 89117 with modern floor plans and community amenities.',
      },
      {
        question: 'How does 89148 compare to 89147?',
        answer:
          '89148 tends toward newer builds and 215-corridor locations, while 89147 includes Sienna Ridge new construction and more established Southwest Las Vegas neighborhoods. Price ranges overlap but 89148 often offers newer construction at similar price points.',
      },
      {
        question: 'Is 89148 a good area for investors?',
        answer:
          '89148 attracts investors due to newer housing stock, strong rental demand from Las Vegas employment centers, and appreciation potential along the growing 215 corridor. Dr. Jan Duffy provides rental analysis for investment buyers.',
      },
    ],
    category: 'zip',
  },
  {
    href: '/first-time-home-buyer-las-vegas',
    label: 'First-Time Home Buyer Guide',
    description: 'Step-by-step Las Vegas buying process for new buyers.',
    leadAnswer:
      'First-time home buyers in Las Vegas should get pre-approved, choose a Southwest Las Vegas neighborhood (89117, 89147, or 89148), make a competitive offer, and close with expert guidance. Dr. Jan Duffy walks buyers through each step.',
    faqs: [
      {
        question: 'What are the steps to buy a first home in Las Vegas?',
        answer:
          'The Las Vegas first-time buyer process includes: (1) mortgage pre-approval, (2) neighborhood selection in areas like Spring Valley, (3) MLS home search and showings, (4) competitive offer and negotiation, (5) inspection and appraisal, and (6) closing.',
      },
      {
        question: 'Which Las Vegas zip code is best for first-time buyers?',
        answer:
          '89117 offers established homes from $350K, 89147 includes Sienna Ridge new construction from $564K, and 89148 has newer builds along the 215 corridor. Dr. Jan Duffy helps first-time buyers match budget and lifestyle to the right zip code.',
      },
      {
        question: 'Do first-time buyers need a real estate agent in Nevada?',
        answer:
          'While not legally required, a buyer agent like Dr. Jan Duffy provides negotiation expertise, contract protection, and local market knowledge at no direct cost to the buyer — the seller typically pays buyer agent commission.',
      },
    ],
    category: 'buyer',
  },
  {
    href: '/las-vegas-home-valuation',
    label: 'Free Home Valuation',
    description: 'Instant property estimate for Southwest Las Vegas homes.',
    leadAnswer:
      'Get a free Las Vegas home valuation for Southwest Las Vegas properties in 89117, 89147, and 89148. Use the instant online estimate tool or request a comprehensive market analysis from Dr. Jan Duffy.',
    faqs: [
      {
        question: 'How accurate is a free online home valuation?',
        answer:
          'Online home valuations provide a starting estimate based on recent sales and public records. For Southwest Las Vegas properties, Dr. Jan Duffy supplements automated estimates with local comps, condition adjustments, and current market trends for greater accuracy.',
      },
      {
        question: 'What affects home value in Spring Valley Las Vegas?',
        answer:
          'Spring Valley home values depend on zip code, square footage, lot size, age, upgrades, and proximity to amenities like Desert Breeze Park. New construction at Sienna Ridge in 89147 commands premium pricing for modern floor plans.',
      },
      {
        question: 'How do I get a professional home valuation in Las Vegas?',
        answer:
          'Schedule a consultation with Dr. Jan Duffy for a comprehensive comparative market analysis (CMA) covering your Spring Valley or Southwest Las Vegas property, or use the instant valuation widget on siennaridgehomes.com.',
      },
    ],
    category: 'buyer',
  },
  {
    href: '/las-vegas-investment-properties',
    label: 'Investment Properties',
    description: 'Rental analysis and investor opportunities in Spring Valley.',
    leadAnswer:
      'Las Vegas investment properties in Spring Valley and Southwest Las Vegas (89117, 89147, 89148) offer strong rental demand and appreciation potential. Dr. Jan Duffy provides cap rate analysis and investor-focused buyer representation.',
    faqs: [
      {
        question: 'Is Spring Valley good for real estate investment?',
        answer:
          'Spring Valley attracts investors due to strong rental demand from Las Vegas employment centers, diverse price points from $350K to $860K+, and appreciation potential across zip codes 89117, 89147, and 89148.',
      },
      {
        question: 'What cap rates can investors expect in Southwest Las Vegas?',
        answer:
          'Cap rates in Southwest Las Vegas vary by property type and zip code, typically ranging from 5% to 8% for single-family rentals. Dr. Jan Duffy provides property-specific rental analysis including HOA costs, vacancy rates, and appreciation projections.',
      },
      {
        question: 'Should investors buy new construction or resale in Las Vegas?',
        answer:
          'New construction at Sienna Ridge offers modern floor plans and builder warranties but higher entry prices. Established 89117 resale may offer better immediate cash flow. Dr. Jan Duffy helps investors compare ROI across both options.',
      },
    ],
    category: 'buyer',
  },
]

export const GSC_PRIORITY_PATHS = SEO_GUIDE_PAGES.map((page) => page.href)

export function getSeoGuideByPath(path: string): SeoGuidePage | undefined {
  return SEO_GUIDE_PAGES.find((page) => page.href === path)
}
