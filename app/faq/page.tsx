import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, ArrowRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import SeoFaqSection from '@/components/seo-faq-section'
import SeoCtaSection from '@/components/seo-cta-section'
import ScheduleConsultationSection from '@/components/schedule-consultation-section'
import { breadcrumbTrail } from '@/lib/breadcrumb-presets'
import { buildFaqPageSchema, buildWebPageSchema, HOMEPAGE_FAQS } from '@/lib/structured-data'
import { ALL_FAQS, SEO_EXPANSION_PAGES } from '@/lib/seo-pages-data'
import { SEO_GUIDE_PAGES } from '@/lib/seo-guide-pages'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Sienna Ridge & Las Vegas Real Estate FAQ | Dr. Jan Duffy',
  description:
    'FAQ on Sienna Ridge resale in Las Vegas 89147, Southwest Las Vegas zip codes 89117–89148, buyer representation, and home valuations with Dr. Jan Duffy.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

const guideLinks = SEO_EXPANSION_PAGES.map((p) => ({
  href: p.path,
  label: p.metadata.title as string,
}))

const areaGuideLinks = SEO_GUIDE_PAGES.map((p) => ({
  href: p.href,
  label: p.label,
}))

export default function FaqHubPage() {
  const breadcrumbs = breadcrumbTrail({ name: 'FAQ', path: '/faq' })
  const allFaqs = [...HOMEPAGE_FAQS, ...ALL_FAQS.filter((f) => !HOMEPAGE_FAQS.some((h) => h.question === f.question))]
  const visibleFaqs = allFaqs.slice(0, 12)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={breadcrumbs} />
      <JsonLd id="faq-webpage" data={buildWebPageSchema({
        path: '/faq',
        name: 'Sienna Ridge & Las Vegas Real Estate FAQ',
        description:
          'Frequently asked questions about Sienna Ridge resale in Las Vegas 89147 and Southwest Las Vegas home buying with Dr. Jan Duffy.',
        dateModified: '2026-10-17',
      })} />
      <JsonLd id="faq-schema" data={buildFaqPageSchema(visibleFaqs)} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <HelpCircle className="h-12 w-12 mx-auto mb-4 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Sienna Ridge & Las Vegas Real Estate FAQ</h1>
          <p className="lead-answer aeo-answer text-xl text-blue-100 leading-relaxed">
            Direct answers on Sienna Ridge in Las Vegas 89147, Southwest Las Vegas zip codes 89117–89148, MLS search, and buyer representation with Dr. Jan Duffy.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Area & Zip Code Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {areaGuideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
              >
                <span className="font-medium text-slate-800">{link.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-blue-600 ml-2" />
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6">Sienna Ridge & Community Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
              >
                <span className="font-medium text-slate-800 line-clamp-2">{link.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-blue-600 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoFaqSection title="Top Questions" faqs={visibleFaqs} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScheduleConsultationSection description="Still have questions? Book a 15-minute private conversation with Dr. Jan Duffy." />
        </div>
      </section>

      <SeoCtaSection title="Get Personalized Answers" description="Dr. Jan Duffy answers your Sienna Ridge and Southwest Las Vegas questions one-on-one." />
    </div>
  )
}
