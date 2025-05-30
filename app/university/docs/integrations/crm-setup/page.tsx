import Link from 'next/link'
import { ArrowLeft, BookOpen, Database, Settings, CheckCircle, AlertTriangle, ExternalLink, Zap, Users, Mail, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CRMSetupGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-6">
            <Link href="/university/docs" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                CRM Setup & Integration
              </h1>
              <p className="text-gray-600 mt-2">Connect and configure your CRM system for optimal recruiting workflow</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              20 min read
            </span>
            <span className="flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Technical setup required
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
              Intermediate level
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              What You'll Learn
            </h2>
            <ul className="text-blue-800 space-y-2 mb-0">
              <li>How to choose the right CRM for your recruiting business</li>
              <li>Step-by-step setup process for popular CRM platforms</li>
              <li>Best practices for organizing recruiting data</li>
              <li>Integration strategies with Quinton AI</li>
              <li>Automation workflows to streamline your process</li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              A well-configured CRM system is essential for managing your recruiting business effectively. This guide will help you choose, set up, and integrate a CRM that works seamlessly with Quinton AI to streamline your client and candidate management processes.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    While Quinton AI has built-in contact management, integrating with a dedicated CRM provides advanced features like deal tracking, advanced reporting, and team collaboration capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Set Up Your CRM Integration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert help setting up your CRM integration to ensure optimal performance and data flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Setup Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Integration Docs
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 