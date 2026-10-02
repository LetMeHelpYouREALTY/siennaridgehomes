import SeoContentPage from '@/components/seo-content-page'
import NearbyAmenitiesSection from '@/components/nearby-amenities-section'
import { SIENNA_RIDGE_LENNAR_PAGE } from '@/lib/seo-pages-data'

export const metadata = SIENNA_RIDGE_LENNAR_PAGE.metadata

export default function Page() {
  return (
    <>
      <SeoContentPage {...SIENNA_RIDGE_LENNAR_PAGE.props} />
      <NearbyAmenitiesSection id="nearby-amenities" showHeading={true} />
    </>
  )
}
