import Link from 'next/link'
import { ArrowLeft, BookOpen, UserPlus, CheckCircle } from 'lucide-react'

export default function FindCandidatesPage() {
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
              <UserPlus className="w-6 h-6 text-violet-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Find Candidates</h1>
          </div>
        </div>

        <article className="prose prose-custom max-w-none">
          <p className="text-lg text-gray-300">Search for candidates, find personal contact information, and send targeted outreach in one unified platform.</p>
          <h2>The Search Engine</h2>
          <p>Our candidate search engine indexes millions of profiles across LinkedIn, GitHub, and other professional networks to give you the most comprehensive view of the talent market.</p>
        </article>
      </div>
    </div>
  )
}
