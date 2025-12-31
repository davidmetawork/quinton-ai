import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, AlertTriangle, XCircle, ArrowLeft, Activity, Mail, Database, Globe, Shield } from 'lucide-react'

export default function StatusPage() {
  const services = [
    {
      name: 'Email Infrastructure',
      description: 'Premium email delivery and SMTP services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '89ms',
      icon: Mail
    },
    {
      name: 'Data Enrichment',
      description: 'Contact data and profile enrichment services',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '234ms',
      icon: Database
    },
    {
      name: 'Web Application',
      description: 'Main dashboard and user interface',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '67ms',
      icon: Globe
    },
    {
      name: 'AI Processing',
      description: 'Machine learning and AI automation services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '312ms',
      icon: Activity
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
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              System <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Status</span>
            </h1>
            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 font-medium">
              <CheckCircle className="w-5 h-5 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#12121a] border-white/5 hover:border-white/10 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <p className="text-gray-500 text-sm">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-center md:text-right">
                        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Uptime</div>
                        <div className="text-white font-medium">{service.uptime}</div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Response</div>
                        <div className="text-white font-medium">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                        Operational
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 border-y border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.96%</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">156ms</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">A+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Security Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-gray-500 text-sm">
            Status page powered by Quinton AI • Last updated: {new Date().toLocaleString()}
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/contact" className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest">Support</Link>
            <Link href="/university/docs" className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest">Docs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
