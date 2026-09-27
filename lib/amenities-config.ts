import { OFFICE_GEO, formatFullAddress } from '@/lib/site-config'
import { SIENNA_RIDGE } from '@/lib/sienna-ridge-community'

/** Map center — Lennar Sienna Ridge sales office (8370 Caldera Hls Ave, Las Vegas NV 89147). */
export const AMENITY_MAP_CENTER = {
  lat: OFFICE_GEO.latitude,
  lng: OFFICE_GEO.longitude,
} as const

export const AMENITY_MAP_DEFAULT_ZOOM = 14

export const COMMUNITY_MAP_LABEL = `${SIENNA_RIDGE.name} by ${SIENNA_RIDGE.builder}`

export const COMMUNITY_MAP_ADDRESS = formatFullAddress()

/** Search radius for Places API nearby search (meters). */
export const AMENITY_SEARCH_RADIUS_M = 8000

export type AmenityCategoryId =
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'healthcare'
  | 'fitness'
  | 'shopping'
  | 'cafes'
  | 'pharmacies'
  | 'schools'
  | 'golf'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for searchNearby. */
  primaryTypes: string[]
  ariaLabel: string
}

/** Family suburban community — parks and daily essentials first; schools included. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    ariaLabel: 'Show parks and recreation near Sienna Ridge',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Sienna Ridge',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Sienna Ridge',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show hospitals and medical offices near Sienna Ridge',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show gyms and fitness centers near Sienna Ridge',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Sienna Ridge',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Sienna Ridge',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Sienna Ridge',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Sienna Ridge',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Sienna Ridge',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    ariaLabel: 'Show parking near Sienna Ridge',
  },
]

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = 'parks'

export function amenityMapEmbedUrl() {
  const { lat, lng } = AMENITY_MAP_CENTER
  return `https://www.google.com/maps?q=${lat},${lng}&z=${AMENITY_MAP_DEFAULT_ZOOM}&output=embed`
}

export function googleMapsDirectionsUrl(lat: number, lng: number, placeName?: string) {
  const query = placeName ? encodeURIComponent(placeName) : `${lat},${lng}`
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
}
