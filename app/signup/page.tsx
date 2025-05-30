"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Check, ArrowLeft, Calendar, Users, Zap, Shield } from 'lucide-react'

// Declare Calendly global type
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function SignupPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<string | null>('solo')
  const [soloSeats, setSoloSeats] = useState([1])
  const [agencySeats, setAgencySeats] = useState([5])
  const [enterpriseSeats, setEnterpriseSeats] = useState([26])
  const [soloCredits, setSoloCredits] = useState([0])
  const [soloInboxes, setSoloInboxes] = useState([0])
  const [agencyCredits, setAgencyCredits] = useState([0])
  const [agencyInboxes, setAgencyInboxes] = useState([0])
  const [enterpriseCredits, setEnterpriseCredits] = useState([0])
  const [enterpriseInboxes, setEnterpriseInboxes] = useState([0])
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  const creditPackages = [
    { credits: 0, price: 0, annualPrice: 0, label: "No additional credits" },
    { credits: 1000, price: 70, annualPrice: 60, label: "+1,000 credits" },
    { credits: 2500, price: 175, annualPrice: 150, label: "+2,500 credits" },
    { credits: 5000, price: 350, annualPrice: 300, label: "+5,000 credits" },
    { credits: 10000, price: 700, annualPrice: 600, label: "+10,000 credits" }
  ]

  const inboxPackages = [
    { inboxes: 0, price: 0, annualPrice: 0, label: "No additional inboxes" },
    { inboxes: 5, price: 60, annualPrice: 50, label: "+5 inboxes" },
    { inboxes: 10, price: 120, annualPrice: 100, label: "+10 inboxes" },
    { inboxes: 25, price: 300, annualPrice: 250, label: "+25 inboxes" }
  ]

  const plans = [
    {
      id: 'solo',
      name: "Solo",
      description: "Perfect for individual recruiters",
      monthlyPrice: 199,
      annualPrice: 149,
      isPerSeat: true,
      minSeats: 1,
      maxSeats: 4,
      seats: soloSeats,
      setSeats: setSoloSeats,
      credits: soloCredits,
      setCredits: setSoloCredits,
      inboxes: soloInboxes,
      setInboxes: setSoloInboxes,
      features: [
        "Up to 5 recruiters",
        "500 enrichment credits per recruiter/month",
        "5 premium inboxes per recruiter",
        "Basic email sequences",
        "Standard support"
      ],
      popular: false
    },
    {
      id: 'agency',
      name: "Agency",
      description: "Most popular for growing agencies",
      monthlyPrice: 750,
      annualPrice: 650,
      isPerSeat: false,
      minSeats: 5,
      maxSeats: 25,
      seats: agencySeats,
      setSeats: setAgencySeats,
      credits: agencyCredits,
      setCredits: setAgencyCredits,
      inboxes: agencyInboxes,
      setInboxes: setAgencyInboxes,
      features: [
        "Up to 25 recruiters",
        "3,000 enrichment credits/month",
        "50 premium inboxes",
        "Advanced AI sequences",
        "Priority support"
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      description: "For large agencies",
      monthlyPrice: null,
      annualPrice: null,
      isPerSeat: false,
      minSeats: 26,
      maxSeats: 500,
      seats: enterpriseSeats,
      setSeats: setEnterpriseSeats,
      credits: enterpriseCredits,
      setCredits: setEnterpriseCredits,
      inboxes: enterpriseInboxes,
      setInboxes: setEnterpriseInboxes,
      features: [
        "Unlimited recruiters",
        "Custom enrichment credits",
        "Custom premium inboxes",
        "Custom AI training",
        "Dedicated support"
      ],
      popular: false
    }
  ]

  const calculatePrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return null
    
    let basePrice = 0
    if (plan.isPerSeat) {
      basePrice = (isAnnual ? plan.annualPrice : plan.monthlyPrice) * plan.seats[0]
    } else {
      basePrice = isAnnual ? plan.annualPrice : plan.monthlyPrice
    }

    // Add add-on costs
    const creditCost = isAnnual 
      ? creditPackages[plan.credits[0]]?.annualPrice || 0
      : creditPackages[plan.credits[0]]?.price || 0
    const inboxCost = isAnnual
      ? inboxPackages[plan.inboxes[0]]?.annualPrice || 0
      : inboxPackages[plan.inboxes[0]]?.price || 0
    
    return basePrice + creditCost + inboxCost
  }

  const generateCalendlyUrl = () => {
    const plan = plans.find(p => p.id === selectedPlan)
    if (!plan) return 'https://calendly.com/quintonai/30min'

    const baseUrl = "https://calendly.com/quintonai/30min"
    const params = new URLSearchParams()
    
    // Use Calendly's prefill parameters
    params.append("name", "")
    params.append("email", "")
    params.append("a1", `Plan: ${plan.name}`)
    params.append("a2", `Recruiters: ${plan.seats[0]}`)
    params.append("a3", `Billing: ${isAnnual ? "Annual" : "Monthly"}`)
    
    const totalPrice = calculatePrice(plan)
    if (totalPrice !== null) {
      params.append("a4", `Total: $${totalPrice}/month`)
    } else {
      params.append("a4", "Custom pricing - contact sales")
    }
    
    const selectedCredits = creditPackages[plan.credits[0]]
    if (selectedCredits && selectedCredits.credits > 0) {
      params.append("a5", `Add-on Credits: ${selectedCredits.credits.toLocaleString()}`)
    } else {
      params.append("a5", "Add-on Credits: None")
    }
    
    const selectedInboxes = inboxPackages[plan.inboxes[0]]
    if (selectedInboxes && selectedInboxes.inboxes > 0) {
      params.append("a6", `Add-on Inboxes: ${selectedInboxes.inboxes}`)
    } else {
      params.append("a6", "Add-on Inboxes: None")
    }
    
    return `${baseUrl}?${params.toString()}`
  }

  // Load Calendly script and initialize widget
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

  // Update Calendly widget when plan details change
  useEffect(() => {
    if (calendlyLoaded && window.Calendly && selectedPlan) {
      const calendlyContainer = document.querySelector('.calendly-inline-widget')
      if (calendlyContainer) {
        // Clear existing widget
        calendlyContainer.innerHTML = ''
        
        // Initialize new widget with updated URL
        window.Calendly.initInlineWidget({
          url: generateCalendlyUrl(),
          parentElement: calendlyContainer,
          prefill: {},
          utm: {}
        })
      }
    }
  }, [calendlyLoaded, selectedPlan, isAnnual, soloSeats, agencySeats, enterpriseSeats, soloCredits, soloInboxes, agencyCredits, agencyInboxes, enterpriseCredits, enterpriseInboxes])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with Quinton AI
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose your plan and schedule your onboarding call to start transforming your recruiting operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Plan Selection */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Select Your Plan
                </h2>
                
                {/* Billing Toggle */}
                <div className="flex items-center mb-6">
                  <span className={`mr-3 text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Monthly
                  </span>
                  <Switch
                    checked={isAnnual}
                    onCheckedChange={setIsAnnual}
                    className="mx-2"
                  />
                  <span className={`ml-3 text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Annual
                  </span>
                  {isAnnual && (
                    <Badge className="ml-3 bg-green-100 text-green-800 text-xs">
                      Save 20%
                    </Badge>
                  )}
                </div>

                {/* Plan Cards - Compact Version */}
                <div className="space-y-4">
                  {plans.map((plan) => {
                    const totalPrice = calculatePrice(plan)
                    const isSelected = selectedPlan === plan.id
                    
                    return (
                      <Card 
                        key={plan.id} 
                        className={`cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-blue-500 shadow-md ring-2 ring-blue-200' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                                isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                              }`}>
                                {isSelected && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>}
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 flex items-center">
                                  {plan.name}
                                  {plan.popular && (
                                    <Badge className="ml-2 bg-blue-600 text-white text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                </h3>
                                <p className="text-sm text-gray-600">{plan.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              {plan.monthlyPrice === null ? (
                                <div className="text-lg font-bold text-gray-900">Custom</div>
                              ) : (
                                <div className="text-lg font-bold text-gray-900">
                                  ${totalPrice}/mo
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {isSelected && (
                            <div className="space-y-4 pt-4 border-t">
                              {/* Recruiter Slider */}
                              <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                  Number of recruiters: {plan.seats[0]}
                                </label>
                                <Slider
                                  value={plan.seats}
                                  onValueChange={plan.setSeats}
                                  max={plan.maxSeats}
                                  min={plan.minSeats}
                                  step={1}
                                  className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                  <span>{plan.minSeats}</span>
                                  <span>{plan.maxSeats}{plan.name === 'Enterprise' ? '+' : ''}</span>
                                </div>
                              </div>

                              {/* Add-ons */}
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                                    Additional Credits
                                  </label>
                                  <select 
                                    className="w-full p-2 text-xs border border-gray-300 rounded bg-white"
                                    value={plan.credits[0]}
                                    onChange={(e) => plan.setCredits([parseInt(e.target.value)])}
                                  >
                                    {creditPackages.map((pkg, index) => (
                                      <option key={index} value={index}>
                                        {pkg.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                
                                <div>
                                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                                    Additional Inboxes
                                  </label>
                                  <select 
                                    className="w-full p-2 text-xs border border-gray-300 rounded bg-white"
                                    value={plan.inboxes[0]}
                                    onChange={(e) => plan.setInboxes([parseInt(e.target.value)])}
                                  >
                                    {inboxPackages.map((pkg, index) => (
                                      <option key={index} value={index}>
                                        {pkg.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              {/* Features */}
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 mb-2">What's included:</h4>
                                <ul className="space-y-1">
                                  {plan.features.slice(0, 3).map((feature, index) => (
                                    <li key={index} className="flex items-center text-xs text-gray-600">
                                      <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Selected Plan Summary */}
              {selectedPlan && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-3">Your Selection Summary</h3>
                    {(() => {
                      const plan = plans.find(p => p.id === selectedPlan)
                      if (!plan) return null
                      
                      return (
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Plan:</span>
                            <span className="font-medium text-blue-600">{plan.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Recruiters:</span>
                            <span className="text-gray-900">{plan.seats[0]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Billing:</span>
                            <span className="text-gray-900">{isAnnual ? 'Annual' : 'Monthly'}</span>
                          </div>
                          {plan.monthlyPrice !== null && (
                            <div className="flex justify-between font-bold text-base border-t pt-2">
                              <span className="text-gray-900">Total:</span>
                              <span className="text-blue-600">${calculatePrice(plan)}/month</span>
                            </div>
                          )}
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Schedule Your Onboarding Call
                </h2>
                <p className="text-gray-600 mb-6">
                  Book a 30-minute call with our team to get your account set up and start using Quinton AI.
                </p>
              </div>

              {/* Calendly Embed */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {!calendlyLoaded ? (
                  <div className="flex items-center justify-center h-[700px] text-gray-500">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                      <p>Loading calendar...</p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="calendly-inline-widget" 
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600">Secure Setup</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">Expert Support</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-xs text-gray-600">Quick Start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 