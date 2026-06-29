import Link from 'next/link'
import { ArrowRight, BookOpen, MapPin, Home } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import JsonLd from '@/components/json-ld'
import { SEO_GUIDE_PAGES } from '@/lib/seo-guide-pages'
import { buildItemListSchema } from '@/lib/structured-data'

const CATEGORY_ICONS = {
  area: MapPin,
  zip: Home,
  buyer: BookOpen,
} as const

export default function SeoGuidesHub() {
  return (
    <section id="guides" className="section-padding section-default scroll-mt-section">
      <JsonLd
        id="guides-itemlist-schema"
        data={buildItemListSchema(
          SEO_GUIDE_PAGES.map((page) => ({
            name: page.label,
            url: page.href,
            description: page.description,
          })),
        )}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Buyer Resources"
            title="Southwest Las Vegas Home Buying Guides"
            description="Explore zip code listings, area overviews, and expert guides for Spring Valley and Southwest Las Vegas (89117, 89147, 89148)."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEO_GUIDE_PAGES.map((page) => {
              const Icon = CATEGORY_ICONS[page.category]
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <Icon className="h-5 w-5 text-blue-600 mb-3" />
                  <span className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {page.label}
                  </span>
                  <span className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">{page.description}</span>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 mt-4">
                    Read guide <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
          <p className="text-center mt-8 text-sm text-slate-500">
            Also see{' '}
            <Link href="/neighborhoods" className="text-blue-600 hover:underline font-medium">
              neighborhood guides
            </Link>{' '}
            and the{' '}
            <Link href="/sitemap" className="text-blue-600 hover:underline font-medium">
              full sitemap
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
