"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check, ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [seatCount, setSeatCount] = useState([1])
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "If you are on a monthly plan, yes, you can cancel your subscription at any time. For annual plans you cancel at anytime and will have access through the end of your term."
    },
    {
      question: "What counts as a recruiter seat?",
      answer: "A recruiter seat is any individual user who actively uses Quinton AI for prospecting, outreach, or candidate management."
    },
    {
      question: "Do you offer discounts for agencies?",
      answer: "Yes, we offer discount for annual plans. Contact our sales team for custom pricing."
    },
    {
      question: "How do I get started?",
      answer: "Click the get started button and grab a time with our team to get onboarded. We'll help you configure everything for your agency's needs."
    }
  ]

  const plans = [
    {
      name: "Starter",
      description: "Everything you need to scale your agency's outbound.",
      monthlyPrice: 199,
      annualPrice: 149,
      isPerSeat: true,
      features: [
        "6 premium warmed inboxes",
        "AI personalized sequences",
        "Daily automated lead generation",
        "Real-time data enrichment",
        "Standard analytics",
        "Weekly check-in calls"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Team",
      description: "For agencies requiring custom scale and deep integrations.",
      monthlyPrice: null,
      annualPrice: null,
      isPerSeat: false,
      features: [
        "Custom premium inboxes",
        "Dedicated account manager",
        "Custom CRM integrations",
        "Advanced team analytics",
        "Priority 24/7 support",
        "White-label reporting",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

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
              Pricing
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
              Simple,{' '}
              <span className="font-serif-italic text-gradient-ember">transparent</span>{' '}
              pricing.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Choose the perfect plan to scale your recruiting outbound. No hidden fees, just growth.
            </p>
          </Reveal>

          {/* Billing Toggle */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-ink-900' : 'text-ink-300'}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span className={`text-sm font-medium ${isAnnual ? 'text-ink-900' : 'text-ink-300'}`}>Annual</span>
              {isAnnual && (
                <span className="inline-flex items-center gap-1 bg-signal-500/15 text-signal-600 rounded-full px-2.5 py-0.5 font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                  Save 25%
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── PRICING CARDS ─────────────── */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice
              const totalPrice = plan.isPerSeat && currentPrice ? currentPrice * seatCount[0] : currentPrice

              return (
                <Reveal key={plan.name} delay={index * 0.08}>
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden ${
                      plan.popular
                        ? "bg-white border border-ember-600/30 shadow-lift"
                        : "bg-white border border-ink-100 shadow-soft"
                    }`}
                  >
                    {plan.popular && (
                      <div
                        aria-hidden
                        className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br from-ember-500/15 to-ember-700/10 blur-3xl pointer-events-none"
                      />
                    )}
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-ember-600 text-white text-[10px] font-semibold px-3 py-1 uppercase tracking-[0.2em] rounded-bl-lg">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="relative pt-10 pb-8 px-8 text-center border-b border-ink-100">
                      <div className="text-2xl font-semibold tracking-tight text-ink-900 mb-2">{plan.name}</div>
                      <p className="text-ink-500 text-[14px] mb-6 max-w-xs mx-auto">
                        {plan.description}
                      </p>

                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-baseline justify-center gap-1">
                          {currentPrice === null ? (
                            <span className="text-5xl font-semibold text-ink-900 tracking-tight">Custom</span>
                          ) : (
                            <>
                              <span className="text-5xl font-semibold text-ink-900 tracking-tight">
                                ${totalPrice}
                              </span>
                              <span className="text-ink-500 font-medium">/month</span>
                            </>
                          )}
                        </div>
                        {plan.isPerSeat && currentPrice !== null && (
                          <div className="text-[11px] text-ink-300 font-medium uppercase tracking-[0.2em]">
                            ${currentPrice} per recruiter
                          </div>
                        )}
                        {isAnnual && currentPrice !== null && totalPrice !== null && (
                          <div className="mt-1 text-ember-700 text-sm font-medium">
                            Billed annually (${totalPrice * 12}/year)
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative p-8">
                      {plan.isPerSeat && (
                        <div className="mb-8 bg-cream-50 p-6 rounded-2xl border border-ink-100">
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-ember-600" />
                              <span className="text-[11px] font-semibold text-ink-900 uppercase tracking-[0.2em]">
                                Recruiter Seats
                              </span>
                            </div>
                            <span className="bg-ember-600 text-white px-3 py-1 rounded-lg font-semibold text-lg">
                              {seatCount[0]}
                            </span>
                          </div>
                          <Slider
                            defaultValue={[1]}
                            max={5}
                            min={1}
                            step={1}
                            value={seatCount}
                            onValueChange={setSeatCount}
                            className="my-4"
                          />
                          <div className="flex justify-between text-[10px] font-semibold text-ink-300 uppercase tracking-[0.2em] mt-2 px-1">
                            <span>1 Seat</span>
                            <span>5 Seats</span>
                          </div>
                        </div>
                      )}

                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-signal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-ink-700 text-[14px]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full h-12 rounded-full text-[15px] font-medium ${
                          plan.popular
                            ? "bg-action-500 hover:bg-action-600 text-white shadow-lift"
                            : "bg-ink-900 hover:bg-ink-700 text-cream-100"
                        }`}
                        asChild
                      >
                        <Link
                          href={plan.name === 'Starter' ? signupUrl : `https://calendly.com/quintonai/30min?a1=${plan.name}&a2=${seatCount[0]}`}
                          target={plan.name === 'Starter' ? '_blank' : undefined}
                          rel={plan.name === 'Starter' ? 'noopener noreferrer' : undefined}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-1.5 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="py-24 md:py-28 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Frequently asked{' '}
                <span className="font-serif-italic text-gradient-ember">questions</span>.
              </h2>
              <p className="mt-4 text-ink-500 text-lg">
                Everything you need to know about Quinton AI.
              </p>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.03}>
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl bg-white border border-ink-100 shadow-soft px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-ink-900 hover:no-underline py-5 font-medium text-[17px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-700 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
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
              Scale your agency&rsquo;s outbound{' '}
              <span className="font-serif-italic text-gradient-ember">today</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink-500 max-w-xl mx-auto">
              Join the top recruiting agencies using Quinton to find better candidates and close more clients.
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
