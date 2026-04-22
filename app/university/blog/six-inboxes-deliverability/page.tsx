"use client"

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function SixInboxesPage() {
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
                Email Marketing
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 mb-6 leading-tight text-balance">
                Six Inboxes, One Recruiter: The Deliverability Play
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-[10px] text-white font-semibold">DP</div>
                  <span>David Phillips</span>
                </div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Dec 10, 2024</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>8 min read</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <article className="prose prose-custom max-w-none">
              <p className="text-lg text-ink-700">Learn how spreading your email cadence across multiple addresses improves deliverability and why the multi-inbox strategy is essential.</p>
              <h2>Spreading the Load</h2>
              <p>Sending 200 emails from one inbox is a high-risk strategy. Sending 30 emails from 6 different inboxes is a professional strategy. Quinton makes this multi-inbox setup effortless.</p>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
