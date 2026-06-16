import SeoContentPage from '@/components/seo-content-page'
import { MOVING_TO_SPRING_VALLEY_PAGE } from '@/lib/seo-pages-data'

export const metadata = MOVING_TO_SPRING_VALLEY_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...MOVING_TO_SPRING_VALLEY_PAGE.props} />
}
