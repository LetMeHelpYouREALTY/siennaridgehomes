import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Home, FileText, Handshake, Key } from 'lucide-react'
import SeoCtaSection from '@/components/seo-cta-section'
import LeadForm from '@/components/lead-form'
import { AGENT_ENCODED_ID, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Las Vegas | Spring Valley Guide | Dr. Jan Duffy',
  description:
    'First-time home buyer guide for Las Vegas and Spring Valley. Dr. Jan Duffy explains financing, neighborhoods (89117, 89147, 89148), and the step-by-step buying process.',
  alternates: {
    canonical: `${SITE_URL}/first-time-home-buyer-las-vegas`,
  },
}

const steps = [
  { icon: FileText, title: 'Get Pre-Approved', description: 'Understand your budget and strengthen your offer with lender pre-approval.' },
  { icon: Home, title: 'Choose Your Neighborhood', description: 'Compare 89117, 89147, and 89148 based on lifestyle, commute, and price range.' },
  { icon: Handshake, title: 'Make a Competitive Offer', description: 'Dr. Jan Duffy negotiates on your behalf with local market expertise.' },
  { icon: Key, title: 'Close with Confidence', description: 'Navigate inspections, appraisal, and closing with step-by-step guidance.' },
]

export default function FirstTimeHomeBuyerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">First-Time Home Buyer Guide — Las Vegas</h1>
          <p className="text-xl text-blue-100">
            Buying your first home in Spring Valley or Southwest Las Vegas? Dr. Jan Duffy makes the process clear, stress-free, and buyer-focused.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Your Home Buying Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Best Areas for First-Time Buyers</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {[
              { href: '/89117-homes-for-sale', label: '89117 — Spring Valley established homes ($350K–$550K)' },
              { href: '/89147-homes-for-sale', label: '89147 — Southwest LV value and space ($350K–$500K)' },
              { href: '/89148-homes-for-sale', label: '89148 — Newer builds with modern amenities ($450K–$650K)' },
            ].map(({ href, label }) => (
              <li key={href} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <Link href={href} className="text-blue-600 hover:underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Search Homes for First-Time Buyers</CardTitle>
              <CardDescription className="text-center">MLS listings in Southwest Las Vegas starter price ranges</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <realscout-simple-search
                agent-encoded-id={AGENT_ENCODED_ID}
                style={{ '--rs-ss-widget-width': '100%' } as React.CSSProperties}
              />
            </CardContent>
          </Card>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Get First-Time Buyer Guidance</CardTitle>
              <CardDescription>Connect with Dr. Jan Duffy for a personalized buying plan</CardDescription>
            </CardHeader>
            <CardContent>
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <SeoCtaSection
        title="Start Your First Home Purchase in Las Vegas"
        description="Dr. Jan Duffy specializes in first-time buyers across Spring Valley and Southwest Las Vegas. Call today for a free consultation."
      />
    </div>
  )
}
