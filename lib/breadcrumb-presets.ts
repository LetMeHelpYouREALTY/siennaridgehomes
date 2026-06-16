import type { BreadcrumbItem } from '@/lib/structured-data'

export function breadcrumbTrail(...items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ name: 'Home', path: '/' }, ...items]
}
