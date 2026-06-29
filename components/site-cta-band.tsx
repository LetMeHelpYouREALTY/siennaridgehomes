import { Phone, Mail, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'

type SiteCtaBandProps = {
  title?: string
  description?: string
  showSearch?: boolean
}

export default function SiteCtaBand({
  title = 'Ready to Find Your Spring Valley Home?',
  description = 'Let Dr. Jan Duffy guide you through your home buying journey in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) with expert knowledge and personalized service.',
  showSearch = true,
}: SiteCtaBandProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">{title}</h2>
          <p className="text-xl mb-8 text-blue-50">{description}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <CalendlyPopupButton
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-50"
              label="Schedule time with me"
            />
            <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent" asChild>
              <a href={`tel:${NAP.phoneTel}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call {NAP.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent" asChild>
              <a href={`mailto:${NAP.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                Email {NAP.name}
              </a>
            </Button>
            {showSearch ? (
              <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent" asChild>
                <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                  <Home className="h-4 w-4 mr-2" />
                  Search Properties
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
