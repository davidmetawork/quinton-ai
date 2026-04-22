"use client"

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Play, Mail, AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function PremiumEmailInfrastructureBlog() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  return (
    <div className="bg-cream-100 text-ink-900">
      {/* Header */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/university/blog"
              className="inline-flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]"
            >
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
                Premium Email Infrastructure: Why Managed Inboxes Are Essential for Success
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-8">
                Discover why premium managed inboxes are crucial for cold email deliverability and how they give recruiting agencies a competitive edge.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-[10px] text-white font-semibold">DP</div>
                  <span>David Phillips</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Video Tutorial Link */}
          <Reveal>
            <div className="bg-white border border-ember-600/20 shadow-soft rounded-2xl p-8 mb-12 relative overflow-hidden group">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-ember-500/15 to-ember-700/10 blur-3xl"
              />
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Play className="w-32 h-32 text-ember-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-5 w-5 text-ember-600 fill-ember-600" />
                  <h3 className="text-lg font-semibold text-ink-900">Watch the Video Tutorial</h3>
                </div>
                <p className="text-ink-500 mb-6 max-w-2xl">
                  Prefer watching? This post is based on our comprehensive video explanation. Get additional insights and visual demonstrations.
                </p>
                <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                  <Link href="/university/videos">
                    Watch Tutorial
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Article Content */}
          <Reveal>
            <article className="prose prose-custom max-w-none">
              <p className="text-lg text-ink-700 leading-relaxed mb-10">
                If you've ever tried to scale cold email outreach for your recruiting agency, you've probably discovered a harsh reality: sending cold emails from your primary business inbox is a recipe for disaster. But why is this the case, and what's the solution?
              </p>

              <h2 className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-ember-600" />
                The Cold Email Challenge
              </h2>

              <p>
                Before diving into solutions, it's crucial to understand why cold email is fundamentally different from regular email communication. This distinction is what makes premium infrastructure necessary.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="bg-white border border-ink-100 shadow-soft rounded-xl p-6">
                  <h3 className="text-ink-900 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-signal-600" />
                    Regular Email
                  </h3>
                  <ul className="space-y-2 text-sm text-ink-500">
                    <li>• Emails to people you know</li>
                    <li>• Existing email history</li>
                    <li>• Transactional communications</li>
                    <li>• Expected communication</li>
                    <li>• High engagement rates</li>
                  </ul>
                </div>

                <div className="bg-white border border-ink-100 shadow-soft rounded-xl p-6">
                  <h3 className="text-ink-900 font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-ember-600" />
                    Cold Email
                  </h3>
                  <ul className="space-y-2 text-sm text-ink-500">
                    <li>• Messaging unknown recipients</li>
                    <li>• No previous email history</li>
                    <li>• Unsolicited outreach</li>
                    <li>• Triggers spam detection</li>
                    <li>• Lower initial engagement</li>
                  </ul>
                </div>
              </div>

              <h2>The Hidden Costs of DIY</h2>

              <p>
                Many recruiting agencies make the mistake of sending cold emails from their primary business inbox. This approach leads to serious consequences that can cripple your business operations.
              </p>

              <div className="bg-cream-50 border border-ink-100 rounded-xl p-8 my-10 not-prose">
                <h3 className="text-ember-700 font-semibold mb-4 uppercase tracking-widest text-xs">Domain Risks</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-ink-700 text-sm">
                    <span className="text-ember-600 font-semibold">•</span>
                    <span><strong>Domain Blacklisting:</strong> Your entire domain gets flagged as spam, affecting all communication.</span>
                  </li>
                  <li className="flex gap-3 text-ink-700 text-sm">
                    <span className="text-ember-600 font-semibold">•</span>
                    <span><strong>Client Issues:</strong> Legitimate emails to existing clients may not reach their inbox.</span>
                  </li>
                  <li className="flex gap-3 text-ink-700 text-sm">
                    <span className="text-ember-600 font-semibold">•</span>
                    <span><strong>Permanent Reputation Damage:</strong> Sender reputation is extremely difficult to recover once burned.</span>
                  </li>
                </ul>
              </div>

              <h2>The Technical Foundation</h2>

              <p>
                Proper cold email infrastructure requires four critical components that most agencies lack the time or expertise to manage:
              </p>

              <ol>
                <li><strong>Domain Authentication:</strong> Proper setup of DKIM, DMARC, and SPF records.</li>
                <li><strong>Email Warm-up:</strong> A gradual process of building sender reputation.</li>
                <li><strong>Sending Optimization:</strong> Intelligent timing and volume management.</li>
                <li><strong>Private Servers:</strong> Dedicated infrastructure to avoid reputation contamination.</li>
              </ol>

              <div className="bg-white border border-ember-600/20 shadow-soft rounded-2xl p-8 my-12 not-prose">
                <h3 className="text-xl font-semibold text-ink-900 mb-4">The Quinton Solution</h3>
                <p className="text-ink-500 mb-6">We provide fully managed, premium inboxes that handle all this complexity for you. You get 5 free warmed inboxes with every subscription.</p>
                <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                  <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Get Started Now</Link>
                </Button>
              </div>
            </article>
          </Reveal>

          {/* Footer CTA */}
          <Reveal>
            <div className="mt-20 pt-12 border-t border-ink-100 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-balance">Ready to sign more clients?</h3>
              <p className="text-ink-500 mb-8 max-w-xl mx-auto">Join 100+ agencies using Quinton's premium infrastructure to land more placements.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                  <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Sign Up for Quinton</Link>
                </Button>
                <Button variant="outline" className="h-12 px-6 rounded-full text-[15px] font-medium border-ink-100 text-ink-900 hover:bg-white" asChild>
                  <Link href="/university">Explore University</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
