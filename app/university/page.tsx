import Link from 'next/link'
import { ArrowRight, BookOpen, Video, FileText, Clock, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function UniversityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-relaxed">
              Quinton University
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent block">
                Master AI-Powered Recruiting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and resources designed specifically for recruiting agencies. 
              Master the strategies that help agencies significantly boost placements while reclaiming 40 hours monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 h-11 px-8"
                asChild
              >
                <Link href="/university/docs">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 h-11 px-8"
                asChild
              >
                <Link href="/university/videos">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Tutorials
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 h-11 px-8"
                asChild
              >
                <Link href="https://facebook.com/groups/quintonai" target="_blank" rel="noopener noreferrer">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">40</h3>
              <p className="text-gray-600">Hours saved per month</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Recruiters using Quinton AI</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Weekly</h3>
              <p className="text-gray-600">New content and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn Your Way
            </h2>
            <p className="text-xl text-gray-600">
              Choose from video tutorials, written guides, or weekly insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video Tutorials */}
            <Link href="/university/videos" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 h-full">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Video className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Tutorials</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step video guides showing you exactly how to use every feature of the Quinton platform. Perfect for visual learners.
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>Watch tutorials</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Documentation */}
            <Link href="/university/docs" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive written guides covering setup, automation, integrations, and best practices. Your complete reference library.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read docs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Blog */}
            <Link href="/university/blog" className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekly Blog</h3>
                <p className="text-gray-600 mb-6">
                  Fresh insights, industry trends, success stories, and advanced strategies published every week to keep you ahead of the curve.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>Read latest posts</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your recruiting agency?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join recruiting agencies already using Quinton AI to automate prospecting, personalize outreach, and close more placements.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 h-11 px-8" asChild>
            <Link href="/signup">
              Sign Up
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 