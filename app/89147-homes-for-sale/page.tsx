import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
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
  return (
    <ZipCodeLanding
      zipCode="89147"
      areaName="Southwest Las Vegas"
      heroTitle="89147 Homes for Sale"
      heroDescription="Explore established Southwest Las Vegas neighborhoods with excellent schools, parks, and convenient access to daily amenities."
      overviewTitle="Why Buy in 89147?"
      overviewDescription="Zip code 89147 covers desirable Southwest Las Vegas communities with a mix of established homes, strong schools, and steady market demand."
      priceRange="$350K to $500K"
      priceMin="350000"
      priceMax="500000"
      highlights={[
        'Established single-family neighborhoods near Caldera Hills',
        'Access to parks, shopping, and dining along Rainbow Blvd',
        'Popular with families seeking space and value in Southwest LV',
        'Consistent resale activity and rental interest',
      ]}
      heroImageAlt="89147 Southwest Las Vegas homes for sale"
    />
  )
}
