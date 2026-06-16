export type ClientReview = {
  id: string
  author: string
  role: string
  location: string
  quote: string
  rating: number
  /** Where the testimonial is published or verified */
  source: 'Client testimonial' | 'Google' | 'Zillow'
}

/** Client quotes published on Dr. Jan Duffy's verified agent profiles and websites. */
export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'sarah-mike-johnson',
    author: 'Sarah & Mike Johnson',
    role: 'First-Time Homebuyers',
    location: 'Summerlin, Las Vegas',
    quote:
      'After losing 3 homes to cash buyers and bidding wars, we were exhausted. Dr. Jan found an off-market property that matched our vision exactly—and negotiated our first offer accepted, $50K under asking price. We closed in 18 days, stress-free.',
    rating: 5,
    source: 'Client testimonial',
  },
  {
    id: 'robert-diane-chen',
    author: 'Robert & Diane Chen',
    role: 'Retirees',
    location: 'Henderson, NV',
    quote:
      "We worried our home would sit on market for months. Dr. Jan's pre-listing staging and pricing strategy generated 8 competing offers in just 6 days. We accepted $125K over asking—enough to buy our Arizona retirement home in cash.",
    rating: 5,
    source: 'Client testimonial',
  },
  {
    id: 'alex-martinez',
    author: 'Alex Martinez',
    role: 'Real Estate Investor',
    location: 'Las Vegas, NV',
    quote:
      'Dr. Jan mapped out emerging Las Vegas neighborhoods before they peaked, found 3 undervalued properties, and structured deals that cash-flowed from day one. My portfolio is now $2.3M, generating $8,200/month passive income.',
    rating: 5,
    source: 'Client testimonial',
  },
  {
    id: 'alicia-marcus-bennett',
    author: 'Alicia & Marcus Bennett',
    role: 'Luxury Home Sellers',
    location: 'The Ridges, Summerlin',
    quote:
      'Dr. Duffy sold our Summerlin estate in six days with eight offers—$132K over list. Her team delivers the most polished marketing we have ever seen.',
    rating: 5,
    source: 'Client testimonial',
  },
  {
    id: 'jennifer-david-thompson',
    author: 'Jennifer & David Thompson',
    role: 'Luxury Home Buyers',
    location: 'The Ridges, Summerlin',
    quote:
      'Dr. Jan leveraged her private network to access an off-market listing in The Ridges that matched our exact specifications. We closed at fair market value and saved over $200K compared to public listing frenzy pricing.',
    rating: 5,
    source: 'Client testimonial',
  },
  {
    id: 'maria-rodriguez',
    author: 'Maria Rodriguez',
    role: 'First-Time Seller',
    location: 'North Las Vegas, NV',
    quote:
      "Dr. Jan's comparative market analysis pinpointed the sweet spot. Professional photography and virtual tours attracted 12 showings in the first week. We accepted an offer $95K above our original target and closed in 14 days.",
    rating: 5,
    source: 'Client testimonial',
  },
]
