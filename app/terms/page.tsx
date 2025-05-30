import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Terms and conditions governing your use of Quinton AI services.
            </p>
            <p className="text-gray-500">
              Last updated: Monday, August 26th, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Quinton AI Corp. ("Quinton", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, quinton.ai (the "Site"), and any services, features, content, or applications offered by Quinton (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our Services. By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use of Services</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Eligibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this eligibility requirement.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed">
                  To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.3 Account Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for safeguarding your account credentials and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.4 Prohibited Conduct</h3>
                <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
                  <li>Violate or encourage others to violate the rights of third parties, including intellectual property rights</li>
                  <li>Post, upload, or distribute any content that is unlawful, defamatory, libelous, inaccurate, or invasive of privacy</li>
                  <li>Interfere with security-related features of the Services</li>
                  <li>Use any robot, spider, crawler, scraper, or other automated means to access the Services</li>
                  <li>Attempt to access any portion of the Services to which you have not been explicitly granted access</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Intellectual Property Rights</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.1 Ownership</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Services and their entire contents, features, and functionality are owned by Quinton, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.2 License</h3>
                <p className="text-gray-700 leading-relaxed">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services for your internal business purposes.
                </p>
              </div>
            </div>

            {/* User Content */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Content</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.1 Responsibility for Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are solely responsible for any content you post, upload, or distribute through the Services ("User Content").
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.2 License to User Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  By posting User Content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.1 Fees</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to pay all fees associated with the Services. We reserve the right to change our prices at any time.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.2 Billing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use third-party payment processors to bill you through a payment account linked to your account. The processing of payments will be subject to the terms, conditions, and privacy policies of the payment processor.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and bar access to the Services at our sole discretion, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed font-semibold">
                IN NO EVENT WILL QUINTON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Quinton AI Corp.</p>
                  <p>2435 S Sepulveda Blvd APT PH213</p>
                  <p>Los Angeles, CA 90064</p>
                  <p>
                    Email: <a href="mailto:david@quinton.ai" className="text-blue-600 hover:text-blue-700 underline">david@quinton.ai</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              <p>© 2025 Quinton AI Corp. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <span>•</span>
              <Link href="/status" className="hover:text-blue-600">Status</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 