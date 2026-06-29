import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '89148 Homes for Sale | Southwest Las Vegas New Homes | Dr. Jan Duffy',
  description:
    'Find 89148 homes for sale including newer Southwest Las Vegas developments. Dr. Jan Duffy helps buyers navigate new construction and resale options in 89148.',
  alternates: {
    canonical: `${SITE_URL}/89148-homes-for-sale`,
  },
}

export default function Homes89148Page() {
  return (
    <ZipCodeLanding
      zipCode="89148"
      areaName="Southwest Las Vegas"
      heroTitle="89148 Homes for Sale — Newer Developments"
      heroDescription="Discover newer Southwest Las Vegas homes and master-planned communities in zip code 89148 with modern floor plans and amenities."
      overviewTitle="Why Buy in 89148?"
      overviewDescription="89148 features newer construction, updated floor plans, and communities designed for today's buyers seeking modern Southwest Las Vegas living."
      priceRange="$450K to $650K"
      priceMin="450000"
      priceMax="650000"
      highlights={[
        'Newer master-planned and infill communities',
        'Modern floor plans with energy-efficient features',
        'Community pools, parks, and HOA amenities',
        'Attractive option for move-up and relocation buyers',
      ]}
      heroImageAlt="89148 newer Southwest Las Vegas homes for sale"
      breadcrumbs={breadcrumbTrail({ name: '89148 Homes for Sale', path: '/89148-homes-for-sale' })}
      schemaName="89148 Homes for Sale | Southwest Las Vegas New Homes"
      schemaDescription="Find 89148 homes for sale including newer Southwest Las Vegas developments. Dr. Jan Duffy helps buyers navigate new construction and resale options in 89148."
    />
  )
}
