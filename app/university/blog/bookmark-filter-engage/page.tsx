import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function BookmarkFilterEngagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center mb-6">
            <Link href="/university/blog" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Browser Extension
              </span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Productivity
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bookmark, Filter, Engage: Turning Job Boards into Outreach Lists in Seconds
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How Quinton AI's browser extension transforms endless job board scrolling into automated outreach opportunities with a single click.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>David Phillips</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 24, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
              alt="Browser automation and job board integration"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Scrolling endless job posts on professional networks used to be a sinkhole for recruiter hours: switch tabs, copy links, paste into spreadsheets, repeat. Quinton AI's browser extension collapses that entire loop into a single click.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">One Click, Complete Workflow</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Spot a role your candidate could nail? Bookmark it, tag it, and it's instantly waiting in your dashboard—complete with contact enrichment and templated sequence suggestions. No more clipboard gymnastics or lost opportunities.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Game Changer</h3>
              <p className="text-green-800">
                The extension stamps each job with "new," "viewed," or "done," so your pipeline stays self-organizing. Need to prioritize companies under 200 employees or roles within 20 miles of the candidate? Quick filters surface only the bookmarks that match.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Productivity Gains That Compound</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The productivity gain compounds. Because the extension automatically categorizes and enriches each bookmark, your outreach list updates itself while you sip coffee. Early users report freeing up entire afternoons once spent on manual data entry.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How the Extension Works:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Spot & Click</h4>
                    <p className="text-gray-600">See a relevant job posting? Click the Quinton bookmark button</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Auto-Enrichment</h4>
                    <p className="text-gray-600">Company details, contact info, and job requirements are automatically captured</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Organization</h4>
                    <p className="text-gray-600">Jobs are tagged and filtered based on your criteria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ready to Engage</h4>
                    <p className="text-gray-600">Templated outreach sequences are suggested based on the role</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed Wins in Recruiting</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Better still, candidates experience near-real-time engagement on fresh openings—often before the competition even notices the posting. In recruiting, speed and relevance win; automated bookmarking hands you both.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real User Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3-5 hrs</div>
                  <p className="text-gray-700">Saved per day on manual data entry</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2x</div>
                  <p className="text-gray-700">Faster response time to new job postings</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The extension doesn't just save time—it transforms how you think about job board browsing. Instead of passive scrolling, every job becomes a potential opportunity that's automatically organized and ready for action.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Job Board Browsing
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Stop copying and pasting. Start bookmarking and engaging with one click.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get the Extension
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/university/blog/competitor-demos-quinton-upgrades" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Borrow Like a Builder: Turning Competitor Demos into Quinton Upgrades
                </h3>
                <p className="text-gray-600 text-sm">
                  How we use competitor showcases as free user research to accelerate our roadmap.
                </p>
              </div>
            </Link>
            <Link href="/university/blog/unique-reply-rate-metric" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Stop Counting Ghosts: Unique Reply Rate Is the Metric That Matters
                </h3>
                <p className="text-gray-600 text-sm">
                  Why unique first replies per prospect is the only metric that actually maps to hires.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 