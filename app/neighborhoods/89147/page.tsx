import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
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
      overviewDescription="Zip code 89147 offers established single-family neighborhoods, convenient shopping along Rainbow Blvd, and strong demand from families and investors."
      priceRange="$350K to $500K"
      priceMin="350000"
      priceMax="500000"
      highlights={[
        'Established neighborhoods near Caldera Hills Avenue',
        'Access to parks, trails, and community amenities',
        'Popular with families seeking space and value',
        'Steady rental and resale market activity',
      ]}
      heroImageAlt="89147 Southwest Las Vegas real estate neighborhood"
    />
  )
}
