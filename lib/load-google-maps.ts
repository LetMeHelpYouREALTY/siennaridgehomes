export { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader'

export function getGoogleMapsApiKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? ''
}

export function getGoogleMapsMapId() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() ?? ''
}
