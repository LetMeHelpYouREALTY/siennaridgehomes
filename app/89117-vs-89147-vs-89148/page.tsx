import SeoContentPage from '@/components/seo-content-page'
import { ZIP_COMPARISON_PAGE } from '@/lib/seo-pages-data'

export const metadata = ZIP_COMPARISON_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...ZIP_COMPARISON_PAGE.props} />
}
