"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Check, ArrowRight, ArrowLeft, CreditCard, Shield, Users, Zap } from 'lucide-react'

export default function SignupPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [soloSeats, setSoloSeats] = useState([1])
  const [agencySeats, setAgencySeats] = useState([5])
  const [enterpriseSeats, setEnterpriseSeats] = useState([26])

  const plans = [
    {
      id: 'solo',
      name: "Solo",
      description: "Perfect for individual recruiters getting started with AI",
      monthlyPrice: 199,
      annualPrice: 149,
      isPerSeat: true,
      minSeats: 1,
      maxSeats: 4,
      seats: soloSeats,
      setSeats: setSoloSeats,
      features: [
        "Up to 5 recruiters",
        "500 enrichment credits per recruiter/month",
        "5 premium inboxes per recruiter",
        "Basic email sequences",
        "Standard support",
        "Basic analytics",
        "AI personalization"
      ],
      popular: false
    },
    {
      id: 'agency',
      name: "Agency",
      description: "Most popular for growing recruiting agencies",
      monthlyPrice: 750,
      annualPrice: 650,
      isPerSeat: false,
      minSeats: 5,
      maxSeats: 25,
      seats: agencySeats,
      setSeats: setAgencySeats,
      features: [
        "Up to 25 recruiters",
        "3,000 enrichment credits/month (team total)",
        "50 premium inboxes (team total)",
        "Advanced AI sequences",
        "Priority support",
        "Advanced analytics",
        "Full AI personalization",
        "Custom templates",
        "A/B testing",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      description: "For large agencies with custom requirements",
      monthlyPrice: null,
      annualPrice: null,
      isPerSeat: false,
      minSeats: 26,
      maxSeats: 500,
      seats: enterpriseSeats,
      setSeats: setEnterpriseSeats,
      features: [
        "Unlimited recruiters",
        "Custom enrichment credits",
        "Custom premium inboxes",
        "Custom AI training",
        "Dedicated support",
        "Custom analytics",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ]

  const calculatePrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return null
    
    if (plan.isPerSeat) {
      return (isAnnual ? plan.annualPrice : plan.monthlyPrice) * plan.seats[0]
    } else {
      return isAnnual ? plan.annualPrice : plan.monthlyPrice
    }
  }

  const calculateSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return 0
    
    if (plan.isPerSeat) {
      const seats = plan.seats[0]
      const monthlyTotal = plan.monthlyPrice * seats * 12
      const annualTotal = plan.annualPrice * seats * 12
      return monthlyTotal - annualTotal
    } else {
      const monthlyTotal = plan.monthlyPrice * 12
      const annualTotal = plan.annualPrice * 12
      return monthlyTotal - annualTotal
    }
  }

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleProceedToPayment = () => {
    const plan = plans.find(p => p.id === selectedPlan)
    if (!plan) return

    // Prepare tracking data
    const trackingData = {
      plan: plan.name,
      planId: plan.id,
      seats: plan.seats[0],
      billing: isAnnual ? 'annual' : 'monthly',
      totalPrice: calculatePrice(plan) || 0,
      timestamp: new Date().toISOString()
    }

    // Optional: Send to analytics (uncomment and configure as needed)
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'plan_selected', {
    //     plan_name: trackingData.plan,
    //     plan_id: trackingData.planId,
    //     seats: trackingData.seats,
    //     billing_cycle: trackingData.billing,
    //     value: trackingData.totalPrice
    //   })
    // }

    // Optional: Send to your own analytics endpoint
    fetch('/api/track-plan-selection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trackingData)
    }).catch(console.error)

    // Create Calendly URL with plan information as custom questions
    const calendlyUrl = new URL('https://calendly.com/quintonai/30min')
    
    // Use Calendly's custom question parameters
    calendlyUrl.searchParams.set('a1', plan.name) // Custom question 1: Plan
    calendlyUrl.searchParams.set('a2', plan.seats[0].toString()) // Custom question 2: Seats
    calendlyUrl.searchParams.set('a3', isAnnual ? 'Annual' : 'Monthly') // Custom question 3: Billing
    if (plan.monthlyPrice !== null) {
      const price = calculatePrice(plan)
      if (price !== null) {
        calendlyUrl.searchParams.set('a4', `$${price}/month`) // Custom question 4: Price
      }
    }
    
    // Also add as regular parameters for backup
    calendlyUrl.searchParams.set('plan', plan.name)
    calendlyUrl.searchParams.set('seats', plan.seats[0].toString())
    calendlyUrl.searchParams.set('billing', isAnnual ? 'annual' : 'monthly')

    // Redirect to Calendly with tracking parameters
    window.location.href = calendlyUrl.toString()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Select the perfect plan for your recruiting agency and start transforming your operations with AI.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="mx-2"
              />
              <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge className="ml-3 bg-green-100 text-green-800">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const totalPrice = calculatePrice(plan)
              const isSelected = selectedPlan === plan.id
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-blue-500 shadow-lg ring-2 ring-blue-200' 
                      : plan.popular 
                        ? 'border-blue-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  {isSelected && (
                    <Badge className="absolute -top-3 right-4 bg-green-600 text-white">
                      Selected
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      {plan.monthlyPrice === null ? (
                        <div className="text-4xl font-bold text-gray-900">
                          Custom
                        </div>
                      ) : (
                        <>
                          <div className="text-4xl font-bold text-gray-900">
                            ${totalPrice}
                            <span className="text-lg font-normal text-gray-500">
                              /month
                            </span>
                          </div>
                          {plan.isPerSeat && (
                            <div className="text-sm text-gray-500">
                              ${isAnnual ? plan.annualPrice : plan.monthlyPrice} per recruiter
                            </div>
                          )}
                          {isAnnual && plan.monthlyPrice !== null && (
                            <div className="text-sm text-green-600 font-medium mt-1">
                              Save ${calculateSavings(plan)} annually
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Recruiter Slider */}
                    <div className="mb-6">
                      <div className="mb-3">
                        <label className="text-sm font-medium text-gray-700">
                          Number of recruiters: {plan.seats[0]}
                        </label>
                      </div>
                      <Slider
                        value={plan.seats}
                        onValueChange={plan.setSeats}
                        max={plan.maxSeats}
                        min={plan.minSeats}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{plan.minSeats}</span>
                        <span>{plan.maxSeats}{plan.name === 'Enterprise' ? '+' : ''}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Selected Plan Summary & Checkout */}
          {selectedPlan && (
            <div className="max-w-2xl mx-auto">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Ready to Get Started?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const plan = plans.find(p => p.id === selectedPlan)
                    if (!plan) return null
                    
                    return (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Selected Plan:</span>
                          <span className="text-blue-600 font-semibold">{plan.name}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Recruiters:</span>
                          <span className="text-gray-700">{plan.seats[0]}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Billing:</span>
                          <span className="text-gray-700">{isAnnual ? 'Annual' : 'Monthly'}</span>
                        </div>
                        
                        {plan.monthlyPrice !== null && (
                          <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
                            <span className="text-gray-900">Total:</span>
                            <span className="text-blue-600">${calculatePrice(plan)}/month</span>
                          </div>
                        )}
                        
                        <Button 
                          onClick={handleProceedToPayment}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
                          size="lg"
                        >
                          {plan.id === 'enterprise' ? 'Contact Sales' : 'Proceed to Payment'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )
                  })()}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by 100+ Recruiting Agencies
            </h2>
            <p className="text-gray-600">
              Join agencies already transforming their operations with Quinton AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">Bank-level encryption and secure data handling</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated onboarding and ongoing assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600 text-sm">Get started in under 30 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions? We're Here to Help
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm">We accept all major credit cards, ACH transfers, and can accommodate wire transfers for enterprise customers.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Need help choosing?</h3>
              <p className="text-gray-600 text-sm">
                <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact our sales team</Link> for personalized recommendations based on your agency's needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 