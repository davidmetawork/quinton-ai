import Link from 'next/link'
import { ArrowLeft, Mail, Shield, Server, CheckCircle, AlertTriangle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PremiumInboxesGuide() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/university/docs" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Premium Email Infrastructure Guide
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Understanding managed inboxes, deliverability, and why premium infrastructure is essential for success.
          </p>
          <div className="flex flex-wrap gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">📖 8 min read</span>
            <span className="flex items-center gap-2">🎯 Beginner</span>
            <span className="flex items-center gap-2">📧 Email Infrastructure</span>
          </div>
        </div>

        {/* Video Tutorial Link */}
        <div className="bg-[#12121a] border border-violet-500/20 rounded-2xl p-8 mb-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Play className="w-32 h-32 text-violet-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Play className="h-5 w-5 text-violet-400 fill-violet-400" />
              <h3 className="text-lg font-bold text-white">Video Tutorial Available</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Watch our comprehensive video explanation of premium email infrastructure and managed inboxes.
            </p>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold" asChild>
              <Link href="/university/videos">
                Watch Tutorial
              </Link>
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-custom max-w-none">
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 mb-16 not-prose">
            <h2 className="text-xl font-bold text-white mb-6">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Why cold email is different",
                "Risks of using primary inboxes",
                "Essential infrastructure components",
                "Quinton's managed solution",
                "Using the unified inbox"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-violet-400" />
            Cold Email vs. Regular Email
          </h2>
          
          <p>
            Before diving into premium infrastructure, it's crucial to understand how cold email differs from regular email communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            <div className="bg-[#12121a] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Regular Email
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• People you know</li>
                <li>• Existing history</li>
                <li>• Transactional alerts</li>
                <li>• Expected communication</li>
              </ul>
            </div>
            
            <div className="bg-[#12121a] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Cold Email
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Unknown recipients</li>
                <li>• No previous history</li>
                <li>• Unsolicited outreach</li>
                <li>• Spam red flags</li>
              </ul>
            </div>
          </div>

          <h2>The Primary Inbox Trap</h2>
          <p>Sending cold emails from your primary business inbox can have serious consequences, including domain blacklisting and permanent reputation damage.</p>

          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 my-12 not-prose">
            <h3 className="text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">Consequences</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><strong>Domain Blacklisting:</strong> Your entire domain flagged as spam.</li>
              <li><strong>Reputation Damage:</strong> Permanent damage to your sender score.</li>
              <li><strong>Business Risk:</strong> Critical emails to clients being blocked.</li>
            </ul>
          </div>

          <h2>Essential Infrastructure</h2>
          <p>Proper cold email requires technical components like DKIM, DMARC, SPF, and a consistent warm-up process on private servers.</p>

          <div className="bg-[#12121a] border border-violet-500/30 rounded-2xl p-8 my-12 not-prose">
            <h3 className="text-xl font-bold text-white mb-4">The Managed Advantage</h3>
            <p className="text-gray-400 mb-6">Quinton handles all of this automatically. Every account includes 5 premium warmed inboxes configured for maximum deliverability.</p>
            <Button className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href="/signup">Get Started Now</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
