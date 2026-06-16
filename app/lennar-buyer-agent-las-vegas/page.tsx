import SeoContentPage from '@/components/seo-content-page'
import { LENNAR_BUYER_AGENT_PAGE } from '@/lib/seo-pages-data'

export const metadata = LENNAR_BUYER_AGENT_PAGE.metadata

export default function Page() {
  return <SeoContentPage {...LENNAR_BUYER_AGENT_PAGE.props} />
}
