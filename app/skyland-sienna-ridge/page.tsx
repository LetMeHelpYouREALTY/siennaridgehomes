import SeoContentPage from '@/components/seo-content-page'
import { SKYLAND_PAGE } from '@/lib/sienna-ridge-keyword-pages'

export const metadata = SKYLAND_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...SKYLAND_PAGE.props} />
}
