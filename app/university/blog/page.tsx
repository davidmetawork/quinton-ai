'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Search, Tag, TrendingUp, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Blog posts data
const blogPosts = [
  {
    id: 'premium-email-infrastructure',
    title: 'Premium Email Infrastructure: Why Managed Inboxes Are Essential for Cold Email Success',
    excerpt: 'Discover why premium managed inboxes are crucial for cold email deliverability and how they give recruiting agencies a competitive edge.',
    author: 'David Phillips',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Email Marketing',
    tags: ['premium-inboxes', 'email-deliverability', 'cold-email'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dedicated-email-servers',
    title: 'Dedicated Email Servers: The Invisible Edge in High-Volume Outreach',
    excerpt: 'Why dedicated infrastructure is essential for agencies that live or die by inbox placement, and how shared servers kill your deliverability.',
    author: 'David Phillips',
    publishDate: '2025-01-08',
    readTime: '5 min read',
    category: 'Email Marketing',
    tags: ['dedicated servers', 'infrastructure', 'deliverability'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'unique-reply-rate-metric',
    title: 'Stop Counting Ghosts: Unique Reply Rate Is the Metric That Matters',
    excerpt: 'Why unique first replies per prospect is the only metric that actually maps to hires, and how to stop chasing phantom engagement.',
    author: 'David Phillips',
    publishDate: '2025-01-01',
    readTime: '4 min read',
    category: 'Data & Analytics',
    tags: ['analytics', 'metrics', 'reply rate'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bookmark-filter-engage',
    title: 'Bookmark, Filter, Engage: Turning Job Boards into Outreach Lists in Seconds',
    excerpt: 'How Quinton AI\'s browser extension transforms job board scrolling into automated outreach opportunities with one-click bookmarking.',
    author: 'David Phillips',
    publishDate: '2024-12-24',
    readTime: '6 min read',
    category: 'Automation',
    tags: ['browser extension', 'job boards', 'automation'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'competitor-demos-quinton-upgrades',
    title: 'Borrow Like a Builder: Turning Competitor Demos into Quinton Upgrades',
    excerpt: 'How we use competitor showcases as user research to build features that actually solve recruiting problems, not just look impressive.',
    author: 'David Phillips',
    publishDate: '2024-12-17',
    readTime: '7 min read',
    category: 'Industry Insights',
    tags: ['competitive analysis', 'product development', 'user research'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'six-inboxes-deliverability',
    title: 'Six Inboxes, One Recruiter: The Deliverability Play That Pays',
    excerpt: 'Learn how spreading your email cadence across multiple addresses improves deliverability and why the multi-inbox strategy is essential.',
    author: 'David Phillips',
    publishDate: '2024-12-10',
    readTime: '8 min read',
    category: 'Email Marketing',
    tags: ['deliverability', 'multi-inbox', 'email strategy'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
]

const categories = [
  'All Posts',
  'Industry Insights',
  'Email Marketing',
  'Automation',
  'Data & Analytics',
  'Business Strategy',
  'AI & Technology'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/university" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to University
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Weekly <span className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic pb-1 px-8 -mx-8" style={{ fontFamily: 'Georgia, serif' }}>Insights</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Fresh industry trends, success stories, and advanced strategies published every week to keep you ahead of the recruiting curve.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 px-4 py-2.5 bg-[#12121a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 bg-[#12121a] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link key={post.id} href={`/university/blog/${post.id}`} className="group">
                <article className="bg-[#12121a] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/30 transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-violet-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center text-white font-bold text-sm">
                      <span>Read post</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-white/5 bg-[#06060a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never miss an update</h2>
          <p className="text-gray-400 mb-10 text-lg">Get our weekly insights delivered straight to your inbox. Join 1,000+ recruiting professionals.</p>
          <div className="max-w-md mx-auto">
            <Button className="w-full h-14 bg-white text-black hover:bg-gray-100 font-bold" asChild>
              <Link href="https://quinton.beehiiv.com/subscribe" target="_blank">
                Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
