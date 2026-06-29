import SeoContentPage from '@/components/seo-content-page'
import { KINGSBURY_PAGE } from '@/lib/sienna-ridge-keyword-pages'

export const metadata = KINGSBURY_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...KINGSBURY_PAGE.props} />
}
