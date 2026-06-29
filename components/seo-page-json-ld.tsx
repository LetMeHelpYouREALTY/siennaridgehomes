import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import {
  buildFaqPageSchema,
  buildHowToSchema,
  buildWebPageSchema,
  type BreadcrumbItem,
  type FaqItem,
  type HowToStep,
} from '@/lib/structured-data'

type SeoPageJsonLdProps = {
  path: string
  name: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
  dateModified?: string
  faqs?: FaqItem[]
  howTo?: {
    name: string
    description: string
    steps: HowToStep[]
  }
  schemaExtras?: Record<string, unknown>[]
}

export default function SeoPageJsonLd({
  path,
  name,
  description,
  breadcrumbs,
  dateModified = '2026-06-29',
  faqs,
  howTo,
  schemaExtras = [],
}: SeoPageJsonLdProps) {
  const schemaId = path.replace(/\//g, '-') || 'home'

  return (
    <>
      <JsonLd
        id={`webpage-schema${schemaId}`}
        data={buildWebPageSchema({ path, name, description, dateModified })}
      />
      {faqs?.length ? (
        <JsonLd id={`faq-schema${schemaId}`} data={buildFaqPageSchema(faqs)} />
      ) : null}
      {howTo ? (
        <JsonLd
          id={`howto-schema${schemaId}`}
          data={buildHowToSchema(howTo.name, howTo.description, howTo.steps)}
        />
      ) : null}
      {schemaExtras.map((schema, index) => (
        <JsonLd key={`extra-schema-${schemaId}-${index}`} id={`extra-schema${schemaId}-${index}`} data={schema} />
      ))}
      {breadcrumbs ? <BreadcrumbSchema items={breadcrumbs} /> : null}
    </>
  )
}
