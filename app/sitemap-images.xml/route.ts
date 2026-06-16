import { buildImageSitemapFromConfig } from '@/lib/sitemap-xml'
import { sitemapXmlResponse } from '@/lib/sitemap-response'

export async function GET() {
  return sitemapXmlResponse(buildImageSitemapFromConfig())
}
