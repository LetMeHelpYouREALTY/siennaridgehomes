import Link from 'next/link'
import { Phone, Mail, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { NAP, formatFullAddressWithPlusCode } from '@/lib/site-config'

type SeoCtaSectionProps = {
  title: string
  description: string
}

export default function SeoCtaSection({ title, description }: SeoCtaSectionProps) {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              label="Schedule time with me"
            />
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href={`tel:${NAP.phoneTel}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call {NAP.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href={`mailto:${NAP.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                Email {NAP.name}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            <Calendar className="inline h-4 w-4 mr-1 align-text-bottom" />
            15-minute private conversation · {formatFullAddressWithPlusCode()}
          </p>
        </div>
      </div>
    </section>
  )
}
