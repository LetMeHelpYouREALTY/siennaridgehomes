import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Home, TrendingUp, Users } from 'lucide-react'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import SeoPageJsonLd from '@/components/seo-page-json-ld'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { AGENT_ENCODED_ID, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Spring Valley Real Estate | Southwest Las Vegas Homes | Dr. Jan Duffy',
  description:
    'Spring Valley real estate specialist Dr. Jan Duffy helps buyers find homes in 89117, 89147, and 89148. Local market expertise, MLS search, and free home valuations.',
  alternates: {
    canonical: `${SITE_URL}/spring-valley-real-estate`,
  },
}

export default function SpringValleyRealEstatePage() {
  const breadcrumbs = breadcrumbTrail({ name: 'Spring Valley Real Estate', path: '/spring-valley-real-estate' })

  return (
    <div className="min-h-screen bg-gray-50">
      <SeoPageJsonLd
        path="/spring-valley-real-estate"
        name="Spring Valley Real Estate | Southwest Las Vegas Homes"
        description="Spring Valley real estate specialist Dr. Jan Duffy helps buyers find homes in 89117, 89147, and 89148. Local market expertise, MLS search, and free home valuations."
        breadcrumbs={breadcrumbs}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spring-valley.jpg"
            alt="Spring Valley real estate in Southwest Las Vegas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spring Valley Real Estate</h1>
            <p className="text-xl mb-8 text-blue-100">
              Your guide to buying in Spring Valley and surrounding Southwest Las Vegas neighborhoods with Dr. Jan Duffy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Zip Codes 89117, 89147, 89148
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Why Spring Valley?</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Spring Valley sits at the heart of Southwest Las Vegas, offering established neighborhoods, strong schools, and convenient access to the Strip, airport, and Red Rock Canyon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  Diverse Housing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                From established single-family homes in 89117 to newer developments in 89148, Spring Valley offers options for first-time buyers, families, and investors.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Family-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Parks, community centers, and Clark County schools make Spring Valley a top choice for families relocating to Las Vegas.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Strong Market
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Southwest Las Vegas continues to attract buyers seeking value, space, and appreciation potential compared to closer-in neighborhoods.
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center space-y-2">
            <p className="text-gray-700 font-medium">Browse by zip code:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/89117-homes-for-sale" className="text-blue-600 hover:underline">89117 Homes</Link>
              <Link href="/89147-homes-for-sale" className="text-blue-600 hover:underline">89147 Homes</Link>
              <Link href="/89148-homes-for-sale" className="text-blue-600 hover:underline">89148 Homes</Link>
              <Link href="/neighborhoods/89117" className="text-blue-600 hover:underline">89117 Neighborhood Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Search Spring Valley Homes</CardTitle>
              <CardDescription className="text-center">MLS listings across Spring Valley and Southwest Las Vegas</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <realscout-simple-search
                agent-encoded-id={AGENT_ENCODED_ID}
                style={{ '--rs-ss-widget-width': '100%' } as React.CSSProperties}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title="Start with a 15-Minute Spring Valley Consultation"
            description="Book time with Dr. Jan Duffy to discuss neighborhoods, pricing, and your Spring Valley home search."
          />
        </div>
      </section>

      <SeoCtaSection
        title="Start Your Spring Valley Home Search"
        description="Work with Dr. Jan Duffy for expert buyer representation, market insights, and personalized guidance in Spring Valley real estate."
      />
    </div>
  )
}
