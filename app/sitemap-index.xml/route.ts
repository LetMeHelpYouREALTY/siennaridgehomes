import { SITE_URL } from '@/lib/site-config'
import { SITEMAP_CHILD_LASTMOD } from '@/lib/sitemap-pages'
import { buildSitemapIndexXml } from '@/lib/sitemap-xml'
import { sitemapXmlResponse } from '@/lib/sitemap-response'

export async function GET() {
  const sitemapIndex = buildSitemapIndexXml([
    {
      loc: `${SITE_URL}/sitemap.xml`,
      lastmod: SITEMAP_CHILD_LASTMOD.pages,
    },
    {
      loc: `${SITE_URL}/sitemap-guides.xml`,
      lastmod: SITEMAP_CHILD_LASTMOD.guides,
    },
    {
      loc: `${SITE_URL}/sitemap-images.xml`,
      lastmod: SITEMAP_CHILD_LASTMOD.images,
    },
  ])

  return sitemapXmlResponse(sitemapIndex)
}
