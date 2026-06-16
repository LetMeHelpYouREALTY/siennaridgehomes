import SeoContentPage from '@/components/seo-content-page'
import { CALDERA_HILLS_PAGE } from '@/lib/seo-pages-data'

export const metadata = CALDERA_HILLS_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...CALDERA_HILLS_PAGE.props} />
}
