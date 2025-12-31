import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function SixInboxesPage() {
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
              Email Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Six Inboxes, One Recruiter: The Deliverability Play
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold">DP</div>
                <span>David Phillips</span>
              </div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Dec 10, 2024</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>8 min read</span></div>
            </div>
          </div>
        </div>

        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300">Learn how spreading your email cadence across multiple addresses improves deliverability and why the multi-inbox strategy is essential.</p>
          <h2>Spreading the Load</h2>
          <p>Sending 200 emails from one inbox is a high-risk strategy. Sending 30 emails from 6 different inboxes is a professional strategy. Quinton makes this multi-inbox setup effortless.</p>
        </article>
      </div>
    </div>
  )
}
