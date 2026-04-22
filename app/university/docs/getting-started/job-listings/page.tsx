"use client"

import Link from 'next/link'
import { ArrowLeft, Briefcase } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function JobListingsPage() {
  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HEADER ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link href="/university/docs" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Documentation
            </Link>
          </div>

          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-ink-100 shadow-soft rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-ember-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">Job Listings</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CONTENT ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <article className="prose prose-custom max-w-none">
              <p className="text-lg text-ink-700">Learn to track, filter, and manage all discovered job opportunities in one centralized location for maximum efficiency.</p>
              <h2>Streamlined BD</h2>
              <p>The job listings page is your command center for business development. View live opportunities enriched with decision-maker data.</p>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
