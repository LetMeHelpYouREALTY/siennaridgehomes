import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Bed, Bath, Square } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { FeaturedListing } from '@/lib/listings-data'
import { formatListingPrice } from '@/lib/listings-data'

type FeaturedListingCardProps = {
  listing: FeaturedListing
}

export default function FeaturedListingCard({ listing }: FeaturedListingCardProps) {
  const statusClass =
    listing.status === 'New Construction Model'
      ? 'bg-green-100 text-green-800'
      : listing.status === 'Available Now'
        ? 'bg-blue-100 text-blue-800'
        : 'bg-purple-100 text-purple-800'

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 relative">
        <Image src={listing.image} alt={listing.imageAlt} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className={statusClass}>
            {listing.status}
          </Badge>
          <span className="text-sm text-gray-500">{listing.neighborhood}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{listing.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">
            {listing.city}, {listing.state} {listing.postalCode}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{listing.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{listing.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{listing.sqft.toLocaleString()} sq ft</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">{formatListingPrice(listing.price)}</div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/listings/${listing.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
