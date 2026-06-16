import { legacySitemapRedirect } from '@/lib/legacy-sitemap-redirect'

export async function GET() {
  return legacySitemapRedirect()
}
