import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Database, Mail, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Layers, Puzzle } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  const toolCategories = [
    {
      category: "Data & Enrichment",
      icon: Database,
      tools: ["Apollo", "ContactOut", "ZoomInfo", "Clay"],
      description: "Finding and enriching candidate contact information"
    },
    {
      category: "Outbound Automation",
      icon: Mail,
      tools: ["Smartlead", "Instantly", "Lemlist"],
      description: "Automating email sequences and follow-ups"
    },
    {
      category: "CRM & Pipeline",
      icon: Target,
      tools: ["Loxo", "HubSpot", "Salesforce"],
      description: "Managing candidates and client relationships"
    },
    {
      category: "LinkedIn Tools",
      icon: Zap,
      tools: ["Sales Navigator", "LinkedIn Recruiter"],
      description: "Professional networking and sourcing"
    }
  ]

  const stats = [
    { label: "Tools Replaced", value: "8+", icon: Layers },
    { label: "Cost Savings", value: "70%", icon: TrendingUp },
    { label: "Time Saved", value: "40hrs/wk", icon: Zap },
    { label: "Agencies Served", value: "100+", icon: Target }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>all-in-one</span> outbound platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Recruiting agencies are drowning in disconnected tools. We built Quinton to condense your entire tech stack into one AI-powered platform that actually works together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold" asChild>
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recruiting tech is broken</h2>
            <p className="text-gray-400 text-lg">Modern agencies juggle 8-12 tools daily, leading to context switching fatigue and soaring costs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolCategories.map((category, index) => (
              <Card key={index} className="bg-[#12121a] border-white/5 hover:border-violet-500/30 transition-all">
                <CardHeader>
                  <div className="bg-violet-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <CardTitle className="text-lg text-white">{category.category}</CardTitle>
                  <CardDescription className="text-gray-500">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-600/5"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Enterprise infrastructure, <br />
                <span className="text-violet-400">built for agencies.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-violet-500/20 rounded-full p-1 h-fit">
                    <CheckCircle className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Elite Deliverability</h3>
                    <p className="text-gray-400">Pre-warmed Microsoft 365 & Google Workspace inboxes on private servers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-violet-500/20 rounded-full p-1 h-fit">
                    <CheckCircle className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">15-Tiered Data Waterfall</h3>
                    <p className="text-gray-400">AI finds the best contact data across 15+ premium providers automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-violet-500/20 rounded-full p-1 h-fit">
                    <CheckCircle className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI Personalization</h3>
                    <p className="text-gray-400">Custom outreach sequences written by AI using real-time prospect data.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative bg-[#12121a] border border-white/5 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Platform Comparison</span>
                  <Badge className="bg-violet-500 text-white">Quinton AI</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Tool Management</span>
                    <span className="text-white font-bold text-sm">One Central Hub</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Monthly Cost</span>
                    <span className="text-green-400 font-bold text-sm">~70% Lower</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Sourcing Speed</span>
                    <span className="text-white font-bold text-sm">5x Faster</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Reply Rates</span>
                    <span className="text-white font-bold text-sm">7-11% Average</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Ready to unify your recruiting?</h2>
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
