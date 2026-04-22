"use client"

import Link from 'next/link'
import { ArrowRight, BookOpen, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Everything you need to begin your journey with Quinton AI",
      icon: BookOpen,
      docs: [
        {
          title: "Get Clients Tab Guide",
          description: "Master the browser extension and search agent for client acquisition",
          href: "/university/docs/getting-started/get-clients-tab",
          time: "12 min read"
        },
        {
          title: "Find Candidates Guide",
          description: "Search for candidates, find personal contact information, and send targeted outreach",
          href: "/university/docs/getting-started/find-candidates",
          time: "10 min read"
        },
        {
          title: "Premium Email Infrastructure",
          description: "Learn about managed inboxes, email deliverability, and why premium infrastructure matters",
          href: "/university/docs/getting-started/premium-inboxes",
          time: "8 min read"
        },
        {
          title: "Contacts & CRM Features",
          description: "Master the contacts page to manage prospects, candidates, and track all outreach activity",
          href: "/university/docs/getting-started/contacts-crm",
          time: "6 min read"
        },
        {
          title: "Job Listings & Workflow Management",
          description: "Learn to track, filter, and manage all discovered job opportunities in one centralized location",
          href: "/university/docs/getting-started/job-listings",
          time: "5 min read"
        }
      ]
    }
  ]

  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream-100 pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl text-center">
          <Reveal>
            <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
              Docs
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
              Documentation{' '}
              <span className="font-serif-italic text-gradient-ember">Hub</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Comprehensive guides and tutorials to help you master Quinton AI. From quick setup to advanced automation strategies.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href="/university/docs/getting-started/quick-start">
                  <Zap className="w-4 h-4 mr-1.5" />
                  Quick Start Guide
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-ink-100 hover:bg-white text-[15px] text-ink-900"
                asChild
              >
                <Link href="/university">Back to University</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── DOC SECTIONS ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-20">
            {docSections.map((section, index) => {
              const Icon = section.icon

              return (
                <div key={index} className="space-y-10">
                  <Reveal>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-white border border-ink-100 shadow-soft rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-6 h-6 text-ember-600" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-3">
                        {section.title}
                      </h2>
                      <p className="text-ink-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.docs.map((doc, docIndex) => (
                      <Reveal key={docIndex} delay={docIndex * 0.04}>
                        <Link href={doc.href} className="group block h-full">
                          <div className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft hover:shadow-lift transition-shadow p-7 flex flex-col">
                            <div className="flex items-center justify-between mb-5">
                              <div className="w-10 h-10 bg-cream-100 border border-ink-100 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-ember-600" />
                              </div>
                              <span className="text-[10px] font-semibold text-ink-300 uppercase tracking-[0.2em]">{doc.time}</span>
                            </div>
                            <h3 className="text-[17px] font-semibold tracking-tight text-ink-900 mb-2 group-hover:text-ember-700 transition-colors">
                              {doc.title}
                            </h3>
                            <p className="text-ink-500 text-[14px] leading-relaxed mb-6 flex-1">
                              {doc.description}
                            </p>
                            <div className="flex items-center text-action-600 font-medium text-sm mt-auto">
                              <span>Read guide</span>
                              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── HELP ─────────────── */}
      <section className="py-24 md:py-28 bg-cream-50 border-t border-ink-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
              Need more{' '}
              <span className="font-serif-italic text-gradient-ember">help</span>?
            </h2>
            <p className="text-ink-500 mb-10 text-lg">
              Our support team is here to help you succeed. Get personalized assistance and expert guidance.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-ink-100 hover:bg-white text-[15px] text-ink-900"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
