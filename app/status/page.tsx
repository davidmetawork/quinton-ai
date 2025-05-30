import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, AlertTriangle, XCircle, ArrowLeft, Activity, Server, Mail, Database, Globe, Shield } from 'lucide-react'

export default function StatusPage() {
  // Current status data - in a real app, this would come from an API
  const services = [
    {
      name: 'Email Infrastructure',
      description: 'Premium email delivery and SMTP services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '89ms',
      icon: Mail,
      lastIncident: null
    },
    {
      name: 'Data Enrichment',
      description: 'Contact data and profile enrichment services',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '234ms',
      icon: Database,
      lastIncident: null
    },
    {
      name: 'Web Application',
      description: 'Main dashboard and user interface',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '67ms',
      icon: Globe,
      lastIncident: null
    },
    {
      name: 'AI Processing',
      description: 'Machine learning and AI automation services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '312ms',
      icon: Activity,
      lastIncident: null
    },
    {
      name: 'Security & Authentication',
      description: 'User authentication and security services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '98ms',
      icon: Shield,
      lastIncident: null
    }
  ]

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Email Infrastructure Upgrade',
      description: 'Planned maintenance to upgrade email delivery infrastructure for improved performance.',
      status: 'resolved',
      date: '2024-12-10',
      duration: '2 hours',
      impact: 'low'
    },
    {
      id: 2,
      title: 'API Rate Limiting Adjustment',
      description: 'Minor adjustment to API rate limits to improve service stability.',
      status: 'resolved',
      date: '2024-12-05',
      duration: '15 minutes',
      impact: 'minimal'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'partial':
        return <Clock className="w-5 h-5 text-orange-500" />
      case 'down':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'partial':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'down':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  const getIncidentColor = (impact: string) => {
    switch (impact) {
      case 'minimal':
        return 'bg-blue-100 text-blue-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'high':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'issues'

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
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Real-time status and performance metrics for all Quinton AI services.
            </p>
            
            {/* Overall Status */}
            <div className="flex items-center space-x-3">
              {getStatusIcon(overallStatus)}
              <span className="text-lg font-semibold text-gray-900">
                {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
              </span>
              <Badge className={getStatusColor(overallStatus)}>
                {overallStatus === 'operational' ? 'Operational' : 'Issues Detected'}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Status</h2>
          
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <service.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Uptime</div>
                        <div className="font-semibold text-gray-900">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Response Time</div>
                        <div className="font-semibold text-gray-900">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(service.status)}
                        <Badge className={getStatusColor(service.status)}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Performance Metrics</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Overall Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">99.96%</div>
                <p className="text-sm text-gray-500">Last 30 days</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">156ms</div>
                <p className="text-sm text-gray-500">Last 24 hours</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Incidents Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">2</div>
                <p className="text-sm text-gray-500">Last 30 days</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Security Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">A+</div>
                <p className="text-sm text-gray-500">SSL Labs Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Incidents</h2>
          
          {recentIncidents.length > 0 ? (
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <Card key={incident.id} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                          <Badge className={getIncidentColor(incident.impact)}>
                            {incident.impact} impact
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">
                            {incident.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{incident.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Date: {incident.date}</span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Recent Incidents</h3>
                <p className="text-gray-600">All systems have been running smoothly.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border border-gray-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to receive notifications about system status updates and scheduled maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              <p>Status page powered by Quinton AI • Last updated: {new Date().toLocaleString()}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-blue-600">Contact Support</Link>
              <span>•</span>
              <Link href="/university/docs" className="hover:text-blue-600">Documentation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
 