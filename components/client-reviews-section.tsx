import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import JsonLd from '@/components/json-ld'
import { CLIENT_REVIEWS } from '@/lib/reviews-data'
import { buildReviewsSchema } from '@/lib/structured-data'
import { REVIEW_PROFILES } from '@/lib/site-config'

type ClientReviewsSectionProps = {
  title?: string
  subtitle?: string
  limit?: number
}

export default function ClientReviewsSection({
  title = 'What Clients Say About Dr. Jan Duffy',
  subtitle = 'Real stories from Las Vegas buyers, sellers, and investors. Read more verified reviews on Google and Zillow.',
  limit,
}: ClientReviewsSectionProps) {
  const reviews = limit ? CLIENT_REVIEWS.slice(0, limit) : CLIENT_REVIEWS

  return (
    <section className="py-16 bg-gray-50">
      <JsonLd id="client-reviews-schema" data={buildReviewsSchema(reviews)} />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">&ldquo;{review.quote}&rdquo;</blockquote>
                  <div className="font-semibold">{review.author}</div>
                  <div className="text-sm text-gray-500">
                    {review.role} · {review.location}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{review.source}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
              <Link href={REVIEW_PROFILES.google.readUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Read Reviews on Google
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={REVIEW_PROFILES.zillow.readUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Find Dr. Jan Duffy on Zillow
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={REVIEW_PROFILES.bhhs.readUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                BHHS Agent Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
