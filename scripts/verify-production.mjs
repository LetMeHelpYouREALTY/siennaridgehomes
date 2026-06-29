#!/usr/bin/env node
/**
 * Post-deploy smoke test for siennaridgehomes.com
 * Usage: node scripts/verify-production.mjs
 */

const BASE = 'https://www.siennaridgehomes.com'

const REQUIRED_PATHS = [
  '',
  '/kingsbury-homes-sienna-ridge',
  '/bellevue-nextgen-sienna-ridge',
  '/skyland-sienna-ridge',
  '/glenbrook-homes-sienna-ridge',
  '/siena-homes-for-sale-las-vegas',
  '/sienna-ridge-lennar-las-vegas',
  '/89147-homes-for-sale',
  '/first-time-home-buyer-las-vegas',
  '/neighborhoods/89117',
  '/faq',
  '/sitemap-index.xml',
  '/sitemap-guides.xml',
  '/llms.txt',
  '/robots.txt',
]

const REDIRECT_CHECKS = [
  { url: 'http://siennaridgehomes.com/', expected: 'https://www.siennaridgehomes.com/' },
  { url: 'https://siennaridgehomes.com/', expected: 'https://www.siennaridgehomes.com/' },
]

async function checkStatus(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: 'manual' })
  return { path, status: res.status, ok: res.status >= 200 && res.status < 400 }
}

async function checkRedirectChain(url, expectedFinal) {
  let current = url
  let hops = 0
  while (hops < 5) {
    const res = await fetch(current, { redirect: 'manual' })
    if (res.status >= 301 && res.status <= 308) {
      const location = res.headers.get('location')
      if (!location) break
      current = new URL(location, current).href
      hops++
      continue
    }
    return { url, final: current, status: res.status, hops, ok: current === expectedFinal && res.status === 200 }
  }
  return { url, final: current, status: 0, hops, ok: current === expectedFinal }
}

async function checkJsonLd(path) {
  const res = await fetch(`${BASE}${path}`)
  const html = await res.text()
  const hasLdJson = html.includes('application/ld+json')
  const hasFaq = html.includes('"FAQPage"') || html.includes('FAQPage')
  const hasVerification = html.includes('google-site-verification')
  return { path, hasLdJson, hasFaq, hasVerification }
}

async function checkSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const required = [
    `${BASE}/kingsbury-homes-sienna-ridge`,
    `${BASE}/siena-homes-for-sale-las-vegas`,
    `${BASE}/glenbrook-homes-sienna-ridge`,
  ]
  const missing = required.filter((u) => !urls.includes(u))
  return { total: urls.length, missing }
}

async function main() {
  console.log(`Verifying ${BASE}\n`)

  let failed = 0

  console.log('--- HTTP status ---')
  for (const path of REQUIRED_PATHS) {
    const r = await checkStatus(path)
    const label = path || '/'
    if (!r.ok) {
      console.log(`FAIL ${r.status} ${label}`)
      failed++
    } else {
      console.log(`OK   ${r.status} ${label}`)
    }
  }

  console.log('\n--- Canonical redirects ---')
  for (const check of REDIRECT_CHECKS) {
    const r = await checkRedirectChain(check.url, check.expected)
    if (!r.ok) {
      console.log(`FAIL ${check.url} -> ${r.final} (${r.hops} hop(s), status ${r.status})`)
      failed++
    } else {
      console.log(`OK   ${check.url} -> ${r.final} (${r.hops} hop(s))`)
    }
  }

  console.log('\n--- Sitemap coverage ---')
  const sitemap = await checkSitemapUrls()
  console.log(`URLs in sitemap.xml: ${sitemap.total}`)
  if (sitemap.missing.length) {
    console.log(`FAIL missing: ${sitemap.missing.join(', ')}`)
    failed += sitemap.missing.length
  } else {
    console.log('OK   all keyword pages registered')
  }

  console.log('\n--- JSON-LD / GSC meta ---')
  for (const path of ['/kingsbury-homes-sienna-ridge', '/89147-homes-for-sale', '/']) {
    const r = await checkJsonLd(path)
    const label = path || '/'
    console.log(
      `${r.hasLdJson ? 'OK  ' : 'FAIL'} JSON-LD on ${label}` +
        (r.hasFaq && path !== '/' ? ' (FAQPage)' : '') +
        (r.hasVerification ? ' [google-site-verification set]' : ''),
    )
    if (!r.hasLdJson) failed++
  }

  const home = await checkJsonLd('/')
  if (!home.hasVerification) {
    console.log('\nWARN GOOGLE_SITE_VERIFICATION env not set — add token in Vercel for GSC ownership')
  }

  console.log(`\n${failed === 0 ? 'All checks passed.' : `${failed} check(s) failed.`}`)
  process.exit(failed > 0 ? 1 : 0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
