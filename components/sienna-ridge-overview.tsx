import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Home, Sun } from 'lucide-react'
import { SIENNA_RIDGE, formatCommunityPriceRange } from '@/lib/sienna-ridge-community'

export default function SiennaRidgeOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            Prime Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{SIENNA_RIDGE.location}</p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-semibold text-blue-800">Sienna Ridge by {SIENNA_RIDGE.builder}</p>
            <p className="text-sm text-blue-600">Las Vegas, NV {SIENNA_RIDGE.postalCode}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-blue-600" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-600">
            {SIENNA_RIDGE.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Sun className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">$</span>
            Base Price Range
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-blue-600 mb-2">{formatCommunityPriceRange()}</p>
          <p className="text-gray-600">
            Four Lennar collections from 1,966 to 2,640 sq ft — Kingsbury, Skyland, Glenbrook, and Bellevue Next Gen®.
            Pricing varies by plan, elevation, and lot — contact Dr. Jan Duffy for current availability and incentives.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
