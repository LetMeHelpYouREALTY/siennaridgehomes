import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '89148 Real Estate | New Southwest Las Vegas Homes | Dr. Jan Duffy',
  description:
    '89148 real estate featuring newer Southwest Las Vegas developments. Dr. Jan Duffy helps buyers find modern homes in master-planned communities in zip code 89148.',
  alternates: {
    canonical: `${SITE_URL}/neighborhoods/89148`,
  },
}

export default function Neighborhood89148Page() {
  return (
    <ZipCodeLanding
      zipCode="89148"
      areaName="Southwest Las Vegas"
      heroTitle="Southwest Las Vegas Real Estate — 89148"
      heroDescription="Discover newer Southwest Las Vegas homes with modern floor plans, community amenities, and move-in ready options."
      overviewTitle="Why Choose 89148?"
      overviewDescription="89148 features newer construction and master-planned communities designed for buyers who want modern Southwest Las Vegas living with updated amenities."
      priceRange="$450K to $650K"
      priceMin="450000"
      priceMax="650000"
      highlights={[
        'Newer master-planned and infill communities',
        'Modern floor plans with open layouts',
        'Community pools, parks, and HOA amenities',
        'Ideal for move-up buyers and relocations',
      ]}
      heroImageAlt="89148 newer Southwest Las Vegas real estate"
      breadcrumbs={breadcrumbTrail(
        { name: 'Neighborhoods', path: '/neighborhoods/89117' },
        { name: '89148', path: '/neighborhoods/89148' },
      )}
    />
  )
}
