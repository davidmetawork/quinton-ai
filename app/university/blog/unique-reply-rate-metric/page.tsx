"use client"

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function UniqueReplyRatePage() {
  return (
    <div className="bg-cream-100 text-ink-900">
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link href="/university/blog" className="inline-flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Back to Insights
            </Link>
          </div>
          <Reveal>
            <div className="mb-8">
              <span className="inline-block px-2 py-1 rounded bg-ember-600/15 text-ember-700 text-[10px] font-semibold uppercase tracking-widest mb-6">
                Data & Analytics
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 mb-6 leading-tight text-balance">
                Stop Counting Ghosts: Unique Reply Rate
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-[10px] text-white font-semibold">DP</div>
                  <span>David Phillips</span>
                </div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Jan 1, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>4 min read</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <article className="prose prose-custom max-w-none">
              <p className="text-lg text-ink-700">Why unique first replies per prospect is the only metric that actually maps to hires, and how to stop chasing phantom engagement.</p>
              <h2>The Vanity Metric Trap</h2>
              <p>Open rates and click rates are interesting, but they don't pay the bills. In high-volume recruiting, the only number that matters is how many unique prospects actually engaged with you.</p>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
