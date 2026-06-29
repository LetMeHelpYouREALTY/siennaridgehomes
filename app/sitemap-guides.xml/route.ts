import { buildUrlsetXml } from '@/lib/sitemap-xml'
import { SITEMAP_GUIDE_PAGES } from '@/lib/sitemap-pages'
import { sitemapXmlResponse } from '@/lib/sitemap-response'

export async function GET() {
  return sitemapXmlResponse(buildUrlsetXml(SITEMAP_GUIDE_PAGES))
}
