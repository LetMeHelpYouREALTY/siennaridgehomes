'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  AMENITY_CATEGORIES,
  AMENITY_MAP_CENTER,
  AMENITY_MAP_DEFAULT_ZOOM,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_ADDRESS,
  COMMUNITY_MAP_LABEL,
  DEFAULT_AMENITY_CATEGORY,
  googleMapsDirectionsUrl,
  type AmenityCategoryId,
} from '@/lib/amenities-config'
import { getGoogleMapsApiKey, getGoogleMapsMapId, loadGoogleMapsScript } from '@/lib/load-google-maps'
import AmenityCuratedList from '@/components/amenity-map/amenity-curated-list'
import AmenityMapFallback from '@/components/amenity-map/amenity-map-fallback'

type AmenityMapProps = {
  compact?: boolean
  className?: string
  initialCategory?: AmenityCategoryId
}

function placeDisplayName(place: google.maps.places.Place): string {
  const raw = place.displayName as string | { text?: string } | undefined
  if (typeof raw === 'string') {
    return raw
  }
  if (raw && typeof raw.text === 'string') {
    return raw.text
  }
  return 'Place'
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function infoWindowHtml(place: {
  name: string
  address?: string
  rating?: number
  directionsUrl: string
}) {
  const ratingLine =
    place.rating !== undefined && place.rating > 0
      ? `<p class="text-sm text-slate-600">Rating: ${place.rating.toFixed(1)}</p>`
      : ''
  return `<div class="p-1 max-w-[240px]">
    <p class="font-semibold text-slate-900">${escapeHtml(place.name)}</p>
    ${place.address ? `<p class="text-sm text-slate-600 mt-1">${escapeHtml(place.address)}</p>` : ''}
    ${ratingLine}
    <a href="${escapeHtml(place.directionsUrl)}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 hover:underline mt-2 inline-block">Directions</a>
  </div>`
}

export default function AmenityMap({
  compact = false,
  className,
  initialCategory = DEFAULT_AMENITY_CATEGORY,
}: AmenityMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)
  const placeMarkersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [category, setCategory] = useState<AmenityCategoryId>(initialCategory)
  const [useFallback, setUseFallback] = useState(() => !getGoogleMapsApiKey())
  const [loadingPlaces, setLoadingPlaces] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const mapHeight = compact ? '280px' : '420px'

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => marker.setMap(null))
    placeMarkersRef.current = []
  }, [])

  const ensureCommunityMarker = useCallback(async (map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      return
    }
    const marker = new google.maps.Marker({
      map,
      position: AMENITY_MAP_CENTER,
      title: COMMUNITY_MAP_LABEL,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: new google.maps.Size(40, 40),
      },
    })
    marker.addListener('click', () => {
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow()
      }
      infoWindowRef.current.setContent(
        infoWindowHtml({
          name: COMMUNITY_MAP_LABEL,
          address: COMMUNITY_MAP_ADDRESS,
          directionsUrl: googleMapsDirectionsUrl(AMENITY_MAP_CENTER.lat, AMENITY_MAP_CENTER.lng, COMMUNITY_MAP_LABEL),
        }),
      )
      infoWindowRef.current.open({ map, anchor: marker })
    })
    communityMarkerRef.current = marker
  }, [])

  const initMap = useCallback(async () => {
    const apiKey = getGoogleMapsApiKey()
    if (!apiKey || !mapContainerRef.current) {
      setUseFallback(true)
      return
    }

    try {
      await loadGoogleMapsScript(apiKey)
      const { Map } = await google.maps.importLibrary('maps')
      const mapId = getGoogleMapsMapId()
      const map = new Map(mapContainerRef.current, {
        center: AMENITY_MAP_CENTER,
        zoom: AMENITY_MAP_DEFAULT_ZOOM,
        ...(mapId ? { mapId } : {}),
        mapTypeControl: false,
        streetViewControl: !compact,
        fullscreenControl: true,
      })
      mapRef.current = map
      await ensureCommunityMarker(map)
      setUseFallback(false)
    } catch {
      setUseFallback(true)
    }
  }, [compact, ensureCommunityMarker])

  const loadPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapRef.current
      const apiKey = getGoogleMapsApiKey()
      if (!map || !apiKey || useFallback) {
        return
      }

      const categoryConfig = AMENITY_CATEGORIES.find((item) => item.id === categoryId)
      if (!categoryConfig) {
        return
      }

      setLoadingPlaces(true)
      setStatusMessage(null)
      clearPlaceMarkers()

      try {
        const { Place } = await google.maps.importLibrary('places')
        const { places } = await Place.searchNearby({
          fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
          locationRestriction: {
            center: AMENITY_MAP_CENTER,
            radius: AMENITY_SEARCH_RADIUS_M,
          },
          includedPrimaryTypes: categoryConfig.primaryTypes,
          maxResultCount: 15,
        })

        if (!infoWindowRef.current) {
          infoWindowRef.current = new google.maps.InfoWindow()
        }

        const bounds = new google.maps.LatLngBounds()
        bounds.extend(AMENITY_MAP_CENTER)

        for (const place of places) {
          const location = place.location
          if (!location) {
            continue
          }
          const name = placeDisplayName(place)
          const address = place.formattedAddress
          const directionsUrl =
            place.googleMapsURI ??
            googleMapsDirectionsUrl(location.lat, location.lng, name)

          const marker = new google.maps.Marker({
            map,
            position: location,
            title: name,
          })

          marker.addListener('click', () => {
            infoWindowRef.current?.setContent(
              infoWindowHtml({
                name,
                address,
                rating: place.rating,
                directionsUrl,
              }),
            )
            infoWindowRef.current?.open({ map, anchor: marker })
          })

          placeMarkersRef.current.push(marker)
          bounds.extend(location)
        }

        if (places.length === 0) {
          setStatusMessage('No results for this category in the search radius. Try another filter or view the list below.')
          map.setCenter(AMENITY_MAP_CENTER)
          map.setZoom(AMENITY_MAP_DEFAULT_ZOOM)
        } else {
          map.fitBounds(bounds)
        }
      } catch {
        setStatusMessage('Place search is temporarily unavailable. Showing the map and featured list.')
      } finally {
        setLoadingPlaces(false)
      }
    },
    [clearPlaceMarkers, useFallback],
  )

  useEffect(() => {
    void initMap()
  }, [initMap])

  useEffect(() => {
    if (!useFallback && mapRef.current) {
      void loadPlaces(category)
    }
  }, [category, loadPlaces, useFallback])

  if (useFallback) {
    return (
      <div className={className}>
        <CategoryFilters category={category} onChange={setCategory} />
        <AmenityMapFallback category={category} compact={compact} />
      </div>
    )
  }

  return (
    <div className={className}>
      <CategoryFilters category={category} onChange={setCategory} />
      <div className="relative">
        <div
          ref={mapContainerRef}
          role="application"
          aria-label="Interactive map of amenities near Sienna Ridge, Las Vegas"
          className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-100"
          style={{ height: mapHeight }}
        />
        {loadingPlaces ? (
          <p className="absolute bottom-3 left-3 rounded-md bg-white/95 px-3 py-1 text-xs text-slate-700 shadow">
            Loading places…
          </p>
        ) : null}
      </div>
      {statusMessage ? <p className="mt-2 text-sm text-slate-600">{statusMessage}</p> : null}
      <AmenityCuratedList category={category} />
    </div>
  )
}

type CategoryFiltersProps = {
  category: AmenityCategoryId
  onChange: (id: AmenityCategoryId) => void
}

function CategoryFilters({ category, onChange }: CategoryFiltersProps) {
  return (
    <div
      className="mb-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
      role="tablist"
      aria-label="Amenity categories"
    >
      {AMENITY_CATEGORIES.map((item) => {
        const selected = category === item.id
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-label={item.ariaLabel}
            onClick={() => onChange(item.id)}
            className={cn(
              'shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
              selected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
