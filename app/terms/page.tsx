import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NAP, formatFullAddress } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms of Service | Southwest Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Terms of service for Dr. Jan Duffy\'s Southwest Las Vegas real estate services. Read our terms and conditions for using our website and services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
              <p className="text-center text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Real Estate Services</h2>
                <p className="text-gray-600 mb-4">
                  Dr. Jan Duffy provides real estate services in Southwest Las Vegas, including Spring Valley 
                  (89117, 89147, 89148). All real estate transactions are subject to applicable state and 
                  federal laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Website Content</h2>
                <p className="text-gray-600 mb-4">
                  The content on this website is for informational purposes only and does not constitute 
                  professional advice. Property information is subject to change without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  Dr. Jan Duffy and this website shall not be liable for any direct, indirect, incidental, 
                  special, or consequential damages resulting from the use or inability to use the website 
                  or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of Nevada, 
                  without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For questions about these terms of service, please contact:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">{NAP.name}</p>
                  <p>Email: {NAP.email}</p>
                  <p>Phone: {NAP.phone}</p>
                  <p>Address: {formatFullAddress()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
