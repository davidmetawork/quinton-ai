"use client"

import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, CheckCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function QuickStartGuide() {
  const steps = [
    {
      number: 1,
      title: "Set Up Your Account",
      description: "Complete your profile and configure basic settings",
      tasks: [
        "Complete your recruiter profile",
        "Set up your email signature",
        "Configure notification preferences",
        "Connect your calendar (optional)"
      ],
      estimatedTime: "10 minutes"
    },
    {
      number: 2,
      title: "Install Chrome Extension",
      description: "Add the Quinton Chrome extension for seamless prospecting",
      tasks: [
        "Download from Chrome Web Store",
        "Log in with your Quinton credentials",
        "Test the extension on LinkedIn",
        "Bookmark key job boards"
      ],
      estimatedTime: "5 minutes"
    },
    {
      number: 3,
      title: "Create Your First Client Search",
      description: "Find potential clients using the Get Clients platform",
      tasks: [
        "Navigate to the Get Clients tab",
        "Set up search criteria (industry, location)",
        "Review and export potential clients",
        "Add promising leads to your pipeline"
      ],
      estimatedTime: "15 minutes"
    },
    {
      number: 4,
      title: "Set Up Email Sequences",
      description: "Create automated outreach campaigns",
      tasks: [
        "Choose from pre-built templates",
        "Customize messaging for your niche",
        "Set up follow-up sequences",
        "Test with a small group first"
      ],
      estimatedTime: "20 minutes"
    },
    {
      number: 5,
      title: "Start Candidate Prospecting",
      description: "Find and reach out to potential candidates",
      tasks: [
        "Use Find Candidates platform",
        "Search by job title and location",
        "Find personal email addresses",
        "Send personalized outreach"
      ],
      estimatedTime: "15 minutes"
    }
  ]

  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HEADER ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-5xl">
          <div className="flex items-center mb-8">
            <Link href="/university/docs" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Docs
            </Link>
          </div>

          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-ink-100 shadow-soft rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-ember-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
                Quick Start Guide
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-5 text-[11px] font-semibold text-ink-500 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 15 min read</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 60 min setup</span>
              <span className="flex items-center gap-1.5 text-signal-600"><CheckCircle className="w-3.5 h-3.5" /> Beginner friendly</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CONTENT ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <div className="bg-white border border-ember-600/20 rounded-2xl shadow-soft p-8 mb-16 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-ember-500/15 to-ember-700/10 blur-3xl"
              />
              <div className="relative z-10">
                <h2 className="text-[17px] font-semibold text-ink-900 mb-5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-ember-600" />
                  What You&rsquo;ll Accomplish
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Complete Quinton AI workspace setup",
                    "Install and configure Chrome extension",
                    "Create first client and candidate searches",
                    "Launch first automated campaign",
                    "Master core features and workflows"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-ink-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-signal-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 mb-12 text-center text-balance">
              The 5-Step <span className="font-serif-italic text-gradient-ember">Process</span>
            </h2>
          </Reveal>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-7">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-11 h-11 bg-ink-900 text-cream-100 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                        <h3 className="text-[17px] font-semibold text-ink-900">{step.title}</h3>
                        <span className="text-[10px] font-semibold text-ink-500 bg-cream-100 border border-ink-100 px-2 py-1 rounded uppercase tracking-[0.2em] w-fit">
                          {step.estimatedTime}
                        </span>
                      </div>
                      <p className="text-ink-500 text-[14px] leading-relaxed mb-5">{step.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {step.tasks.map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-[13px] text-ink-700">
                            <div className="w-1 h-1 rounded-full bg-ember-600 flex-shrink-0" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── HELP ─────────────── */}
      <section className="py-24 md:py-28 bg-cream-50 border-t border-ink-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
              Need onboarding{' '}
              <span className="font-serif-italic text-gradient-ember">help</span>?
            </h2>
            <p className="text-ink-500 mb-10 text-lg">
              Our team can help you get fully set up in one 30-minute call.
            </p>
            <Button
              className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
              asChild
            >
              <Link href="https://calendly.com/quintonai/30min">Schedule Setup Call</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
