'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Search, Tag, TrendingUp, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Blog posts data - easy to add new posts
const blogPosts = [
  {
    id: 'premium-email-infrastructure',
    title: 'Premium Email Infrastructure: Why Managed Inboxes Are Essential for Cold Email Success',
    excerpt: 'Discover why premium managed inboxes are crucial for cold email deliverability and how they give recruiting agencies a competitive edge over DIY solutions.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Email Marketing',
    tags: ['premium-inboxes', 'email-deliverability', 'cold-email', 'infrastructure', 'managed-services'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dedicated-email-servers',
    title: 'Dedicated Email Servers: The Invisible Edge in High-Volume Outreach',
    excerpt: 'Why dedicated infrastructure is essential for agencies that live or die by inbox placement, and how shared servers kill your deliverability.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2025-01-08',
    readTime: '5 min read',
    category: 'Email Marketing',
    tags: ['dedicated servers', 'infrastructure', 'deliverability', 'high-volume'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'unique-reply-rate-metric',
    title: 'Stop Counting Ghosts: Unique Reply Rate Is the Metric That Matters',
    excerpt: 'Why unique first replies per prospect is the only metric that actually maps to hires, and how to stop chasing phantom engagement.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2025-01-01',
    readTime: '4 min read',
    category: 'Data & Analytics',
    tags: ['analytics', 'metrics', 'reply rate', 'recruiting success'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bookmark-filter-engage',
    title: 'Bookmark, Filter, Engage: Turning Job Boards into Outreach Lists in Seconds',
    excerpt: 'How Quinton AI\'s browser extension transforms job board scrolling into automated outreach opportunities with one-click bookmarking.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2024-12-24',
    readTime: '6 min read',
    category: 'Automation',
    tags: ['browser extension', 'job boards', 'automation', 'outreach'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'competitor-demos-quinton-upgrades',
    title: 'Borrow Like a Builder: Turning Competitor Demos into Quinton Upgrades',
    excerpt: 'How we use competitor showcases as user research to build features that actually solve recruiting problems, not just look impressive.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2024-12-17',
    readTime: '7 min read',
    category: 'Industry Insights',
    tags: ['competitive analysis', 'product development', 'user research', 'features'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'six-inboxes-deliverability',
    title: 'Six Inboxes, One Recruiter: The Deliverability Play That Pays',
    excerpt: 'Learn how spreading your email cadence across multiple addresses improves deliverability and why the multi-inbox strategy is essential for high-volume recruiting.',
    content: 'Full blog post content would go here...',
    author: 'David Phillips',
    publishDate: '2024-12-10',
    readTime: '8 min read',
    category: 'Email Marketing',
    tags: ['deliverability', 'multi-inbox', 'email strategy', 'recruiting'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
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

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const getCategoryColor = (category: string) => {
    const colorMap = {
      'Industry Insights': 'bg-blue-100 text-blue-700 border-blue-200',
      'Email Marketing': 'bg-purple-100 text-purple-700 border-purple-200',
      'Automation': 'bg-green-100 text-green-700 border-green-200',
      'Data & Analytics': 'bg-orange-100 text-orange-700 border-orange-200',
      'Business Strategy': 'bg-red-100 text-red-700 border-red-200',
      'AI & Technology': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    }
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/university" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to University
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Weekly Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fresh insights, industry trends, success stories, and advanced strategies published every week 
              to keep you ahead of the recruiting curve.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All Posts' && searchTerm === '' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center mb-8">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Posts</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} featured={true} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm ? 'Search Results' : selectedCategory === 'All Posts' ? 'Latest Posts' : selectedCategory}
            </h2>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} getCategoryColor={getCategoryColor} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Post
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get our weekly insights delivered straight to your inbox. Join 1,000+ recruiting professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link 
              href="https://quinton.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Recruiting?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of recruiting agencies already using Quinton AI to scale their operations and improve results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/signup">
                  Sign Up
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://calendly.com/quintonai/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Blog Card Component
function BlogCard({ post, featured = false, getCategoryColor }: { post: any, featured?: boolean, getCategoryColor: (category: string) => string }) {
  const handlePostClick = () => {
    // Navigate to individual blog post
    window.location.href = `/university/blog/${post.id}`
  }

  return (
    <article 
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border cursor-pointer group ${
        featured ? 'border-yellow-200 ring-2 ring-yellow-100' : 'border-gray-200'
      }`}
      onClick={handlePostClick}
    >
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-medium px-3 py-1 rounded-t-xl flex items-center">
          <Star className="w-3 h-3 mr-1" />
          Featured
        </div>
      )}
      
      {/* Image */}
      <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        {/* Category and Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Author and Date */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishDate).toLocaleDateString()}
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-blue-600 font-medium text-sm">
          <span>Read full post</span>
          <TrendingUp className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  )
} 