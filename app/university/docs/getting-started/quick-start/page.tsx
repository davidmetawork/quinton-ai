import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, CheckCircle, ArrowRight, Zap, Users, Target, Mail, BarChart3, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function QuickStartGuide() {
  const steps = [
    {
      number: 1,
      title: "Set Up Your Account",
      description: "Complete your profile and configure basic settings",
      tasks: [
        "Complete your recruiter profile",
        "Set up your email signature",
        "Configure notification preferences",
        "Connect your calendar (optional)"
      ],
      estimatedTime: "10 minutes"
    },
    {
      number: 2,
      title: "Install Chrome Extension",
      description: "Add the Quinton Chrome extension for seamless prospecting",
      tasks: [
        "Download from Chrome Web Store",
        "Log in with your Quinton credentials",
        "Test the extension on LinkedIn",
        "Bookmark key job boards"
      ],
      estimatedTime: "5 minutes"
    },
    {
      number: 3,
      title: "Create Your First Client Search",
      description: "Find potential clients using the Get Clients platform",
      tasks: [
        "Navigate to the Get Clients tab",
        "Set up search criteria (industry, location)",
        "Review and export potential clients",
        "Add promising leads to your pipeline"
      ],
      estimatedTime: "15 minutes"
    },
    {
      number: 4,
      title: "Set Up Email Sequences",
      description: "Create automated outreach campaigns",
      tasks: [
        "Choose from pre-built templates",
        "Customize messaging for your niche",
        "Set up follow-up sequences",
        "Test with a small group first"
      ],
      estimatedTime: "20 minutes"
    },
    {
      number: 5,
      title: "Start Candidate Prospecting",
      description: "Find and reach out to potential candidates",
      tasks: [
        "Use Find Candidates platform",
        "Search by job title and location",
        "Find personal email addresses",
        "Send personalized outreach"
      ],
      estimatedTime: "15 minutes"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/university/docs" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Docs
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-violet-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Quick Start Guide</h1>
          </div>
          
          <div className="flex flex-wrap gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /> 15 min read</span>
            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 60 min setup</span>
            <span className="flex items-center gap-2 text-green-400"><CheckCircle className="w-3.5 h-3.5" /> Beginner friendly</span>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#12121a] border border-violet-500/20 rounded-2xl p-8 mb-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-32 h-32 text-violet-500" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-5 h-5 text-violet-400" />
                What You'll Accomplish
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Complete Quinton AI workspace setup",
                  "Install and configure Chrome extension",
                  "Create first client and candidate searches",
                  "Launch first automated campaign",
                  "Master core features and workflows"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step-by-Step */}
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The 5-Step Process</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded uppercase tracking-widest">
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.tasks.map((task, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-violet-400"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Footer */}
      <section className="py-24 border-t border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need onboarding help?</h2>
          <p className="text-gray-400 mb-10 text-lg">Our team can help you get fully set up in one 30-minute call.</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
            <Link href="https://calendly.com/quintonai/30min">
              Schedule Setup Call
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
