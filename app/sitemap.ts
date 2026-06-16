import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/listings', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/neighborhoods/89117', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/neighborhoods/89147', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/neighborhoods/89148', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/spring-valley-real-estate', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/southwest-las-vegas-homes', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/89117-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/89147-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/89148-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/las-vegas-investment-properties', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/first-time-home-buyer-las-vegas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/las-vegas-home-valuation', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sitemap', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'monthly' as const },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }))
}
