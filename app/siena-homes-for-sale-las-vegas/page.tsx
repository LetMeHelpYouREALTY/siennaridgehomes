import SeoContentPage from '@/components/seo-content-page'
import { SIENA_HOMES_PAGE } from '@/lib/sienna-ridge-keyword-pages'

export const metadata = SIENA_HOMES_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...SIENA_HOMES_PAGE.props} />
}
