import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

/** Canonical URL for an indexable route (always www host from SITE_URL). */
export function pageCanonical(path: string): Pick<Metadata, 'alternates'> {
  const normalized =
    path === '' || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const href = normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`
  return { alternates: { canonical: href } }
}
