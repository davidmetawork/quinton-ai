import Link from 'next/link'
import { ArrowLeft, ArrowRight, Zap, Clock, User, Target, Mail, MessageSquare, Calendar, CheckCircle, Settings, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WorkflowsPage() {
  const workflowTypes = [
    {
      title: "Prospecting Automation",
      description: "Automatically identify and qualify potential candidates",
      icon: Target,
      color: "blue",
      features: [
        "AI-powered candidate sourcing",
        "Automatic profile scoring",
        "Skills-based matching",
        "Company research automation"
      ]
    },
    {
      title: "Outreach Sequences",
      description: "Personalized multi-touch email campaigns",
      icon: Mail,
      color: "green",
      features: [
        "Dynamic personalization",
        "A/B testing capabilities",
        "Follow-up automation",
        "Response tracking"
      ]
    },
    {
      title: "Interview Scheduling",
      description: "Streamline the interview booking process",
      icon: Calendar,
      color: "purple",
      features: [
        "Calendar integration",
        "Automatic scheduling",
        "Reminder notifications",
        "Timezone handling"
      ]
    },
    {
      title: "Pipeline Management",
      description: "Track candidates through the entire process",
      icon: BarChart3,
      color: "orange",
      features: [
        "Stage progression tracking",
        "Automated status updates",
        "Performance analytics",
        "Bottleneck identification"
      ]
    }
  ]

  const workflowSteps = [
    {
      number: 1,
      title: "Define Triggers",
      description: "Set up conditions that start your automation",
      examples: [
        "New candidate added to database",
        "Job posting goes live",
        "Client request received",
        "Time-based triggers"
      ]
    },
    {
      number: 2,
      title: "Configure Actions",
      description: "Define what happens when triggers are activated",
      examples: [
        "Send personalized emails",
        "Update candidate status",
        "Schedule follow-up tasks",
        "Notify team members"
      ]
    },
    {
      number: 3,
      title: "Set Conditions",
      description: "Add logic to make your workflows intelligent",
      examples: [
        "If/then conditional logic",
        "Time delays between actions",
        "Response-based branching",
        "Score-based routing"
      ]
    },
    {
      number: 4,
      title: "Monitor & Optimize",
      description: "Track performance and improve your workflows",
      examples: [
        "Response rate analytics",
        "Conversion tracking",
        "A/B test results",
        "Performance benchmarks"
      ]
    }
  ]

  const bestPractices = [
    {
      title: "Start Simple",
      description: "Begin with basic workflows and gradually add complexity as you learn what works best for your process."
    },
    {
      title: "Test Everything",
      description: "Always test your workflows with a small group before rolling out to your entire candidate database."
    },
    {
      title: "Personalize at Scale",
      description: "Use dynamic fields and AI-generated content to maintain personal touch while automating at scale."
    },
    {
      title: "Monitor Performance",
      description: "Regularly review analytics to identify bottlenecks and opportunities for improvement."
    },
    {
      title: "Maintain Human Touch",
      description: "Balance automation with human interaction to maintain authentic relationships with candidates."
    },
    {
      title: "Keep It Compliant",
      description: "Ensure all automated communications comply with relevant regulations and best practices."
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600' }
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-600' }
      case 'purple':
        return { bg: 'bg-purple-100', text: 'text-purple-600' }
      case 'orange':
        return { bg: 'bg-orange-100', text: 'text-orange-600' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600' }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl py-4">
          <Link 
            href="/university/docs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building Automation Workflows
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create sophisticated automation workflows that handle prospecting, outreach, and follow-ups automatically while maintaining a personal touch.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                15 minutes
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Intermediate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Automation Workflows
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Quinton AI supports various types of automation workflows to streamline your recruiting process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowTypes.map((workflow, index) => {
              const colors = getColorClasses(workflow.color)
              const IconComponent = workflow.icon
              
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {workflow.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {workflow.description}
                  </p>
                  <ul className="space-y-2">
                    {workflow.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workflow Building Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Build Effective Workflows
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Follow these four key steps to create automation workflows that deliver results.
          </p>
          
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Workflow Best Practices
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Follow these proven strategies to maximize the effectiveness of your automation workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your First Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with our pre-built templates or create custom workflows from scratch using our visual workflow builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 h-11 px-8">
                Browse Templates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white h-11 px-8">
                Create Custom Workflow
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/university/docs/automation/sequences" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-3">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    Email Sequences
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Learn how to create effective email sequences that convert prospects into placements.
                </p>
              </div>
            </Link>
            
            <Link href="/university/docs/automation/triggers" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-3">
                  <Settings className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    Automation Triggers
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Understand different types of triggers and how to use them effectively in your workflows.
                </p>
              </div>
            </Link>
            
            <Link href="/university/docs/analytics/workflow-performance" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-3">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    Workflow Analytics
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Track and optimize your workflow performance with detailed analytics and insights.
                </p>
              </div>
            </Link>
            
            <Link href="/university/videos" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-3">
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    Video Tutorials
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Watch step-by-step video guides on building and optimizing automation workflows.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Building Workflows?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our automation experts can help you design and implement workflows that drive results for your recruiting business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 h-11 px-8">
              Get Expert Help
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 h-11 px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 