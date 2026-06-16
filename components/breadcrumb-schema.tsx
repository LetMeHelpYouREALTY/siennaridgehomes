import JsonLd from '@/components/json-ld'
import { buildBreadcrumbSchema, type BreadcrumbItem } from '@/lib/structured-data'

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (items.length === 0) {
    return null
  }

  const slug = items.map((item) => item.path.replace(/\//g, '-')).join('-')

  return <JsonLd id={`breadcrumb-schema${slug}`} data={buildBreadcrumbSchema(items)} />
}
