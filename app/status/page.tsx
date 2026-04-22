"use client"

import Link from 'next/link'
import { CheckCircle, ArrowLeft, Activity, Mail, Database, Globe } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

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
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HEADER ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Home
            </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
                Status
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-[44px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance">
                System{' '}
                <span className="font-serif-italic text-gradient-ember">Status</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 inline-flex items-center gap-2.5 bg-signal-500/15 border border-signal-500/30 rounded-full px-4 py-2 text-signal-600 font-medium text-sm">
                <CheckCircle className="w-4 h-4" />
                All Systems Operational
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <div className="bg-white border border-ink-100 shadow-soft rounded-2xl p-6 hover:shadow-lift transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cream-100 border border-ink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-ink-700" />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-semibold text-ink-900">{service.name}</h3>
                        <p className="text-ink-500 text-sm">{service.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:gap-8">
                      <div className="text-center md:text-right">
                        <div className="text-[10px] font-semibold text-ink-300 uppercase tracking-[0.2em] mb-1">Uptime</div>
                        <div className="text-ink-900 font-medium text-sm">{service.uptime}</div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-[10px] font-semibold text-ink-300 uppercase tracking-[0.2em] mb-1">Response</div>
                        <div className="text-ink-900 font-medium text-sm">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center gap-2 bg-signal-500/15 text-signal-600 px-3 py-1 rounded-full text-[11px] font-semibold border border-signal-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-signal-500 animate-pulse" />
                        Operational
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PERFORMANCE STATS ─────────────── */}
      <section className="py-20 md:py-24 bg-cream-50 border-y border-ink-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '99.96%', label: 'Global Uptime' },
                { value: '156ms', label: 'Avg Response' },
                { value: 'A+', label: 'Security Score' },
                { value: '24/7', label: 'Monitoring' }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-ink-100 shadow-soft rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold tracking-tight text-ink-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-ink-500 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── FOOTER INFO ─────────────── */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-ink-500 text-sm">
            Status page powered by Quinton AI • Last updated: {new Date().toLocaleString()}
          </p>
          <div className="flex justify-center gap-6 mt-5">
            <Link href="/contact" className="text-xs font-semibold text-ink-500 hover:text-ink-900 uppercase tracking-[0.2em] transition-colors">Support</Link>
            <Link href="/university/docs" className="text-xs font-semibold text-ink-500 hover:text-ink-900 uppercase tracking-[0.2em] transition-colors">Docs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
