import Link from 'next/link'
import { ArrowLeft, BookOpen, Briefcase, CheckCircle } from 'lucide-react'

export default function JobListingsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-12">
          <Link href="/university/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-violet-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Job Listings</h1>
          </div>
        </div>

        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300">Learn to track, filter, and manage all discovered job opportunities in one centralized location for maximum efficiency.</p>
          <h2>Streamlined BD</h2>
          <p>The job listings page is your command center for business development. View live opportunities enriched with decision-maker data.</p>
        </article>
      </div>
    </div>
  )
}
