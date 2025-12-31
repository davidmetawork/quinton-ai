import Link from 'next/link'
import { ArrowRight, BookOpen, Video, FileText, Clock, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function UniversityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Quinton <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>University</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Master the strategies that help recruiting agencies boost placements while reclaiming 40 hours monthly. Comprehensive guides, tutorials, and resources built for the modern recruiter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold" asChild>
              <Link href="/university/docs">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="/university/videos">
                <Video className="w-5 h-5 mr-2" />
                Watch Tutorials
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-violet-500/20 text-violet-400 hover:bg-violet-500/5" asChild>
              <Link href="https://facebook.com/groups/quintonai" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">40</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Hours saved per month</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">100+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Agencies using Quinton</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Weekly</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">New content and insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Types */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn Your Way</h2>
            <p className="text-gray-400 text-lg">Choose from video tutorials, written guides, or weekly insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video Tutorials */}
            <Link href="/university/videos" className="group">
              <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all h-full">
                <div className="w-16 h-16 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <Video className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Video Tutorials</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Step-by-step video guides showing you exactly how to use every feature of the Quinton platform.
                </p>
                <div className="flex items-center text-violet-400 font-bold text-sm">
                  <span>Watch tutorials</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Documentation */}
            <Link href="/university/docs" className="group">
              <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all h-full">
                <div className="w-16 h-16 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-500/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Comprehensive written guides covering setup, automation, integrations, and best practices.
                </p>
                <div className="flex items-center text-fuchsia-400 font-bold text-sm">
                  <span>Read docs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Blog */}
            <Link href="/university/blog" className="group">
              <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all h-full">
                <div className="w-16 h-16 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <FileText className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Weekly Blog</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Fresh insights, industry trends, success stories, and advanced strategies published every week.
                </p>
                <div className="flex items-center text-violet-400 font-bold text-sm">
                  <span>Read latest posts</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-600/5"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your agency?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Join the top recruiting agencies already using Quinton to find better candidates and close more clients.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
            <Link href="/signup">
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
