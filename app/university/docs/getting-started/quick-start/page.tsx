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
        "Set up search criteria (industry, location, size)",
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

  const quickWins = [
    {
      icon: Users,
      title: "Import Existing Contacts",
      description: "Upload your current client and candidate database to get started immediately",
      action: "Import Contacts"
    },
    {
      icon: Target,
      title: "Use Job Board Integration",
      description: "Connect to major job boards to automatically track new opportunities",
      action: "Connect Job Boards"
    },
    {
      icon: Mail,
      title: "Send Your First Campaign",
      description: "Use proven templates to send your first outreach campaign today",
      action: "Start Campaign"
    },
    {
      icon: BarChart3,
      title: "Set Up Analytics",
      description: "Configure tracking to measure your outreach performance from day one",
      action: "Enable Analytics"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-green-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-6">
            <Link href="/university/docs" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Quick Start Guide
              </h1>
              <p className="text-gray-600 mt-2">Get up and running with Quinton AI in under an hour</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              15 min read
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              60 min setup
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
              Beginner friendly
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              What You'll Accomplish
            </h2>
            <ul className="text-blue-800 space-y-2 mb-0">
              <li>Set up your complete Quinton AI workspace</li>
              <li>Install and configure the Chrome extension</li>
              <li>Create your first client and candidate searches</li>
              <li>Launch your first automated outreach campaign</li>
              <li>Understand the core features and workflows</li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to Quinton AI! This guide will walk you through the essential setup steps to get your recruiting business running efficiently. By the end of this guide, you'll have a fully functional recruiting system that can help you find clients, source candidates, and manage your entire pipeline.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Before You Start</h4>
                  <p className="text-green-700 text-sm">
                    Make sure you have your Quinton AI account credentials ready and access to Chrome browser for the extension installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            5-Step Setup Process
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Follow these steps in order to set up your complete recruiting workflow.
          </p>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Quick Wins */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Wins to Get Started
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            These actions will give you immediate value and help you see results faster.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickWins.map((win, index) => {
              const IconComponent = win.icon
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {win.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {win.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {win.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              You're All Set! What's Next?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Now that you've completed the basic setup, explore these advanced features to maximize your recruiting efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link href="/university/docs/getting-started/get-clients" className="group">
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    Master Client Acquisition
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn advanced strategies for finding and converting high-value clients.
                  </p>
                </div>
              </Link>
              
              <Link href="/university/docs/getting-started/find-candidates" className="group">
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    Advanced Candidate Sourcing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover powerful techniques for finding and engaging top talent.
                  </p>
                </div>
              </Link>
              
              <Link href="/university/docs/automation/workflows" className="group">
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    Automation Workflows
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Set up sophisticated automation to scale your recruiting operations.
                  </p>
                </div>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/university/videos">
                  Watch Video Tutorials
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                <Link href="/university/docs">
                  Browse All Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you succeed. Get personalized onboarding assistance and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Schedule Onboarding Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 