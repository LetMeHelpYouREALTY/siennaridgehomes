import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Home, TrendingUp, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import SeoPageJsonLd from '@/components/seo-page-json-ld'
import SeoGuideAeoSection from '@/components/seo-guide-aeo-section'
import SiennaRidgeCollectionsHub from '@/components/sienna-ridge-collections-hub'
import { AGENT_ENCODED_ID, REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import type { BreadcrumbItem, FaqItem } from '@/lib/structured-data'

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
  schemaName: string
  schemaDescription: string
  leadAnswer?: string
  faqs?: FaqItem[]
  showCollectionsHub?: boolean
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
  schemaName,
  schemaDescription,
  leadAnswer,
  faqs = [],
  showCollectionsHub = false,
}: ZipCodeLandingProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {breadcrumbs ? (
        <SeoPageJsonLd
          path={breadcrumbs[breadcrumbs.length - 1]?.path ?? '/'}
          name={schemaName}
          description={schemaDescription}
          breadcrumbs={breadcrumbs}
          faqs={faqs.length ? faqs : undefined}
        />
      ) : null}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-blue-800/80" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="absolute inset-0">
          <Image src="/images/hero-spring-valley.jpg" alt={heroImageAlt} fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Zip {zipCode}
              </Badge>
              <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                <Home className="h-4 w-4 mr-2" />
                {areaName}
              </Badge>
              <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                {priceRange}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">{heroTitle}</h1>
            <p className="lead-answer aeo-answer text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">{heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton size="lg" className="bg-white text-blue-700 hover:bg-blue-50" />
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 bg-transparent" asChild>
                <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  Browse Listings <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">{overviewTitle}</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{overviewDescription}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                >
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="text-center mt-10 text-slate-600">
              Also explore{' '}
              <Link href="/neighborhoods" className="text-blue-600 hover:underline font-medium">
                all neighborhood guides
              </Link>
              ,{' '}
              <Link href="/southwest-las-vegas-homes" className="text-blue-600 hover:underline font-medium">
                Southwest Las Vegas homes
              </Link>
              , and{' '}
              <Link href="/sienna-ridge-lennar-las-vegas" className="text-blue-600 hover:underline font-medium">
                Sienna Ridge new construction
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {showCollectionsHub ? (
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <SiennaRidgeCollectionsHub />
          </div>
        </section>
      ) : null}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">{zipCode} Homes for Sale</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Live MLS search for {areaName} ({zipCode}) with Dr. Jan Duffy&apos;s expert guidance
              </p>
            </div>

            <Card className="mb-8 border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-center">Find Your {areaName} Home</CardTitle>
                <CardDescription className="text-center">Search properties in zip code {zipCode}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <realscout-simple-search
                  agent-encoded-id={AGENT_ENCODED_ID}
                  style={{
                    '--rs-ss-font-primary-color': '#6a6d72',
                    '--rs-ss-searchbar-border-color': 'hsl(0, 0%, 80%)',
                    '--rs-ss-box-shadow': '0 10px 15px -3px #0000001a',
                    '--rs-ss-widget-width': '100%',
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
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

      {leadAnswer && faqs.length > 0 ? (
        <SeoGuideAeoSection leadAnswer={leadAnswer} faqs={faqs} />
      ) : null}

      <section className="py-16 bg-white">
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
