import SeoContentPage from '@/components/seo-content-page'
import { BELLEVUE_NEXTGEN_PAGE } from '@/lib/sienna-ridge-keyword-pages'

export const metadata = BELLEVUE_NEXTGEN_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...BELLEVUE_NEXTGEN_PAGE.props} />
}
