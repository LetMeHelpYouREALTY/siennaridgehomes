import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SITE_URL } from '@/lib/site-config'

function canonicalRedirect(request: NextRequest): NextResponse | null {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const protocol = request.headers.get('x-forwarded-proto') ?? 'https'
  const needsHttps = protocol !== 'https'
  const needsWww = host === 'siennaridgehomes.com'

  if (!needsHttps && !needsWww) {
    return null
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    SITE_URL,
  )

  return NextResponse.redirect(destination, { status: 301 })
}

export function middleware(request: NextRequest) {
  const redirect = canonicalRedirect(request)
  if (redirect) {
    return redirect
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
}
