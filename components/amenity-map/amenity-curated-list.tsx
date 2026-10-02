import type { AmenityCategoryId } from '@/lib/amenities-config'
import { curatedAmenitiesForCategory } from '@/lib/amenities-data'

type AmenityCuratedListProps = {
  category: AmenityCategoryId
  title?: string
}

export default function AmenityCuratedList({ category, title = 'Featured nearby places' }: AmenityCuratedListProps) {
  const places = curatedAmenitiesForCategory(category)
  if (places.length === 0) {
    return null
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
      <ul className="grid gap-2 sm:grid-cols-2" aria-label={title}>
        {places.map((place) => (
          <li key={`${place.name}-${place.streetAddress}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm">
            <p className="font-medium text-slate-900">{place.name}</p>
            <p className="text-slate-600">
              {place.streetAddress}, {place.city}, {place.state} {place.postalCode}
            </p>
            {place.note ? <p className="text-slate-500 mt-1">{place.note}</p> : null}
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
    </div>
  )
}
