import { NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/site-config'

export async function GET() {
  const currentDate = new Date().toISOString()

  const neighborhoodPages = [
    `${SITE_URL}/neighborhoods/89117`,
    `${SITE_URL}/neighborhoods/89147`,
    `${SITE_URL}/neighborhoods/89148`,
    `${SITE_URL}/89117-homes-for-sale`,
    `${SITE_URL}/89147-homes-for-sale`,
    `${SITE_URL}/89148-homes-for-sale`,
    `${SITE_URL}/spring-valley-real-estate`,
    `${SITE_URL}/southwest-las-vegas-homes`,
  ]

  const neighborhoodSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${neighborhoodPages.map((url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(neighborhoodSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
