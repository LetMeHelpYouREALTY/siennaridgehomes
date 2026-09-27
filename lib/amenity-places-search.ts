import type { AmenityCategoryId } from '@/lib/amenities-config'
import { AMENITY_MAP_CENTER, AMENITY_SEARCH_RADIUS_M } from '@/lib/amenities-config'

const cache = new Map<string, Promise<google.maps.places.Place[]>>()

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[],
) {
  let p = cache.get(categoryId)
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: { center, radius: AMENITY_SEARCH_RADIUS_M },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as any,
      })
      return places
    })()
    p.catch(() => cache.delete(categoryId))
    cache.set(categoryId, p)
  }
  return p
}

export function searchAmenityCategory(categoryId: AmenityCategoryId, types: string[]) {
  return searchCategory(AMENITY_MAP_CENTER, categoryId, types)
}
