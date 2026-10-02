import { amenityMapEmbedUrl } from '@/lib/amenities-config'
import type { AmenityCategoryId } from '@/lib/amenities-config'
import { curatedAmenitiesForCategory } from '@/lib/amenities-data'

type AmenityMapFallbackProps = {
  category: AmenityCategoryId
  compact?: boolean
}

export default function AmenityMapFallback({ category, compact = false }: AmenityMapFallbackProps) {
  const places = curatedAmenitiesForCategory(category)

  return (
    <div className="space-y-4">
      <div
        className="w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
        style={{ height: compact ? '280px' : '420px' }}
      >
        <iframe
          title="Map of Sienna Ridge and nearby Southwest Las Vegas"
          src={amenityMapEmbedUrl()}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {places.length > 0 ? (
        <ul className="grid gap-2 sm:grid-cols-2" aria-label="Featured nearby places for this category">
          {places.map((place) => (
            <li key={`${place.name}-${place.streetAddress}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm">
              <p className="font-medium text-slate-900">{place.name}</p>
              <p className="text-slate-600">
                {place.streetAddress}, {place.city}, {place.state} {place.postalCode}
              </p>
              {place.mapsUrl ? (
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-blue-600 hover:underline"
                >
                  Directions
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-600">
          The map above is centered on the Sienna Ridge sales center. Select another category or visit the full amenities
          guide for more local places.
        </p>
      )}
    </div>
  )
}
