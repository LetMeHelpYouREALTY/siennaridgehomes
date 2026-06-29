import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import SeoPageJsonLd from '@/components/seo-page-json-ld'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { AGENT_ENCODED_ID, REALSCOUT_SEARCH_URL, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Las Vegas Home Valuation | Free Property Estimate | Dr. Jan Duffy',
  description:
    'Get a free Las Vegas home valuation for properties in Spring Valley and Southwest Las Vegas (89117, 89147, 89148). Instant estimate plus expert market analysis from Dr. Jan Duffy.',
  alternates: {
    canonical: `${SITE_URL}/las-vegas-home-valuation`,
  },
}

export default function LasVegasHomeValuationPage() {
  const breadcrumbs = breadcrumbTrail({ name: 'Las Vegas Home Valuation', path: '/las-vegas-home-valuation' })

  return (
    <div className="min-h-screen bg-gray-50">
      <SeoPageJsonLd
        path="/las-vegas-home-valuation"
        name="Las Vegas Home Valuation | Free Property Estimate"
        description="Get a free Las Vegas home valuation for properties in Spring Valley and Southwest Las Vegas (89117, 89147, 89148). Instant estimate plus expert market analysis from Dr. Jan Duffy."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Las Vegas Home Valuation</h1>
          <p className="text-xl text-blue-100">
            Get an instant property estimate for your Southwest Las Vegas home, plus expert market analysis from Dr. Jan Duffy
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                Instant Home Value Estimate
              </CardTitle>
              <CardDescription className="text-center">
                Enter your address for a data-driven valuation in Spring Valley, 89117, 89147, or 89148
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <realscout-home-value
                agent-encoded-id={AGENT_ENCODED_ID}
                style={{
                  '--rs-hvw-background-color': '#ffffff',
                  '--rs-hvw-title-color': '#000000',
                  '--rs-hvw-subtitle-color': 'rgba(28, 30, 38, 0.5)',
                  '--rs-hvw-primary-button-text-color': '#ffffff',
                  '--rs-hvw-primary-button-color': 'rgb(35, 93, 137)',
                  '--rs-hvw-secondary-button-text-color': 'rgb(35, 93, 137)',
                  '--rs-hvw-secondary-button-color': '#ffffff',
                  '--rs-hvw-widget-width': '100%',
                } as React.CSSProperties}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-8 text-gray-600">
            Selling or refinancing?{' '}
            <Link href="/spring-valley-real-estate" className="text-blue-600 hover:underline">
              Learn about Spring Valley market trends
            </Link>{' '}
            or browse{' '}
            <a
              href={REALSCOUT_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              current listings
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">What Affects Your Home Value in Southwest Las Vegas?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>✓ Zip code and neighborhood (89117, 89147, 89148)</li>
            <li>✓ Square footage, lot size, and condition</li>
            <li>✓ Recent comparable sales in your area</li>
            <li>✓ Upgrades, pool, and energy-efficient features</li>
            <li>✓ Current inventory and days on market</li>
            <li>✓ Interest rates and seasonal demand</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title="Discuss Your Home Valuation with Dr. Jan Duffy"
            description="Book a 15-minute call for a personalized market analysis of your Southwest Las Vegas property."
          />
        </div>
      </section>

      <SeoCtaSection
        title="Need a Detailed Market Analysis?"
        description="Dr. Jan Duffy provides complimentary comparative market analyses for homeowners in Spring Valley and Southwest Las Vegas."
      />
    </div>
  )
}
