"use client"

import Link from 'next/link'
import { ArrowLeft, BookOpen, Chrome, Search, Target, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function GetClientsTabGuide() {
  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HEADER ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link
              href="/university/docs"
              className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Documentation
            </Link>
          </div>

          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-ink-100 shadow-soft rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-ember-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">Get Clients Tab Guide</h1>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-5 text-[11px] font-semibold text-ink-500 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 12 min read</span>
              <span className="flex items-center gap-1.5 text-signal-600"><CheckCircle className="w-3.5 h-3.5" /> Beginner friendly</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CONTENT ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="prose prose-custom max-w-none">
            <Reveal>
              <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-8 mb-16 not-prose">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Using the browser extension",
                    "Managing job bookmarks",
                    "Understanding contact scores",
                    "Automated search agent"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-ink-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-ember-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <h2 className="flex items-center gap-3">
              <Chrome className="h-6 w-6 text-ember-600" />
              Browser Extension Overview
            </h2>

            <p>
              The Quinton browser extension transforms how you interact with job boards, turning passive browsing into active client acquisition. It works seamlessly with major job boards like LinkedIn and Indeed.
            </p>

            <div className="bg-yellow-500/5 border-l-4 border-yellow-500 p-6 my-10 not-prose rounded-r-xl">
              <h3 className="text-yellow-600 font-semibold mb-2 uppercase tracking-widest text-xs">Pro Tip</h3>
              <p className="text-ink-700 text-sm">
                The extension activates when you search for jobs or click into specific postings. It won't appear on standard homepage feeds.
              </p>
            </div>

            <h2>Understanding Contact Scores</h2>
            <p>Quinton assigns scores based on relevance to the specific job posting:</p>

            <div className="space-y-4 my-10 not-prose">
              {[
                { score: "100", label: "Job Poster", desc: "The person who actually posted the listing. Highest priority.", color: "text-signal-600" },
                { score: "80-99", label: "High Relevance", desc: "Hiring managers or department heads related to the role.", color: "text-ember-600" },
                { score: "60-79", label: "Medium Relevance", desc: "HR professionals or team members with influence.", color: "text-ink-500" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-ink-100 shadow-soft rounded-xl p-6 flex justify-between items-center gap-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-300 mb-1">Relevance</div>
                    <div className={`text-2xl font-semibold ${item.color}`}>{item.score}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-ink-900 font-semibold text-sm mb-1">{item.label}</div>
                    <p className="text-ink-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-3">
              <Search className="h-6 w-6 text-ember-600" />
              Search Agent (Beta)
            </h2>

            <p>
              The Search Agent automates the entire prospecting workflow, from finding jobs to drafting personalized outreach messages. It scans multiple boards and enriches data while you focus on relationships.
            </p>

            <Reveal>
              <div className="bg-white border border-ember-600/20 shadow-soft rounded-2xl p-8 my-12 not-prose text-center">
                <h3 className="text-xl font-semibold text-ink-900 mb-4">Master the Workflow</h3>
                <p className="text-ink-500 mb-8 max-w-md mx-auto">See the Search Agent in action with our comprehensive video tutorial.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                    <Link href="https://www.loom.com/share/4b3ded41e66e48b3bc468678dc473d36" target="_blank">
                      Watch Tutorial
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-ink-100 text-ink-900 hover:bg-white h-12 px-6 rounded-full text-[15px] font-medium" asChild>
                    <Link href="/university/docs/automation/workflows">
                      Learn Automation
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </article>
        </div>
      </section>
    </div>
  )
}
