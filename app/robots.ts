import { MetadataRoute } from 'next'
import { CANONICAL_HOST, SITE_URL } from '@/lib/site-config'

/** AI crawlers allowed for GEO/AEO — explicit allow per 2026 citation-bot guidance. */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/projects/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/', '/projects/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
    host: CANONICAL_HOST,
  }
}
