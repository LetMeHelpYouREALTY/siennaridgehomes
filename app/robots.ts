import { MetadataRoute } from 'next'
import { CANONICAL_HOST, SITE_URL } from '@/lib/site-config'

/** AI crawlers allowed for GEO — content is server-rendered and citation-friendly. */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'anthropic-ai',
  'ClaudeBot',
  'PerplexityBot',
  'Applebot-Extended',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/projects/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
    host: CANONICAL_HOST,
  }
}
