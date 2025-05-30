import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function UniqueReplyRateMetricPage() {
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
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                Analytics
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                Metrics
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stop Counting Ghosts: Unique Reply Rate Is the Metric That Matters
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Why unique first replies per prospect is the only metric that actually maps to hires, and how to stop chasing phantom engagement.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>David Phillips</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 1, 2025</span>
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Analytics dashboard showing email metrics and data visualization"
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
              Open rates are feel-good numbers, and total reply counts can be downright misleading—especially when an auto-responder or forwarded thread inflates the score. Unique first replies per prospect is the metric that actually maps to hires.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem with Traditional Metrics</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              It tells you how many real people engaged, not how many total messages bounced around. If your current reporting calls a five-message "out-of-office" loop five separate replies, you're flying blind.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Reality Check</h3>
              <p className="text-red-800">
                Auto-responders, forwarded threads, and multi-message conversations can make your reply metrics look impressive while hiding the truth about actual prospect engagement.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Quinton AI Tracks What Matters</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Quinton AI's analytics now default to unique reply tracking. The system fingerprints every thread, records only the first response from each contact, and discards the noise. The result: clean A/B tests, honest deliverability insights, and crystal-clear ROI calculations.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional vs. Unique Reply Tracking:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-red-900 mb-3">❌ Traditional Counting</h4>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Counts auto-responders as replies</li>
                    <li>• Multiple messages = multiple "replies"</li>
                    <li>• Forwarded emails inflate numbers</li>
                    <li>• Out-of-office loops counted separately</li>
                    <li>• Misleading engagement data</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3">✅ Unique Reply Tracking</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Only first human response counts</li>
                    <li>• Thread fingerprinting prevents duplicates</li>
                    <li>• Auto-responders filtered out</li>
                    <li>• Clean, actionable data</li>
                    <li>• True engagement measurement</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Results from Real Data</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Recruiters using unique-reply dashboards have reported double-digit drops in time-to-screen because they stop chasing phantom interest. When you know exactly how many real people engaged, you can focus your follow-up efforts where they matter most.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact on Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">15-30%</div>
                  <p className="text-gray-700 text-sm">Reduction in time-to-screen</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600 mb-2">2x</div>
                  <p className="text-gray-700 text-sm">More accurate A/B test results</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">40%</div>
                  <p className="text-gray-700 text-sm">Better ROI calculations</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Making the Switch</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Shift to unique reply rate and watch your data tell the truth—and your placements follow suit. When you measure what actually matters, you can optimize what actually works.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Implementation Guide</h3>
              <ol className="space-y-2 text-blue-800">
                <li>1. Switch your analytics to unique reply tracking</li>
                <li>2. Baseline your current unique reply rate</li>
                <li>3. Run A/B tests using the new metric</li>
                <li>4. Focus follow-up on genuine responders only</li>
                <li>5. Track time-to-screen improvements</li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The recruiting industry has been measuring vanity metrics for too long. It's time to focus on the numbers that actually predict success: real people, real engagement, real results.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Tracking What Actually Matters
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get honest analytics that map to real recruiting success with Quinton AI's unique reply tracking.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            See Real Analytics
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/university/blog/six-inboxes-deliverability" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Six Inboxes, One Recruiter: The Deliverability Play That Pays
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how spreading your email cadence across multiple addresses improves deliverability.
                </p>
              </div>
            </Link>
            <Link href="/university/blog/dedicated-email-servers" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Dedicated Email Servers: The Invisible Edge in High-Volume Outreach
                </h3>
                <p className="text-gray-600 text-sm">
                  Why dedicated infrastructure is essential for agencies that live or die by inbox placement.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 