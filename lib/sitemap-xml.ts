import { SITE_URL } from '@/lib/site-config'
import {
  pageUrl,
  SITEMAP_IMAGES,
  SITEMAP_PAGES,
  type SitemapImage,
  type SitemapPage,
} from '@/lib/sitemap-pages'

const XSL_HREF = `${SITE_URL}/sitemap.xsl`

function xmlStylesheet() {
  return `<?xml-stylesheet type="text/xsl" href="${XSL_HREF}"?>`
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export function buildUrlsetXml(pages: SitemapPage[]) {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${escapeXml(pageUrl(page.path))}</loc>
    <lastmod>${page.lastModified}</lastmod>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
${xmlStylesheet()}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export function buildPagesSitemapXml() {
  return buildUrlsetXml(SITEMAP_PAGES)
}

export function buildSitemapIndexXml(entries: { loc: string; lastmod: string }[]) {
  const sitemaps = entries
    .map(
      (entry) => `  <sitemap>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </sitemap>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
${xmlStylesheet()}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`
}

export function buildImageSitemapXml(images: SitemapImage[], lastModified: string) {
  const urls = images
    .map(
      (image) => `  <url>
    <loc>${escapeXml(pageUrl(image.pagePath))}</loc>
    <lastmod>${lastModified}</lastmod>
    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
${xmlStylesheet()}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`
}

export function buildImageSitemapFromConfig() {
  return buildImageSitemapXml(SITEMAP_IMAGES, '2026-06-16')
}
