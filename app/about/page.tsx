"use client"

import { Button } from '@/components/ui/button'
import { Database, Mail, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export default function AboutPage() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  const toolCategories = [
    {
      category: "Data & Enrichment",
      icon: Database,
      tools: ["Apollo", "ContactOut", "ZoomInfo", "Clay"],
      description: "Finding and enriching candidate contact information"
    },
    {
      category: "Outbound Automation",
      icon: Mail,
      tools: ["Smartlead", "Instantly", "Lemlist"],
      description: "Automating email sequences and follow-ups"
    },
    {
      category: "CRM & Pipeline",
      icon: Target,
      tools: ["Loxo", "HubSpot", "Salesforce"],
      description: "Managing candidates and client relationships"
    },
    {
      category: "LinkedIn Tools",
      icon: Zap,
      tools: ["Sales Navigator", "LinkedIn Recruiter"],
      description: "Professional networking and sourcing"
    }
  ]

  const stats = [
    { label: "Tools Replaced", value: "8+", icon: Layers },
    { label: "Cost Savings", value: "70%", icon: TrendingUp },
    { label: "Time Saved", value: "40hrs/wk", icon: Zap },
    { label: "Agencies Served", value: "100+", icon: Target }
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
              About Quinton
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
              The{' '}
              <span className="font-serif-italic text-gradient-ember">all-in-one</span>{' '}
              outbound platform.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Recruiting agencies are drowning in disconnected tools. We built Quinton to condense your entire tech stack into one AI-powered platform that actually works together.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                  Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
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

      {/* ─────────────── STATS ─────────────── */}
      <section className="py-16 md:py-20 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-ink-500 font-medium uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── THE PROBLEM ─────────────── */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                The problem
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Recruiting tech is{' '}
                <span className="font-serif-italic text-gradient-ember">broken</span>.
              </h2>
              <p className="mt-5 text-ink-500 text-lg">
                Modern agencies juggle 8-12 tools daily, leading to context switching fatigue and soaring costs.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {toolCategories.map((category, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white shadow-soft hover:shadow-lift transition-shadow p-6">
                  <div className="w-10 h-10 rounded-lg bg-cream-100 border border-ink-100 flex items-center justify-center mb-4">
                    <category.icon className="h-4 w-4 text-ink-900" />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink-900 mb-1.5">
                    {category.category}
                  </h3>
                  <p className="text-[14px] text-ink-500 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-500 bg-cream-100 border border-ink-100 px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── THE SOLUTION ─────────────── */}
      <section className="py-24 md:py-28 bg-cream-50 border-y border-ink-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                  The solution
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance mb-8">
                  Enterprise infrastructure,{' '}
                  <span className="font-serif-italic text-gradient-ember">built for agencies</span>.
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-signal-600" />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink-900 mb-1">Elite Deliverability</h3>
                      <p className="text-ink-500 leading-relaxed">Pre-warmed Microsoft 365 & Google Workspace inboxes on private servers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-signal-600" />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink-900 mb-1">15-Tiered Data Waterfall</h3>
                      <p className="text-ink-500 leading-relaxed">AI finds the best contact data across 15+ premium providers automatically.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-signal-600" />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink-900 mb-1">AI Personalization</h3>
                      <p className="text-ink-500 leading-relaxed">Custom outreach sequences written by AI using real-time prospect data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 bg-gradient-ember opacity-20 blur-2xl rounded-[28px]"
                />
                <div className="relative rounded-2xl bg-white border border-ink-100 shadow-lift p-8">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-100">
                    <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-[0.2em]">
                      Platform Comparison
                    </span>
                    <span className="inline-flex items-center gap-1 bg-ember-600 text-white rounded-full px-2.5 py-1 font-semibold text-[11px]">
                      Quinton AI
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-ink-700">Tool Management</span>
                      <span className="text-ink-900 font-semibold text-sm">One Central Hub</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-ink-700">Monthly Cost</span>
                      <span className="text-signal-600 font-semibold text-sm">~70% Lower</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-ink-700">Sourcing Speed</span>
                      <span className="text-ink-900 font-semibold text-sm">5x Faster</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-ink-700">Reply Rates</span>
                      <span className="text-ink-900 font-semibold text-sm">7-11% Average</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,138,61,0.12),transparent_60%)]"
        />
        <div className="container mx-auto px-6 max-w-4xl relative text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[0.98]">
              Ready to{' '}
              <span className="font-serif-italic text-gradient-ember">unify</span>{' '}
              your recruiting?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href="https://calendly.com/quintonai/30min">
                  Get Started Now <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
