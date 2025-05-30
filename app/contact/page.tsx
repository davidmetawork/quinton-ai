import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, Phone, MapPin, ArrowLeft, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your recruiting agency with AI? We'd love to hear from you and discuss how Quinton AI can help you close more placements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Contact Card */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Mail className="w-5 h-5 mr-2" />
                  Primary Contact
                </CardTitle>
                <CardDescription>
                  Reach out directly to our founder for personalized assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">David Phillips</div>
                  <div className="text-gray-600 mb-4">Cofounder</div>
                  
                  <a 
                    href="mailto:david@quinton.ai"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    david@quinton.ai
                  </a>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <a href="mailto:david@quinton.ai?subject=Quinton AI Inquiry">
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule a Demo
                  </CardTitle>
                  <CardDescription>
                    Book a personalized demo to see Quinton AI in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="outline">
                    <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                      Book Demo Call
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Response Time
                  </CardTitle>
                  <CardDescription>
                    We typically respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    <p>• General inquiries: Within 24 hours</p>
                    <p>• Demo requests: Same business day</p>
                    <p>• Technical support: Within 4 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about Quinton AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can I get started?</h3>
              <p className="text-gray-600 text-sm mb-4">Most agencies are up and running within 30 minutes of their first call. We provide full onboarding support.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the demo?</h3>
              <p className="text-gray-600 text-sm mb-4">We'll show you live prospecting, email personalization, and how our AI workers integrate with your existing workflow.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
              <p className="text-gray-600 text-sm mb-4">Yes! For agencies with 25+ recruiters, we offer custom enterprise pricing and features.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Can I integrate with my existing tools?</h3>
              <p className="text-gray-600 text-sm mb-4">Quinton AI works as a standalone platform. We're designed to complement your existing workflow without requiring complex integrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 100+ recruiting agencies already using Quinton AI to close more placements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:david@quinton.ai?subject=Ready to Get Started with Quinton AI">
                Contact David
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
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