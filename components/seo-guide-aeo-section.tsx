import SeoFaqSection from '@/components/seo-faq-section'
import type { FaqItem } from '@/lib/structured-data'

type SeoGuideAeoSectionProps = {
  leadAnswer: string
  faqs: FaqItem[]
  faqTitle?: string
}

/** Visible AEO block: direct answer + FAQ accordion matching JSON-LD. */
export default function SeoGuideAeoSection({
  leadAnswer,
  faqs,
  faqTitle = 'Common Questions',
}: SeoGuideAeoSectionProps) {
  return (
    <>
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Quick Answer</h2>
          <p className="lead-answer aeo-answer text-lg text-slate-700 leading-relaxed">{leadAnswer}</p>
        </div>
      </section>
      <SeoFaqSection title={faqTitle} faqs={faqs} />
    </>
  )
}
