"use client"

import Link from 'next/link'
import { ArrowLeft, Mail, CheckCircle, AlertTriangle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function PremiumInboxesGuide() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

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
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 mb-6 text-balance">
              Premium Email Infrastructure Guide
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-xl text-ink-500 leading-relaxed mb-8">
              Understanding managed inboxes, deliverability, and why premium infrastructure is essential for success.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-5 text-[11px] font-semibold text-ink-500 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5">📖 8 min read</span>
              <span className="flex items-center gap-1.5">🎯 Beginner</span>
              <span className="flex items-center gap-1.5">📧 Email Infrastructure</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CONTENT ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Video Tutorial Link */}
          <Reveal>
            <div className="bg-white border border-ember-600/20 shadow-soft rounded-2xl p-8 mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Play className="w-32 h-32 text-ember-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-5 w-5 text-ember-600 fill-ember-600" />
                  <h3 className="text-lg font-semibold text-ink-900">Video Tutorial Available</h3>
                </div>
                <p className="text-ink-500 mb-6 max-w-2xl">
                  Watch our comprehensive video explanation of premium email infrastructure and managed inboxes.
                </p>
                <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                  <Link href="/university/videos">
                    Watch Tutorial
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <article className="prose prose-custom max-w-none">
            <Reveal>
              <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-8 mb-16 not-prose">
                <h2 className="text-xl font-semibold text-ink-900 mb-6">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Why cold email is different",
                    "Risks of using primary inboxes",
                    "Essential infrastructure components",
                    "Quinton's managed solution",
                    "Using the unified inbox"
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
              <Mail className="h-6 w-6 text-ember-600" />
              Cold Email vs. Regular Email
            </h2>

            <p>
              Before diving into premium infrastructure, it's crucial to understand how cold email differs from regular email communication.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <div className="bg-white border border-ink-100 shadow-soft rounded-xl p-6">
                <h3 className="text-ink-900 font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-signal-600" />
                  Regular Email
                </h3>
                <ul className="space-y-2 text-sm text-ink-500">
                  <li>• People you know</li>
                  <li>• Existing history</li>
                  <li>• Transactional alerts</li>
                  <li>• Expected communication</li>
                </ul>
              </div>

              <div className="bg-white border border-ink-100 shadow-soft rounded-xl p-6">
                <h3 className="text-ink-900 font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  Cold Email
                </h3>
                <ul className="space-y-2 text-sm text-ink-500">
                  <li>• Unknown recipients</li>
                  <li>• No previous history</li>
                  <li>• Unsolicited outreach</li>
                  <li>• Spam red flags</li>
                </ul>
              </div>
            </div>

            <h2>The Primary Inbox Trap</h2>
            <p>Sending cold emails from your primary business inbox can have serious consequences, including domain blacklisting and permanent reputation damage.</p>

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 my-12 not-prose">
              <h3 className="text-red-600 font-semibold mb-4 uppercase tracking-widest text-xs">Consequences</h3>
              <ul className="space-y-3 text-ink-700 text-sm">
                <li><strong>Domain Blacklisting:</strong> Your entire domain flagged as spam.</li>
                <li><strong>Reputation Damage:</strong> Permanent damage to your sender score.</li>
                <li><strong>Business Risk:</strong> Critical emails to clients being blocked.</li>
              </ul>
            </div>

            <h2>Essential Infrastructure</h2>
            <p>Proper cold email requires technical components like DKIM, DMARC, SPF, and a consistent warm-up process on private servers.</p>

            <Reveal>
              <div className="bg-white border border-ember-600/20 shadow-soft rounded-2xl p-8 my-12 not-prose">
                <h3 className="text-xl font-semibold text-ink-900 mb-4">The Managed Advantage</h3>
                <p className="text-ink-500 mb-6">Quinton handles all of this automatically. Every account includes 5 premium warmed inboxes configured for maximum deliverability.</p>
                <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                  <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Get Started Now</Link>
                </Button>
              </div>
            </Reveal>
          </article>
        </div>
      </section>
    </div>
  )
}
