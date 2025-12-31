import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfServicePage() {
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
              Terms of <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Service</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4">
              Terms and conditions governing your use of Quinton AI services.
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
              Welcome to Quinton AI Corp. ("Quinton", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, quinton.ai (the "Site"), and any services, features, content, or applications offered by Quinton (collectively, the "Services").
            </p>
            <p>
              Please read these Terms carefully before using our Services. By accessing or using the Services, you agree to be bound by these Terms.
            </p>

            <h2>2. Use of Services</h2>
            <h3>2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this eligibility requirement.
            </p>

            <h3>2.2 Account Security</h3>
            <p>
              You are responsible for safeguarding your account credentials and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The Services and their entire contents, features, and functionality are owned by Quinton, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p className="font-bold uppercase text-xs tracking-widest text-white">
              IN NO EVENT WILL QUINTON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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
