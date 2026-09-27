/** Minimal typings for Maps JS API + Places (New) used by the amenity map. */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions)
    setCenter(latLng: LatLng | LatLngLiteral): void
    setZoom(zoom: number): void
    fitBounds(bounds: LatLngBounds): void
  }

  class Marker {
    constructor(opts?: MarkerOptions)
    setMap(map: Map | null): void
    addListener(event: string, handler: () => void): void
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions)
    setContent(content: string): void
    open(opts?: { map?: Map; anchor?: Marker }): void
    close(): void
  }

  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void
  }

  class Size {
    constructor(width: number, height: number)
  }

  interface MapOptions {
    center?: LatLngLiteral
    zoom?: number
    mapId?: string
    mapTypeControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }

  interface MarkerOptions {
    map?: Map
    position?: LatLngLiteral
    title?: string
    icon?: { url: string; scaledSize?: Size }
  }

  interface InfoWindowOptions {
    content?: string
  }

  interface LatLngLiteral {
    lat: number
    lng: number
  }

  type LatLng = LatLngLiteral

  interface MapsLibrary {
    importLibrary?: (name: string) => Promise<unknown>
    __ib__?: () => void
  }

  function importLibrary(name: 'maps'): Promise<{ Map: typeof Map }>
  function importLibrary(name: 'places'): Promise<PlacesLibrary>
  function importLibrary(name: string): Promise<unknown>
}

declare namespace google.maps.places {
  class Place {
    static searchNearby(request: SearchNearbyRequest): Promise<SearchNearbyResponse>
    displayName?: string
    formattedAddress?: string
    rating?: number
    location?: google.maps.LatLngLiteral
    googleMapsURI?: string
  }

  interface SearchNearbyRequest {
    fields: string[]
    locationRestriction: {
      center: google.maps.LatLngLiteral
      radius: number
    }
    includedPrimaryTypes?: string[]
    maxResultCount?: number
  }

  interface SearchNearbyResponse {
    places: Place[]
  }
}

interface PlacesLibrary {
  Place: typeof google.maps.places.Place
}

declare const google: {
  maps: google.maps.MapsLibrary & {
    Map: typeof google.maps.Map
    Marker: typeof google.maps.Marker
    InfoWindow: typeof google.maps.InfoWindow
    LatLngBounds: typeof google.maps.LatLngBounds
    Size: typeof google.maps.Size
    importLibrary: typeof google.maps.importLibrary
  }
}
