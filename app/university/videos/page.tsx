'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Clock, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="flex items-center mb-8">
            <Link href="/university" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to University
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Video <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Tutorials</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Step-by-step video guides to master every aspect of the Quinton platform. Learn at your own pace with our comprehensive library.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#12121a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map(video => (
              <div 
                key={video.id} 
                className="bg-[#12121a] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/30 transition-all group cursor-pointer"
                onClick={() => window.open(`https://www.loom.com/share/${video.loomId}`, '_blank')}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 text-black ml-1 fill-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-violet-500/20 text-violet-400 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest rounded">
                      {video.difficulty}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-24">
              <h3 className="text-xl font-bold text-white mb-2">No tutorials found</h3>
              <p className="text-gray-500">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a live demo instead?</h2>
          <p className="text-gray-400 mb-10 text-lg">Schedule a personal walkthrough with our team to see how Quinton can specifically help your agency.</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold" asChild>
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
