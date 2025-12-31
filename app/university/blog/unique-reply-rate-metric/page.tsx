import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function UniqueReplyRatePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-12">
          <Link href="/university/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
          <div className="mb-8">
            <span className="inline-block px-2 py-1 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              Data & Analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Stop Counting Ghosts: Unique Reply Rate
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold">DP</div>
                <span>David Phillips</span>
              </div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Jan 1, 2025</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>4 min read</span></div>
            </div>
          </div>
        </div>

        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300">Why unique first replies per prospect is the only metric that actually maps to hires, and how to stop chasing phantom engagement.</p>
          <h2>The Vanity Metric Trap</h2>
          <p>Open rates and click rates are interesting, but they don't pay the bills. In high-volume recruiting, the only number that matters is how many unique prospects actually engaged with you.</p>
        </article>
      </div>
    </div>
  )
}
