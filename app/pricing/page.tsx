"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check, ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [seatCount, setSeatCount] = useState([1]) // Using array for Radix slider compatibility

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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Simple, <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>transparent</span> pricing
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan to scale your recruiting outbound. No hidden fees, just growth.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="bg-white/10"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
            {isAnnual && (
              <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                Save 25%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              const totalPrice = plan.isPerSeat && currentPrice ? currentPrice * seatCount[0] : currentPrice;

              return (
                <Card 
                  key={plan.name} 
                  className={`relative bg-[#12121a] border-white/5 overflow-hidden transition-all duration-300 hover:border-violet-500/30 ${plan.popular ? 'ring-2 ring-violet-500/50 shadow-[0_0_40px_rgba(139,92,246,0.1)]' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-violet-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="pt-10 pb-8 text-center border-b border-white/5">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-400 mb-6">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-baseline justify-center gap-1">
                        {currentPrice === null ? (
                          <span className="text-5xl font-bold text-white tracking-tight">Custom</span>
                        ) : (
                          <>
                            <span className="text-5xl font-bold text-white tracking-tight">
                              ${totalPrice}
                            </span>
                            <span className="text-gray-500 font-medium">/month</span>
                          </>
                        )}
                      </div>
                      {plan.isPerSeat && currentPrice !== null && (
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                          ${currentPrice} per recruiter
                        </div>
                      )}
                      {isAnnual && currentPrice !== null && totalPrice !== null && (
                        <div className="mt-2 text-violet-400 text-sm font-medium">
                          Billed annually (${totalPrice * 12}/year)
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    {/* Seat Slider for Starter Plan */}
                    {plan.isPerSeat && (
                      <div className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Recruiter Seats</span>
                          </div>
                          <span className="bg-violet-500 text-white px-3 py-1 rounded-lg font-black text-lg">
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
                        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 px-1">
                          <span>1 Seat</span>
                          <span>5 Seats</span>
                        </div>
                      </div>
                    )}

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 bg-violet-500/20 rounded-full p-0.5">
                            <Check className="h-3.5 w-3.5 text-violet-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full h-14 text-base font-bold transition-all ${
                        plan.popular 
                          ? 'bg-white text-black hover:bg-gray-100 shadow-xl shadow-white/5' 
                          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                      asChild
                    >
                      <Link href={`https://calendly.com/quintonai/30min?a1=${plan.name}&a2=${seatCount[0]}`}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about Quinton AI.</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/5 rounded-xl px-6 bg-[#12121a]/50"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Scale your agency's outbound today.</h2>
          <p className="text-gray-400 mb-10 text-lg">Join the top recruiting agencies using Quinton to find better candidates and close more clients.</p>
          <Button className="bg-white text-black hover:bg-gray-100 h-14 px-10 text-lg font-semibold" asChild>
            <Link href="https://calendly.com/quintonai/30min">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
