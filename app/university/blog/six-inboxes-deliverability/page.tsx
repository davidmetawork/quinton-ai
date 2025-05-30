import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function SixInboxesDeliverabilityPage() {
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
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Email Strategy
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Deliverability
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Five Inboxes, One Recruiter: The Deliverability Play That Pays
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How spreading your email cadence across multiple warmed addresses keeps you out of spam while preserving total reach.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>David Phillips</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 10, 2024</span>
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
              src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Multiple email inboxes visualization"
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
              Every recruiter has felt the sting of a once-high-performing mailbox sliding into the spam abyss. The culprit is nearly always volume: too many messages pumped through one address until filters flag it. The antidote is counter-intuitive—send less per inbox, not less overall.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Multi-Inbox Strategy</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Spreading your cadence across six or more warmed addresses keeps each sender well below the radar while preserving total reach. Inside Quinton AI, that strategy is turnkey. You generate fresh, properly authenticated inboxes with a click, roll them into a unified reply hub, and let the platform rotate senders automatically.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
              <p className="text-blue-800">
                Recruiters still live in a single interface, but the behind-the-scenes distribution means higher opens, cleaner domain reputations, and—most importantly—more genuine conversations with candidates and clients.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Think Contingency, Not Convenience</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Think of each inbox as a contingency plan. If an address ever gets bruised by a bad list or typo-laden blast, the other five keep humming. Over time you retire under-performers, add new domains, and maintain a stable pipeline without pausing prospecting.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Economics Make Sense</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cost? A handful of dollars per month for additional domains—pennies compared with the revenue of a single placement saved from the spam folder. The ROI calculation is simple: one successful placement typically covers months of additional domain costs.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits of Multi-Inbox Strategy:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Higher open rates through distributed sending
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cleaner domain reputations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built-in redundancy for deliverability issues
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Unified management through single interface
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              In today's competitive recruiting landscape, deliverability isn't just a technical concern—it's a competitive advantage. The agencies that master multi-inbox strategies will consistently reach more prospects, generate more responses, and ultimately close more placements.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to implement multi-inbox strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Quinton AI makes it easy to set up and manage multiple email addresses for maximum deliverability.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/university/blog/premium-email-infrastructure" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Premium Email Infrastructure Now Included
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about our enterprise-grade email infrastructure that comes with every subscription.
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