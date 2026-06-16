import SeoContentPage from '@/components/seo-content-page'
import { DESERT_BREEZE_LIFESTYLE_PAGE } from '@/lib/seo-pages-data'

export const metadata = DESERT_BREEZE_LIFESTYLE_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...DESERT_BREEZE_LIFESTYLE_PAGE.props} />
}
