import SeoContentPage from '@/components/seo-content-page'
import { DESERT_BREEZE_PARK_PAGE } from '@/lib/seo-pages-data'

export const metadata = DESERT_BREEZE_PARK_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...DESERT_BREEZE_PARK_PAGE.props} />
}
