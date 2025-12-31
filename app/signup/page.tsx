"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Users, Zap, Shield, CheckCircle } from 'lucide-react'

// Declare Calendly global type
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function SignupPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  const benefits = [
    "See how Quinton replaces 8+ recruiting tools",
    "Get a custom demo with your data",
    "Learn about our enterprise cold email infrastructure", 
    "Discover our 15-tiered data waterfall system",
    "Get pricing tailored to your agency size",
    "Understand our AI-powered candidate matching"
  ]

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      setCalendlyLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Initialize Calendly widget
  useEffect(() => {
    if (calendlyLoaded && window.Calendly) {
      const calendlyContainer = document.querySelector('.calendly-inline-widget')
      if (calendlyContainer) {
        calendlyContainer.innerHTML = ''
        
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/quintonai/30min',
          parentElement: calendlyContainer,
          prefill: {},
          utm: {},
          // Custom styling for Calendly
          styles: {
            backgroundColor: '12121a',
            textColor: 'ffffff',
            primaryColor: '8b5cf6'
          }
        })
      }
    }
  }, [calendlyLoaded])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Book Your <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>demo</span> call
            </h1>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              See how Quinton can replace your entire recruiting tech stack with one AI-powered platform.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-[#12121a] rounded-xl overflow-hidden border border-white/5">
              {!calendlyLoaded ? (
                <div className="flex items-center justify-center h-[700px]">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-4 animate-pulse text-violet-400" />
                    <p className="text-lg text-gray-400">Loading calendar...</p>
                  </div>
                </div>
              ) : (
                <div 
                  className="calendly-inline-widget" 
                  style={{ minWidth: '100%', height: '700px' }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Trust Indicators */}
      <section className="py-24 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What to expect</h2>
            <p className="text-gray-400">A 30-minute deep dive into your agency's outbound potential.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-[#12121a] p-6 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all">
                <CheckCircle className="h-5 w-5 text-violet-400 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Shield, title: "No Commitment", desc: "Just a friendly demo call" },
              { icon: Users, title: "Expert Support", desc: "Built by recruiting experts" },
              { icon: Zap, title: "Quick Setup", desc: "Live in 24-48 hours" }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-[#12121a]/50 rounded-2xl border border-white/5">
                <div className="w-16 h-16 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 border-white/10 max-w-xl mx-auto">
            <CardContent className="p-10 text-center">
              <div className="text-5xl font-bold text-white mb-2 tracking-tight">100+</div>
              <div className="text-violet-300 font-bold uppercase tracking-widest text-xs mb-6">Agencies Trust Quinton</div>
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "Quinton replaced our entire tech stack and allowed us to scale our client acquisition without adding more recruiters."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
