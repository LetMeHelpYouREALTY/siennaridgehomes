import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/section-heading'
import DeferredWhenVisible from '@/components/deferred-when-visible'
import AmenityMap from '@/components/amenity-map/amenity-map'
import { SIENNA_RIDGE } from '@/lib/sienna-ridge-community'

type NearbyAmenitiesSectionProps = {
  id?: string
  compact?: boolean
  showHeading?: boolean
}

export default function NearbyAmenitiesSection({
  id = 'nearby',
  compact = false,
  showHeading = true,
}: NearbyAmenitiesSectionProps) {
  const mapFallback = (
    <div
      className="w-full rounded-xl border border-slate-200 bg-slate-100 animate-pulse"
      style={{ height: compact ? '280px' : '420px' }}
      aria-hidden
    />
  )

  return (
    <section id={id} className="section-padding section-default scroll-mt-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {showHeading ? (
            <SectionHeading
              eyebrow="Southwest Las Vegas"
              title={`Life Near ${SIENNA_RIDGE.name}`}
              description={`Explore parks, grocery, dining, healthcare, and recreation around ${SIENNA_RIDGE.name} in Las Vegas 89147 — centered on the Lennar sales center at Caldera Hills Avenue.`}
            />
          ) : null}

          <DeferredWhenVisible fallback={mapFallback} minHeight={compact ? '280px' : '420px'}>
            <AmenityMap compact={compact} />
          </DeferredWhenVisible>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/amenities">
                Full Nearby Amenities Guide <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
