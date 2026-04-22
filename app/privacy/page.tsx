"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function PrivacyPolicyPage() {
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
                Privacy{' '}
                <span className="font-serif-italic text-gradient-ember">Policy</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed mb-4">
                How we collect, use, and protect your personal information.
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
              Welcome to Quinton AI Corp. (&ldquo;Quinton&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website quinton.ai (the &ldquo;Site&rdquo;) or use our services.
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
