"use client"

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Server, Shield, TrendingUp, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export default function DedicatedEmailServersPage() {
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
              <div className="flex gap-2 mb-6">
                <span className="inline-block px-2 py-1 rounded bg-ember-600/15 text-ember-700 text-[10px] font-semibold uppercase tracking-widest">
                  Infrastructure
                </span>
                <span className="inline-block px-2 py-1 rounded bg-signal-500/15 text-signal-600 text-[10px] font-semibold uppercase tracking-widest">
                  Deliverability
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 mb-6 leading-tight text-balance">
                Dedicated Email Servers: The Invisible Edge in Outreach
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-8">
                Why dedicated infrastructure is essential for agencies that live or die by inbox placement, and how shared servers kill your deliverability.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-[10px] text-white font-semibold">DP</div>
                  <span>David Phillips</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 8, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Featured Image */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border border-ink-100 shadow-soft mb-16 aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern server infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Article Content */}
          <Reveal>
            <article className="prose prose-custom max-w-none">
              <p className="text-lg text-ink-700 leading-relaxed mb-10">
                When you're sending 10,000+ emails per month, shared infrastructure becomes your biggest liability. One bad actor on your server can tank your entire agency's deliverability overnight.
              </p>

              <h2 className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-ember-600" />
                The Shared Server Problem
              </h2>

              <p>
                Most email platforms cram hundreds of users onto the same sending infrastructure. When someone else gets flagged for spam, your IP reputation takes the hit. It's like sharing a credit score with strangers—their mistakes become your problem.
              </p>

              <div className="bg-cream-50 border-l-4 border-ember-600 p-6 my-10 not-prose rounded-r-xl">
                <h3 className="text-ember-700 font-semibold mb-2 uppercase tracking-widest text-xs">Reputation Contamination</h3>
                <p className="text-ink-700 text-sm">
                  Shared IP addresses mean shared reputations. One spammer on your server can blacklist your entire agency's outreach overnight, destroying months of careful sender reputation building.
                </p>
              </div>

              <h2>Why Quinton AI Went Dedicated</h2>

              <p>
                Quinton AI runs dedicated email infrastructure for every high-volume client. Your sending reputation is yours alone. No shared IPs, no cross-contamination, no surprises when your open rates suddenly crater because someone else got sloppy.
              </p>

              <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-8 my-12 not-prose">
                <h3 className="text-lg font-semibold text-ink-900 mb-6">Dedicated vs. Shared Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-ember-700 font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-600"></span>
                      Shared Servers
                    </h4>
                    <ul className="space-y-2 text-ink-500 text-xs">
                      <li>• Reputation contamination risk</li>
                      <li>• Unpredictable deliverability</li>
                      <li>• No control over IP warming</li>
                      <li>• Shared blacklist consequences</li>
                      <li>• Generic domain reputation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-signal-600 font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-500"></span>
                      Dedicated Infrastructure
                    </h4>
                    <ul className="space-y-2 text-ink-500 text-xs">
                      <li>• Isolated reputation management</li>
                      <li>• Predictable inbox placement</li>
                      <li>• Custom IP warming schedules</li>
                      <li>• Protected from others' mistakes</li>
                      <li>• Custom domain authentication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>The Technical Advantage</h2>

              <p>
                Dedicated servers let you control every aspect of your sending profile. Custom DKIM signatures, SPF records tailored to your domain, and DMARC policies that actually protect your brand. It's the difference between renting an apartment and owning your house.
              </p>

              <div className="bg-white border border-ember-600/20 shadow-soft rounded-xl p-8 my-10 not-prose">
                <h3 className="text-ember-700 font-semibold mb-4 uppercase tracking-widest text-xs">Technical Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Custom DKIM key rotation",
                    "Advanced bounce handling",
                    "Dedicated IP protocols",
                    "Real-time monitoring",
                    "Custom retry logic",
                    "Isolated feedback loops"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-ink-700 text-sm">
                      <div className="w-1 h-1 rounded-full bg-ember-600"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <h2>Real-World Impact</h2>

              <p>
                Agencies that switch to dedicated infrastructure typically see 15-25% improvements in inbox placement within 30 days. More importantly, they stop experiencing the random deliverability drops that plague shared-server users.
              </p>

              <div className="flex flex-col md:flex-row gap-6 my-12 not-prose text-center">
                {[
                  { val: "15-25%", label: "Better inbox placement", icon: Server },
                  { val: "90%", label: "Reduction in drops", icon: Shield },
                  { val: "3x", label: "Faster IP warming", icon: TrendingUp }
                ].map((stat, i) => (
                  <div key={i} className="flex-1 bg-white border border-ink-100 shadow-soft rounded-2xl p-6">
                    <stat.icon className="w-6 h-6 mx-auto mb-4 text-ember-600" />
                    <div className="text-2xl font-semibold tracking-tight text-ink-900 mb-1">{stat.val}</div>
                    <div className="text-ink-500 text-[10px] font-semibold uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-ink-700 leading-relaxed italic">
                In recruiting, your email infrastructure is your revenue infrastructure. Don't let someone else's mistakes cost you placements. Invest in dedicated servers and own your deliverability destiny.
              </p>
            </article>
          </Reveal>

          {/* CTA Section */}
          <Reveal>
            <div className="mt-20 pt-12 border-t border-ink-100">
              <div className="bg-white border border-ink-100 shadow-soft rounded-3xl p-12 text-center relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-ember-500/15 to-ember-700/10 blur-3xl"
                />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-balance">Upgrade to Dedicated</h2>
                  <p className="text-ink-500 mb-10 max-w-xl mx-auto text-lg">
                    Stop sharing your reputation. Get dedicated servers and predictable deliverability with Quinton AI.
                  </p>
                  <Button className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift" asChild>
                    <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Get Started Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
