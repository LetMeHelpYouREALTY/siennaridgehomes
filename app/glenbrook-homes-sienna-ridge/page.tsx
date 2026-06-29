import SeoContentPage from '@/components/seo-content-page'
import { GLENBROOK_PAGE } from '@/lib/sienna-ridge-keyword-pages'

export const metadata = GLENBROOK_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...GLENBROOK_PAGE.props} />
}
