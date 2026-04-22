'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Clock, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

const videoCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Essential videos for new users',
    videos: [
      {
        id: 'get-clients-tab',
        title: 'Using the Get Clients Tab',
        description: 'Complete guide to using the browser extension and search agent for client acquisition',
        duration: '17:07',
        loomId: '4b3ded41e66e48b3bc468678dc473d36',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['get-clients', 'browser-extension']
      },
      {
        id: 'find-candidates',
        title: 'Find Candidates Platform Guide',
        description: 'Learn how to search for candidates, find contact information, and send personalized outreach',
        duration: '6:06',
        loomId: '370369a605ea497c8cb328600bd4e01e',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['find-candidates', 'outreach']
      },
      {
        id: 'premium-inboxes',
        title: 'Premium Email Infrastructure Guide',
        description: 'Understand why premium managed inboxes are essential for cold email success and deliverability',
        duration: '8:00',
        loomId: '0b912771e34e49f884b8cde2ad68eb04',
        thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['premium-inboxes', 'deliverability']
      },
      {
        id: 'contacts-page',
        title: 'Managing Contacts & CRM Features',
        description: 'Learn how to use the contacts page to manage prospects, candidates, and track outreach activity',
        duration: '3:39',
        loomId: '56eb54bad4ae4b9f814568d7819e3dc2',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['contacts', 'crm']
      },
      {
        id: 'job-listings',
        title: 'Job Listings Page & Workflow Management',
        description: 'Master the job listings page to track, filter, and manage all discovered job opportunities',
        duration: '3:12',
        loomId: '667b463894a0414da0f018529d4ad2fe',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['job-listings', 'workflow']
      }
    ]
  }
]

export default function VideoTutorialsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const allVideos = videoCategories.flatMap(category =>
    category.videos.map(video => ({ ...video, category: category.title }))
  )

  const filteredVideos = allVideos.filter(video => {
    return video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           video.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="bg-cream-100 text-ink-900">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dots-ink opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.10),transparent_60%)] pointer-events-none" />

        <div className="container relative mx-auto px-6 max-w-6xl text-center">
          <div className="flex items-center mb-8">
            <Link href="/university" className="flex items-center text-ink-500 hover:text-ink-900 transition-colors text-[13px]">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to University
            </Link>
          </div>

          <Reveal>
            <span className="inline-block text-ember-700 text-[12px] font-medium tracking-[0.2em] uppercase mb-4">
              Videos
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[44px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
              Video{' '}
              <span className="font-serif-italic text-gradient-ember">Tutorials</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
              Step-by-step video guides to master every aspect of the Quinton platform. Learn at your own pace with our comprehensive library.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-300 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-ink-100 shadow-soft rounded-full text-[14px] text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-action-500/30"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── VIDEO GRID ─────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVideos.map((video, i) => (
              <Reveal key={video.id} delay={i * 0.04}>
                <div
                  className="bg-white rounded-2xl border border-ink-100 shadow-soft hover:shadow-lift transition-shadow overflow-hidden group cursor-pointer"
                  onClick={() => window.open(`https://www.loom.com/share/${video.loomId}`, '_blank')}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-ink-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-lift">
                        <Play className="w-5 h-5 text-ink-900 ml-0.5 fill-ink-900" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-ink-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="bg-ember-600/15 text-ember-700 text-[10px] font-semibold px-2 py-0.5 uppercase tracking-[0.15em] rounded">
                        {video.difficulty}
                      </span>
                      <span className="text-[10px] font-semibold text-ink-300 uppercase tracking-[0.2em]">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-tight text-ink-900 mb-2 group-hover:text-ember-700 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-ink-500 text-[14px] leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-24">
              <h3 className="text-xl font-semibold text-ink-900 mb-2">No tutorials found</h3>
              <p className="text-ink-500">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="py-24 md:py-28 bg-cream-50 border-t border-ink-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-4">
              Need a live demo{' '}
              <span className="font-serif-italic text-gradient-ember">instead</span>?
            </h2>
            <p className="text-ink-500 mb-10 text-lg">
              Schedule a personal walkthrough with our team to see how Quinton can specifically help your agency.
            </p>
            <Button
              className="bg-action-500 hover:bg-action-600 text-white h-12 px-6 rounded-full text-[15px] font-medium shadow-lift"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
