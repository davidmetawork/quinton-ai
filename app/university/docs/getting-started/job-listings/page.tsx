import Link from 'next/link'
import { ArrowLeft, Briefcase, Search, Filter, Eye, Chrome, Play, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function JobListingsGuide() {
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
            Job Listings & Workflow Management Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Master the job listings page to track, filter, and manage all discovered job opportunities in one centralized location
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📖 5 min read</span>
            <span>🎯 Beginner</span>
            <span>💼 Job Management</span>
          </div>
        </div>

        {/* Video Tutorial Link */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Play className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">Video Tutorial Available</h3>
          </div>
          <p className="text-blue-700 mb-4">
            Watch our step-by-step walkthrough of the job listings page and workflow management features.
          </p>
          <Link 
            href="https://www.loom.com/share/667b463894a0414da0f018529d4ad2fe" 
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
              <span>How to navigate and use the job listings page effectively</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Understanding job sources: Get Clients vs Chrome Extension</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Filtering jobs by status and source</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Searching and organizing job opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Managing job descriptions and workflow optimization</span>
            </li>
          </ul>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-blue-600" />
            Job Listings Page Overview
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The job listings page serves as your centralized hub for managing all job opportunities discovered through Quinton. It consolidates jobs from both the Get Clients tab searches and Chrome extension activities, providing a comprehensive view of your prospecting pipeline.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Functions</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Centralized view of all discovered job opportunities</li>
                <li>• Filter jobs by source (Get Clients vs Chrome Extension)</li>
                <li>• Track job status (new, viewed, bookmarked)</li>
                <li>• Search functionality for specific job types or titles</li>
                <li>• Optional job description preview</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Understanding Job Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Job Sources</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Get Clients Tab Jobs
              </h3>
              <p className="text-green-800 mb-4">
                Jobs discovered through platform searches within the Get Clients feature.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Found through automated platform searches</li>
                <li>• Enriched with contact information</li>
                <li>• May include jobs you haven't individually opened</li>
                <li>• Bulk discovery from job board searches</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Chrome className="h-5 w-5" />
                Chrome Extension Jobs
              </h3>
              <p className="text-purple-800 mb-4">
                Jobs manually discovered and saved through the Chrome extension while browsing.
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>• Manually bookmarked job opportunities</li>
                <li>• Individually opened with the extension</li>
                <li>• Direct interaction with job boards</li>
                <li>• Curated selection of relevant opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job Status Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Filter className="h-6 w-6 text-green-600" />
            Job Status & Filtering
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The job listings page provides powerful filtering options to help you organize and prioritize your job opportunities based on their current status.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Status Categories</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">🆕 New Jobs</h4>
                    <p className="text-yellow-800 text-sm">
                      Jobs that have been enriched but not yet opened or reviewed by you.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">👁️ Viewed Jobs</h4>
                    <p className="text-blue-800 text-sm">
                      Jobs that you have already opened and reviewed in the platform.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">🔖 All Jobs</h4>
                    <p className="text-green-800 text-sm">
                      Complete view of all discovered jobs regardless of status.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Filtering Options</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>By Source:</strong> View only Chrome Extension jobs or Get Clients jobs</li>
                  <li>• <strong>By Status:</strong> Filter for new, viewed, or all jobs</li>
                  <li>• <strong>Combined Filters:</strong> Apply multiple filters simultaneously</li>
                  <li>• <strong>Search Function:</strong> Find specific job titles or keywords</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Organization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Search className="h-6 w-6 text-purple-600" />
            Search & Organization Features
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The job listings page includes powerful search capabilities to help you quickly find specific opportunities and organize your workflow effectively.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Functionality</h3>
                <p className="text-gray-700 mb-4">
                  Use the search bar to find specific job opportunities by:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Job Titles:</strong> Search for "VP of Sales", "Vice President", etc.</li>
                  <li>• <strong>Keywords:</strong> Find jobs containing specific terms</li>
                  <li>• <strong>Company Names:</strong> Locate opportunities at specific companies</li>
                  <li>• <strong>Job Descriptions:</strong> Search within job content (when enabled)</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Workflow Benefits</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Never Lose Searches:</strong> All discovered jobs are permanently saved</li>
                  <li>• <strong>Avoid Duplication:</strong> See what you've already reviewed</li>
                  <li>• <strong>Prioritize Efforts:</strong> Focus on new opportunities first</li>
                  <li>• <strong>Track Progress:</strong> Monitor your prospecting activity</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Example Search Workflow</h3>
                    <p className="text-blue-800 mb-3">
                      If you've done multiple searches and want to focus on VP-level positions:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-blue-800 ml-4">
                      <li>Use the search bar to filter for "VP" or "Vice President"</li>
                      <li>Apply the "New Jobs" filter to see unreviewed opportunities</li>
                      <li>Choose your preferred source (Get Clients or Chrome Extension)</li>
                      <li>Review and prioritize the filtered results</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Description Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Eye className="h-6 w-6 text-orange-600" />
            Job Description Display
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The job listings page offers an optional job description preview feature to help you quickly assess opportunities without opening each individual job.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description Toggle Feature</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• <strong>Enable Preview:</strong> Turn on job descriptions for quick scanning</li>
                  <li>• <strong>Disable for Clean View:</strong> Keep the interface neat and organized</li>
                  <li>• <strong>Quick Assessment:</strong> Evaluate job relevance without clicking through</li>
                  <li>• <strong>Efficient Screening:</strong> Rapidly identify high-priority opportunities</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">✅ When to Enable</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Screening large numbers of new jobs</li>
                    <li>• Looking for specific requirements or keywords</li>
                    <li>• Qualifying opportunities before deeper review</li>
                    <li>• Training team members on job evaluation</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ When to Disable</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Working with a clean, organized interface</li>
                    <li>• Focusing on job titles and companies only</li>
                    <li>• Managing large lists efficiently</li>
                    <li>• Reducing visual clutter during workflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Recommended Workflow</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Start by reviewing "New Jobs" to prioritize fresh opportunities</li>
                <li>• Use search filters to focus on specific job types or seniority levels</li>
                <li>• Regularly check both Get Clients and Chrome Extension sources</li>
                <li>• Enable job descriptions when screening large batches of opportunities</li>
                <li>• Keep the interface clean by disabling descriptions during routine workflow</li>
                <li>• Use the job listings page as your central prospecting dashboard</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Common Mistakes</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Ignoring the job listings page and losing track of opportunities</li>
                <li>• Not using filters, leading to overwhelming job lists</li>
                <li>• Focusing only on one source (Get Clients OR Chrome Extension)</li>
                <li>• Not utilizing the search function for targeted prospecting</li>
                <li>• Leaving job descriptions enabled when not needed, cluttering the view</li>
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
                Learn about other Quinton features that work with job listings:
              </p>
              <div className="space-y-2">
                <Link href="/university/docs/getting-started/get-clients-tab" className="block text-blue-600 hover:text-blue-700">
                  → Get Clients Tab Guide
                </Link>
                <Link href="/university/docs/getting-started/find-candidates" className="block text-blue-600 hover:text-blue-700">
                  → Find Candidates Guide
                </Link>
                <Link href="/university/docs/getting-started/contacts-crm" className="block text-blue-600 hover:text-blue-700">
                  → Contacts & CRM Features
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