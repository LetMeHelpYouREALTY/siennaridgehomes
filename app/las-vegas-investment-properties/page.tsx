import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, Building, BarChart3 } from 'lucide-react'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import SeoPageJsonLd from '@/components/seo-page-json-ld'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { AGENT_ENCODED_ID, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Las Vegas Investment Properties | Southwest LV Rentals | Dr. Jan Duffy',
  description:
    'Las Vegas investment properties in Southwest Las Vegas (89117, 89147, 89148). Dr. Jan Duffy helps investors analyze cash flow, cap rates, and rental demand in Spring Valley.',
  alternates: {
    canonical: `${SITE_URL}/las-vegas-investment-properties`,
  },
}

export default function LasVegasInvestmentPropertiesPage() {
  const breadcrumbs = breadcrumbTrail({ name: 'Las Vegas Investment Properties', path: '/las-vegas-investment-properties' })

  return (
    <div className="min-h-screen bg-gray-50">
      <SeoPageJsonLd
        path="/las-vegas-investment-properties"
        name="Las Vegas Investment Properties | Southwest LV Rentals"
        description="Las Vegas investment properties in Southwest Las Vegas (89117, 89147, 89148). Dr. Jan Duffy helps investors analyze cash flow, cap rates, and rental demand in Spring Valley."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Las Vegas Investment Properties</h1>
          <p className="text-xl text-blue-100">
            Build your portfolio in Southwest Las Vegas with expert guidance on rental demand, cash flow, and neighborhood selection
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Southwest Las Vegas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Strong Rental Demand</h3>
                <p className="text-sm text-gray-600">89117, 89147, and 89148 attract long-term tenants seeking space and value.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Appreciation Potential</h3>
                <p className="text-sm text-gray-600">Southwest Las Vegas has shown consistent price growth and resale activity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Diverse Inventory</h3>
                <p className="text-sm text-gray-600">Single-family rentals, townhomes, and newer builds across three zip codes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Market Analysis</h3>
                <p className="text-sm text-gray-600">Dr. Jan Duffy provides data-driven insights on cap rates and neighborhood trends.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-10 text-gray-600">
            Explore listings in{' '}
            <Link href="/89117-homes-for-sale" className="text-blue-600 hover:underline">89117</Link>,{' '}
            <Link href="/89147-homes-for-sale" className="text-blue-600 hover:underline">89147</Link>, and{' '}
            <Link href="/89148-homes-for-sale" className="text-blue-600 hover:underline">89148</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Investment Property Listings</CardTitle>
              <CardDescription className="text-center">Southwest Las Vegas homes with investment potential</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <realscout-office-listings
                agent-encoded-id={AGENT_ENCODED_ID}
                sort-order="PRICE_ASC"
                listing-status="For Sale"
                property-types=",SFR"
                price-min="300000"
                price-max="600000"
                style={{ width: '100%' } as React.CSSProperties}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title="Schedule an Investor Consultation"
            description="Book a 15-minute call to review cash flow, cap rates, and investment opportunities in Southwest Las Vegas."
          />
        </div>
      </section>

      <SeoCtaSection
        title="Ready to Invest in Las Vegas Real Estate?"
        description="Schedule a consultation with Dr. Jan Duffy to discuss investment strategies, rental analysis, and off-market opportunities in Southwest Las Vegas."
      />
    </div>
  )
}
