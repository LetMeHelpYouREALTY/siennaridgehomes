import Link from 'next/link'
import { ArrowRight, Home, Layers } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/section-heading'
import {
  formatCollectionPrice,
  SIENNA_RIDGE_COLLECTIONS,
  type SiennaRidgeCollection,
} from '@/lib/sienna-ridge-collections'

type SiennaRidgeCollectionsHubProps = {
  title?: string
  description?: string
  showHeading?: boolean
  className?: string
}

function CollectionCard({ collection }: { collection: SiennaRidgeCollection }) {
  return (
    <Link
      href={collection.path}
      className="group block h-full"
    >
      <Card className="h-full border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg group-hover:text-blue-700 transition-colors">
              {collection.shortName}
            </CardTitle>
            {collection.planType === 'Next Gen®' ? (
              <span className="shrink-0 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                Next Gen®
              </span>
            ) : (
              <Home className="h-5 w-5 text-blue-600 shrink-0" />
            )}
          </div>
          <CardDescription>{collection.planType}</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <dt className="text-slate-500">From</dt>
              <dd className="font-semibold text-blue-600">{formatCollectionPrice(collection.priceFrom)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Sq Ft</dt>
              <dd className="font-medium">{collection.sqft.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Beds / Baths</dt>
              <dd className="font-medium">
                {collection.beds} / {collection.baths}
                {collection.halfBaths > 0 ? `.${collection.halfBaths}` : ''}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-slate-600 line-clamp-3">{collection.description}</p>
          <span className="inline-flex items-center text-sm font-medium text-blue-600 mt-4">
            View {collection.shortName} guide
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function SiennaRidgeCollectionsHub({
  title = 'Sienna Ridge Floor Plan Collections',
  description = 'Lennar offers four active collections at Sienna Ridge in Las Vegas 89147 — Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen®. Dr. Jan Duffy represents buyers at the sales center.',
  showHeading = true,
  className,
}: SiennaRidgeCollectionsHubProps) {
  return (
    <div className={className}>
      {showHeading ? (
        <SectionHeading
          eyebrow="Lennar New Construction"
          title={title}
          description={description}
          className="mb-10"
        />
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SIENNA_RIDGE_COLLECTIONS.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <Link
          href="/sienna-ridge-lennar-las-vegas"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          <Layers className="h-4 w-4 mr-1.5" />
          Sienna Ridge community guide
        </Link>
        <Link href="/next-gen-homes-sienna-ridge" className="text-blue-600 hover:underline font-medium">
          Next Gen® homes overview
        </Link>
        <Link href="/sienna-ridge-floor-plans" className="text-blue-600 hover:underline font-medium">
          Compare all floor plans
        </Link>
        <Link href="/lennar-buyer-agent-las-vegas" className="text-blue-600 hover:underline font-medium">
          Lennar buyer agent guide
        </Link>
      </div>
    </div>
  )
}
