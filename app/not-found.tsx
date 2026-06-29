import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import PageHero from '@/components/page-hero'
import SectionHeading from '@/components/section-heading'
import SiteCtaBand from '@/components/site-cta-band'
import RealScoutSearchTabs from '@/components/realscout-search-tabs'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search, ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found - Sienna Ridge Homes | Dr. Jan Duffy',
  description: 'The page you\'re looking for doesn\'t exist. Find your dream home in Sienna Ridge, Las Vegas with Dr. Jan Duffy\'s expert guidance.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        kicker="404"
        title="Page Not Found"
        description="The page you're looking for doesn't exist, but your dream home in Sienna Ridge does!"
        imageAlt="Southwest Las Vegas Real Estate - Find Your Dream Home"
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CalendlyPopupButton size="lg" className="bg-white text-blue-700 hover:bg-blue-50" />
          <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent" asChild>
            <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
              Search Properties
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="section-padding section-default">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Let's Find What You're Looking For"
              description="While that specific page isn't available, Dr. Jan Duffy can help you find your perfect home in Sienna Ridge, Las Vegas."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Home className="h-5 w-5 text-blue-600" />
                    Browse Homes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Explore available properties in Sienna Ridge with live MLS listings.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                      <Search className="h-4 w-4 mr-2" />
                      View Listings
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    About Sienna Ridge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Learn about the premier Lennar community and what makes it special.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/about">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Contact Dr. Jan Duffy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Get personalized assistance from Las Vegas&apos;s premier Sienna Ridge expert.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${NAP.phoneTel}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call {NAP.phone}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${NAP.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email {NAP.name}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <SectionHeading
                eyebrow="MLS Search"
                title="Search Available Properties"
                description="Use Dr. Jan Duffy's expert search tools to find your perfect Sienna Ridge home."
                className="mb-8"
              />
              <RealScoutSearchTabs />
            </div>

            <ScheduleConsultationSection
              title="Schedule a Conversation with Dr. Jan Duffy"
              description="Book a 15-minute call to get back on track with your Sienna Ridge or Southwest Las Vegas home search."
              showPopupFallback={false}
            />

            <div className="text-center mt-12">
              <h3 className="font-display text-2xl font-bold mb-6">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/" className="flex flex-col items-center text-center">
                    <Home className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Home</span>
                    <span className="text-xs text-slate-500">Main Page</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto p-4" asChild>
                  <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                    <Search className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Listings</span>
                    <span className="text-xs text-slate-500">Available Homes</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/about" className="flex flex-col items-center text-center">
                    <MapPin className="h-6 w-6 mb-2" />
                    <span className="font-semibold">About</span>
                    <span className="text-xs text-slate-500">Dr. Jan Duffy</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/faq" className="flex flex-col items-center text-center">
                    <Search className="h-6 w-6 mb-2" />
                    <span className="font-semibold">FAQ</span>
                    <span className="text-xs text-slate-500">Common Questions</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteCtaBand
        title="Ready to Find Your Sienna Ridge Home?"
        description="Don't let a missing page stop you from finding your dream home. Dr. Jan Duffy is here to help!"
        showSearch={false}
      />
    </div>
  )
}
