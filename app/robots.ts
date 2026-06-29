import { MetadataRoute } from 'next'
import { CANONICAL_HOST, SITE_URL } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/projects/'],
    },
    sitemap: `${SITE_URL}/sitemap-index.xml`,
    host: CANONICAL_HOST,
  }
}
