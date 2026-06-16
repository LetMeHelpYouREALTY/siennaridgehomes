import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Bed, Bath, Square, MapPin, Phone, ExternalLink } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import {
  FEATURED_LISTINGS,
  formatListingPrice,
  getListingBySlug,
} from '@/lib/listings-data'
import { buildRealEstateListingSchema } from '@/lib/structured-data'
import { AGENT_ENCODED_ID, NAP, REALSCOUT_SEARCH_URL, SITE_URL } from '@/lib/site-config'

type ListingPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FEATURED_LISTINGS.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const { slug } = await params
  const listing = getListingBySlug(slug)

  if (!listing) {
    return { title: 'Listing Not Found' }
  }

  return {
    title: `${listing.name} | Sienna Ridge Homes for Sale | Dr. Jan Duffy`,
    description: listing.description,
    alternates: {
      canonical: `${SITE_URL}/listings/${listing.slug}`,
    },
    openGraph: {
      title: `${listing.name} | Sienna Ridge Las Vegas`,
      description: listing.description,
      url: `${SITE_URL}/listings/${listing.slug}`,
      images: [{ url: listing.image, alt: listing.imageAlt }],
    },
  }
}

export default async function ListingDetailPage({ params }: ListingPageProps) {
  const { slug } = await params
  const listing = getListingBySlug(slug)

  if (!listing) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd id="listing-schema" data={buildRealEstateListingSchema(listing)} />
      <BreadcrumbSchema
        items={breadcrumbTrail(
          { name: 'Listings', path: '/listings' },
          { name: listing.name, path: `/listings/${listing.slug}` },
        )}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg">
              <Image src={listing.image} alt={listing.imageAlt} fill className="object-cover" priority />
            </div>

            <div>
              <Badge variant="secondary" className="mb-4">
                {listing.status}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{listing.name}</h1>
              <p className="text-2xl font-bold text-blue-600 mb-4">{formatListingPrice(listing.price)}</p>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span>
                  {listing.neighborhood}, {listing.city}, {listing.state} {listing.postalCode}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-blue-600" />
                  <span>{listing.beds} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-blue-600" />
                  <span>{listing.baths} baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-blue-600" />
                  <span>{listing.sqft.toLocaleString()} sq ft</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{listing.description}</p>

              <ul className="space-y-2 mb-8">
                {listing.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-700">
                    • {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href={`tel:${NAP.phoneTel}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {NAP.phone}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Search Live MLS Listings
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Live Office Listings via RealScout</CardTitle>
                <CardDescription className="text-center">
                  MLS data updates every 5 minutes. Browse similar homes near {listing.name} in the{' '}
                  {listing.postalCode} area.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <realscout-office-listings
                  agent-encoded-id={AGENT_ENCODED_ID}
                  sort-order="NEWEST"
                  listing-status="For Sale,In Contract"
                  property-types=",SFR"
                  price-min={listing.priceMin}
                  price-max={listing.priceMax}
                  style={
                    {
                      '--rs-listing-divider-color': '#0e64c8',
                      width: '100%',
                    } as CSSProperties
                  }
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
