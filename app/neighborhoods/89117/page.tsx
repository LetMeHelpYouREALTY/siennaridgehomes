import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Home, Users, Star, TrendingUp, Phone, Mail } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import SeoPageJsonLd from '@/components/seo-page-json-ld'
import SeoGuideAeoSection from '@/components/seo-guide-aeo-section'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { getSeoGuideByPath } from '@/lib/seo-guide-pages'
import { NAP, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Spring Valley Real Estate | 89117 Homes for Sale | Dr. Jan Duffy',
  description: 'Discover Spring Valley homes for sale in zip code 89117. Dr. Jan Duffy specializes in Spring Valley real estate with expert local knowledge and personalized service for families and investors.',
  alternates: {
    canonical: `${SITE_URL}/neighborhoods/89117`,
  },
  keywords: [
    'Spring Valley homes for sale',
    '89117 real estate',
    'Spring Valley Las Vegas homes',
    '89117 homes for sale',
    'Spring Valley neighborhoods',
    'Spring Valley real estate agent',
    'Dr. Jan Duffy Spring Valley',
    'Spring Valley new homes',
    'Spring Valley condos',
    'Spring Valley investment properties'
  ],
}

export default function SpringValley89117Page() {
  const breadcrumbs = breadcrumbTrail(
    { name: 'Neighborhoods', path: '/neighborhoods' },
    { name: '89117', path: '/neighborhoods/89117' },
  )
  const guide = getSeoGuideByPath('/89117-homes-for-sale')

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={breadcrumbs} />
      <SeoPageJsonLd
        path="/neighborhoods/89117"
        name="Spring Valley Real Estate | 89117 Homes for Sale"
        description="Discover Spring Valley homes for sale in zip code 89117. Dr. Jan Duffy specializes in Spring Valley real estate with expert local knowledge."
        breadcrumbs={breadcrumbs}
        faqs={guide?.faqs}
      />
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spring-valley.jpg"
            alt="Spring Valley Real Estate - Beautiful neighborhood in Southwest Las Vegas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Spring Valley Real Estate - 89117
            </h1>
            <p className="lead-answer aeo-answer text-xl mb-8 text-blue-100">
              {guide?.leadAnswer ??
                'Discover established homes and newer developments in Spring Valley\'s most desirable 89117 neighborhoods with Dr. Jan Duffy\'s expert guidance.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Zip Code 89117
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <Home className="h-4 w-4 mr-2" />
                Established & New Homes
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Strong Appreciation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Spring Valley (89117)?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spring Valley offers the perfect blend of established neighborhoods and modern amenities, making it one of Southwest Las Vegas's most sought-after areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Prime Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strategically located in Southwest Las Vegas with easy access to the Strip, airport, and major employers. Close to shopping, dining, and entertainment venues.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-blue-600" />
                    Diverse Housing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mix of established single-family homes and newer developments. Options range from starter homes to luxury properties, perfect for all buyer types.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Investment Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strong rental market with excellent cash flow potential. Properties in Spring Valley have shown consistent appreciation and strong resale value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Spring Valley Homes for Sale</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Search available properties in Spring Valley (89117) with Dr. Jan Duffy's expert guidance
              </p>
            </div>
            
            {/* RealScout Search Widget */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Find Your Spring Valley Home</CardTitle>
                <CardDescription className="text-center">
                  Search properties in zip code 89117
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  {/* @ts-ignore */}
                  <realscout-simple-search 
                    agent-encoded-id="QWdlbnQtMjI1MDUw"
                    style={{
                      '--rs-ss-font-primary-color': '#6a6d72',
                      '--rs-ss-searchbar-border-color': 'hsl(0, 0%, 80%)',
                      '--rs-ss-box-shadow': '0 10px 15px -3px #0000001a',
                      '--rs-ss-widget-width': '100%'
                    } as React.CSSProperties}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Featured Listings */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Featured Spring Valley Homes</CardTitle>
                <CardDescription className="text-center">
                  Current listings in Spring Valley (89117) - $350K to $550K range
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* @ts-ignore */}
                <realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="NEWEST" 
                  listing-status="For Sale,In Contract" 
                  property-types=",SFR" 
                  price-min="350000" 
                  price-max="550000"
                  style={{
                    '--rs-listing-divider-color': '#0e64c8',
                    'width': '100%'
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Spring Valley Amenities & Lifestyle</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Spring Valley a premier place to call home
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Community Centers</h3>
                  <p className="text-sm text-gray-600">Active community centers with pools, fitness facilities, and social activities</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Parks & Recreation</h3>
                  <p className="text-sm text-gray-600">Beautiful parks, walking trails, and recreational facilities throughout the area</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Shopping & Dining</h3>
                  <p className="text-sm text-gray-600">Convenient access to major shopping centers, restaurants, and entertainment</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Strong Schools</h3>
                  <p className="text-sm text-gray-600">Access to quality schools and educational facilities in the Clark County School District</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {guide ? <SeoGuideAeoSection leadAnswer={guide.leadAnswer} faqs={guide.faqs} /> : null}

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6">Related Spring Valley Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/89117-homes-for-sale', label: '89117 Homes for Sale' },
              { href: '/homes-near-desert-breeze-park', label: 'Homes Near Desert Breeze Park' },
              { href: '/desert-breeze-park-spring-valley', label: 'Desert Breeze Park Guide' },
              { href: '/spring-valley-schools', label: 'Spring Valley Schools' },
              { href: '/89147-homes-for-sale', label: '89147 Homes (Sienna Ridge)' },
              { href: '/89117-vs-89147-vs-89148', label: 'Compare Zip Codes' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="rounded-lg border border-gray-200 bg-white px-4 py-3 hover:border-blue-300 hover:bg-blue-50/50 font-medium text-blue-700">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Spring Valley Home?</h2>
            <p className="text-xl mb-8">
              Let Dr. Jan Duffy guide you through your home buying journey in Spring Valley (89117) with expert local knowledge and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <a href={`tel:${NAP.phoneTel}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {NAP.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href={`mailto:${NAP.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email {NAP.email}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
