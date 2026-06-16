import type { FaqItem } from '@/lib/structured-data'

type SeoFaqSectionProps = {
  title?: string
  faqs: FaqItem[]
}

export default function SeoFaqSection({
  title = 'Frequently Asked Questions',
  faqs,
}: SeoFaqSectionProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">{title}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-slate-900 flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-blue-600 text-xl shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
