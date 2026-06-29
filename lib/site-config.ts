export const SITE_URL = 'https://www.siennaridgehomes.com'
export const CANONICAL_HOST = 'www.siennaridgehomes.com'
export const AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw'
export const AGENT_HEADSHOT_PATH = '/images/dr-jan-duffy-headshot.jpg'

export function agentHeadshotUrl() {
  return `${SITE_URL}${AGENT_HEADSHOT_PATH}`
}

export const NAP = {
  name: 'Dr. Jan Duffy',
  businessName: 'Sienna Ridge Homes',
  phone: '(702) 903-3336',
  phoneTel: '+17029033336',
  email: 'DrJanSells@SiennaRidgeHomes.com',
  streetAddress: '8370 Caldera Hls Ave',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89147',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
} as const

/** Sienna Ridge sales office — 8370 Caldera Hls Ave, Las Vegas, NV 89147 */
export const OFFICE_GEO = {
  latitude: 36.11058,
  longitude: -115.274467,
} as const

export function formatCityStateZip() {
  return `${NAP.city}, ${NAP.state} ${NAP.postalCode}`
}

export function formatFullAddress() {
  return `${NAP.streetAddress}, ${formatCityStateZip()}`
}

const OFFICE_MAPS_QUERY = encodeURIComponent(formatFullAddress())

export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${OFFICE_MAPS_QUERY}`

export const OFFICE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_MAPS_QUERY}`

export const SERVICE_ZIP_CODES = ['89117', '89147', '89148'] as const

export const REALSCOUT_SEARCH_URL =
  'https://drjanduffy.realscout.com/homesearch/map?for_sale=1&for_rent=0'

export const REVIEW_PROFILES = {
  google: {
    label: 'Google',
    readUrl: 'https://g.page/r/CZcA4mC9AUJeEBI/review',
    writeUrl: 'https://g.page/r/CZcA4mC9AUJeEBI/review',
  },
  zillow: {
    label: 'Zillow',
    readUrl: 'https://www.zillow.com/las-vegas-nv/real-estate-agents/',
    writeUrl: 'https://www.zillow.com/las-vegas-nv/real-estate-agents/',
  },
  bhhs: {
    label: 'Berkshire Hathaway HomeServices',
    readUrl: 'https://www.bhhsnv.com/real-estate-agent/4986/a1-dr-jan-duffy',
    writeUrl: 'https://www.bhhsnv.com/real-estate-agent/4986/a1-dr-jan-duffy',
  },
} as const

/** Entity disambiguation for schema sameAs — must match visible profiles. */
export const SAME_AS_PROFILES = [
  REVIEW_PROFILES.google.readUrl,
  REVIEW_PROFILES.bhhs.readUrl,
  REALSCOUT_SEARCH_URL,
  `${SITE_URL}/about`,
] as const

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  process.env.GOOGLE_SITE_VERIFICATION ??
  ''
