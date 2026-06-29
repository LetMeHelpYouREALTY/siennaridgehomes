import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { getSeoGuideByPath } from '@/lib/seo-guide-pages'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '89147 Homes for Sale | Southwest Las Vegas | Dr. Jan Duffy',
  description:
    'Search 89147 homes for sale in Southwest Las Vegas. Dr. Jan Duffy specializes in buyer representation for families and investors in zip code 89147.',
  alternates: {
    canonical: `${SITE_URL}/89147-homes-for-sale`,
  },
}

export default function Homes89147Page() {
  const guide = getSeoGuideByPath('/89147-homes-for-sale')

  return (
    <ZipCodeLanding
      zipCode="89147"
      areaName="Southwest Las Vegas"
      heroTitle="89147 Homes for Sale"
      heroDescription="Explore established Southwest Las Vegas neighborhoods with excellent schools, parks, and convenient access to daily amenities."
      overviewTitle="Why Buy in 89147?"
      overviewDescription="Zip code 89147 includes Sienna Ridge by Lennar near Desert Breeze Park and I-215, plus established Southwest Las Vegas neighborhoods with strong schools and steady demand."
      priceRange="$350K to $860K+"
      priceMin="350000"
      priceMax="860000"
      highlights={[
        'Sienna Ridge by Lennar — Next Gen® suites, solar, and downstairs bedrooms',
        'Near Desert Breeze Park and I-215 for easy commutes',
        'Established neighborhoods near Caldera Hills Avenue',
        'Buyer representation from Dr. Jan Duffy at the Sienna Ridge sales center',
      ]}
      heroImageAlt="89147 Southwest Las Vegas homes for sale"
      breadcrumbs={breadcrumbTrail({ name: '89147 Homes for Sale', path: '/89147-homes-for-sale' })}
      schemaName="89147 Homes for Sale | Southwest Las Vegas"
      schemaDescription="Search 89147 homes for sale in Southwest Las Vegas. Dr. Jan Duffy specializes in buyer representation for families and investors in zip code 89147."
      leadAnswer={guide?.leadAnswer}
      faqs={guide?.faqs}
    />
  )
}
