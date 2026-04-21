import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Everything you need to begin your journey with Quinton AI",
      icon: BookOpen,
      docs: [
        {
          title: "Get Clients Tab Guide",
          description: "Master the browser extension and search agent for client acquisition",
          href: "/university/docs/getting-started/get-clients-tab",
          time: "12 min read"
        },
        {
          title: "Find Candidates Guide",
          description: "Search for candidates, find personal contact information, and send targeted outreach",
          href: "/university/docs/getting-started/find-candidates",
          time: "10 min read"
        },
        {
          title: "Premium Email Infrastructure",
          description: "Learn about managed inboxes, email deliverability, and why premium infrastructure matters",
          href: "/university/docs/getting-started/premium-inboxes",
          time: "8 min read"
        },
        {
          title: "Contacts & CRM Features",
          description: "Master the contacts page to manage prospects, candidates, and track all outreach activity",
          href: "/university/docs/getting-started/contacts-crm",
          time: "6 min read"
        },
        {
          title: "Job Listings & Workflow Management",
          description: "Learn to track, filter, and manage all discovered job opportunities in one centralized location",
          href: "/university/docs/getting-started/job-listings",
          time: "5 min read"
        }
      ]
    }
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
            Documentation <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Comprehensive guides and tutorials to help you master Quinton AI. From quick setup to advanced automation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href="/university/docs/getting-started/quick-start">
                <Zap className="w-5 h-5 mr-2" />
                Quick Start Guide
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="/university">
                Back to University
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-20">
            {docSections.map((section, index) => {
              const Icon = section.icon
              
              return (
                <div key={index} className="space-y-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.docs.map((doc, docIndex) => (
                      <Link key={docIndex} href={doc.href} className="group">
                        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-violet-500/30 transition-all h-full flex flex-col">
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-violet-400" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{doc.time}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                            {doc.description}
                          </p>
                          <div className="flex items-center text-white font-bold text-sm mt-auto">
                            <span>Read guide</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 border-t border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need more help?</h2>
          <p className="text-gray-400 mb-10 text-lg">Our support team is here to help you succeed. Get personalized assistance and expert guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href="/contact">
                Contact Support
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
    </div>
  )
}
