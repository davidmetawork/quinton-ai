"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, ArrowLeft, Clock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function ContactPage() {
  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream-100 pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Home
            </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance">
                Get in{' '}
                <span className="font-serif-italic text-gradient-ember">touch</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed text-balance">
                Ready to scale your recruiting outbound? We&rsquo;d love to hear from you and discuss how Quinton AI can help your agency.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── CONTACT INFO ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Primary Contact */}
            <Reveal>
              <div className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft overflow-hidden">
                <div className="pt-10 pb-8 px-8 text-center border-b border-ink-100">
                  <div className="bg-cream-100 border border-ink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-5 h-5 text-ember-600" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900 mb-2">Direct Contact</h2>
                  <p className="text-ink-500 text-[14px]">
                    Reach out directly for personalized assistance
                  </p>
                </div>
                <div className="p-10 text-center">
                  <div className="mb-8">
                    <div className="text-2xl font-semibold text-ink-900 mb-1">David Phillips</div>
                    <div className="text-ink-300 font-medium uppercase tracking-[0.2em] text-[10px] mb-4">Founder</div>
                    <a
                      href="mailto:david@quinton.ai"
                      className="text-lg text-ember-700 hover:text-ember-600 transition-colors font-semibold"
                    >
                      david@quinton.ai
                    </a>
                  </div>
                  <Button
                    asChild
                    className="w-full h-12 bg-action-500 hover:bg-action-600 text-white rounded-full text-[15px] font-medium shadow-lift"
                  >
                    <a href="mailto:david@quinton.ai?subject=Quinton AI Inquiry">
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Quick Support */}
            <div className="space-y-6">
              <Reveal delay={0.05}>
                <div className="rounded-2xl bg-white border border-ink-100 shadow-soft p-7">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="w-5 h-5 mr-3 text-ember-600" />
                    <h3 className="text-[17px] font-semibold text-ink-900">Schedule a Demo</h3>
                  </div>
                  <p className="text-ink-500 text-[14px] mb-5">
                    Book a personalized walkthrough of the platform
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-full border-ink-100 hover:bg-cream-100 text-ink-900"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-white border border-ink-100 shadow-soft p-7">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 mr-3 text-ember-600" />
                    <h3 className="text-[17px] font-semibold text-ink-900">Response Time</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-ink-100">
                      <span className="text-ink-500">General Inquiries</span>
                      <span className="text-ink-900 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-ink-100">
                      <span className="text-ink-500">Demo Requests</span>
                      <span className="text-ink-900 font-medium">Same business day</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-ink-500">Technical Support</span>
                      <span className="text-ink-900 font-medium">Within 4 hours</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── LOCATION ─────────────── */}
      <section className="py-20 md:py-24 bg-cream-50 border-t border-ink-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink-900 mb-3">
              Based in New York City
            </h2>
            <p className="text-ink-500">Helping recruiting agencies worldwide scale with AI.</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
