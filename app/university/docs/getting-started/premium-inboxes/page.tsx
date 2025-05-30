import Link from 'next/link'
import { ArrowLeft, Mail, Shield, Server, CheckCircle, AlertTriangle, Play } from 'lucide-react'

export default function PremiumInboxesGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/university/docs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Email Infrastructure Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding managed inboxes, email deliverability, and why premium infrastructure is essential for cold email success
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📖 8 min read</span>
            <span>🎯 Beginner</span>
            <span>📧 Email Infrastructure</span>
          </div>
        </div>

        {/* Video Tutorial Link */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Play className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">Video Tutorial Available</h3>
          </div>
          <p className="text-blue-700 mb-4">
            Watch our comprehensive video explanation of premium email infrastructure and managed inboxes.
          </p>
          <Link 
            href="/university/videos" 
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Play className="h-4 w-4 mr-2" />
            Watch Video Tutorial
          </Link>
        </div>

        {/* What You'll Learn */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Why cold email is different from regular email</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>The risks of sending cold email from your primary inbox</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Essential components of proper email infrastructure</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>How Quinton's managed inboxes solve deliverability challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Using the unified inbox for email management</span>
            </li>
          </ul>
        </div>

        {/* Understanding Cold Email vs Regular Email */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Mail className="h-6 w-6 text-blue-600" />
            Understanding Cold Email vs Regular Email
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Before diving into premium infrastructure, it's crucial to understand how cold email differs from regular email communication:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Regular Email</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Emails to people you know</li>
                  <li>• Existing email history</li>
                  <li>• Transactional emails (receipts, notifications)</li>
                  <li>• Expected communication</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Cold Email</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Messaging unknown recipients</li>
                  <li>• No previous email history</li>
                  <li>• Unsolicited outreach</li>
                  <li>• Triggers spam detection systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Why This Matters</h3>
                  <p className="text-yellow-800">
                    When you message someone without a history of communication, it sets off red flags for email providers like Google and Outlook. These systems are designed to protect users from spam, making cold email inherently challenging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Risks of Using Your Primary Inbox */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            The Risks of Using Your Primary Inbox
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Sending cold emails from your primary business inbox can have serious consequences:
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Potential Consequences</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Domain Blacklisting:</strong> Your entire domain can be flagged as spam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Deliverability Issues:</strong> Even legitimate emails to existing clients may not reach their inbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Reputation Damage:</strong> Your sender reputation becomes permanently damaged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Business Impact:</strong> Critical business communications may be blocked</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              It doesn't take much to trigger these issues. Even a small number of unresponsive recipients or spam reports can quickly damage your primary domain's reputation.
            </p>
          </div>
        </section>

        {/* Essential Components of Email Infrastructure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Server className="h-6 w-6 text-blue-600" />
            Essential Components of Email Infrastructure
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Proper cold email infrastructure requires several technical components working together:
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Domain Authentication Records</h3>
                <p className="text-gray-700 mb-4">
                  These technical records authenticate your emails and improve your sender reputation:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>DKIM:</strong> Digital signature that verifies email authenticity</li>
                  <li><strong>DMARC:</strong> Policy that tells receivers how to handle unauthenticated emails</li>
                  <li><strong>SPF:</strong> Specifies which servers are authorized to send emails for your domain</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Email Warm-up</h3>
                <p className="text-gray-700 mb-4">
                  A process that gradually builds your sender reputation by simulating normal email activity:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Automated email exchanges with other warm-up accounts</li>
                  <li>• Gradual increase in sending volume</li>
                  <li>• Positive engagement signals (opens, replies, moves to inbox)</li>
                  <li>• Establishes a pattern of legitimate email activity</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Sending Best Practices</h3>
                <p className="text-gray-700 mb-4">
                  Following proper sending patterns to avoid detection:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Appropriate sending times (business hours, weekdays)</li>
                  <li>• Varied email content and templates</li>
                  <li>• Proper spacing between emails</li>
                  <li>• Reasonable daily sending limits</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Private Server Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  Using dedicated servers instead of shared hosting:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Avoid being affected by other users' poor practices</li>
                  <li>• Better control over server reputation</li>
                  <li>• Consistent deliverability performance</li>
                  <li>• Dedicated IP addresses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Quinton's Premium Inboxes Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Shield className="h-6 w-6 text-green-600" />
            How Quinton's Premium Inboxes Work
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Quinton eliminates the complexity of email infrastructure by providing fully managed, premium inboxes:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4">What We Handle For You</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-green-800">
                  <li>✅ Domain authentication setup</li>
                  <li>✅ Automated email warm-up</li>
                  <li>✅ Private server management</li>
                  <li>✅ Reputation monitoring</li>
                </ul>
                <ul className="space-y-2 text-green-800">
                  <li>✅ Daily sending limits</li>
                  <li>✅ Data cleaning and validation</li>
                  <li>✅ Compliance guardrails</li>
                  <li>✅ Performance optimization</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatic Setup</h3>
                <p className="text-gray-700">
                  When you get your Quinton account, premium inboxes are automatically provisioned and configured. You can view them in your integrations page, but you don't need to manage the technical details.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Continuous Monitoring</h3>
                <p className="text-gray-700">
                  We continuously monitor server reputation and email performance. If any issues arise, we proactively address them to maintain optimal deliverability.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Built-in Guardrails</h3>
                <p className="text-gray-700">
                  Our system automatically enforces best practices, preventing common mistakes that could damage your sender reputation. This includes rate limiting, content validation, and recipient verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Using the Unified Inbox */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Mail className="h-6 w-6 text-purple-600" />
            Using the Unified Inbox
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Since Quinton manages your premium inboxes, you access all email activity through our unified inbox interface:
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Centralized Management</h3>
                <p className="text-gray-700 mb-4">
                  All emails sent from and received by your premium inboxes appear in one unified interface, similar to tools like Instantly or Smartlead.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• View all responses in one place</li>
                  <li>• See which inbox each email was sent from</li>
                  <li>• Respond directly from the interface</li>
                  <li>• Track conversation history</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seamless Handoff</h3>
                <p className="text-gray-700 mb-4">
                  The unified inbox is designed for starting conversations. Once you respond to a prospect:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Your primary inbox is automatically CC'd</li>
                  <li>• Future conversation can continue from your main email</li>
                  <li>• Smooth transition from cold outreach to warm relationship</li>
                  <li>• No disruption to your normal email workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Competitive Advantage</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 text-lg leading-relaxed">
              Most recruiting agencies and professionals don't follow these email infrastructure best practices meticulously. By using Quinton's premium managed inboxes, you gain a significant edge over competitors who are likely burning their domains or struggling with poor deliverability.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Get Started</h3>
              <p className="text-gray-700 mb-4">
                Ready to leverage premium email infrastructure for your recruiting agency?
              </p>
              <Link 
                href="/signup" 
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up for Quinton
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Learn More</h3>
              <p className="text-gray-700 mb-4">
                Explore related topics to maximize your cold email success:
              </p>
              <div className="space-y-2">
                <Link href="/university/docs/getting-started/get-clients-tab" className="block text-blue-600 hover:text-blue-700">
                  → Get Clients Tab Guide
                </Link>
                <Link href="/university/videos" className="block text-blue-600 hover:text-blue-700">
                  → Watch Video Tutorials
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}