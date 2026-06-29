/** Lennar Sienna Ridge — sales center at 8370 Caldera Hls Ave, Las Vegas NV 89147 */
export const SIENNA_RIDGE = {
  name: 'Sienna Ridge',
  builder: 'Lennar',
  postalCode: '89147',
  location:
    'Near Desert Breeze Park and the I-215, offering easy commutes throughout Southwest Las Vegas.',
  priceMin: 588_990,
  priceMax: 662_990,
  features: [
    "Lennar's Next Gen® suite for multi-generational living",
    'Downstairs bedroom floor plan options',
    'Energy-saving features including solar panels',
  ] as const,
} as const

export function formatCommunityPriceRange(includePlus = true) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
  const min = formatter.format(SIENNA_RIDGE.priceMin)
  const max = formatter.format(SIENNA_RIDGE.priceMax)
  return includePlus ? `${min} to ${max}+` : `${min} to ${max}`
}

export function communityPriceMinString() {
  return String(SIENNA_RIDGE.priceMin)
}

export function communityPriceMaxString() {
  return String(SIENNA_RIDGE.priceMax)
}
