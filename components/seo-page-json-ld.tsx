import BreadcrumbSchema from '@/components/breadcrumb-schema'
import JsonLd from '@/components/json-ld'
import { buildWebPageSchema, type BreadcrumbItem } from '@/lib/structured-data'

type SeoPageJsonLdProps = {
  path: string
  name: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
  dateModified?: string
}

export default function SeoPageJsonLd({
  path,
  name,
  description,
  breadcrumbs,
  dateModified = '2026-06-29',
}: SeoPageJsonLdProps) {
  const schemaId = path.replace(/\//g, '-') || 'home'

  return (
    <>
      <JsonLd
        id={`webpage-schema${schemaId}`}
        data={buildWebPageSchema({ path, name, description, dateModified })}
      />
      {breadcrumbs ? <BreadcrumbSchema items={breadcrumbs} /> : null}
    </>
  )
}
