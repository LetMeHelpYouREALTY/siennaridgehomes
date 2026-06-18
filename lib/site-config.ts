export const SITE_URL = 'https://www.siennaridgehomes.com'
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

/** Sienna Ridge sales office — matches Google Maps / USPS listing */
export const OFFICE_GEO = {
  latitude: 36.11058,
  longitude: -115.274467,
} as const

export const OFFICE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=8370+Caldera+Hls+Ave,+Las+Vegas,+NV+89147'

export function formatCityStateZip() {
  return `${NAP.city}, ${NAP.state} ${NAP.postalCode}`
}

export function formatFullAddress() {
  return `${NAP.streetAddress}, ${formatCityStateZip()}`
}

export const SERVICE_ZIP_CODES = ['89117', '89147', '89148'] as const

export const REALSCOUT_SEARCH_URL = 'https://drjanduffy.realscout.com/homesearch/map'

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
