import SeoContentPage from '@/components/seo-content-page'
import { NEXT_GEN_PAGE } from '@/lib/seo-pages-data'

export const metadata = NEXT_GEN_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...NEXT_GEN_PAGE.props} />
}
