import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Award, Users, Home, Star, Phone } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import ClientReviewsSection from '@/components/client-reviews-section'
import JsonLd from '@/components/json-ld'
import SiennaRidgeOverview from '@/components/sienna-ridge-overview'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import PageHero from '@/components/page-hero'
import SectionHeading from '@/components/section-heading'
import SiteCtaBand from '@/components/site-cta-band'
import RealScoutSearchTabs from '@/components/realscout-search-tabs'
import { RealScoutOfficeListings } from '@/components/realscout-widgets'
import { buildProfilePageSchema } from '@/lib/structured-data'
import AgentHeadshot from '@/components/agent-headshot'
import {
  communityPriceMaxString,
  communityPriceMinString,
  formatCommunityPriceRange,
} from '@/lib/sienna-ridge-community'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy - Southwest Las Vegas Real Estate Expert',
  description: 'Meet Dr. Jan Duffy, your premier buyer agent for Spring Valley & Southwest Las Vegas (89117, 89147, 89148). Expert guidance, local knowledge, and personalized service for your home buying journey.',
}

const EXPERTISE_CARDS = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    text: 'Deep knowledge of Sienna Ridge community, amenities, and neighborhood dynamics. Knows every street, every builder, and every opportunity.',
  },
  {
    icon: Home,
    title: 'Builder Relationships',
    text: 'Strong relationships with Lennar and other builders in the area. Access to pre-construction opportunities and exclusive deals.',
  },
  {
    icon: Award,
    title: 'Market Knowledge',
    text: 'Expert understanding of Las Vegas real estate trends, pricing, and investment opportunities in the Sienna Ridge area.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    text: 'Dedicated to understanding your unique needs and preferences. Tailored approach to finding your perfect Sienna Ridge home.',
  },
  {
    icon: Star,
    title: 'Client Success',
    text: 'Proven track record of successful transactions and satisfied clients. Your success is the priority.',
  },
  {
    icon: Phone,
    title: 'Always Available',
    text: "Responsive communication and flexible scheduling. Available when you need support — evenings, weekends, or holidays.",
  },
] as const

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd id="profile-page-schema" data={buildProfilePageSchema()} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About Dr. Jan Duffy', path: '/about' },
        ]}
      />

      <PageHero
        title="Meet Dr. Jan Duffy"
        subtitle="Your Premier Southwest Las Vegas Real Estate Expert"
        imageSrc="/images/hero-about.jpg"
        imageAlt="Dr. Jan Duffy - Southwest Las Vegas Real Estate Expert"
        size="compact"
        badges={
          <>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Licensed Real Estate Agent
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              Spring Valley Specialist
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              100+ Happy Clients
            </Badge>
          </>
        }
      />

      <section className="section-padding section-default">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AgentHeadshot size="lg" className="mx-auto" priority />
              <div className="space-y-6">
                <SectionHeading
                  align="left"
                  title="Your Trusted Sienna Ridge Expert"
                  description="With years of experience in Las Vegas real estate, Dr. Jan Duffy has become the go-to expert for buyers looking to make Sienna Ridge their home. Her deep knowledge of the community, builder relationships, and market trends ensures you get the best possible guidance."
                  className="mb-0"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-slate-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl font-bold text-green-600">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Why Choose Dr. Jan Duffy?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPERTISE_CARDS.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border-slate-200 shadow-sm">
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

      <section className="section-padding section-default">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Sienna Ridge by Lennar"
              description={`Dr. Jan Duffy represents buyers at the Sienna Ridge sales center — new Lennar homes from ${formatCommunityPriceRange()}.`}
            />
            <SiennaRidgeOverview />
          </div>
        </div>
      </section>

      <ClientReviewsSection limit={3} />

      <section className="section-padding section-default">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <ScheduleConsultationSection />
            <div>
              <SectionHeading
                eyebrow="MLS Search"
                title="Start Your Sienna Ridge Search"
                description="Use Dr. Jan Duffy's expert tools to find your perfect home."
              />
              <RealScoutSearchTabs />
              <div className="mt-12">
                <RealScoutOfficeListings
                  title="Featured Sienna Ridge Homes"
                  description={`Current Sienna Ridge listings — ${formatCommunityPriceRange()}`}
                  priceMin={communityPriceMinString()}
                  priceMax={communityPriceMaxString()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteCtaBand
        title="Ready to Find Your Sienna Ridge Home?"
        description="Let Dr. Jan Duffy guide you through your home buying journey with expert knowledge and personalized service."
      />
    </div>
  )
}
