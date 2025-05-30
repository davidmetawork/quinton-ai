import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function DedicatedEmailServersPage() {
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
                Infrastructure
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Deliverability
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dedicated Email Servers: The Invisible Edge in High-Volume Outreach
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Why dedicated infrastructure is essential for agencies that live or die by inbox placement, and how shared servers kill your deliverability.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>David Phillips</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 8, 2025</span>
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
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern server infrastructure and data center with network connections"
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
              When you're sending 10,000+ emails per month, shared infrastructure becomes your biggest liability. One bad actor on your server can tank your entire agency's deliverability overnight.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Shared Server Problem</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Most email platforms cram hundreds of users onto the same sending infrastructure. When someone else gets flagged for spam, your IP reputation takes the hit. It's like sharing a credit score with strangers—their mistakes become your problem.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">The Reputation Risk</h3>
              <p className="text-red-800">
                Shared IP addresses mean shared reputations. One spammer on your server can blacklist your entire agency's outreach overnight, destroying months of careful sender reputation building.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Quinton AI Went Dedicated</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Quinton AI runs dedicated email infrastructure for every high-volume client. Your sending reputation is yours alone. No shared IPs, no cross-contamination, no surprises when your open rates suddenly crater because someone else got sloppy.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated vs. Shared Infrastructure:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-red-900 mb-3">❌ Shared Servers</h4>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Reputation contamination risk</li>
                    <li>• Unpredictable deliverability</li>
                    <li>• No control over IP warming</li>
                    <li>• Shared blacklist consequences</li>
                    <li>• Limited sending volume</li>
                    <li>• Generic domain reputation</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3">✅ Dedicated Infrastructure</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Isolated reputation management</li>
                    <li>• Predictable inbox placement</li>
                    <li>• Custom IP warming schedules</li>
                    <li>• Protected from others' mistakes</li>
                    <li>• Unlimited scaling potential</li>
                    <li>• Custom domain authentication</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Technical Advantage</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Dedicated servers let you control every aspect of your sending profile. Custom DKIM signatures, SPF records tailored to your domain, and DMARC policies that actually protect your brand. It's the difference between renting an apartment and owning your house.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Technical Benefits Include:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Custom DKIM key rotation schedules</li>
                <li>• Dedicated IP warming protocols</li>
                <li>• Advanced bounce handling</li>
                <li>• Real-time reputation monitoring</li>
                <li>• Custom retry logic for failed sends</li>
                <li>• Isolated feedback loop processing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Impact</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Agencies that switch to dedicated infrastructure typically see 15-25% improvements in inbox placement within 30 days. More importantly, they stop experiencing the random deliverability drops that plague shared-server users.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">15-25%</div>
                  <p className="text-gray-700 text-sm">Better inbox placement</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
                  <p className="text-gray-700 text-sm">Reduction in random drops</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">3x</div>
                  <p className="text-gray-700 text-sm">Faster IP warming</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Make the Switch</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're sending more than 5,000 emails per month, or if your business depends on consistent deliverability, dedicated infrastructure isn't a luxury—it's a necessity. The cost of lost placements far exceeds the investment in proper email infrastructure.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Signs You Need Dedicated Infrastructure</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Sending 5,000+ emails monthly</li>
                <li>• Experiencing random deliverability drops</li>
                <li>• High-value client communications</li>
                <li>• Need for compliance documentation</li>
                <li>• Scaling beyond basic email tools</li>
                <li>• Revenue depends on inbox placement</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              In recruiting, your email infrastructure is your revenue infrastructure. Don't let someone else's mistakes cost you placements. Invest in dedicated servers and own your deliverability destiny.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Own Dedicated Email Infrastructure
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Stop sharing your reputation. Get dedicated servers and predictable deliverability with Quinton AI.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Upgrade to Dedicated
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