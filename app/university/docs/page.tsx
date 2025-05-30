import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Everything you need to begin your journey with Quinton AI",
      icon: BookOpen,
      color: "blue",
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          hover: 'hover:bg-blue-200'
        }
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          hover: 'hover:bg-green-200'
        }
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          hover: 'hover:bg-purple-200'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          hover: 'hover:bg-gray-200'
        }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Documentation
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent block leading-relaxed">
                Everything you need to know
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guides and tutorials to help you master Quinton AI. From quick setup to advanced automation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-8">
                <BookOpen className="w-5 h-5 mr-2" />
                Quick Start Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-11 px-8">
                Browse All Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-16">
            {docSections.map((section, index) => {
              const colors = getColorClasses(section.color)
              const Icon = section.icon
              
              return (
                <div key={index} className="space-y-8">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.docs.map((doc, docIndex) => (
                      <Link key={docIndex} href={doc.href} className="group">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
                              <BookOpen className={`w-4 h-4 ${colors.text}`} />
                            </div>
                            <span className="text-sm text-gray-500">{doc.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {doc.description}
                          </p>
                          <div className={`flex items-center ${colors.text} text-sm font-medium`}>
                            <span>Read guide</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need help getting started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our support team is here to help you succeed. Get personalized assistance and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-11 px-8" asChild>
              <Link href="/contact">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 border-blue-900 h-11 px-8" asChild>
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