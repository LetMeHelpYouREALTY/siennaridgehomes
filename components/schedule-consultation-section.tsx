import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CalendlyInlineWidget from '@/components/calendly-inline-widget'
import CalendlyPopupButton from '@/components/calendly-popup-button'

type ScheduleConsultationSectionProps = {
  title?: string
  description?: string
  showPopupFallback?: boolean
}

export default function ScheduleConsultationSection({
  title = 'Schedule a Private 15-Minute Conversation',
  description = 'Book time with Dr. Jan Duffy to discuss your Southwest Las Vegas home search, Sienna Ridge new construction, or buyer strategy.',
  showPopupFallback = true,
}: ScheduleConsultationSectionProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CalendlyInlineWidget />
        {showPopupFallback ? (
          <p className="text-center text-sm text-gray-600 mt-4">
            Prefer a popup?{' '}
            <CalendlyPopupButton variant="link" className="h-auto p-0 text-blue-600" showIcon={false}>
              Schedule time with me
            </CalendlyPopupButton>
          </p>
        ) : null}
      </CardContent>
    </Card>
  )
}
