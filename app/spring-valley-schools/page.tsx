import SeoContentPage from '@/components/seo-content-page'
import { SPRING_VALLEY_SCHOOLS_PAGE } from '@/lib/seo-pages-data'

export const metadata = SPRING_VALLEY_SCHOOLS_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...SPRING_VALLEY_SCHOOLS_PAGE.props} />
}
