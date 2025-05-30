import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-500">
              Last updated: Monday, August 26th, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Quinton AI Corp. ("Quinton", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website quinton.ai (the "Site") or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect information that you provide directly to us, information we obtain automatically when you use our Site or services, and information from third-party sources.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Information You Provide to Us</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Contact information (such as name, email address, mailing address, phone number)</li>
                  <li>Account credentials (such as username and password)</li>
                  <li>Profile information (such as company name, job title)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Log and usage data (such as IP address, browser type, pages visited)</li>
                  <li>Device information (such as device ID, operating system)</li>
                  <li>Location information (such as general location inferred from IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use your information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending administrative information, updates, and promotional materials</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Monitoring and analyzing trends, usage, and activities</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Sharing of Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Service providers and business partners who perform services on our behalf</li>
                <li>In response to legal requests or to comply with applicable laws</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, sale, or transfer of business assets</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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
              <p>© 2024 Quinton AI Corp. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
              <span>•</span>
              <Link href="/status" className="hover:text-blue-600">Status</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 