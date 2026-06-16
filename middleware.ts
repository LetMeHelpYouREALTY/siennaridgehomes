import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.siennaridgehomes.com'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const protocol = request.headers.get('x-forwarded-proto') ?? 'https'
  const url = request.nextUrl.clone()

  if (host === 'siennaridgehomes.com') {
    url.host = CANONICAL_HOST
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  if (protocol === 'http') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
}
