import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import LeadForm from '@/components/lead-form'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import JsonLd from '@/components/json-ld'
import ClientReviewsSection from '@/components/client-reviews-section'
import FeaturedListingCard from '@/components/featured-listing-card'
import AgentHeadshot from '@/components/agent-headshot'
import SiennaRidgeOverview from '@/components/sienna-ridge-overview'
import PageHero from '@/components/page-hero'
import SectionHeading from '@/components/section-heading'
import SiteCtaBand from '@/components/site-cta-band'
import SeoFaqSection from '@/components/seo-faq-section'
import HomepageSubnav from '@/components/homepage-subnav'
import RealScoutSearchTabs from '@/components/realscout-search-tabs'
import {
  RealScoutOfficeListings,
} from '@/components/realscout-widgets'
import { buildFaqPageSchema, HOMEPAGE_FAQS } from '@/lib/structured-data'
import { FEATURED_LISTINGS } from '@/lib/listings-data'
import { formatCommunityPriceRange } from '@/lib/sienna-ridge-community'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import {
  Home,
  MapPin,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  DollarSign,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes 89117 89147 89148',
  description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers. Free home valuation & MLS search.',
  keywords: [
    'Spring Valley real estate agent',
    'Southwest Las Vegas homes for sale',
    '89117 homes',
    '89147 homes',
    '89148 homes',
    'Las Vegas real estate',
    'Dr. Jan Duffy realtor',
    'Spring Valley homes',
    'Southwest Las Vegas real estate',
    'Las Vegas buyer agent',
    'Nevada real estate agent',
    'Las Vegas investment properties',
    'Spring Valley new homes',
    'Las Vegas home valuation',
    'best real estate agent Las Vegas',
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <JsonLd id="faq-schema" data={buildFaqPageSchema(HOMEPAGE_FAQS)} />

      <PageHero
        title="Spring Valley Real Estate Agent | Dr. Jan Duffy"
        description="Find your dream home in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) with Dr. Jan Duffy, your premier buyer specialist."
        imageAlt="Southwest Las Vegas Real Estate - Beautiful homes in Spring Valley"
        badges={
          <>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Licensed Agent
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              Spring Valley Expert
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              2025 Market Leader
            </Badge>
          </>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
            <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
              <Home className="h-4 w-4 mr-2" />
              View Available Homes <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <CalendlyPopupButton
            size="lg"
            variant="outline"
            className="border-white/70 text-white hover:bg-white/10 bg-transparent"
            label="Schedule Consultation"
          />
        </div>
      </PageHero>

      <HomepageSubnav />

      {/* Search & Valuation */}
      <section id="search" className="section-padding section-default scroll-mt-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="MLS Search"
              title="Find Your Dream Home Today"
              description="Search live MLS listings, run advanced filters, or get an instant home valuation — all in one place."
            />

            <RealScoutSearchTabs />

            <div className="mt-12 mb-12">
              <RealScoutOfficeListings
                description="Current listings in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) — $400K to $600K range"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="agent" className="section-padding section-muted scroll-mt-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr]">
              <AgentHeadshot size="md" className="mx-auto lg:mx-0" />
              <div className="text-center lg:text-left">
                <SectionHeading
                  align="left"
                  title="Why Choose Dr. Jan Duffy for Southwest Las Vegas?"
                  description="With years of experience in Las Vegas real estate, Dr. Jan Duffy has helped over 100 families find their dream homes in Spring Valley, Southwest Las Vegas (89117, 89147, 89148), and surrounding areas."
                  className="mb-0"
                />
                <p className="mt-4 text-sm text-slate-500">
                  {NAP.name} · License {NAP.license} · {NAP.brokerage}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              {[
                { value: '100+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '24/7', label: 'Available Support' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Expert Local Knowledge',
                  text: 'Extensive knowledge of Sienna Ridge, neighborhood amenities, school districts, and future development plans.',
                },
                {
                  icon: Users,
                  title: 'Personalized Service',
                  text: 'Every client receives personalized attention and customized search strategies tailored to your needs.',
                },
                {
                  icon: TrendingUp,
                  title: 'Market Expertise',
                  text: 'Stay ahead of market trends with insights into Las Vegas real estate conditions and timing.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="market" className="section-padding section-default scroll-mt-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Southwest Las Vegas Market Overview"
              description="Spring Valley & Southwest Las Vegas (89117, 89147, 89148) offer exceptional opportunities for families, investors, and first-time buyers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: '/images/hero-spring-valley.jpg',
                  alt: 'Established homes in Spring Valley, Southwest Las Vegas',
                  label: 'Single Story',
                  size: '1,800 - 2,400 sq ft',
                  title: 'Established Homes (89117, 89147)',
                  description: 'Well-maintained established homes with mature landscaping, larger lots, and proven neighborhoods.',
                  details: [
                    ['Bedrooms', '3-4'],
                    ['Bathrooms', '2-3'],
                    ['Price Range', '$350K-$500K'],
                  ],
                },
                {
                  image: '/images/property-sample-2.jpg',
                  alt: 'Newer developments in Southwest Las Vegas',
                  label: 'Two Story',
                  size: '2,200 - 3,200 sq ft',
                  title: 'Sienna Ridge by Lennar (89147)',
                  description: 'New Lennar construction near Desert Breeze Park and I-215 with Next Gen® suites and solar options.',
                  details: [
                    ['Bedrooms', '3-5'],
                    ['Square Feet', '1,594 - 2,270+'],
                    ['Price Range', formatCommunityPriceRange()],
                  ],
                },
                {
                  image: '/images/property-sample-3.jpg',
                  alt: 'Investment properties in Southwest Las Vegas',
                  label: 'Executive',
                  size: '3,000+ sq ft',
                  title: 'Investment Properties',
                  description: 'Strong rental market with excellent cash flow potential in a growing Southwest Las Vegas market.',
                  details: [
                    ['Bedrooms', '3-4'],
                    ['Bathrooms', '2-3'],
                    ['Rental Yield', '6-8%'],
                  ],
                },
              ].map((item) => (
                <Card key={item.title} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <a
                    href={REALSCOUT_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-48 relative group cursor-pointer"
                    aria-label={`Search ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Home className="h-12 w-12 mx-auto mb-3" />
                        <p className="text-lg font-semibold">{item.label}</p>
                        <p className="text-sm">{item.size}</p>
                      </div>
                    </div>
                  </a>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="space-y-2 text-sm">
                      {item.details.map(([label, value]) => (
                        <div key={label} className="flex justify-between">
                          <span className="text-slate-500">{label}:</span>
                          <span className={label === 'Price Range' || label === 'Rental Yield' ? 'font-semibold text-blue-600' : ''}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Why Southwest Las Vegas is a Smart Investment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: '2025 Market Leader', text: 'Expected to outperform metro average growth' },
                  { icon: DollarSign, iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Strong Rental Market', text: 'Excellent cash flow potential for investors' },
                  { icon: MapPin, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', title: 'Prime Location', text: 'Close to Strip, airport, and major employers' },
                  { icon: Users, iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Family Friendly', text: 'Great schools, parks, and community amenities' },
                ].map(({ icon: Icon, iconBg, iconColor, title, text }) => (
                  <div key={title} className="text-center">
                    <div className={`${iconBg} rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`h-7 w-7 ${iconColor}`} />
                    </div>
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sienna Ridge */}
      <section id="sienna-ridge" className="section-padding section-muted scroll-mt-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="About Sienna Ridge by Lennar"
              description="Southwest Las Vegas new construction in zip code 89147 — plus established Spring Valley neighborhoods in 89117 and 89148."
            />
            <SiennaRidgeOverview />
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section id="models" className="section-padding section-default scroll-mt-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Featured Home Models"
              description={`Lennar floor plans at Sienna Ridge — base prices from ${formatCommunityPriceRange(false)}+`}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURED_LISTINGS.map((listing) => (
                <FeaturedListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/listings">
                  View All Floor Plans <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="reviews" className="scroll-mt-section">
        <ClientReviewsSection limit={3} />
      </div>

      <div id="faq" className="scroll-mt-section">
        <SeoFaqSection
          title="Frequently Asked Questions About Spring Valley Real Estate"
          faqs={HOMEPAGE_FAQS}
        />
      </div>

      <SiteCtaBand />
    </div>
  )
}
