import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function CompetitorDemosUpgradesPage() {
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
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Product Strategy
              </span>
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                Competitive Analysis
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Borrow Like a Builder: Turning Competitor Demos into Quinton Upgrades
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How we treat competitor showcases as free user research to accelerate our product roadmap and deliver what recruiters actually need.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>David Phillips</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 17, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Team analyzing competitor features and building improvements"
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
              When a rival platform flaunts a shiny workflow—skills filters, one-click data capture, or AI-drafted follow-ups—the knee-jerk reaction is often "They beat us to it." Smarter shops treat that demo as free user research.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Validation in Real Time</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              If customers pay extra for a capability, it has already been market-validated. The real question is how quickly you can give your own users 80% of the benefit with 20% of the engineering effort. That's exactly how Quinton AI's roadmap evolves.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Our Process</h3>
              <p className="text-purple-800">
                We catalog audience pain points revealed in competitor walk-throughs, score them against recruiter workflows, and prototype the winners. Many headline features piggy-back on existing architecture: a new query parameter here, a browser helper there.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed Wins in Recruiting Tech</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The payoff? Users watch their wish list materialize sprint after sprint, and the product stays laser-aligned with recruiter realities instead of engineering vanity. In a market where time-to-placement rules, the vendor that iterates fastest becomes an extension of your team—not just another tool.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Turn Competitor Intel into Features:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Catalog Pain Points</h4>
                    <p className="text-gray-600">Document what users are asking for in competitor demos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Score Against Workflows</h4>
                    <p className="text-gray-600">Evaluate how each feature fits into real recruiter processes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rapid Prototyping</h4>
                    <p className="text-gray-600">Build MVP versions leveraging existing architecture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ship and Iterate</h4>
                    <p className="text-gray-600">Release quickly and refine based on user feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Role in Our Roadmap</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For recruiters, the message is simple: keep sending us links, screenshots, and "I wish it did this" notes. Every insight shortens the distance between today's platform and your dream workflow. We're not just building software—we're building your competitive advantage.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Us Your Competitor Intel</h3>
              <p className="text-gray-700 mb-4">
                Spotted a feature that would transform your workflow? We want to hear about it. Email us at <a href="mailto:david@quinton.ai" className="text-blue-600 hover:text-blue-700 underline">david@quinton.ai</a> with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Screenshots or demo links</li>
                <li>• How it would fit into your process</li>
                <li>• What problem it solves for you</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The best product teams don't just build features—they build solutions to real problems. By treating competitor showcases as market research, we ensure every sprint delivers value that matters to your bottom line.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Help Shape Our Roadmap
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Your feedback drives our development. Tell us what features would transform your recruiting process.
          </p>
          <Link 
            href="mailto:david@quinton.ai" 
            className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Share Your Ideas
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/university/blog/bookmark-filter-engage" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Bookmark, Filter, Engage: Turning Job Boards into Outreach Lists
                </h3>
                <p className="text-gray-600 text-sm">
                  How our browser extension transforms job board browsing into automated outreach opportunities.
                </p>
              </div>
            </Link>
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
          </div>
        </div>
      </section>
    </div>
  )
} 