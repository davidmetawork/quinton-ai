"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight, Check, X, Zap, Clock, TrendingUp, Mail, Users, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  const faqs = [
    {
      question: "How quickly can I get started with Quinton?",
      answer: "Most agencies are fully operational within 24-48 hours. We handle the entire setup—email infrastructure, domain warming, and integrations. You just bring your ICP and start booking meetings."
    },
    {
      question: "What makes Quinton different from other outreach tools?",
      answer: "We're built exclusively for recruiting agencies. That means agency-specific workflows, fee-based pricing models, and infrastructure designed for high-volume candidate and client outreach. Plus, we include 5 premium warmed inboxes free."
    },
    {
      question: "Do I need technical skills to use Quinton?",
      answer: "Zero. If you can use LinkedIn, you can use Quinton. Our AI handles the complex stuff—writing personalized sequences, enriching data, managing deliverability. You focus on closing deals."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our agencies typically see 7-11% positive reply rates on cold outreach, 3x more emails sent per recruiter, and 70% sign a new client within their first 45 days. Results vary, but the data speaks for itself."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible plans designed for agencies of all sizes. Every plan includes 5 premium warmed inboxes, AI-powered sequences, and real-time data enrichment. Book a demo to find the right fit for your team."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 text-white py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSIyMCIgY3k9IjIwIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative">
          <p className="text-sm font-medium">
            🎉 Now offering 5 premium warmed inboxes FREE with every subscription
            <Link href="/university/blog/premium-email-infrastructure" className="ml-2 underline hover:no-underline font-semibold">Learn more →</Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-500/15 via-fuchsia-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">Trusted by 100+ recruiting agencies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
              <span className="block text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>AI Outbound</span>
              <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent italic pb-2 px-8 -mx-8" style={{ fontFamily: 'Georgia, Times, serif' }}>
                for Recruiters
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Sign more clients. Source more candidates. Make more placements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-black hover:bg-gray-100 h-14 px-10 text-base font-semibold shadow-lg shadow-white/10" asChild>
                <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 text-base backdrop-blur-sm" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">Setup in 24 hours • Premium inboxes included • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-12 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by recruiting agencies and staffing firms</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50">
            {['TechRecruit', 'Apex Staffing', 'HireFast', 'Talent Partners', 'Elite Search', 'NextGen Recruiting'].map((company, i) => (
              <span key={i} className="text-gray-400 font-semibold text-lg tracking-wide">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Video Testimonial - Featured */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">Customer Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See why recruiters love Quinton
            </h2>
            <p className="text-gray-400 text-lg">Real results from a real agency</p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-[#12121a] rounded-xl overflow-hidden border border-white/10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://drive.google.com/file/d/1cqE3aGlLRx0xCj-ftvcqUfTLAhleFZW6/preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                  title="Quinton AI Client Testimonial"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Before/After */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400 text-sm font-semibold tracking-wider uppercase mb-3">The Transformation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From chaos to closed deals
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Most recruiting agencies are stuck in the grind. Quinton changes everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl"></div>
              <Card className="bg-[#12121a]/80 border-red-500/20 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-red-400">Before Quinton</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Spending 4+ hours daily on manual prospecting",
                      "Cold emails landing in spam, getting 1-2% reply rates",
                      "Struggling to find quality candidates fast enough",
                      "Losing deals to competitors with better outreach",
                      "Working nights and weekends just to keep up",
                      "No predictable pipeline for new business"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <X className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* After */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Card className="bg-[#12121a]/80 border-violet-500/30 backdrop-blur-sm h-full relative">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold text-violet-400">After Quinton</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "AI generates 50+ qualified leads daily—automatically",
                      "Premium inboxes hitting primary inbox, 7-11% reply rates",
                      "Real-time candidate sourcing with verified contact data",
                      "Personalized sequences that actually get responses",
                      "40 hours saved per month per recruiter",
                      "Predictable revenue with consistent client acquisition"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Metrics */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/50 via-fuchsia-950/30 to-violet-950/50"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Recruiting Agencies", icon: Users },
              { number: "70%", label: "Sign Client in 45 Days", icon: TrendingUp },
              { number: "7-11%", label: "Positive Reply Rate", icon: Mail },
              { number: "40hrs", label: "Saved Monthly", icon: Clock }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">Everything You Need</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Built for agencies that want to scale
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              One platform to automate your entire BD and sourcing workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Premium Email Infrastructure",
                description: "5 warmed inboxes included free. Private servers, proper authentication, and deliverability that actually works."
              },
              {
                icon: "🤖",
                title: "AI-Powered Sequences",
                description: "Auto-draft personalized emails and LinkedIn messages using real-time data about your prospects."
              },
              {
                icon: "📊",
                title: "Real-Time Data Enrichment",
                description: "Find emails, phones, LinkedIn profiles instantly. Always fresh, always verified."
              },
              {
                icon: "🧠",
                title: "Agentic AI",
                description: "Tell Quinton your ideal clients and audience and it will generate new business all on its own."
              },
              {
                icon: "📈",
                title: "Performance Analytics",
                description: "Track every prospect, candidate and reply. Know exactly what's working and optimize fast."
              },
              {
                icon: "🔗",
                title: "CRM Integration",
                description: "Sync with your existing tools on the team plan, custom integrations can be implemented."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-[#12121a]/50 border-white/5 hover:border-violet-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400 text-sm font-semibold tracking-wider uppercase mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Loved by recruiting agencies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Quinton has completely transformed our agency. We're booking 3x more meetings with half the effort. The AI personalization is scary good.",
                author: "Sarah Jenkins",
                role: "Agency Owner",
                company: "TechRecruit"
              },
              {
                quote: "Finally, a tool that understands the agency workflow. We signed 4 new clients in our first 2 months. The ROI is insane.",
                author: "Mike Thompson",
                role: "Senior Recruiter",
                company: "Apex Systems"
              },
              {
                quote: "The premium inboxes alone are worth the subscription. Our deliverability went from 30% to 95%. Game changer.",
                author: "Jessica Rodriguez",
                role: "Director of Recruitment",
                company: "HireFast"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-[#12121a]/50 border-white/5 hover:border-white/10 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions? We've got answers.
            </h2>
            <p className="text-gray-400">
              The stuff you're probably wondering about
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden bg-[#12121a]/50 hover:border-violet-500/30 transition-colors"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loom Demo Video - Moved to Bottom */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-fuchsia-400 text-sm font-semibold tracking-wider uppercase mb-3">See It In Action</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch how Quinton works
            </h2>
            <p className="text-gray-400 text-lg">A quick walkthrough from our founder</p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-[#12121a] rounded-xl overflow-hidden border border-white/10">
              <AspectRatio ratio={16 / 9}>
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/50 via-fuchsia-950/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to scale your outbound?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 100+ agencies already using Quinton to sign more clients and source more candidates. Get set up in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 h-14 px-10 text-lg font-semibold shadow-lg shadow-white/10" asChild>
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 text-lg" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
