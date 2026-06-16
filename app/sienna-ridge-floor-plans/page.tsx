import SeoContentPage from '@/components/seo-content-page'
import { SIENNA_RIDGE_FLOOR_PLANS_PAGE } from '@/lib/seo-pages-data'

export const metadata = SIENNA_RIDGE_FLOOR_PLANS_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...SIENNA_RIDGE_FLOOR_PLANS_PAGE.props} />
}
