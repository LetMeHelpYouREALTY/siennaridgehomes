'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  AMENITY_CATEGORIES,
  AMENITY_MAP_CENTER,
  AMENITY_MAP_DEFAULT_ZOOM,
  COMMUNITY_MAP_ADDRESS,
  COMMUNITY_MAP_LABEL,
  DEFAULT_AMENITY_CATEGORY,
  googleMapsDirectionsUrl,
  type AmenityCategoryId,
} from '@/lib/amenities-config'
import { searchAmenityCategory } from '@/lib/amenity-places-search'
import { getGoogleMapsApiKey, getGoogleMapsMapId, loadGoogleMaps, mapsAuthFailed } from '@/lib/load-google-maps'
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
  if (raw?.text) {
    return raw.text
  }
  return 'Place'
}

function latLngLiteralFromPlaceLocation(
  location: google.maps.LatLng | google.maps.LatLngLiteral,
): google.maps.LatLngLiteral {
  if (typeof (location as google.maps.LatLng).lat === 'function') {
    const ll = location as google.maps.LatLng
    return { lat: ll.lat(), lng: ll.lng() }
  }
  if (typeof (location as google.maps.LatLngLiteral).lat === 'number') {
    return location as google.maps.LatLngLiteral
  }
  const json = (location as google.maps.LatLng).toJSON?.()
  if (json) {
    return json
  }
  return AMENITY_MAP_CENTER
}

function buildInfoWindowContent(place: {
  name: string
  address?: string
  directionsUrl: string
}) {
  const wrap = document.createElement('div')
  wrap.className = 'p-1 max-w-[240px]'

  const title = document.createElement('p')
  title.className = 'font-semibold text-slate-900'
  title.textContent = place.name
  wrap.appendChild(title)

  if (place.address) {
    const addr = document.createElement('p')
    addr.className = 'text-sm text-slate-600 mt-1'
    addr.textContent = place.address
    wrap.appendChild(addr)
  }

  const link = document.createElement('a')
  link.href = place.directionsUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.className = 'text-sm text-blue-600 hover:underline mt-2 inline-block'
  link.textContent = 'Directions'
  wrap.appendChild(link)

  return wrap
}

export default function AmenityMap({
  compact = false,
  className,
  initialCategory = DEFAULT_AMENITY_CATEGORY,
}: AmenityMapProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)
  const placeMarkersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [category, setCategory] = useState<AmenityCategoryId>(initialCategory)
  const [useFallback, setUseFallback] = useState(() => !getGoogleMapsApiKey() || mapsAuthFailed)
  const [loadingPlaces, setLoadingPlaces] = useState(false)
  const [placesSearchFailed, setPlacesSearchFailed] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [mapSectionVisible, setMapSectionVisible] = useState(false)
  const [mapInitStarted, setMapInitStarted] = useState(false)

  const mapHeight = compact ? '280px' : '420px'

  const enterFallback = useCallback(() => {
    if (mapRef.current) {
      mapRef.current = null
    }
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    placeMarkersRef.current.forEach((marker) => marker.setMap(null))
    placeMarkersRef.current = []
    infoWindowRef.current?.close()
    setUseFallback(true)
  }, [])

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
        buildInfoWindowContent({
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
    if (mapsAuthFailed || !apiKey || !mapContainerRef.current) {
      enterFallback()
      return
    }

    try {
      await loadGoogleMaps(apiKey)
      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
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
      enterFallback()
    }
  }, [compact, ensureCommunityMarker, enterFallback])

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
      setPlacesSearchFailed(false)
      clearPlaceMarkers()

      try {
        const places = await searchAmenityCategory(categoryId, categoryConfig.primaryTypes)

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
          const position = latLngLiteralFromPlaceLocation(location)
          const name = placeDisplayName(place)
          const address = place.formattedAddress ?? undefined
          const directionsUrl =
            place.googleMapsURI ?? googleMapsDirectionsUrl(position.lat, position.lng, name)

          const marker = new google.maps.Marker({
            map,
            position,
            title: name,
          })

          marker.addListener('click', () => {
            infoWindowRef.current?.setContent(
              buildInfoWindowContent({
                name,
                address,
                directionsUrl,
              }),
            )
            infoWindowRef.current?.open({ map, anchor: marker })
          })

          placeMarkersRef.current.push(marker)
          bounds.extend(position)
        }

        if (places.length === 0) {
          setStatusMessage('No results for this category in the search radius. See the featured list below.')
          setPlacesSearchFailed(true)
          map.setCenter(AMENITY_MAP_CENTER)
          map.setZoom(AMENITY_MAP_DEFAULT_ZOOM)
        } else {
          map.fitBounds(bounds)
        }
      } catch {
        setStatusMessage('Place search is temporarily unavailable. See the featured list below.')
        setPlacesSearchFailed(true)
        map.setCenter(AMENITY_MAP_CENTER)
        map.setZoom(AMENITY_MAP_DEFAULT_ZOOM)
      } finally {
        setLoadingPlaces(false)
      }
    },
    [clearPlaceMarkers, useFallback],
  )

  useEffect(() => {
    if (mapsAuthFailed) {
      enterFallback()
    }
  }, [enterFallback])

  useEffect(() => {
    const onAuthFailure = () => enterFallback()
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [enterFallback])

  useEffect(() => {
    const node = sectionRef.current
    if (!node || mapSectionVisible) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMapSectionVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [mapSectionVisible])

  useEffect(() => {
    if (mapSectionVisible && !mapInitStarted && !useFallback) {
      setMapInitStarted(true)
      void initMap()
    }
  }, [mapSectionVisible, mapInitStarted, initMap, useFallback])

  useEffect(() => {
    if (!useFallback && mapRef.current) {
      void loadPlaces(category)
    }
  }, [category, loadPlaces, useFallback])

  if (useFallback) {
    return (
      <div ref={sectionRef} className={className}>
        <CategoryFilters category={category} onChange={setCategory} />
        <AmenityMapFallback category={category} compact={compact} />
      </div>
    )
  }

  return (
    <div ref={sectionRef} className={className}>
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
      <AmenityCuratedList
        category={category}
        title={placesSearchFailed ? 'Featured nearby places' : 'Featured nearby places'}
      />
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
