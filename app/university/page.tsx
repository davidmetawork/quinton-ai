"use client"

import Link from 'next/link'
import { ArrowRight, BookOpen, Video, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function UniversityPage() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

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
              University
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
              Quinton{' '}
              <span className="font-serif-italic text-gradient-ember">University</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Master the strategies that help recruiting agencies boost placements while reclaiming 40 hours monthly. Comprehensive guides, tutorials, and resources built for the modern recruiter.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href="/university/docs">
                  <BookOpen className="w-4 h-4 mr-1.5" />
                  Start Learning
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-ink-100 hover:bg-white text-[15px] text-ink-900"
                asChild
              >
                <Link href="/university/videos">
                  <Video className="w-4 h-4 mr-1.5" />
                  Watch Tutorials
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="h-12 px-5 rounded-full text-[15px] text-ember-700 hover:bg-ember-600/10"
                asChild
              >
                <Link href="https://facebook.com/groups/quintonai" target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4 mr-1.5" />
                  Join Community
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── STATS ─────────────── */}
      <section className="py-16 md:py-20 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 mb-1">40</div>
                <div className="text-[11px] text-ink-500 font-medium uppercase tracking-[0.2em]">Hours saved per month</div>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 mb-1">100+</div>
                <div className="text-[11px] text-ink-500 font-medium uppercase tracking-[0.2em]">Agencies using Quinton</div>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 mb-1">Weekly</div>
                <div className="text-[11px] text-ink-500 font-medium uppercase tracking-[0.2em]">New content and insights</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── LEARN YOUR WAY ─────────────── */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Learn your way
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Pick your{' '}
                <span className="font-serif-italic text-gradient-ember">format</span>.
              </h2>
              <p className="mt-5 text-ink-500 text-lg">
                Choose from video tutorials, written guides, or weekly insights
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal delay={0}>
              <Link href="/university/videos" className="group block h-full">
                <div className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft hover:shadow-lift transition-shadow p-7 flex flex-col">
                  <div className="w-12 h-12 bg-cream-100 border border-ink-100 rounded-xl flex items-center justify-center mb-5">
                    <Video className="w-5 h-5 text-ember-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink-900 mb-2">Video Tutorials</h3>
                  <p className="text-ink-500 text-[14px] leading-relaxed mb-6 flex-1">
                    Step-by-step video guides showing you exactly how to use every feature of the Quinton platform.
                  </p>
                  <div className="flex items-center text-action-600 font-medium text-sm">
                    <span>Watch tutorials</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <Link href="/university/docs" className="group block h-full">
                <div className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft hover:shadow-lift transition-shadow p-7 flex flex-col">
                  <div className="w-12 h-12 bg-cream-100 border border-ink-100 rounded-xl flex items-center justify-center mb-5">
                    <BookOpen className="w-5 h-5 text-ember-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink-900 mb-2">Documentation</h3>
                  <p className="text-ink-500 text-[14px] leading-relaxed mb-6 flex-1">
                    Comprehensive written guides covering setup, automation, integrations, and best practices.
                  </p>
                  <div className="flex items-center text-action-600 font-medium text-sm">
                    <span>Read docs</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link href="/university/blog" className="group block h-full">
                <div className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft hover:shadow-lift transition-shadow p-7 flex flex-col">
                  <div className="w-12 h-12 bg-cream-100 border border-ink-100 rounded-xl flex items-center justify-center mb-5">
                    <FileText className="w-5 h-5 text-ember-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink-900 mb-2">Weekly Blog</h3>
                  <p className="text-ink-500 text-[14px] leading-relaxed mb-6 flex-1">
                    Fresh insights, industry trends, success stories, and advanced strategies published every week.
                  </p>
                  <div className="flex items-center text-action-600 font-medium text-sm">
                    <span>Read latest posts</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
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
              <span className="font-serif-italic text-gradient-ember">scale</span>{' '}
              your agency?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink-500 max-w-xl mx-auto">
              Join the top recruiting agencies already using Quinton to find better candidates and close more clients.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
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
