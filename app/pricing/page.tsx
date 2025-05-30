"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check, ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [soloSeats, setSoloSeats] = useState([1])
  const [agencySeats, setAgencySeats] = useState([5])
  const [enterpriseSeats, setEnterpriseSeats] = useState([26])
  const [soloCredits, setSoloCredits] = useState([0])
  const [soloInboxes, setSoloInboxes] = useState([0])
  const [agencyCredits, setAgencyCredits] = useState([0])
  const [agencyInboxes, setAgencyInboxes] = useState([0])
  const [enterpriseCredits, setEnterpriseCredits] = useState([0])
  const [enterpriseInboxes, setEnterpriseInboxes] = useState([0])
  
  // Add-on billing toggles for pricing cards
  const [soloCreditsAnnual, setSoloCreditsAnnual] = useState(true)
  const [soloInboxesAnnual, setSoloInboxesAnnual] = useState(true)
  const [agencyCreditsAnnual, setAgencyCreditsAnnual] = useState(true)
  const [agencyInboxesAnnual, setAgencyInboxesAnnual] = useState(true)
  const [enterpriseCreditsAnnual, setEnterpriseCreditsAnnual] = useState(true)
  const [enterpriseInboxesAnnual, setEnterpriseInboxesAnnual] = useState(true)
  
  // Add-on billing toggles for standalone section
  const [standaloneCreditsAnnual, setStandaloneCreditsAnnual] = useState(true)
  const [standaloneInboxesAnnual, setStandaloneInboxesAnnual] = useState(true)

  const creditPackages = [
    { credits: 0, price: 0, annualPrice: 0, label: "No additional credits" },
    { credits: 1000, price: 70, annualPrice: 60, label: "+1,000 credits" },
    { credits: 2500, price: 175, annualPrice: 150, label: "+2,500 credits" },
    { credits: 5000, price: 350, annualPrice: 300, label: "+5,000 credits" },
    { credits: 10000, price: 700, annualPrice: 600, label: "+10,000 credits" },
    { credits: 25000, price: 1750, annualPrice: 1500, label: "+25,000 credits" },
    { credits: 50000, price: 3500, annualPrice: 3000, label: "+50,000 credits" },
    { credits: 100000, price: 7000, annualPrice: 6000, label: "+100,000 credits" }
  ]

  const inboxPackages = [
    { inboxes: 0, price: 0, annualPrice: 0, label: "No additional inboxes" },
    { inboxes: 5, price: 60, annualPrice: 50, label: "+5 inboxes" },
    { inboxes: 10, price: 120, annualPrice: 100, label: "+10 inboxes" },
    { inboxes: 25, price: 300, annualPrice: 250, label: "+25 inboxes" },
    { inboxes: 50, price: 600, annualPrice: 500, label: "+50 inboxes" },
    { inboxes: 100, price: 1200, annualPrice: 1000, label: "+100 inboxes" }
  ]

  const plans = [
    {
      name: "Solo",
      description: "Perfect for individual recruiters getting started with AI",
      monthlyPrice: 199,
      annualPrice: 149,
      isPerSeat: true,
      showForOneSeat: false,
      minSeats: 1,
      maxSeats: 4,
      seats: soloSeats,
      setSeats: setSoloSeats,
      credits: soloCredits,
      setCredits: setSoloCredits,
      inboxes: soloInboxes,
      setInboxes: setSoloInboxes,
      creditsAnnual: soloCreditsAnnual,
      setCreditsAnnual: setSoloCreditsAnnual,
      inboxesAnnual: soloInboxesAnnual,
      setInboxesAnnual: setSoloInboxesAnnual,
      features: [
        "Up to 5 recruiters",
        "500 enrichment credits per recruiter/month",
        "5 premium inboxes per recruiter",
        "Basic email sequences",
        "Standard support",
        "Basic analytics",
        "AI personalization"
      ],
      limitations: [
        "Limited templates"
      ],
      cta: "Sign Up",
      popular: false
    },
    {
      name: "Agency",
      description: "Most popular for growing recruiting agencies",
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
      creditsAnnual: agencyCreditsAnnual,
      setCreditsAnnual: setAgencyCreditsAnnual,
      inboxesAnnual: agencyInboxesAnnual,
      setInboxesAnnual: setAgencyInboxesAnnual,
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
      limitations: [],
      cta: "Sign Up",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large agencies with custom requirements",
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
      creditsAnnual: enterpriseCreditsAnnual,
      setCreditsAnnual: setEnterpriseCreditsAnnual,
      inboxesAnnual: enterpriseInboxesAnnual,
      setInboxesAnnual: setEnterpriseInboxesAnnual,
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
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "If you are on a monthly plan, yes, you can cancel your subscription at any time. For annual plans you cancel at anytime and will have access through the end of your term"
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
      answer: "Click the sign up button and grab a time with our team to get onboarded. We'll help you configure everything for your agency's needs."
    },
    {
      question: "What integrations do you support?",
      answer: "We currently only provide custom inegration support for the Agency and Enterprise plans. Contact us for specific integration requirements."
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
    const addOnCosts = getAddOnCosts(plan)
    
    return basePrice + addOnCosts
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

  const getBasePlanPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return null
    
    if (plan.isPerSeat) {
      return (isAnnual ? plan.annualPrice : plan.monthlyPrice) * plan.seats[0]
    } else {
      return isAnnual ? plan.annualPrice : plan.monthlyPrice
    }
  }

  const getAddOnCosts = (plan: typeof plans[0]) => {
    const creditCost = plan.creditsAnnual 
      ? creditPackages[plan.credits[0]]?.annualPrice || 0
      : creditPackages[plan.credits[0]]?.price || 0
    const inboxCost = plan.inboxesAnnual
      ? inboxPackages[plan.inboxes[0]]?.annualPrice || 0
      : inboxPackages[plan.inboxes[0]]?.price || 0
    return creditCost + inboxCost
  }

  const generateCalendlyUrl = (plan: typeof plans[0]) => {
    const baseUrl = "https://calendly.com/quintonai/30min"
    const params = new URLSearchParams()
    
    // Add plan information
    params.append("a1", plan.name) // Plan name - working correctly
    params.append("a2", plan.seats[0].toString()) // Number of seats - working correctly
    
    // Add billing preference (Annual/Monthly)
    params.append("a3", isAnnual ? "Annual" : "Monthly")
    
    // Add expected price
    const totalPrice = calculatePrice(plan)
    if (totalPrice !== null) {
      params.append("a4", `$${totalPrice}/month`)
    } else {
      params.append("a4", "Custom pricing - contact sales")
    }
    
    // Add credits information (Enrichment Credit Add-Ons)
    const selectedCredits = creditPackages[plan.credits[0]]
    if (selectedCredits && selectedCredits.credits > 0) {
      params.append("a5", `${selectedCredits.credits.toLocaleString()} additional credits`)
    } else {
      params.append("a5", "None")
    }
    
    // Add inboxes information (Premium Inbox Add-Ons)
    const selectedInboxes = inboxPackages[plan.inboxes[0]]
    if (selectedInboxes && selectedInboxes.inboxes > 0) {
      params.append("a6", `${selectedInboxes.inboxes} additional inboxes`)
    } else {
      params.append("a6", "None")
    }
    
    return `${baseUrl}?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your recruiting agency. Contact us to get started and scale as you grow.
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
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const basePlanPrice = getBasePlanPrice(plan)
              const addOnCosts = getAddOnCosts(plan)
              const totalPrice = calculatePrice(plan)
              
              return (
                <Card 
                  key={plan.name} 
                  className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Most Popular
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
                          {addOnCosts > 0 && (
                            <div className="text-sm text-gray-600 mt-1">
                              Base: ${basePlanPrice} + Add-ons: ${addOnCosts}
                            </div>
                          )}
                          {plan.isPerSeat && (
                            <div className="text-sm text-gray-500">
                              ${isAnnual ? plan.annualPrice : plan.monthlyPrice} per recruiter
                            </div>
                          )}
                          {isAnnual && plan.monthlyPrice !== null && (
                            <>
                              <div className="text-sm text-green-600 font-medium mt-1">
                                Save ${calculateSavings(plan)} annually
                              </div>
                              {!plan.isPerSeat && (
                                <div className="text-xs text-gray-500 mt-1">
                                  Billed upfront
                                </div>
                              )}
                            </>
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

                    {plan.cta === 'Sign Up' ? (
                      <Button 
                        className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <Link href={generateCalendlyUrl(plan)}>
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <Link href={generateCalendlyUrl(plan)}>
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Add-ons Section */}
                    <div className="border-t pt-6">
                      <div className="flex items-center mb-4">
                        <Plus className="h-4 w-4 text-blue-600 mr-2" />
                        <h4 className="text-sm font-semibold text-gray-900">Add-ons</h4>
                      </div>
                      
                      {/* Additional Credits */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium text-gray-700">
                            Additional Enrichment Credits
                          </label>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs ${!plan.creditsAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                              Monthly
                            </span>
                            <Switch
                              checked={plan.creditsAnnual}
                              onCheckedChange={plan.setCreditsAnnual}
                            />
                            <span className={`text-xs ${plan.creditsAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                              Annual
                            </span>
                          </div>
                        </div>
                        <select 
                          className="w-full p-2 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={plan.credits[0]}
                          onChange={(e) => plan.setCredits([parseInt(e.target.value)])}
                        >
                          {creditPackages.map((pkg, pkgIndex) => (
                            <option key={pkgIndex} value={pkgIndex}>
                              {pkg.label} {pkgIndex > 0 ? `(${plan.creditsAnnual ? `$${pkg.annualPrice}` : `$${pkg.price}`}/mo)` : ''}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Additional Inboxes */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium text-gray-700">
                            Additional Premium Inboxes
                          </label>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs ${!plan.inboxesAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                              Monthly
                            </span>
                            <Switch
                              checked={plan.inboxesAnnual}
                              onCheckedChange={plan.setInboxesAnnual}
                            />
                            <span className={`text-xs ${plan.inboxesAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                              Annual
                            </span>
                          </div>
                        </div>
                        <select 
                          className="w-full p-2 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={plan.inboxes[0]}
                          onChange={(e) => plan.setInboxes([parseInt(e.target.value)])}
                        >
                          {inboxPackages.map((pkg, pkgIndex) => (
                            <option key={pkgIndex} value={pkgIndex}>
                              {pkg.label} {pkgIndex > 0 ? `(${plan.inboxesAnnual ? `$${pkg.annualPrice}` : `$${pkg.price}`}/mo)` : ''}
                            </option>
                          ))}
                        </select>
                      </div>

                      {addOnCosts > 0 && (
                        <div className="text-xs text-blue-600 font-medium">
                          Add-ons total: +${addOnCosts}/month
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Standalone Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Add-ons for Existing Customers
            </h2>
            <p className="text-xl text-gray-600">
              Already have a plan? Enhance it with additional credits and inboxes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Additional Credits */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Additional Enrichment Credits</CardTitle>
                <div className="text-2xl font-bold text-blue-600">
                  Starting at ${standaloneCreditsAnnual ? '60' : '70'}/month
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  1 email found = 1 credit | 1 phone found = 10 credits
                </div>
                <div className="flex items-center justify-center mt-4">
                  <span className={`mr-3 text-sm ${!standaloneCreditsAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Monthly
                  </span>
                  <Switch
                    checked={standaloneCreditsAnnual}
                    onCheckedChange={setStandaloneCreditsAnnual}
                  />
                  <span className={`ml-3 text-sm ${standaloneCreditsAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Annual
                  </span>
                  {standaloneCreditsAnnual && (
                    <Badge className="ml-3 bg-green-100 text-green-800 text-xs">
                      Save 14%
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Select Credit Package
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={1}
                  >
                    {creditPackages.slice(1).map((pkg, index) => (
                      <option key={index} value={index + 1}>
                        {pkg.credits.toLocaleString()} credits - ${standaloneCreditsAnnual ? pkg.annualPrice : pkg.price}/month
                      </option>
                    ))}
                  </select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                    Purchase Credits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Additional Inboxes */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Additional Premium Inboxes</CardTitle>
                <div className="text-2xl font-bold text-blue-600">
                  Starting at ${standaloneInboxesAnnual ? '50' : '60'}/month
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Extra premium inboxes for your outreach campaigns
                </div>
                <div className="flex items-center justify-center mt-4">
                  <span className={`mr-3 text-sm ${!standaloneInboxesAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Monthly
                  </span>
                  <Switch
                    checked={standaloneInboxesAnnual}
                    onCheckedChange={setStandaloneInboxesAnnual}
                  />
                  <span className={`ml-3 text-sm ${standaloneInboxesAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    Annual
                  </span>
                  {standaloneInboxesAnnual && (
                    <Badge className="ml-3 bg-green-100 text-green-800 text-xs">
                      Save 17%
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Select Inbox Package
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={1}
                  >
                    {inboxPackages.slice(1).map((pkg, index) => (
                      <option key={index} value={index + 1}>
                        {pkg.inboxes} inboxes - ${standaloneInboxesAnnual ? pkg.annualPrice : pkg.price}/month
                      </option>
                    ))}
                  </select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                    Purchase Inboxes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Note for existing customers */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Existing Customer?
              </h3>
              <p className="text-blue-700">
                Log into your account to add these to your current plan, or contact support for assistance with your add-on purchases.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                  <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                    Login to Account
                  </a>
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                  <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                    Contact Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your recruiting?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of recruiting agencies already using Quinton AI to scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-gray-900 hover:bg-white hover:text-gray-900" asChild>
              <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}