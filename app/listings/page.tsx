import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Home, MapPin, Bed, Bath, Square, DollarSign, Filter, Search, TrendingUp, Star, Phone } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import ClientReviewsSection from '@/components/client-reviews-section'
import FeaturedListingCard from '@/components/featured-listing-card'
import AgentHeadshot from '@/components/agent-headshot'
import SiennaRidgeOverview from '@/components/sienna-ridge-overview'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { FEATURED_LISTINGS } from '@/lib/listings-data'
import { NAP, formatCityStateZip } from '@/lib/site-config'
import {
  communityPriceMaxString,
  communityPriceMinString,
  formatCommunityPriceRange,
} from '@/lib/sienna-ridge-community'

// Type declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-advanced-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-office-listings': {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}

export const metadata: Metadata = {
  title: 'Southwest Las Vegas Homes for Sale - Spring Valley Listings',
  description: 'Browse available homes for sale in Southwest Las Vegas / Spring Valley (89117, 89147, 89148). Find your dream home with expert guidance from Dr. Jan Duffy.',
}

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={breadcrumbTrail({ name: 'Listings', path: '/listings' })} />
      {/* Header Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
            <div className="absolute inset-0">
              <Image
                src="/images/hero-listings.jpg"
                alt="Southwest Las Vegas Homes for Sale - Spring Valley Listings"
                fill
                className="object-cover"
                priority
              />
            </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Southwest Las Vegas Homes for Sale
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover available properties in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) with expert guidance from Dr. Jan Duffy
            </p>
            <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
              <Home className="h-4 w-4 mr-2" />
              Live MLS Listings
            </Badge>
          </div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sienna Ridge by Lennar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                New construction in 89147 plus established Spring Valley neighborhoods in 89117 and 89148.
              </p>
            </div>

            <SiennaRidgeOverview />
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Floor Plans</h2>
              <p className="text-xl text-gray-600">
                Lennar models at Sienna Ridge — base prices from {formatCommunityPriceRange(false)}+
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {FEATURED_LISTINGS.map((listing) => (
                <FeaturedListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  Search Sienna Ridge Properties
                </CardTitle>
                <CardDescription>
                  Use the filters below to find your perfect home in Sienna Ridge ({formatCommunityPriceRange()})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="565k-650k">$565K - $650K</SelectItem>
                        <SelectItem value="650k-750k">$650K - $750K</SelectItem>
                        <SelectItem value="750k-860k">$750K - $860K</SelectItem>
                        <SelectItem value="860k-plus">$860K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bathrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="2.5">2.5+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="new-construction">New Construction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search Properties
                  </Button>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RealScout Integration */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Live MLS Listings</h2>
              <p className="text-gray-600">
                Search available properties in Sienna Ridge and surrounding areas
              </p>
            </div>

            {/* RealScout Search Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Simple Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Quick Search</CardTitle>
                  <CardDescription className="text-center">
                    Find properties with a simple search
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

              {/* Advanced Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Advanced Search</CardTitle>
                  <CardDescription className="text-center">
                    Detailed search with filters and criteria
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex justify-center">
                      {/* @ts-ignore */}
                      <realscout-advanced-search 
                        agent-encoded-id="QWdlbnQtMjI1MDUw"
                        style={{
                          '--rs-as-button-text-color': '#ffffff',
                          '--rs-as-background-color': '#ffffff',
                          '--rs-as-button-color': 'rgb(35, 93, 137)',
                          '--rs-as-widget-width': '100%'
                        } as React.CSSProperties}
                      />
                    </div>
                </CardContent>
              </Card>
            </div>

            {/* RealScout Office Listings */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Featured Sienna Ridge Homes</CardTitle>
                <CardDescription className="text-center">
                  Current Sienna Ridge listings — {formatCommunityPriceRange()}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                    {/* @ts-ignore */}
                    <realscout-office-listings 
                      agent-encoded-id="QWdlbnQtMjI1MDUw" 
                      sort-order="NEWEST" 
                      listing-status="For Sale,In Contract" 
                      property-types=",SFR" 
                      price-min={communityPriceMinString()} 
                      price-max={communityPriceMaxString()}
                      style={{
                        '--rs-listing-divider-color': '#0e64c8',
                        'width': '100%'
                      } as React.CSSProperties}
                    />
              </CardContent>
            </Card>

            {/* Featured Property - Dr. Jan Duffy's Office */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">Featured Property</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 flex items-center justify-center px-6">
                  <div className="text-center text-white">
                    <AgentHeadshot size="sm" className="mx-auto mb-4 ring-amber-300" />
                    <p className="text-lg font-semibold">Dr. Jan Duffy&apos;s Office</p>
                    <p className="text-sm">{NAP.streetAddress}</p>
                    <p className="text-xs">{formatCityStateZip()}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{NAP.streetAddress}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Office Location
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 mb-2">Dr. Jan Duffy's Real Estate Office</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{formatCityStateZip()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>{NAP.phone}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Visit Dr. Jan Duffy's conveniently located office in the heart of Las Vegas. 
                    Professional consultation space for all your Sienna Ridge real estate needs.
                  </p>
                  <div className="flex gap-2">
                    <CalendlyPopupButton className="flex-1" label="Schedule a Tour" />
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={`tel:${NAP.phoneTel}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Office
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h3>
                  <p className="text-gray-600 mb-6">
                    Dr. Janet Duffy can help you find off-market properties and pre-construction opportunities in Sienna Ridge
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <CalendlyPopupButton size="lg" className="bg-blue-600 hover:bg-blue-700" />
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                      <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        Search Properties
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title="Book a Private Conversation with Dr. Jan Duffy"
            description="Schedule a 15-minute call to discuss Sienna Ridge floor plans, MLS listings, or your Southwest Las Vegas home search."
          />
        </div>
      </section>

      <ClientReviewsSection limit={3} />
    </div>
  )
}
