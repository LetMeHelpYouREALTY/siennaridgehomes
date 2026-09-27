import type { AmenityCategoryId } from '@/lib/amenities-config'
import type { FaqItem } from '@/lib/structured-data'
import { SIENNA_RIDGE } from '@/lib/sienna-ridge-community'
import { NAP, OFFICE_DIRECTIONS_URL, OFFICE_MAPS_URL } from '@/lib/site-config'

export type CuratedAmenitySchemaType =
  | 'Park'
  | 'GroceryStore'
  | 'Restaurant'
  | 'Hospital'
  | 'Pharmacy'
  | 'School'
  | 'GolfCourse'
  | 'ShoppingCenter'
  | 'SportsActivityLocation'

export type CuratedAmenity = {
  name: string
  category: AmenityCategoryId
  streetAddress: string
  city: string
  state: string
  postalCode: string
  schemaType: CuratedAmenitySchemaType
  note?: string
  mapsUrl?: string
}

/** Verified addresses for static content, fallback list, and JSON-LD — no invented ratings or distances. */
export const CURATED_AMENITIES: CuratedAmenity[] = [
  {
    name: 'Desert Breeze Park',
    category: 'parks',
    streetAddress: '8275 Spring Mountain Rd',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89117',
    schemaType: 'Park',
    note: '119-acre Clark County park with aquatics, trails, and recreation.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Desert+Breeze+Park+8275+Spring+Mountain+Rd+Las+Vegas+NV',
  },
  {
    name: "Smith's Food and Drug",
    category: 'grocery',
    streetAddress: '9350 W Flamingo Rd',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89147',
    schemaType: 'GroceryStore',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=9350+W+Flamingo+Rd+Las+Vegas+NV+89147',
  },
  {
    name: "Smith's Food and Drug",
    category: 'grocery',
    streetAddress: '10100 W Tropicana Ave',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89147',
    schemaType: 'GroceryStore',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10100+W+Tropicana+Ave+Las+Vegas+NV+89147',
  },
  {
    name: 'Southern Hills Hospital and Medical Center',
    category: 'healthcare',
    streetAddress: '9300 W Sunset Rd',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89148',
    schemaType: 'Hospital',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Southern+Hills+Hospital+9300+W+Sunset+Rd+Las+Vegas+NV',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    streetAddress: '6900 N Durango Dr',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89149',
    schemaType: 'Hospital',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Centennial+Hills+Hospital+6900+N+Durango+Dr+Las+Vegas+NV',
  },
  {
    name: 'Rhodes Ranch Golf Club',
    category: 'golf',
    streetAddress: '20 E Rhodes Ranch Pkwy',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89148',
    schemaType: 'GolfCourse',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rhodes+Ranch+Golf+Club+Las+Vegas+NV',
  },
  {
    name: 'Durango High School',
    category: 'schools',
    streetAddress: '7100 W Dewey Dr',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89113',
    schemaType: 'School',
    note: 'Clark County School District (CCSD).',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Durango+High+School+7100+W+Dewey+Dr+Las+Vegas+NV',
  },
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    streetAddress: '1980 Festival Plaza Dr',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89135',
    schemaType: 'ShoppingCenter',
    note: 'Open-air shopping, dining, and entertainment in Summerlin.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Downtown+Summerlin+Las+Vegas+NV',
  },
]

export function curatedAmenitiesForCategory(category: AmenityCategoryId) {
  return CURATED_AMENITIES.filter((place) => place.category === category)
}

