import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import { AGENT_ENCODED_ID, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Southwest Las Vegas Homes for Sale | 89117 89147 89148 | Dr. Jan Duffy',
  description:
    'Find Southwest Las Vegas homes for sale in zip codes 89117, 89147, and 89148. Dr. Jan Duffy provides expert buyer guidance across Spring Valley and surrounding communities.',
  alternates: {
    canonical: `${SITE_URL}/southwest-las-vegas-homes`,
  },
}

export default function SouthwestLasVegasHomesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spring-valley.jpg"
            alt="Southwest Las Vegas homes for sale"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Southwest Las Vegas Homes for Sale</h1>
            <p className="text-xl text-blue-100">
              Explore homes across Spring Valley and Southwest Las Vegas — zip codes 89117, 89147, and 89148
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Southwest Las Vegas at a Glance</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Southwest Las Vegas combines suburban comfort with urban convenience. Buyers choose this area for larger lots, newer construction options, and proximity to employment centers along the I-215 corridor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader><CardTitle>89117 — Spring Valley</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Established neighborhoods, mature trees, and central Southwest LV location.</p>
                <Link href="/89117-homes-for-sale" className="text-blue-600 hover:underline">View 89117 homes →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>89147 — Established SW LV</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Family-friendly communities with parks, schools, and strong resale activity.</p>
                <Link href="/89147-homes-for-sale" className="text-blue-600 hover:underline">View 89147 homes →</Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>89148 — Newer Builds</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Modern floor plans, master-planned communities, and move-in ready new construction.</p>
                <Link href="/89148-homes-for-sale" className="text-blue-600 hover:underline">View 89148 homes →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Search Southwest Las Vegas Listings</CardTitle>
              <CardDescription className="text-center">Browse MLS homes across 89117, 89147, and 89148</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <realscout-office-listings
                agent-encoded-id={AGENT_ENCODED_ID}
                sort-order="NEWEST"
                listing-status="For Sale,In Contract"
                property-types=",SFR"
                price-min="350000"
                price-max="650000"
                style={{ '--rs-listing-divider-color': '#0e64c8', width: '100%' } as React.CSSProperties}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title="Book Your Southwest Las Vegas Buyer Consultation"
            description="Schedule a 15-minute private conversation about homes in 89117, 89147, and 89148."
          />
        </div>
      </section>

      <SeoCtaSection
        title="Find Your Southwest Las Vegas Home"
        description="Dr. Jan Duffy specializes in buyer representation across Southwest Las Vegas. Get expert guidance on neighborhoods, pricing, and negotiations."
      />
    </div>
  )
}
