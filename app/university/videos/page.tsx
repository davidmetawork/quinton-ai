'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Clock, Users, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Video data structure - easy to add new videos
const videoCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Essential videos for new users',
    color: 'blue',
    videos: [
      {
        id: 'get-clients-tab',
        title: 'Using the Get Clients Tab',
        description: 'Complete guide to using the browser extension and search agent for client acquisition',
        duration: '17:07',
        loomId: '4b3ded41e66e48b3bc468678dc473d36',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['get-clients', 'browser-extension', 'search-agent', 'job-boards']
      },
      {
        id: 'find-candidates',
        title: 'Find Candidates Platform Guide',
        description: 'Learn how to search for candidates, find contact information, and send personalized outreach',
        duration: '6:06',
        loomId: '370369a605ea497c8cb328600bd4e01e',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['find-candidates', 'candidate-search', 'personal-emails', 'outreach']
      },
      {
        id: 'premium-inboxes',
        title: 'Premium Email Infrastructure Guide',
        description: 'Understand why premium managed inboxes are essential for cold email success and deliverability',
        duration: '8:00',
        loomId: '0b912771e34e49f884b8cde2ad68eb04',
        thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['premium-inboxes', 'email-deliverability', 'cold-email', 'infrastructure']
      },
      {
        id: 'contacts-page',
        title: 'Managing Contacts & CRM Features',
        description: 'Learn how to use the contacts page to manage prospects, candidates, and track outreach activity',
        duration: '3:39',
        loomId: '56eb54bad4ae4b9f814568d7819e3dc2',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['contacts', 'crm', 'prospects', 'candidates', 'outreach-tracking']
      },
      {
        id: 'job-listings',
        title: 'Job Listings Page & Workflow Management',
        description: 'Master the job listings page to track, filter, and manage all discovered job opportunities',
        duration: '3:12',
        loomId: '667b463894a0414da0f018529d4ad2fe',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        difficulty: 'Beginner',
        tags: ['job-listings', 'workflow', 'chrome-extension', 'get-clients', 'job-tracking']
      }
    ]
  }
]

export default function VideoTutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get all videos from all categories
  const allVideos = videoCategories.flatMap(category => 
    category.videos.map(video => ({ ...video, category: category.title, categoryColor: category.color }))
  )

  // Filter videos based on category and search
  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === videoCategories.find(cat => cat.id === selectedCategory)?.title
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getCategoryColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getDifficultyColor = (difficulty: string) => {
    const difficultyMap = {
      'Beginner': 'bg-green-100 text-green-700',
      'Intermediate': 'bg-yellow-100 text-yellow-700',
      'Advanced': 'bg-red-100 text-red-700'
    }
    return difficultyMap[difficulty as keyof typeof difficultyMap] || difficultyMap['Beginner']
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
              Video Tutorials
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Step-by-step video guides to master every aspect of the Quinton platform. 
              Learn at your own pace with our comprehensive video library.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                {videoCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {selectedCategory === 'all' ? (
            // Show by categories
            videoCategories.map(category => (
              <div key={category.id} className="mb-16">
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mr-4">{category.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColorClasses(category.color)}`}>
                    {category.videos.length} video{category.videos.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-gray-600 mb-8">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map(video => (
                    <VideoCard key={video.id} video={video} categoryColor={category.color} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show filtered results
            <div>
              <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mr-4">
                  {searchTerm ? `Search Results` : videoCategories.find(cat => cat.id === selectedCategory)?.title}
                </h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                  <VideoCard key={video.id} video={video} categoryColor={video.categoryColor} />
                ))}
              </div>
            </div>
          )}

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Video Card Component
function VideoCard({ video, categoryColor }: { video: any, categoryColor: string }) {
  const handleVideoClick = () => {
    if (video.loomId) {
      // Open Loom video in new tab
      window.open(`https://www.loom.com/share/${video.loomId}`, '_blank')
    } else {
      // Show placeholder message
      alert('Video coming soon! Loom ID not yet added.')
    }
  }

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 cursor-pointer group"
      onClick={handleVideoClick}
    >
      {/* Thumbnail */}
      <div className="relative">
        <div className="aspect-video bg-gray-100 rounded-t-xl flex items-center justify-center relative overflow-hidden">
          {video.thumbnail && video.thumbnail !== '/api/placeholder/400/225' ? (
            <img 
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          ) : video.loomId ? (
            <img 
              src={`https://cdn.loom.com/sessions/thumbnails/${video.loomId}-with-play.gif`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <Play className="w-12 h-12 mb-2" />
              <span className="text-sm">Video Coming Soon</span>
            </div>
          )}
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
              <Play className="w-6 h-6 text-gray-900 ml-1" />
            </div>
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(video.difficulty)}`}>
            {video.difficulty}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColorClasses(categoryColor)}`}>
            {video.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {video.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              {tag}
            </span>
          ))}
          {video.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{video.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function getDifficultyColor(difficulty: string) {
  const difficultyMap = {
    'Beginner': 'bg-green-100 text-green-700',
    'Intermediate': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
  }
  return difficultyMap[difficulty as keyof typeof difficultyMap] || difficultyMap['Beginner']
}

function getCategoryColorClasses(color: string) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200'
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.blue
} 