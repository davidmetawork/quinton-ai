import Link from 'next/link'
import { ArrowLeft, BookOpen, Chrome, Search, Target, Zap, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GetClientsTabGuide() {
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
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-violet-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Get Clients Tab Guide</h1>
          </div>
          
          <div className="flex flex-wrap gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /> 12 min read</span>
            <span className="flex items-center gap-2 text-green-400"><CheckCircle className="w-3.5 h-3.5" /> Beginner friendly</span>
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-custom max-w-none">
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 mb-16 not-prose">
            <h2 className="text-xl font-bold text-white mb-6">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Using the browser extension",
                "Managing job bookmarks",
                "Understanding contact scores",
                "Automated search agent"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <Chrome className="h-6 w-6 text-violet-400" />
            Browser Extension Overview
          </h2>
          
          <p>
            The Quinton browser extension transforms how you interact with job boards, turning passive browsing into active client acquisition. It works seamlessly with major job boards like LinkedIn and Indeed.
          </p>

          <div className="bg-yellow-500/5 border-l-4 border-yellow-500 p-6 my-10 not-prose rounded-r-xl">
            <h3 className="text-yellow-400 font-bold mb-2 uppercase tracking-widest text-xs">Pro Tip</h3>
            <p className="text-gray-300 text-sm">
              The extension activates when you search for jobs or click into specific postings. It won't appear on standard homepage feeds.
            </p>
          </div>

          <h2>Understanding Contact Scores</h2>
          <p>Quinton assigns scores based on relevance to the specific job posting:</p>

          <div className="space-y-4 my-10 not-prose">
            {[
              { score: "100", label: "Job Poster", desc: "The person who actually posted the listing. Highest priority.", color: "text-green-400" },
              { score: "80-99", label: "High Relevance", desc: "Hiring managers or department heads related to the role.", color: "text-violet-400" },
              { score: "60-79", label: "Medium Relevance", desc: "HR professionals or team members with influence.", color: "text-gray-400" }
            ].map((item, i) => (
              <div key={i} className="bg-[#12121a] border border-white/5 rounded-xl p-6 flex justify-between items-center gap-6">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-1">Relevance</div>
                  <div className={`text-2xl font-black ${item.color}`}>{item.score}</div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm mb-1">{item.label}</div>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3">
            <Search className="h-6 w-6 text-violet-400" />
            Search Agent (Beta)
          </h2>
          
          <p>
            The Search Agent automates the entire prospecting workflow, from finding jobs to drafting personalized outreach messages. It scans multiple boards and enriches data while you focus on relationships.
          </p>

          <div className="bg-[#12121a] border border-violet-500/30 rounded-2xl p-8 my-12 not-prose text-center">
            <h3 className="text-xl font-bold text-white mb-4">Master the Workflow</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">See the Search Agent in action with our comprehensive video tutorial.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black font-bold" asChild>
                <Link href="https://www.loom.com/share/4b3ded41e66e48b3bc468678dc473d36" target="_blank">
                  Watch Tutorial
                </Link>
              </Button>
              <Button variant="outline" className="border-white/10 text-white font-bold" asChild>
                <Link href="/university/docs/automation/workflows">
                  Learn Automation
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
