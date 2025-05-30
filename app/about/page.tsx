import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Database, Mail, Users, Linkedin, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Layers, Puzzle } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const toolCategories = [
    {
      category: "Data & Enrichment",
      icon: Database,
      color: "bg-blue-100 text-blue-600",
      tools: ["Apollo", "ContactOut", "ZoomInfo", "Clay"],
      description: "Finding and enriching candidate contact information"
    },
    {
      category: "Outbound Automation",
      icon: Mail,
      color: "bg-green-100 text-green-600", 
      tools: ["Smartlead", "Instantly", "Lemlist"],
      description: "Automating email sequences and follow-ups"
    },
    {
      category: "CRM & Pipeline",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      tools: ["Loxo", "HubSpot", "Salesforce"],
      description: "Managing candidates and client relationships"
    },
    {
      category: "LinkedIn Tools",
      icon: Linkedin,
      color: "bg-orange-100 text-orange-600",
      tools: ["Sales Navigator", "LinkedIn Recruiter"],
      description: "Professional networking and sourcing"
    }
  ]

  const problems = [
    {
      icon: Layers,
      title: "Tool Overload",
      description: "Recruiters juggle 8-12 different tools daily, leading to inefficiency and context switching fatigue."
    },
    {
      icon: TrendingUp,
      title: "Rising Costs",
      description: "Multiple subscriptions can cost $500-2000+ per recruiter monthly, eating into agency margins."
    },
    {
      icon: Puzzle,
      title: "Integration Chaos",
      description: "Data silos and manual workflows between tools create errors and slow down processes."
    }
  ]

  const benefits = [
    {
      title: "One Platform, Everything Included",
      description: "All the functionality of 8+ tools in a single, AI-powered interface",
      metric: "90% fewer tools needed"
    },
    {
      title: "Massive Cost Savings", 
      description: "Replace expensive tool stacks with one affordable solution",
      metric: "70% cost reduction"
    },
    {
      title: "Seamless Workflows",
      description: "AI handles the entire process from sourcing to placement automatically",
      metric: "5x faster execution"
    },
    {
      title: "Superior Results",
      description: "AI optimization delivers better outcomes than manual tool management",
      metric: "40% more placements"
    }
  ]

  const stats = [
    { label: "Tools Replaced", value: "8+", icon: Layers },
    { label: "Cost Savings", value: "70%", icon: TrendingUp },
    { label: "Time Saved", value: "40hrs/week", icon: Zap },
    { label: "Agencies Served", value: "100+", icon: Target }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The All-in-One AI Recruiting Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Recruiting agencies are drowning in a sea of disconnected tools. We built Quinton to condense 
              your entire tech stack into one AI-powered platform that actually works together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/university">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Quinton Different - Moved up and redesigned */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Makes Quinton Different</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Enterprise-grade infrastructure that most agencies can't access
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cold Email Infrastructure */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Cold Email</h3>
                  <p className="text-blue-100">Fool-proof delivery infrastructure</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Pre-Configured Inboxes</div>
                  <div className="text-blue-100 text-sm">DKIM, DMARC, SPF setup for max deliverability</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Professional Warmup</div>
                  <div className="text-blue-100 text-sm">Automated reputation building</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Smart Send Optimization</div>
                  <div className="text-blue-100 text-sm">AI-powered timing & volume limits</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Private Monitored Servers</div>
                  <div className="text-blue-100 text-sm">Protected from bad actors</div>
                </div>
              </div>
            </div>

            {/* 15-Tiered Data System */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">15-Tiered Data Waterfall</h3>
                  <p className="text-blue-100">Ultimate contact discovery system</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Intelligent Sequencing</div>
                  <div className="text-blue-100 text-sm">AI picks the best data source first</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Automatic Waterfall</div>
                  <div className="text-blue-100 text-sm">Tries all 15 providers until found</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Real-Time Verification</div>
                  <div className="text-blue-100 text-sm">Cross-reference for accuracy</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-white mb-1">✓ Complete Profiles</div>
                  <div className="text-blue-100 text-sm">Most comprehensive candidate data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Tool Fragmentation */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Recruiting Tool Problem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern recruiting agencies rely on a complex web of specialized tools that don't talk to each other
            </p>
          </div>

          {/* Tool Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {toolCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`rounded-full p-3 w-fit mx-auto mb-4 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {category.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="mr-2 mb-2">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Problems */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Quinton */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Quinton Solution
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto">
            Instead of managing 8+ disconnected tools, Quinton uses AI to replicate and enhance 
            all their functionality in one seamless platform. No more context switching, 
            no more integration headaches, no more tool fatigue.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Before Quinton</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    8-12 different tools to manage
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    $500-2000+ monthly per recruiter
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Manual data entry between systems
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Constant context switching
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">After Quinton</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    One AI-powered platform
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    70% cost reduction
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Fully automated workflows
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Focus on relationship building
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Makes It Possible */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AI Makes It Possible</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quinton uses AI to replicate and enhance the functionality of 8+ recruiting tools in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border text-center">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Data Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Finds and enriches candidate data from multiple sources simultaneously for complete profiles
              </p>
              <div className="text-2xl font-bold text-blue-600">15 Data Sources</div>
              <div className="text-sm text-gray-500">vs. 1-2 with traditional tools</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border text-center">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Outreach</h3>
              <p className="text-gray-600 mb-6">
                AI crafts personalized messages based on real-time data analysis for higher response rates
              </p>
              <div className="text-2xl font-bold text-green-600">3x Response Rate</div>
              <div className="text-sm text-gray-500">vs. template-based tools</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border text-center">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unified Automation</h3>
              <p className="text-gray-600 mb-6">
                One intelligent system handles the entire process from sourcing to placement automatically
              </p>
              <div className="text-2xl font-bold text-purple-600">5x Faster</div>
              <div className="text-sm text-gray-500">than manual workflows</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Simplify Your Tech Stack?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See how Quinton can replace your entire recruiting tool stack with one AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/signup">
                Sign Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-900 hover:bg-gray-50" asChild>
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