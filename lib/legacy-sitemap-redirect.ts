import { NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/site-config'

/** Legacy sitemap URLs redirect to the canonical sitemap index. */
export function legacySitemapRedirect() {
  return NextResponse.redirect(`${SITE_URL}/sitemap-index.xml`, 301)
}
