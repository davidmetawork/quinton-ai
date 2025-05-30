import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight, Target, Mail, Search, Bot, BarChart3, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: Target,
      title: "Premium Email Infrastructure",
      description: "Warmed-up premium inboxes with proper DKIM/DMARC/SPF records running on private servers for optimal cold email deliverability."
    },
    {
      icon: Mail,
      title: "Automated Outreach Sequences", 
      description: "Generate daily lists of 50+ decision makers with ICP filtering, then auto-draft personalized email and LinkedIn sequences contextualized by real-time data."
    },
    {
      icon: Search,
      title: "Real-Time Data Enrichment",
      description: "Scrape and enrich candidate profiles with emails, phones, LinkedIn, and GitHub data from multiple sources in real-time."
    },
    {
      icon: Bot,
      title: "AI Playbook Automation",
      description: "End-to-end automation from finding contacts to drafting outreach, with multi-step sequences via Smartlead.ai integration."
    },
    {
      icon: BarChart3,
      title: "Email Performance Tracking",
      description: "Real-time dashboards tracking send rates, reply rates, and email campaign performance metrics."
    },
    {
      icon: Rocket,
      title: "Agency-First Design",
      description: "Built specifically for recruiting agencies with fee-based revenue models, bulk pricing, and recruiter-optimized workflows."
    }
  ]

  const metrics = [
    { number: "100+", label: "Recruiting Agencies", description: "Using Quinton to automate their workflows" },
    { number: "70%", label: "Sign New Client in 45 Days", description: "Of users successfully acquire new clients" },
    { number: "40hrs", label: "Time Saved Monthly", description: "Per recruiter through automation" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-sm">
            Announcing Quinton AI's premium email inboxes - get 5 for free with your subscription!
            <Link href="/university/blog/premium-email-infrastructure" className="ml-2 underline hover:no-underline">Learn more↗</Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            <div className="text-left">
              <div className="pl-0 lg:pl-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  AI Copilot<br/>
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">for Agency Recruiters</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Sign more clients. Find more candidates. Make more placements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-8" asChild>
                    <Link href="/signup">
                      Sign Up
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-11 px-8" asChild>
                    <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                      Schedule Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              {/* Hero Image */}
              <div className="relative flex-1 flex justify-center items-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="/hero-image.png" 
                    alt="Quinton AI Platform" 
                    className="w-full h-auto object-contain"
                  />
                  
                  {/* Quinton Logo Overlay on Purple Object */}
                  <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-10">
                    <div 
                      className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-300/60" 
                      style={{
                        transform: 'perspective(300px) rotateY(0deg) rotateX(0deg) scaleY(0.9)',
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 4px 12px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.85) 100%)',
                        borderRadius: '50px',
                        clipPath: 'ellipse(100% 90% at 50% 50%)'
                      }}
                    >
                      <span 
                        className="text-3xl" 
                        style={{
                          transform: 'rotateY(-8deg) translateZ(2px)',
                          transformOrigin: 'center center'
                        }}
                      >✨</span>
                      <span 
                        className="text-2xl font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                        style={{
                          transform: 'rotateY(-4deg) translateZ(2px)',
                          transformOrigin: 'center center',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Quinton
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loom Video Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.loom.com/embed/770532d61beb440c94f2a39d799664fa?sid=03e3dd8f-8261-443f-bb08-c65fa67581c9"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="Quinton AI Demo"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform your recruiting agency with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sign more clients, find more qualified candidates, and close more placements with Quinton AI's end-to-end automation. Built specifically for recruiting agencies to scale revenue and reduce manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Scale Your Recruiting Agency with AI
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Quinton AI helps recruiting agencies achieve 28% more placements in 90 days by automating prospecting, outreach, and candidate sourcing
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              3x more emails sent per recruiter
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              7-11% positive reply rates
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              40 hours saved per month
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              28% more placements
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Automated candidate sourcing
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Premium email deliverability
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Real-time data enrichment
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Agency-first pricing
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Bank-level security
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Multi-step sequences
            </Badge>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by leading recruiting agencies
            </h2>
            <p className="text-xl text-gray-600">
              See how agencies are transforming their operations with Quinton AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-blue-600 mb-2">
                    {metric.number}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    {metric.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your recruiting agency?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join recruiting agencies already using Quinton AI to automate prospecting, personalize outreach, and close more placements. Contact us to get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-8" asChild>
              <Link href="/signup">
                Sign Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-11 px-8" asChild>
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