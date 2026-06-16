import { Metadata } from 'next'
import ZipCodeLanding from '@/components/zip-code-landing'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '89117 Homes for Sale | Spring Valley Las Vegas | Dr. Jan Duffy',
  description:
    'Browse 89117 homes for sale in Spring Valley, Las Vegas. Dr. Jan Duffy helps buyers find established homes and newer developments in zip code 89117.',
  alternates: {
    canonical: `${SITE_URL}/89117-homes-for-sale`,
  },
}

export default function Homes89117Page() {
  return (
    <ZipCodeLanding
      zipCode="89117"
      areaName="Spring Valley"
      heroTitle="89117 Homes for Sale in Spring Valley"
      heroDescription="Discover established neighborhoods and modern amenities in one of Southwest Las Vegas's most sought-after zip codes."
      overviewTitle="Why Buy in 89117?"
      overviewDescription="Spring Valley 89117 offers prime Southwest Las Vegas location, diverse housing options, and strong long-term value for families and investors."
      priceRange="$350K to $550K"
      priceMin="350000"
      priceMax="550000"
      highlights={[
        'Established neighborhoods with mature landscaping',
        'Convenient access to the Strip, airport, and major employers',
        'Mix of single-family homes and newer townhome communities',
        'Strong rental demand and appreciation potential',
      ]}
      heroImageAlt="89117 Spring Valley homes for sale in Southwest Las Vegas"
    />
  )
}
