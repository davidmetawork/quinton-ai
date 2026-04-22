"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HEADER ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.08),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Home
            </Link>
          </div>

          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-[44px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance">
                Terms of{' '}
                <span className="font-serif-italic text-gradient-ember">Service</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed mb-4">
                Terms and conditions governing your use of Quinton AI services.
              </p>
              <p className="text-ink-300 text-xs font-semibold uppercase tracking-[0.2em]">
                Last updated: August 26, 2024
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── CONTENT ─────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose-custom max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Quinton AI Corp. (&ldquo;Quinton&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website, quinton.ai (the &ldquo;Site&rdquo;), and any services, features, content, or applications offered by Quinton (collectively, the &ldquo;Services&rdquo;).
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
            <p className="font-semibold uppercase text-xs tracking-[0.2em] text-ink-900">
              IN NO EVENT WILL QUINTON BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-8 not-prose">
              <p className="font-semibold text-ink-900 mb-1">Quinton AI Corp.</p>
              <p className="text-ink-500 text-sm mb-4">2435 S Sepulveda Blvd APT PH213<br />Los Angeles, CA 90064</p>
              <a href="mailto:david@quinton.ai" className="text-ember-700 hover:text-ember-600 font-semibold transition-colors">
                david@quinton.ai
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="py-12 border-t border-ink-100 text-center bg-cream-50">
        <p className="text-ink-300 text-sm">© 2025 Quinton AI Corp. All rights reserved.</p>
      </footer>
    </div>
  )
}
