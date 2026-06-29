import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NAP, formatFullAddressWithPlusCode } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | Southwest Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Privacy policy for Dr. Jan Duffy\'s Southwest Las Vegas real estate services. Learn how we protect your personal information and data.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
              <p className="text-center text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our real estate services. This may include your name, email address, 
                  phone number, and property preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our real estate 
                  services, communicate with you about properties and services, and personalize your 
                  experience with Dr. Jan Duffy's real estate services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">{NAP.name}</p>
                  <p>Email: {NAP.email}</p>
                  <p>Phone: {NAP.phone}</p>
                  <p>Address: {formatFullAddressWithPlusCode()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
