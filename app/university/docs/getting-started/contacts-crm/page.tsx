import Link from 'next/link'
import { ArrowLeft, Users, Eye, Mail, Download, Play, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function ContactsCRMGuide() {
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
            Contacts & CRM Features Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Master the contacts page to manage prospects, candidates, and track all your outreach activity in one centralized location
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📖 6 min read</span>
            <span>🎯 Beginner</span>
            <span>👥 CRM & Contacts</span>
          </div>
        </div>

        {/* Video Tutorial Link */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Play className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">Video Tutorial Available</h3>
          </div>
          <p className="text-blue-700 mb-4">
            Watch our step-by-step walkthrough of the contacts page and CRM features.
          </p>
          <Link 
            href="https://www.loom.com/share/56eb54bad4ae4b9f814568d7819e3dc2" 
            target="_blank"
            rel="noopener noreferrer"
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
              <span>How to navigate and use the contacts page as your CRM</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Understanding the difference between prospects and candidates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Tracking outreach status with visual indicators</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Managing email sequences and responses</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Exporting contact data for external use</span>
            </li>
          </ul>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-blue-600" />
            Contacts Page Overview
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The contacts page serves as Quinton's built-in CRM system, providing a centralized location to view and manage everyone you've ever reached out to, enriched, or discovered through the platform. Think of it as your "source of truth" for all contact activity within Quinton.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Functions</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• View all prospects and candidates in one place</li>
                <li>• Track outreach status and email sequences</li>
                <li>• Access enriched contact information</li>
                <li>• Manage responses and follow-ups</li>
                <li>• Export data for external CRM systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Understanding Contact Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Contact Types</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">👥 Candidates</h3>
              <p className="text-green-800 mb-4">
                People you've found through the "Find Candidates" feature for job placements.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Sourced for specific job opportunities</li>
                <li>• Include enriched contact information</li>
                <li>• Can be reached out to directly</li>
                <li>• Tracked for placement activities</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">🏢 Prospects</h3>
              <p className="text-purple-800 mb-4">
                Potential clients found through the "Get Clients" tab for business development.
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>• Found on job boards and company websites</li>
                <li>• Associated with specific job postings</li>
                <li>• Include enriched contact details</li>
                <li>• Targeted for client acquisition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Profile Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Eye className="h-6 w-6 text-green-600" />
            Contact Profile Details
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              When you click on any contact profile, you'll access a comprehensive view of their information and your interaction history.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Personal Details:</strong> Name, title, company information</li>
                  <li>• <strong>Contact Data:</strong> Email addresses, phone numbers, LinkedIn profiles</li>
                  <li>• <strong>Enrichment Status:</strong> Data quality and verification status</li>
                  <li>• <strong>Discovery Date:</strong> When the contact was first found</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Associated Jobs (Prospects Only)</h3>
                <p className="text-gray-700 mb-4">
                  For prospects found through the Get Clients tab, you can see:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• The specific job posting that led to their discovery</li>
                  <li>• Direct links back to the original job board</li>
                  <li>• Context for why they were targeted</li>
                  <li>• Opportunity details and requirements</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Draft Sequences:</strong> Create email campaigns directly from the profile</li>
                  <li>• <strong>LinkedIn Access:</strong> One-click access to their LinkedIn profile</li>
                  <li>• <strong>Contact History:</strong> View all previous interactions</li>
                  <li>• <strong>Response Tracking:</strong> See if they've replied to outreach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Status Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Status Indicators</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Quinton uses visual icons to help you quickly understand the status of each contact at a glance.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Enriched Only</h3>
                <p className="text-yellow-800 text-sm">
                  Contact information has been found and enriched, but no outreach has been sent yet.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Emailed</h3>
                <p className="text-blue-800 text-sm">
                  Outreach emails have been sent to this contact through Quinton's email system.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Sequence Complete</h3>
                <p className="text-green-800 text-sm">
                  The email sequence has finished running for this contact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Email Sequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Mail className="h-6 w-6 text-purple-600" />
            Managing Email Sequences
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The contacts page provides full visibility and control over your email sequences and outreach campaigns.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sequence Status Tracking</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Drafted:</strong> Sequences created by the agent but not yet started</li>
                  <li>• <strong>Active:</strong> Currently running email sequences</li>
                  <li>• <strong>Completed:</strong> Finished sequences that have run their course</li>
                  <li>• <strong>Paused:</strong> Temporarily stopped sequences</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sequence Actions</h3>
                <p className="text-gray-700 mb-4">
                  From each contact profile, you can:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Start Sequences:</strong> Launch drafted email campaigns</li>
                  <li>• <strong>Delete Sequences:</strong> Remove unwanted or incorrect sequences</li>
                  <li>• <strong>Monitor Progress:</strong> Track email delivery and engagement</li>
                  <li>• <strong>View Responses:</strong> See replies and engagement directly</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip: Use the Unified Inbox</h3>
                    <p className="text-blue-800">
                      While you can see responses in the contacts page, it's often better to use the unified inbox for comprehensive email management and reply handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exporting Contact Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Download className="h-6 w-6 text-orange-600" />
            Exporting Contact Data
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Quinton allows you to export your contact data for use in external CRM systems, databases, or for backup purposes.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Options</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>All Contacts:</strong> Export your entire contact database</li>
                  <li>• <strong>Filtered Lists:</strong> Export specific segments (candidates, prospects, etc.)</li>
                  <li>• <strong>Custom Selections:</strong> Choose specific contacts to export</li>
                  <li>• <strong>Date Ranges:</strong> Export contacts from specific time periods</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Data Includes</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Complete contact information (name, email, phone, company)</li>
                  <li>• LinkedIn profile URLs</li>
                  <li>• Discovery dates and sources</li>
                  <li>• Outreach status and sequence information</li>
                  <li>• Associated job information (for prospects)</li>
                  <li>• Response status and engagement data</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Use Cases</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>CRM Integration:</strong> Upload contacts to Salesforce, HubSpot, or other CRMs</li>
                  <li>• <strong>Database Backup:</strong> Keep local copies of your contact data</li>
                  <li>• <strong>Team Sharing:</strong> Share contact lists with team members</li>
                  <li>• <strong>Reporting:</strong> Analyze contact data in external tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Do This</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Regularly review contact profiles to track outreach progress</li>
                <li>• Use the visual indicators to quickly identify contact status</li>
                <li>• Export contact data regularly for backup purposes</li>
                <li>• Check LinkedIn profiles before reaching out for additional context</li>
                <li>• Monitor responses and engagement through the contacts page</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Avoid This</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Don't ignore the visual status indicators when planning outreach</li>
                <li>• Don't delete sequences without understanding their current status</li>
                <li>• Don't rely solely on the contacts page for response management</li>
                <li>• Don't export sensitive data without proper security measures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Explore Related Features</h3>
              <p className="text-gray-700 mb-4">
                Learn about other Quinton features that work with the contacts page:
              </p>
              <div className="space-y-2">
                <Link href="/university/docs/getting-started/get-clients-tab" className="block text-blue-600 hover:text-blue-700">
                  → Get Clients Tab Guide
                </Link>
                <Link href="/university/docs/getting-started/find-candidates" className="block text-blue-600 hover:text-blue-700">
                  → Find Candidates Guide
                </Link>
                <Link href="/university/docs/getting-started/premium-inboxes" className="block text-blue-600 hover:text-blue-700">
                  → Premium Email Infrastructure
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Watch More Tutorials</h3>
              <p className="text-gray-700 mb-4">
                Continue learning with our video tutorial library:
              </p>
              <Link 
                href="/university/videos" 
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Play className="h-4 w-4 mr-2" />
                Browse Video Tutorials
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}