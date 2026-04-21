import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Play, Mail, Shield, Server, AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PremiumEmailInfrastructureBlog() {
  const signupUrl = 'https://dev.quinton.ai/sign-up'

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
            <span className="inline-block px-2 py-1 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              Email Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Premium Email Infrastructure: Why Managed Inboxes Are Essential for Success
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Discover why premium managed inboxes are crucial for cold email deliverability and how they give recruiting agencies a competitive edge.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold">DP</div>
                <span>David Phillips</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Jan 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          {/* Video Tutorial Link */}
          <div className="bg-[#12121a] border border-violet-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Play className="w-32 h-32 text-violet-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Play className="h-5 w-5 text-violet-400 fill-violet-400" />
                <h3 className="text-lg font-bold text-white">Watch the Video Tutorial</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl">
                Prefer watching? This post is based on our comprehensive video explanation. Get additional insights and visual demonstrations.
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold" asChild>
                <Link href="/university/videos">
                  Watch Tutorial
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            If you've ever tried to scale cold email outreach for your recruiting agency, you've probably discovered a harsh reality: sending cold emails from your primary business inbox is a recipe for disaster. But why is this the case, and what's the solution?
          </p>

          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-violet-400" />
            The Cold Email Challenge
          </h2>

          <p>
            Before diving into solutions, it's crucial to understand why cold email is fundamentally different from regular email communication. This distinction is what makes premium infrastructure necessary.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            <div className="bg-[#12121a] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Regular Email
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Emails to people you know</li>
                <li>• Existing email history</li>
                <li>• Transactional communications</li>
                <li>• Expected communication</li>
                <li>• High engagement rates</li>
              </ul>
            </div>
            
            <div className="bg-[#12121a] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Cold Email
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Messaging unknown recipients</li>
                <li>• No previous email history</li>
                <li>• Unsolicited outreach</li>
                <li>• Triggers spam detection</li>
                <li>• Lower initial engagement</li>
              </ul>
            </div>
          </div>

          <h2>The Hidden Costs of DIY</h2>

          <p>
            Many recruiting agencies make the mistake of sending cold emails from their primary business inbox. This approach leads to serious consequences that can cripple your business operations.
          </p>

          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 my-10 not-prose">
            <h3 className="text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">Domain Risks</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Domain Blacklisting:</strong> Your entire domain gets flagged as spam, affecting all communication.</span>
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Client Issues:</strong> Legitimate emails to existing clients may not reach their inbox.</span>
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Permanent Reputation Damage:</strong> Sender reputation is extremely difficult to recover once burned.</span>
              </li>
            </ul>
          </div>

          <h2>The Technical Foundation</h2>

          <p>
            Proper cold email infrastructure requires four critical components that most agencies lack the time or expertise to manage:
          </p>

          <ol>
            <li><strong>Domain Authentication:</strong> Proper setup of DKIM, DMARC, and SPF records.</li>
            <li><strong>Email Warm-up:</strong> A gradual process of building sender reputation.</li>
            <li><strong>Sending Optimization:</strong> Intelligent timing and volume management.</li>
            <li><strong>Private Servers:</strong> Dedicated infrastructure to avoid reputation contamination.</li>
          </ol>

          <div className="bg-[#12121a] border border-violet-500/30 rounded-2xl p-8 my-12 not-prose">
            <h3 className="text-xl font-bold text-white mb-4">The Quinton Solution</h3>
            <p className="text-gray-400 mb-6">We provide fully managed, premium inboxes that handle all this complexity for you. You get 5 free warmed inboxes with every subscription.</p>
            <Button className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Get Started Now</Link>
            </Button>
          </div>
        </article>

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to sign more clients?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join 100+ agencies using Quinton's premium infrastructure to land more placements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">Sign Up for Quinton</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white" asChild>
              <Link href="/university">Explore University</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
