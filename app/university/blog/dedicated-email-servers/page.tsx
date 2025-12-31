import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Server, Shield, TrendingUp, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DedicatedEmailServersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/university/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="mb-8">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-2 py-1 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest">
                Infrastructure
              </span>
              <span className="inline-block px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-400 text-[10px] font-bold uppercase tracking-widest">
                Deliverability
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Dedicated Email Servers: The Invisible Edge in Outreach
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Why dedicated infrastructure is essential for agencies that live or die by inbox placement, and how shared servers kill your deliverability.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold">DP</div>
                <span>David Phillips</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Jan 8, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 mb-16 aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Modern server infrastructure"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
        </div>

        {/* Article Content */}
        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            When you're sending 10,000+ emails per month, shared infrastructure becomes your biggest liability. One bad actor on your server can tank your entire agency's deliverability overnight.
          </p>

          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            The Shared Server Problem
          </h2>
          
          <p>
            Most email platforms cram hundreds of users onto the same sending infrastructure. When someone else gets flagged for spam, your IP reputation takes the hit. It's like sharing a credit score with strangers—their mistakes become your problem.
          </p>

          <div className="bg-red-500/5 border-l-4 border-red-500 p-6 my-10 not-prose rounded-r-xl">
            <h3 className="text-red-400 font-bold mb-2 uppercase tracking-widest text-xs">Reputation Contamination</h3>
            <p className="text-gray-300 text-sm">
              Shared IP addresses mean shared reputations. One spammer on your server can blacklist your entire agency's outreach overnight, destroying months of careful sender reputation building.
            </p>
          </div>

          <h2>Why Quinton AI Went Dedicated</h2>
          
          <p>
            Quinton AI runs dedicated email infrastructure for every high-volume client. Your sending reputation is yours alone. No shared IPs, no cross-contamination, no surprises when your open rates suddenly crater because someone else got sloppy.
          </p>

          <div className="bg-[#12121a] rounded-2xl p-8 my-12 border border-white/5 not-prose">
            <h3 className="text-lg font-bold text-white mb-6">Dedicated vs. Shared Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  Shared Servers
                </h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li>• Reputation contamination risk</li>
                  <li>• Unpredictable deliverability</li>
                  <li>• No control over IP warming</li>
                  <li>• Shared blacklist consequences</li>
                  <li>• Generic domain reputation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-400 font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Dedicated Infrastructure
                </h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li>• Isolated reputation management</li>
                  <li>• Predictable inbox placement</li>
                  <li>• Custom IP warming schedules</li>
                  <li>• Protected from others' mistakes</li>
                  <li>• Custom domain authentication</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>The Technical Advantage</h2>
          
          <p>
            Dedicated servers let you control every aspect of your sending profile. Custom DKIM signatures, SPF records tailored to your domain, and DMARC policies that actually protect your brand. It's the difference between renting an apartment and owning your house.
          </p>

          <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-8 my-10 not-prose">
            <h3 className="text-violet-400 font-bold mb-4 uppercase tracking-widest text-xs">Technical Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Custom DKIM key rotation",
                "Advanced bounce handling",
                "Dedicated IP protocols",
                "Real-time monitoring",
                "Custom retry logic",
                "Isolated feedback loops"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-1 h-1 rounded-full bg-violet-400"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <h2>Real-World Impact</h2>
          
          <p>
            Agencies that switch to dedicated infrastructure typically see 15-25% improvements in inbox placement within 30 days. More importantly, they stop experiencing the random deliverability drops that plague shared-server users.
          </p>

          <div className="flex flex-col md:flex-row gap-6 my-12 not-prose text-center">
            {[
              { val: "15-25%", label: "Better inbox placement", icon: Server, color: "text-violet-400" },
              { val: "90%", label: "Reduction in drops", icon: Shield, color: "text-fuchsia-400" },
              { val: "3x", label: "Faster IP warming", icon: TrendingUp, color: "text-violet-400" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 bg-[#12121a] border border-white/5 rounded-2xl p-6">
                <stat.icon className={`w-6 h-6 mx-auto mb-4 ${stat.color}`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed italic">
            In recruiting, your email infrastructure is your revenue infrastructure. Don't let someone else's mistakes cost you placements. Invest in dedicated servers and own your deliverability destiny.
          </p>
        </article>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Upgrade to Dedicated</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                Stop sharing your reputation. Get dedicated servers and predictable deliverability with Quinton AI.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold h-14 px-10" asChild>
                <Link href="/signup">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
