import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Home, TrendingUp } from 'lucide-react'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import { AGENT_ENCODED_ID } from '@/lib/site-config'
import type { BreadcrumbItem } from '@/lib/structured-data'

export type ZipCodeLandingProps = {
  zipCode: string
  areaName: string
  heroTitle: string
  heroDescription: string
  overviewTitle: string
  overviewDescription: string
  priceRange: string
  priceMin: string
  priceMax: string
  highlights: string[]
  heroImageAlt: string
  breadcrumbs?: BreadcrumbItem[]
}

export default function ZipCodeLanding({
  zipCode,
  areaName,
  heroTitle,
  heroDescription,
  overviewTitle,
  overviewDescription,
  priceRange,
  priceMin,
  priceMax,
  highlights,
  heroImageAlt,
  breadcrumbs,
}: ZipCodeLandingProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {breadcrumbs ? <BreadcrumbSchema items={breadcrumbs} /> : null}

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spring-valley.jpg"
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>
            <p className="text-xl mb-8 text-blue-100">{heroDescription}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Zip Code {zipCode}
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <Home className="h-4 w-4 mr-2" />
                {areaName}
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                {priceRange}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{overviewTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{overviewDescription}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="text-center mt-8 text-gray-600">
              Also explore{' '}
              <Link href="/southwest-las-vegas-homes" className="text-blue-600 hover:underline">
                Southwest Las Vegas homes
              </Link>{' '}
              and{' '}
              <Link href="/spring-valley-real-estate" className="text-blue-600 hover:underline">
                Spring Valley real estate
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{zipCode} Homes for Sale</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Search available properties in {areaName} ({zipCode}) with Dr. Jan Duffy&apos;s expert guidance
              </p>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Find Your {areaName} Home</CardTitle>
                <CardDescription className="text-center">
                  Search properties in zip code {zipCode}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <realscout-simple-search
                    agent-encoded-id={AGENT_ENCODED_ID}
                    style={{
                      '--rs-ss-font-primary-color': '#6a6d72',
                      '--rs-ss-searchbar-border-color': 'hsl(0, 0%, 80%)',
                      '--rs-ss-box-shadow': '0 10px 15px -3px #0000001a',
                      '--rs-ss-widget-width': '100%',
                    } as React.CSSProperties}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Featured {areaName} Listings</CardTitle>
                <CardDescription className="text-center">
                  Current listings in {zipCode} — {priceRange}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <realscout-office-listings
                  agent-encoded-id={AGENT_ENCODED_ID}
                  sort-order="NEWEST"
                  listing-status="For Sale,In Contract"
                  property-types=",SFR"
                  price-min={priceMin}
                  price-max={priceMax}
                  style={{
                    '--rs-listing-divider-color': '#0e64c8',
                    width: '100%',
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title={`Schedule Your ${areaName} Home Search Consultation`}
            description={`Book a 15-minute call with Dr. Jan Duffy to discuss homes in ${zipCode} and your buyer goals.`}
          />
        </div>
      </section>

      <SeoCtaSection
        title={`Ready to Find Your ${areaName} Home?`}
        description={`Let Dr. Jan Duffy guide you through your home buying journey in ${areaName} (${zipCode}) with expert local knowledge and personalized service.`}
      />
    </div>
  )
}
