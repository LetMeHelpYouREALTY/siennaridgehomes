import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '89147 Real Estate | Southwest Las Vegas Homes | Dr. Jan Duffy',
  description:
    '89147 real estate in Southwest Las Vegas. Dr. Jan Duffy helps buyers find established homes near Caldera Hills with expert local knowledge and personalized service.',
  alternates: {
    canonical: `${SITE_URL}/neighborhoods/89147`,
  },
}

export default function Neighborhood89147Page() {
  return (
    <ZipCodeLanding
      zipCode="89147"
      areaName="Southwest Las Vegas"
      heroTitle="Southwest Las Vegas Real Estate — 89147"
      heroDescription="Explore established Southwest Las Vegas neighborhoods with excellent schools, parks, and family-friendly communities."
      overviewTitle="Why Choose 89147?"
      overviewDescription="Zip code 89147 includes Sienna Ridge by Lennar — new construction near Desert Breeze Park and I-215 — plus established neighborhoods near Caldera Hills with strong family demand."
      priceRange="$350K to $860K+"
      priceMin="350000"
      priceMax="860000"
      highlights={[
        'Sienna Ridge by Lennar — Next Gen® suites, solar, and downstairs bedrooms',
        'Near Desert Breeze Park and I-215 for easy commutes',
        'Established neighborhoods near Caldera Hills Avenue',
        'Popular with families seeking space, value, and new construction options',
      ]}
      heroImageAlt="89147 Southwest Las Vegas real estate neighborhood"
      breadcrumbs={breadcrumbTrail(
        { name: 'Neighborhoods', path: '/neighborhoods' },
        { name: '89147', path: '/neighborhoods/89147' },
      )}
      schemaName="89147 Real Estate | Southwest Las Vegas Homes"
      schemaDescription="89147 real estate in Southwest Las Vegas. Dr. Jan Duffy helps buyers find established homes near Caldera Hills with expert local knowledge and personalized service."
    />
  )
}
