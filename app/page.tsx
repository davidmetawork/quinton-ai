"use client"

import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Mailbox,
  Gauge,
  Send,
  Workflow,
  ShieldCheck,
  Clock,
  Users,
  TrendingUp,
  Mail,
  LineChart,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { InteractiveHeroMock } from '@/components/product-mock/InteractiveHeroMock'
import { Reveal } from '@/components/Reveal'
import { QuintonMark } from '@/components/product-mock/QuintonMark'

const signupUrl = 'https://dev.quinton.ai/sign-up'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "Most agencies are fully operational within 24–48 hours. We handle the entire setup — email infrastructure, domain warming, integrations. You bring your ICP; we start the meetings.",
    },
    {
      question: "What makes Quinton different from Apollo, Instantly, or Smartlead?",
      answer:
        "Those are built for generic outbound. Quinton is built exclusively for recruiting agencies: agency-specific workflows, fee-based economics, candidate AND client sourcing in one platform, plus five premium warmed inboxes included free.",
    },
    {
      question: "Do I need technical skills?",
      answer:
        "Zero. If you can use LinkedIn, you can use Quinton. Our AI writes the sequences, enriches the data, and manages deliverability. You focus on closing.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Typical agencies see 7–11% positive reply rates, 3× more emails sent per recruiter, and 70% sign a new client within their first 45 days.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Flexible plans for agencies of every size. Every plan includes 5 premium warmed inboxes, AI sequences, and real-time enrichment. Book a demo to find the right fit.",
    },
  ]

  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        {/* backdrop */}
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream-100 pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="flex justify-center mb-8">
              <Link
                href="#story"
                className="inline-flex items-center gap-2 bg-white border border-ink-100 rounded-full pl-1.5 pr-4 py-1.5 text-[13px] text-ink-700 shadow-soft hover:shadow-lift transition-shadow"
              >
                <span className="inline-flex items-center gap-1 bg-signal-500/15 text-signal-600 rounded-full px-2 py-0.5 font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-500 animate-pulse" />
                  New
                </span>
                100+ recruiting agencies have switched to Quinton
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-center text-[44px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-5xl mx-auto">
              The AI Coworker
              <br className="hidden md:block" />
              <span className="font-serif-italic text-gradient-ember pr-1">built for</span>
              <span className="font-serif-italic text-ink-900"> recruiters.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Sign more clients. Source more candidates. Make more placements. All from one
              workspace your whole agency runs on.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                  Try now <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="h-12 px-5 rounded-full text-[15px] text-ink-700 hover:bg-white/70 hover:text-ink-900"
                asChild
              >
                <Link href="#demo">Watch the 90-second demo →</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-5 flex items-center justify-center gap-5 text-[13px] text-ink-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-signal-500" /> Setup in 24h
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-signal-500" /> 5 inboxes included
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-signal-500" /> Cancel anytime
              </div>
            </div>
          </Reveal>

          {/* Hero product preview */}
          <Reveal delay={0.25} y={40}>
            <div className="mt-16 md:mt-20 relative">
              <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-6 rounded-[40px] bg-gradient-to-b from-white/60 to-transparent blur-2xl"
              />
              <div className="absolute -inset-6 rounded-[32px] shadow-glow-ember pointer-events-none" />
              <InteractiveHeroMock className="relative" />

              {/* floating callout */}
              <div className="hidden lg:block absolute -right-8 top-24 bg-white border border-ink-100 rounded-xl shadow-lift px-3 py-2.5 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-ember-600" />
                  <span className="text-[12px] font-semibold text-ink-900">
                    Drafting 3 sequences
                  </span>
                </div>
                <p className="text-[11px] text-ink-500 leading-snug">
                  Personalizing to each prospect&rsquo;s role, company, and hiring signals…
                </p>
                <div className="mt-1.5 h-1 bg-ink-100 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-ember" />
                </div>
              </div>

              <div className="hidden lg:flex absolute -left-6 bottom-16 items-center gap-2 bg-white border border-ink-100 rounded-xl shadow-lift px-3 py-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-ink-900">New reply · Katie Kelly</div>
                  <div className="text-[11px] text-signal-600">Interested in talking</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── TRUST / PROOF BAR ─────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6">
                <div className="text-3xl font-semibold tracking-tight text-ink-900">7–11%</div>
                <div className="text-[13px] text-ink-500 mt-1">Avg. positive reply rate</div>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6">
                <div className="text-3xl font-semibold tracking-tight text-ink-900">70%</div>
                <div className="text-[13px] text-ink-500 mt-1">Sign a new client in 45 days</div>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6">
                <div className="text-3xl font-semibold tracking-tight text-ink-900">40 hrs</div>
                <div className="text-[13px] text-ink-500 mt-1">Saved per recruiter / month</div>
              </div>
            </div>
            <p className="text-center text-[13px] text-ink-300 mt-6">
              Based on aggregate data across 100+ recruiting agencies running Quinton.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CUSTOMER STORY (Ralph video) ─────────────── */}
      <section className="py-24 md:py-32 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Customer story
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Hear it from an agency that{' '}
                <span className="font-serif-italic text-gradient-ember">switched</span>.
              </h2>
              <p className="mt-4 text-ink-500 text-lg max-w-xl mx-auto">
                Ralph Cetrulo, founder of Bluerock, on what changed after Quinton.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="relative">
              <div
                className="absolute -inset-2 bg-gradient-ember opacity-20 blur-2xl rounded-[28px]"
                aria-hidden
              />
              <div className="relative rounded-2xl overflow-hidden border border-ink-100 shadow-lift bg-white">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://drive.google.com/file/d/1cqE3aGlLRx0xCj-ftvcqUfTLAhleFZW6/preview"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                    title="Ralph Cetrulo — Quinton AI customer testimonial"
                  />
                </AspectRatio>
              </div>
              <figcaption className="mt-5 flex items-center justify-center gap-3 text-[13px]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 text-white flex items-center justify-center font-semibold text-[12px]">
                  R
                </div>
                <div className="text-ink-700">
                  <span className="font-semibold text-ink-900">Ralph Cetrulo</span>
                  <span className="text-ink-500"> · Founder, Bluerock</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── PROBLEM / AGITATION ─────────────── */}
      <section id="story" className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                The honest truth
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Recruiting is not a{' '}
                <span className="font-serif-italic text-gradient-ember">software</span>{' '}
                problem.
                <br />
                It&rsquo;s a <span className="font-serif-italic">time</span> problem.
              </h2>
              <p className="mt-6 text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed">
                Every hour lost to manual prospecting, deliverability issues, or stale data is an
                hour you&rsquo;re not closing a placement. Quinton removes that hour.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7 h-full">
                <div className="text-[11px] tracking-[0.2em] uppercase text-ink-300 mb-3">
                  Without Quinton
                </div>
                <ul className="space-y-3.5 text-ink-700">
                  {[
                    "4+ hours a day on manual prospecting & list building",
                    "Cold emails vanishing into spam, 1–2% reply rates",
                    "Losing deals to competitors with faster outreach",
                    "Working nights and weekends just to keep pipeline alive",
                    "No predictable revenue, no predictable growth",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink-300 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-2xl border border-ember-600/20 bg-white p-7 h-full overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-ember-500/15 to-ember-700/10 blur-3xl"
                />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-ember-700 mb-3">
                    With Quinton
                  </div>
                  <ul className="space-y-3.5 text-ink-900">
                    {[
                      "50+ qualified leads generated automatically, every day",
                      "Premium warm inboxes hitting primary — 7–11% positive replies",
                      "Real-time candidate sourcing with verified contact data",
                      "Personalized sequences written in your tone, at scale",
                      "Predictable revenue and consistent client acquisition",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="w-4 h-4 text-signal-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── FEATURES BENTO ─────────────── */}
      <section className="py-24 md:py-32 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Everything included
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Built for agencies that want to{' '}
                <span className="font-serif-italic text-gradient-ember">scale</span>.
              </h2>
              <p className="mt-5 text-lg text-ink-500 text-balance">
                One workspace replaces your sourcing tool, your outbound stack, your CRM add-on, and
                your email warmup — plus an AI Coworker that actually ships meetings.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-6 gap-4 auto-rows-[220px]">
            <FeatureCard
              className="md:col-span-4"
              icon={Mailbox}
              title="Premium inboxes, included."
              body="5 warmed Google Workspace inboxes on private infrastructure. Proper SPF, DKIM, DMARC — so your emails actually land in the primary tab."
              accent
            />
            <FeatureCard
              className="md:col-span-2"
              icon={Sparkles}
              title="Agentic by default"
              body="Tell Quinton your audience. It goes and finds new business on its own."
            />
            <FeatureCard
              className="md:col-span-2"
              icon={Send}
              title="Sequences that read human"
              body="Personalized from live data — not Mad Libs."
            />
            <FeatureCard
              className="md:col-span-4"
              icon={Workflow}
              title="Candidate and client sourcing in one pane of glass."
              body="No more switching between Apollo, Clay, LinkedIn, and Instantly. Find them, enrich them, reach them — all from Quinton."
            />
            <FeatureCard
              className="md:col-span-2"
              icon={Gauge}
              title="Real-time data enrichment"
              body="Always fresh, always verified."
            />
            <FeatureCard
              className="md:col-span-2"
              icon={LineChart}
              title="Analytics that guide the next move"
              body="Know what's working before the numbers age out."
            />
            <FeatureCard
              className="md:col-span-2"
              icon={ShieldCheck}
              title="CRM-ready integrations"
              body="Plug into the stack you already use."
            />
          </div>
        </div>
      </section>

      {/* ─────────────── FOUNDER MOMENT ─────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Why we built it
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="text-center font-serif-italic text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ink-900 tracking-tight text-balance">
              &ldquo;We didn&rsquo;t build Quinton to sell another outbound tool. We built it
              because the tools recruiters were handed weren&rsquo;t built for how recruiting
              actually works.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-white text-sm font-semibold">
                Q
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-ink-900">The Quinton Team</div>
                <div className="text-[13px] text-ink-500">
                  Built by ex-recruiters and engineers from top AI labs
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <section className="py-24 md:py-32 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Loved by operators
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Agencies that switched,{' '}
                <span className="font-serif-italic text-gradient-ember">stayed</span>.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "Quinton transformed our agency. 3× more meetings with half the effort. The personalization is scary good.",
                author: "Sarah Jenkins",
                role: "Agency Owner",
                company: "TechRecruit",
              },
              {
                quote:
                  "Finally, a tool that understands the agency workflow. Four new clients in our first two months. The ROI is insane.",
                author: "Mike Thompson",
                role: "Senior Recruiter",
                company: "Apex Systems",
              },
              {
                quote:
                  "The premium inboxes alone are worth the subscription. Deliverability went from 30% to 95%. Game changer.",
                author: "Jessica Rodriguez",
                role: "Director of Recruitment",
                company: "HireFast",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure className="h-full rounded-2xl bg-white border border-ink-100 shadow-soft p-7 flex flex-col">
                  <div className="flex gap-0.5 text-ember-600 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2.5l2.9 6.5 7.1.6-5.4 4.7 1.7 6.9L12 17.5l-6.3 3.7 1.7-6.9L2 9.6l7.1-.6L12 2.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-ink-700 leading-relaxed text-[15px] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 text-white flex items-center justify-center font-semibold text-[13px]">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">{t.author}</div>
                      <div className="text-[12px] text-ink-500">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── DEMO VIDEO ─────────────── */}
      <section id="demo" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                See it in action
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                90 seconds to understand{' '}
                <span className="font-serif-italic text-gradient-ember">why</span>.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-ink-100 shadow-lift bg-white">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.loom.com/embed/770532d61beb440c94f2a39d799664fa?sid=03e3dd8f-8261-443f-bb08-c65fa67581c9"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="Quinton AI Demo"
                />
              </AspectRatio>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── GUARANTEE ─────────────── */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <div className="rounded-3xl bg-ink-900 text-cream-100 p-8 md:p-12 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-ember-500/30 to-ember-700/20 blur-3xl"
              />
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                <div className="w-14 h-14 rounded-2xl bg-ember-600/20 border border-ember-600/30 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7 text-ember-500" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-ember-500 mb-2">
                    The Quinton Guarantee
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                    Set up in 24 hours, or your first month is free.
                  </h3>
                  <p className="text-cream-100/70 text-[15px] max-w-2xl">
                    We handle the inbox warmup, domain auth, and integrations for you. If you
                    aren&rsquo;t live and sending within a business day, we&rsquo;ll refund your
                    first month — no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Questions, answered.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="rounded-2xl bg-white border border-ink-100 overflow-hidden shadow-soft">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-ink-900 text-[17px]">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-500 transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-ink-700 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              </Reveal>
            ))}
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
            <QuintonMark className="w-10 h-10 mx-auto mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[0.95]">
              Your next placement is <br />
              <span className="font-serif-italic text-gradient-ember">one sequence away</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink-500 max-w-xl mx-auto">
              Join 100+ agencies using Quinton to sign more clients and source more candidates. Live
              in 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
                asChild
              >
                <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                  Try now <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-ink-100 hover:bg-white text-[15px] text-ink-900"
                asChild
              >
                <Link href="/about">Talk to the team</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

/* ── Small helpers ── */

function FeatureCard({
  icon: Icon,
  title,
  body,
  className = "",
  accent = false,
}: {
  icon: typeof Zap
  title: string
  body: string
  className?: string
  accent?: boolean
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 border overflow-hidden ${className} ${
        accent
          ? "bg-ink-900 text-cream-100 border-ink-900"
          : "bg-white border-ink-100 shadow-soft hover:shadow-lift transition-shadow"
      }`}
    >
      {accent && (
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-ember-500/30 to-ember-700/20 blur-3xl"
        />
      )}
      <div className="relative flex flex-col h-full">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
            accent ? "bg-ember-600/20 border border-ember-600/30" : "bg-cream-100 border border-ink-100"
          }`}
        >
          <Icon className={`w-4 h-4 ${accent ? "text-ember-500" : "text-ink-900"}`} />
        </div>
        <h3 className={`text-[17px] font-semibold tracking-tight mb-1.5 ${accent ? "" : "text-ink-900"}`}>
          {title}
        </h3>
        <p
          className={`text-[14px] leading-relaxed ${
            accent ? "text-cream-100/70" : "text-ink-500"
          }`}
        >
          {body}
        </p>
      </div>
    </div>
  )
}
