import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BookmarkFilterEngagePage() {
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
              Automation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Bookmark, Filter, Engage: Turning Job Boards into Lists
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold">DP</div>
                <span>David Phillips</span>
              </div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Dec 24, 2024</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>6 min read</span></div>
            </div>
          </div>
        </div>

        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300">How Quinton AI's browser extension transforms job board scrolling into automated outreach opportunities with one-click bookmarking.</p>
          <h2>The Traditional Workflow</h2>
          <p>Most recruiters spend hours manually copying and pasting job data from LinkedIn, Indeed, and specialized boards into their CRM. It's tedious, error-prone, and a waste of high-value talent.</p>
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 my-12 not-prose">
            <h3 className="text-white font-bold mb-4">One-Click Transformation</h3>
            <p className="text-gray-400 mb-6">Our extension identifies job data instantly and allows you to add it directly to your BD sequences without leaving the page.</p>
            <Button className="bg-white text-black font-bold" asChild><Link href="/signup">Try the Extension</Link></Button>
          </div>
        </article>
      </div>
    </div>
  )
}
