import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { buildItemListSchema, buildWebPageSchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Southwest Las Vegas Neighborhoods | 89117 89147 89148 Guides',
  description:
    'Explore Southwest Las Vegas and Spring Valley neighborhoods — zip code guides for 89117, 89147, and 89148 plus Sienna Ridge new construction. Dr. Jan Duffy buyer agent.',
  alternates: { canonical: `${SITE_URL}/neighborhoods` },
}

const neighborhoods = [
  {
    zip: '89117',
    name: 'Spring Valley / Desert Breeze',
    price: '$350K–$550K',
    href: '/neighborhoods/89117',
    homesHref: '/89117-homes-for-sale',
    blurb: 'Established neighborhoods near Desert Breeze Park and Spring Mountain corridor.',
  },
  {
    zip: '89147',
    name: 'Caldera Hills / Sienna Ridge',
    price: '$350K–$860K+',
    href: '/neighborhoods/89147',
    homesHref: '/89147-homes-for-sale',
    blurb: 'Sienna Ridge Lennar new construction plus established Southwest LV resale.',
  },
  {
    zip: '89148',
    name: '215 Corridor / Newer Builds',
    price: '$450K–$650K',
    href: '/neighborhoods/89148',
    homesHref: '/89148-homes-for-sale',
    blurb: 'Newer single-family homes with modern amenities near the 215 beltway.',
  },
]

export default function NeighborhoodsHubPage() {
  const breadcrumbs = breadcrumbTrail({ name: 'Neighborhoods', path: '/neighborhoods' })
  const itemList = neighborhoods.flatMap((n) => [
    { name: `${n.zip} Neighborhood Guide`, url: n.href, description: n.blurb },
    { name: `${n.zip} Homes for Sale`, url: n.homesHref, description: n.price },
  ])

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbSchema items={breadcrumbs} />
      <JsonLd id="neighborhoods-webpage" data={buildWebPageSchema({
        path: '/neighborhoods',
        name: 'Southwest Las Vegas Neighborhoods',
        description: 'Guides for 89117, 89147, and 89148 Spring Valley zip codes.',
      })} />
      <JsonLd id="neighborhoods-itemlist" data={buildItemListSchema(itemList)} />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-blue-800/80" />
        <div className="absolute inset-0">
          <Image src="/images/hero-spring-valley.jpg" alt="Southwest Las Vegas neighborhoods" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-4xl">
          <Badge className="mb-4 bg-white/15 text-white border-white/20">Spring Valley · Southwest LV</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Neighborhood Guides</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Compare 89117, 89147, and 89148 — established Spring Valley neighborhoods, Sienna Ridge new construction, and 215 corridor homes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {neighborhoods.map((n) => (
              <Card key={n.zip} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-bold text-2xl">{n.zip}</span>
                  </div>
                  <CardTitle>{n.name}</CardTitle>
                  <CardDescription>{n.blurb}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-semibold text-blue-600">{n.price}</p>
                  <Link href={n.href} className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600">
                    Neighborhood guide <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                  <Link href={n.homesHref} className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600">
                    Homes for sale <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/89117-vs-89147-vs-89148" className="text-blue-600 hover:underline font-medium">
              Compare all three zip codes →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Community</h2>
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Sienna Ridge by Lennar</h3>
                <p className="text-slate-600">New construction in 89147 — Next Gen suites, solar, from $564,890.</p>
              </div>
              <Link href="/sienna-ridge-lennar-las-vegas" className="inline-flex items-center font-semibold text-blue-600 hover:underline">
                Community guide <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection title="Which Neighborhood Fits You?" description="Book a 15-minute call to compare 89117, 89147, and 89148 for your budget and lifestyle." />
        </div>
      </section>

      <SeoCtaSection title="Explore Southwest Las Vegas Neighborhoods" description="Dr. Jan Duffy provides expert buyer guidance across Spring Valley zip codes." />
    </div>
  )
}
