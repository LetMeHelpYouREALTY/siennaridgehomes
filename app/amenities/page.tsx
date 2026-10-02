import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import SeoFaqSection from '@/components/seo-faq-section'
import SeoCtaSection from '@/components/seo-cta-section'
import DeferredWhenVisible from '@/components/deferred-when-visible'
import AmenityMap from '@/components/amenity-map/amenity-map'
import AgentHeadshot from '@/components/agent-headshot'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { Button } from '@/components/ui/button'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import {
  AMENITIES_CONTENT_SECTIONS,
  AMENITIES_PAGE_FAQS,
  AMENITIES_TRUST_BLOCK,
  CURATED_AMENITIES,
} from '@/lib/amenities-data'
import { AMENITY_MAP_CENTER } from '@/lib/amenities-config'
import { SIENNA_RIDGE } from '@/lib/sienna-ridge-community'
import { NAP, SITE_URL } from '@/lib/site-config'
import {
  buildFaqPageSchema,
  buildFeaturedNearbyPlacesItemListSchema,
  buildPlaceSchema,
  buildWebPageSchema,
} from '@/lib/structured-data'

const PAGE_PATH = '/amenities'

export const metadata: Metadata = {
  title: `Nearby Amenities in ${SIENNA_RIDGE.name}, Las Vegas | Parks, Grocery & Healthcare`,
  description: `Interactive map and local guide to restaurants, parks, grocery, golf, healthcare, and schools near Lennar ${SIENNA_RIDGE.name} in Las Vegas 89147. Buyer agent ${NAP.name}.`,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: `Nearby Amenities in ${SIENNA_RIDGE.name}, Las Vegas`,
    description: `Explore life near ${SIENNA_RIDGE.name} — parks, grocery, healthcare, and commute guides for Southwest Las Vegas 89147.`,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: NAP.businessName,
  },
}

const breadcrumbs = breadcrumbTrail({ name: 'Nearby Amenities', path: PAGE_PATH })

const featuredPlacesSchema = buildFeaturedNearbyPlacesItemListSchema(
  CURATED_AMENITIES.map((place) => ({
    name: place.name,
    schemaType: place.schemaType,
    streetAddress: place.streetAddress,
    city: place.city,
    state: place.state,
    postalCode: place.postalCode,
    url: place.sourceUrl,
  })),
)

const communityPlaceSchema = buildPlaceSchema({
  name: `${SIENNA_RIDGE.name} by ${SIENNA_RIDGE.builder}`,
  description: `${SIENNA_RIDGE.location} Sales center and new construction in Las Vegas ${SIENNA_RIDGE.postalCode}.`,
  path: PAGE_PATH,
  latitude: AMENITY_MAP_CENTER.lat,
  longitude: AMENITY_MAP_CENTER.lng,
  address: {
    streetAddress: NAP.streetAddress,
    postalCode: SIENNA_RIDGE.postalCode,
  },
})

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <JsonLd id="amenities-faq-schema" data={buildFaqPageSchema(AMENITIES_PAGE_FAQS)} />
      <JsonLd id="amenities-places-schema" data={featuredPlacesSchema} />
      <JsonLd id="amenities-community-place" data={communityPlaceSchema} />
      <JsonLd
        id="amenities-webpage-schema"
        data={buildWebPageSchema({
          path: PAGE_PATH,
          name: `Nearby Amenities in ${SIENNA_RIDGE.name}, Las Vegas`,
          description: `Local amenity guide and interactive map for ${SIENNA_RIDGE.name} in Southwest Las Vegas.`,
          dateModified: '2026-09-27',
        })}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-100 text-sm font-medium uppercase tracking-wide mb-3">89147 · Southwest Las Vegas</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Nearby Amenities in {SIENNA_RIDGE.name}, Las Vegas
            </h1>
            <p className="lead-answer text-lg text-blue-50 aeo-answer">
              {SIENNA_RIDGE.name} by Lennar sits in Las Vegas zip code 89147 near Desert Breeze Park and the I-215 beltway —
              with grocery, parks, healthcare, golf, and shopping within a short drive of the sales center on Caldera Hills
              Avenue.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-default">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Interactive amenity map</h2>
            <p className="text-slate-600 mb-6 max-w-3xl">
              Filter by category to explore places near the community center. The blue marker is {SIENNA_RIDGE.name}; use
              Directions in each info window for turn-by-turn routing in Google Maps.
            </p>
            <DeferredWhenVisible
              minHeight="420px"
              fallback={
                <div className="h-[420px] w-full rounded-xl border border-slate-200 bg-slate-100 animate-pulse" aria-hidden />
              }
            >
              <AmenityMap />
            </DeferredWhenVisible>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {AMENITIES_CONTENT_SECTIONS.map((section) => (
              <article key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <div className="space-y-3 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                {section.places && section.places.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {section.places.map((place) => (
                      <li key={place.name} className="text-sm text-slate-700">
                        <span className="font-medium text-slate-900">{place.name}</span>
                        {' — '}
                        {place.href ? (
                          <a href={place.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {place.detail}
                          </a>
                        ) : (
                          place.detail
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-default border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 items-start">
              <AgentHeadshot size="md" className="mx-auto md:mx-0" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{AMENITIES_TRUST_BLOCK.title}</h2>
                <p className="text-slate-600 mb-4">{AMENITIES_TRUST_BLOCK.body}</p>
                <p className="text-sm text-slate-500 mb-4">
                  {NAP.name} · License {AMENITIES_TRUST_BLOCK.license} · {AMENITIES_TRUST_BLOCK.brokerage}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button asChild>
                    <a href={`tel:${AMENITIES_TRUST_BLOCK.phoneTel}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call {AMENITIES_TRUST_BLOCK.phone}
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`mailto:${AMENITIES_TRUST_BLOCK.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email {NAP.name}
                    </a>
                  </Button>
                  <CalendlyPopupButton variant="outline" label="Schedule Consultation" />
                  <Button variant="ghost" asChild>
                    <a href={AMENITIES_TRUST_BLOCK.directionsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4 mr-2" />
                      Directions to sales center
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-sm">
                  <Link href="/sienna-ridge-lennar-las-vegas" className="text-blue-600 hover:underline">
                    Sienna Ridge community guide
                  </Link>
                  {' · '}
                  <Link href="/homes-near-desert-breeze-park" className="text-blue-600 hover:underline">
                    Homes near Desert Breeze Park
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeoFaqSection title={`FAQ: Living Near ${SIENNA_RIDGE.name}`} faqs={AMENITIES_PAGE_FAQS} />

      <SeoCtaSection
        title="Tour Sienna Ridge & Southwest Las Vegas"
        description={`${NAP.name} helps you compare Lennar floor plans, incentives, and resale options near ${SIENNA_RIDGE.name}.`}
      />
    </div>
  )
}
