import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, ArrowLeft, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Get in <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic" style={{ fontFamily: 'Georgia, serif' }}>touch</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Ready to scale your recruiting outbound? We'd love to hear from you and discuss how Quinton AI can help your agency.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Contact */}
            <Card className="bg-[#12121a] border-white/5 hover:border-violet-500/30 transition-all">
              <CardHeader className="pt-10 pb-8 text-center border-b border-white/5">
                <div className="bg-violet-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Direct Contact</CardTitle>
                <CardDescription className="text-gray-400">
                  Reach out directly for personalized assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="text-2xl font-bold text-white mb-1">David Phillips</div>
                  <div className="text-gray-500 font-medium uppercase tracking-widest text-[10px] mb-4">Founder</div>
                  <a 
                    href="mailto:david@quinton.ai"
                    className="text-xl text-violet-400 hover:text-violet-300 transition-colors font-semibold"
                  >
                    david@quinton.ai
                  </a>
                </div>
                <Button 
                  asChild
                  className="w-full h-12 bg-white text-black hover:bg-gray-100 font-bold"
                >
                  <a href="mailto:david@quinton.ai?subject=Quinton AI Inquiry">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Support */}
            <div className="space-y-6">
              <Card className="bg-[#12121a] border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-white text-lg">
                    <MessageSquare className="w-5 h-5 mr-3 text-violet-400" />
                    Schedule a Demo
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Book a personalized walkthrough of the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-white/5 text-white border border-white/10 hover:bg-white/10">
                    <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                      Book Demo Call
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#12121a] border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-white text-lg">
                    <Clock className="w-5 h-5 mr-3 text-violet-400" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-400">General Inquiries</span>
                      <span className="text-white font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-400">Demo Requests</span>
                      <span className="text-white font-medium">Same business day</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Technical Support</span>
                      <span className="text-white font-medium">Within 4 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Note */}
      <section className="py-24 border-t border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Based in New York City</h2>
          <p className="text-gray-500">Helping recruiting agencies worldwide scale with AI.</p>
        </div>
      </section>
    </div>
  )
}