export const AMENITIES_PAGE_FAQS: FaqItem[] = [
  {
    question: `What grocery stores are near ${SIENNA_RIDGE.name}?`,
    answer: `Smith's Food and Drug locations at 9350 W Flamingo Rd and 10100 W Tropicana Ave serve the 89147 area around ${SIENNA_RIDGE.name} — both are a short drive from the Lennar sales center on Caldera Hills Avenue.`,
  },
  {
    question: `How far is ${SIENNA_RIDGE.name} from the Las Vegas Strip?`,
    answer: `From Sienna Ridge in Southwest Las Vegas (89147), the Strip is approximately 15–20 minutes by car depending on traffic and your route — commonly via I-215 and I-15.`,
  },
  {
    question: `Are there hospitals near ${SIENNA_RIDGE.name}?`,
    answer: `Yes. Southern Hills Hospital and Medical Center (9300 W Sunset Rd, Las Vegas) and Centennial Hills Hospital Medical Center (6900 N Durango Dr) are major hospitals within a reasonable drive of Sienna Ridge in 89147.`,
  },
  {
    question: `What parks are close to ${SIENNA_RIDGE.name}?`,
    answer: `Desert Breeze Park at 8275 Spring Mountain Rd in Spring Valley (89117) is the flagship nearby county park — about 119 acres with aquatics, trails, and recreation. Many buyers in 89147 use it regularly.`,
  },
  {
    question: `Is there golf near Sienna Ridge Las Vegas?`,
    answer: `Rhodes Ranch Golf Club at 20 E Rhodes Ranch Pkwy in 89148 is one of the well-known public courses in the southwest valley, a short drive from the Sienna Ridge area.`,
  },
  {
    question: `How do I get to Harry Reid International Airport from ${SIENNA_RIDGE.name}?`,
    answer: `Harry Reid International Airport is approximately 15–25 minutes from Sienna Ridge via I-215 and the airport connector roads, depending on traffic — plan extra time during peak travel.`,
  },
  {
    question: `Who is the local REALTOR for ${SIENNA_RIDGE.name} new homes?`,
    answer: `${NAP.name} (${NAP.phone}) is an independent buyer's agent for Lennar Sienna Ridge and Southwest Las Vegas — license ${NAP.license}, ${NAP.brokerage}. She helps buyers compare floor plans, incentives, and resale nearby.`,
  },
]

export type AmenityContentSection = {
  id: string
  title: string
  paragraphs: string[]
  places?: { name: string; detail: string; href?: string }[]
}

