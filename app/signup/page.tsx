"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
          utm: {}
        })
      }
    }
  }, [calendlyLoaded])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Demo Call
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              See how Quinton can replace your entire recruiting tech stack with one AI-powered platform.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Screen Calendar Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          {!calendlyLoaded ? (
            <div className="flex items-center justify-center h-[700px] text-gray-500 bg-white rounded-xl border border-gray-200 shadow-lg">
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 animate-pulse text-blue-600" />
                <p className="text-lg">Loading calendar...</p>
              </div>
            </div>
          ) : (
            <div 
              className="calendly-inline-widget" 
              style={{ minWidth: '100%', height: '700px' }}
            ></div>
          )}
        </div>
      </section>

      {/* What You'll Learn Section - Below Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What You'll Learn on This Call
            </h2>
            <p className="text-lg text-gray-600">
              30-minute call, no commitment required
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Commitment</h4>
              <p className="text-gray-600">Just a friendly demo call</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Former LinkedIn & Google execs</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Setup</h4>
              <p className="text-gray-600">Live in 48 hours</p>
            </div>
          </div>

          {/* Social Proof */}
          <Card className="bg-blue-50 border-blue-200 max-w-lg mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium mb-3">Agencies Already Using Quinton</div>
              <div className="text-gray-600">
                "Quinton replaced our entire tech stack and saved us $2,000/month per recruiter"
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 