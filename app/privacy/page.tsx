import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Privacy <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Policy</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4">
              How we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
              Last updated: August 26, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="prose prose-custom max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Quinton AI Corp. ("Quinton", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website quinton.ai (the "Site") or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use our Site or services, and information from third-party sources.
            </p>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Contact information (name, email, mailing address, phone)</li>
              <li>Account credentials (username and password)</li>
              <li>Profile information (company name, job title)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>Log and usage data (IP address, browser type, pages visited)</li>
              <li>Device information (device ID, operating system)</li>
              <li>Location information (general location inferred from IP)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use your information for various purposes, including providing and improving our services, processing transactions, and communicating with you about updates or promotional materials.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 not-prose">
              <p className="font-bold text-white mb-1">Quinton AI Corp.</p>
              <p className="text-gray-400 text-sm mb-4">2435 S Sepulveda Blvd APT PH213<br />Los Angeles, CA 90064</p>
              <a href="mailto:david@quinton.ai" className="text-violet-400 hover:text-violet-300 font-bold transition-colors">
                david@quinton.ai
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm">© 2025 Quinton AI Corp. All rights reserved.</p>
      </footer>
    </div>
  )
}