export const AMENITIES_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: 'dining',
    title: 'Dining & Cafes',
    paragraphs: [
      `Southwest Las Vegas around ${SIENNA_RIDGE.name} (89147) sits between established Spring Valley corridors and newer retail along Flamingo and Tropicana. You will find national chains, local favorites, and coffee stops within a few miles of Caldera Hills Avenue.`,
      'Use the map filters for Restaurants and Cafes to explore current options from Google Places. For a larger dining district, Downtown Summerlin offers additional sit-down and quick-service choices.',
    ],
    places: [
      {
        name: 'Downtown Summerlin',
        detail: '1980 Festival Plaza Dr, Las Vegas, NV 89135 — regional shopping and dining hub.',
        href: 'https://www.google.com/maps/search/?api=1&query=Downtown+Summerlin+Las+Vegas+NV',
      },
    ],
  },
  {
    id: 'parks',
    title: 'Parks & Recreation',
    paragraphs: [
      `${SIENNA_RIDGE.location} Desert Breeze Park is the anchor outdoor destination for many families in 89117 and nearby 89147.`,
    ],
    places: [
      {
        name: 'Desert Breeze Park',
        detail: '8275 Spring Mountain Rd, Las Vegas, NV 89117 — aquatics, trails, and open space.',
        href: 'https://www.google.com/maps/search/?api=1&query=Desert+Breeze+Park+Las+Vegas+NV',
      },
    ],
  },
  {
    id: 'golf',
    title: 'Golf',
    paragraphs: [
      'Southwest Las Vegas offers several public and private courses. Rhodes Ranch is a common choice for buyers comparing golf-community lifestyles in 89148.',
    ],
    places: [
      {
        name: 'Rhodes Ranch Golf Club',
        detail: '20 E Rhodes Ranch Pkwy, Las Vegas, NV 89148.',
        href: 'https://www.google.com/maps/search/?api=1&query=Rhodes+Ranch+Golf+Club+Las+Vegas+NV',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Pharmacies',
    paragraphs: [
      'Major hospital campuses in the southwest and northwest valley serve Sienna Ridge residents. Use the Healthcare and Pharmacies map filters for clinics and drugstores closer to your daily route.',
    ],
    places: [
      {
        name: 'Southern Hills Hospital and Medical Center',
        detail: '9300 W Sunset Rd, Las Vegas, NV 89148.',
        href: 'https://www.google.com/maps/search/?api=1&query=Southern+Hills+Hospital+Las+Vegas+NV',
      },
      {
        name: 'Centennial Hills Hospital Medical Center',
        detail: '6900 N Durango Dr, Las Vegas, NV 89149.',
        href: 'https://www.google.com/maps/search/?api=1&query=Centennial+Hills+Hospital+Las+Vegas+NV',
      },
    ],
  },
  {
    id: 'shopping-grocery',
    title: 'Grocery & Shopping',
    paragraphs: [
      'Day-to-day grocery runs are convenient from 89147 with Smith’s locations on Flamingo and Tropicana. For apparel, home goods, and entertainment, many buyers also shop Downtown Summerlin.',
    ],
    places: [
      {
        name: "Smith's Food and Drug",
        detail: '9350 W Flamingo Rd, Las Vegas, NV 89147.',
        href: 'https://www.google.com/maps/search/?api=1&query=9350+W+Flamingo+Rd+Las+Vegas+NV+89147',
      },
      {
        name: "Smith's Food and Drug",
        detail: '10100 W Tropicana Ave, Las Vegas, NV 89147.',
        href: 'https://www.google.com/maps/search/?api=1&query=10100+W+Tropicana+Ave+Las+Vegas+NV+89147',
      },
    ],
  },
  {
    id: 'schools',
    title: 'Schools (CCSD)',
    paragraphs: [
      'Sienna Ridge buyers with children typically research Clark County School District (CCSD) zoning for their specific address. Durango High School is one of the known southwest valley high schools — confirm assignment with CCSD before you buy.',
    ],
    places: [
      {
        name: 'Durango High School',
        detail: '7100 W Dewey Dr, Las Vegas, NV 89113 — CCSD high school.',
        href: 'https://www.google.com/maps/search/?api=1&query=Durango+High+School+Las+Vegas+NV',
      },
    ],
  },
  {
    id: 'commute',
    title: 'Commute & Key Destinations',
    paragraphs: [
      'Approximate drive times from Sienna Ridge (89147) vary with traffic and route. These are planning estimates, not guarantees:',
      '• Las Vegas Strip (resort corridor): about 15–20 minutes via I-215 and I-15.',
      '• Harry Reid International Airport: about 15–25 minutes depending on time of day.',
      '• Downtown Summerlin: about 20–30 minutes via the 215 beltway and Summerlin Parkway.',
      '• Sienna Ridge sales center: 8370 Caldera Hls Ave, Las Vegas, NV 89147 — use the community marker on the map for directions.',
    ],
    places: [
      {
        name: `${SIENNA_RIDGE.name} Sales Center`,
        detail: '8370 Caldera Hls Ave, Las Vegas, NV 89147.',
        href: OFFICE_MAPS_URL,
      },
    ],
  },
]

export const AMENITIES_TRUST_BLOCK = {
  title: `Local buyer's agent for ${SIENNA_RIDGE.name}`,
  body: `${NAP.name} helps families and relocations compare Lennar floor plans, resale in 89147, and lifestyle fit near Desert Breeze Park and the I-215 corridor.`,
  phone: NAP.phone,
  phoneTel: NAP.phoneTel,
  email: NAP.email,
  license: NAP.license,
  brokerage: NAP.brokerage,
  directionsUrl: OFFICE_DIRECTIONS_URL,
}
