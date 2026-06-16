import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search, ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'

// Type declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-home-value': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}

export const metadata: Metadata = {
  title: 'Page Not Found - Sienna Ridge Homes | Dr. Jan Duffy',
  description: 'The page you\'re looking for doesn\'t exist. Find your dream home in Sienna Ridge, Las Vegas with Dr. Jan Duffy\'s expert guidance.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
            <div className="absolute inset-0">
              <Image
                src="/images/hero-homepage.jpg"
                alt="Southwest Las Vegas Real Estate - Find Your Dream Home"
                fill
                className="object-cover"
                priority
              />
            </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl md:text-2xl mb-8">
              The page you're looking for doesn't exist, but your dream home in Sienna Ridge does!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" />
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/">Go Home</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  Search Properties
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Let's Find What You're Looking For</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While that specific page isn't available, Dr. Jan Duffy can help you find your perfect home in Sienna Ridge, Las Vegas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-blue-600" />
                    Browse Homes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Explore available properties in Sienna Ridge with our comprehensive search tools and live MLS listings.
                  </p>
                  <Button className="w-full">
                    <Link href="/listings" className="flex items-center justify-center">
                      <Search className="h-4 w-4 mr-2" />
                      View Listings
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    About Sienna Ridge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn about the premier master-planned community of Sienna Ridge and what makes it special.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link href="/about" className="flex items-center justify-center">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Contact Dr. Jan Duffy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get personalized assistance from Las Vegas's premier Sienna Ridge real estate expert.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (702) 903-3336
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email DrJanSells@SiennaRidgeHomes.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RealScout Search Widget */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Search Available Properties</CardTitle>
                <CardDescription className="text-center">
                  Use Dr. Jan Duffy's expert search tools to find your perfect Sienna Ridge home
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <div className="flex justify-center">
                    {/* @ts-ignore */}
                    <realscout-home-value 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      style={{
                        '--rs-hvw-background-color': '#ffffff',
                        '--rs-hvw-title-color': '#000000',
                        '--rs-hvw-subtitle-color': 'rgba(28, 30, 38, 0.5)',
                        '--rs-hvw-primary-button-text-color': '#ffffff',
                        '--rs-hvw-primary-button-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-text-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-color': '#ffffff',
                        '--rs-hvw-widget-width': '100%'
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <ScheduleConsultationSection
                title="Schedule a Conversation with Dr. Jan Duffy"
                description="Book a 15-minute call to get back on track with your Sienna Ridge or Southwest Las Vegas home search."
                showPopupFallback={false}
              />
            </div>

            {/* Popular Pages */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Popular Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4">
                  <Link href="/" className="flex flex-col items-center text-center">
                    <Home className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Home</span>
                    <span className="text-xs text-gray-600">Main Page</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto p-4">
                  <Link href="/listings" className="flex flex-col items-center text-center">
                    <Search className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Listings</span>
                    <span className="text-xs text-gray-600">Available Homes</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto p-4">
                  <Link href="/about" className="flex flex-col items-center text-center">
                    <MapPin className="h-6 w-6 mb-2" />
                    <span className="font-semibold">About</span>
                    <span className="text-xs text-gray-600">Dr. Jan Duffy</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto p-4">
                  <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center h-full">
                    <Search className="h-6 w-6 mb-2" />
                    <span className="font-semibold">RealScout</span>
                    <span className="text-xs text-gray-600">Property Search</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Find Your Sienna Ridge Home?</h3>
            <p className="text-xl mb-8">
              Don't let a missing page stop you from finding your dream home. Dr. Jan Duffy is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" />
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
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
