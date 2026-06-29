import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import SeoCtaSection from '@/components/seo-cta-section'
import SeoFaqSection from '@/components/seo-faq-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import type { FaqItem, BreadcrumbItem } from '@/lib/structured-data'
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from '@/lib/structured-data'

export type SeoStat = {
  label: string
  value: string
}

export type SeoFeatureCard = {
  title: string
  description: string
  icon?: string
}

export type SeoComparisonRow = {
  label: string
  values: string[]
}

export type SeoRelatedLink = {
  href: string
  label: string
  description?: string
}

export type SeoContentPageProps = {
  breadcrumbs: BreadcrumbItem[]
  heroImage?: string
  heroImageAlt: string
  badges?: string[]
  title: string
  leadAnswer: string
  subtitle?: string
  stats?: SeoStat[]
  features?: SeoFeatureCard[]
  comparison?: {
    title: string
    headers: string[]
    rows: SeoComparisonRow[]
  }
  bodySections?: { title: string; content: string }[]
  faqs: FaqItem[]
  relatedLinks?: SeoRelatedLink[]
  itemList?: { name: string; url: string; description?: string }[]
  ctaTitle: string
  ctaDescription: string
  consultationTitle?: string
  consultationDescription?: string
  schemaExtras?: Record<string, unknown>[]
}

export default function SeoContentPage({
  breadcrumbs,
  heroImage = '/images/hero-spring-valley.jpg',
  heroImageAlt,
  badges = [],
  title,
  leadAnswer,
  subtitle,
  stats = [],
  features = [],
  comparison,
  bodySections = [],
  faqs,
  relatedLinks = [],
  itemList,
  ctaTitle,
  ctaDescription,
  consultationTitle,
  consultationDescription,
  schemaExtras = [],
}: SeoContentPageProps) {
  const pagePath = breadcrumbs[breadcrumbs.length - 1]?.path ?? '/'
  const schemas: Record<string, unknown>[] = [
    buildWebPageSchema({ path: pagePath, name: title, description: leadAnswer }),
    buildFaqPageSchema(faqs),
    buildBreadcrumbSchema(breadcrumbs),
  ]
  if (itemList?.length) {
    schemas.push(buildItemListSchema(itemList))
  }
  schemas.push(...schemaExtras)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbs} />
      {schemas.map((schema, index) => (
        <JsonLd key={`schema-${index}`} id={`seo-schema-${index}`} data={schema} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-blue-800/80" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center text-white">
            <nav className="text-sm text-blue-200 mb-6 flex flex-wrap justify-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.path} className="flex items-center gap-2">
                  {i > 0 ? <span className="text-blue-400">/</span> : null}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.path} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm">
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
              {title}
            </h1>
            {subtitle ? <p className="text-xl text-blue-100 mb-6">{subtitle}</p> : null}
            <p className="text-lg md:text-xl text-blue-50/95 leading-relaxed max-w-3xl mx-auto mb-8">
              {leadAnswer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton size="lg" className="bg-white text-blue-700 hover:bg-blue-50" />
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 bg-transparent" asChild>
                <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  Browse Listings <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats.length > 0 ? (
        <section className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Features */}
      {features.length > 0 ? (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Body sections */}
      {bodySections.map((section) => (
        <section key={section.title} className="py-12 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{section.content}</p>
          </div>
        </section>
      ))}

      {/* Comparison table */}
      {comparison ? (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">{comparison.title}</h2>
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 font-semibold text-slate-900">{comparison.headers[0]}</th>
                    {comparison.headers.slice(1).map((header) => (
                      <th key={header} className="px-6 py-4 font-semibold text-slate-900">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                      <td className="px-6 py-4 font-medium text-slate-800">{row.label}</td>
                      {row.values.map((value, i) => (
                        <td key={`${row.label}-${i}`} className="px-6 py-4 text-slate-600">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {/* Related links */}
      {relatedLinks.length > 0 ? (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Explore Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </div>
                      {link.description ? (
                        <p className="text-sm text-slate-500 mt-1">{link.description}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SeoFaqSection faqs={faqs} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection
            title={consultationTitle ?? 'Schedule a Private Conversation'}
            description={
              consultationDescription ??
              'Book a 15-minute call with Dr. Jan Duffy about Southwest Las Vegas real estate.'
            }
          />
        </div>
      </section>

      <SeoCtaSection title={ctaTitle} description={ctaDescription} />
    </div>
  )
}
