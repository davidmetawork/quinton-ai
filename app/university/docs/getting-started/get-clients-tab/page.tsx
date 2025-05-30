import Link from 'next/link'
import { ArrowLeft, BookOpen, Chrome, Search, Target, Zap, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GetClientsTabGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-6">
            <Link href="/university/docs" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Clients Tab Guide
              </h1>
              <p className="text-gray-600 mt-2">Master the browser extension and search agent for client acquisition</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              12 min read
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
              Beginner friendly
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                What You'll Learn
              </h2>
              <ul className="text-blue-800 space-y-2 mb-0">
                <li>How to use the Quinton browser extension on job boards</li>
                <li>Creating and managing job bookmarks for organized outreach</li>
                <li>Understanding the scoring system for job contacts</li>
                <li>Using the automated search agent for hands-off prospecting</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Chrome className="w-6 h-6 mr-3 text-blue-600" />
              Browser Extension Overview
            </h2>
            
            <p className="text-gray-700 mb-6">
              The Quinton browser extension transforms how you interact with job boards, turning passive browsing into active client acquisition. The extension works seamlessly with major job boards like LinkedIn and Indeed, allowing you to bookmark jobs and automatically enrich them with contact information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started with Job Boards</h3>
            
            <p className="text-gray-700 mb-4">
              The extension activates automatically when you're browsing supported job boards. You'll see the Quinton interface appear when you:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Click into a specific job posting</li>
              <li>Perform a search on the job board</li>
              <li>Navigate to job listing pages</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Note</h4>
                  <p className="text-yellow-700 text-sm">
                    The extension won't appear on job board homepages. You need to either search for jobs or click into specific job postings to activate the Quinton interface.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bookmarking Jobs</h3>
            
            <p className="text-gray-700 mb-4">
              When you find an interesting job posting, you can bookmark it for later outreach. Here's how the process works:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Select a preset or create new:</strong> Choose from your existing contact presets or create a new one for this specific job type</li>
              <li><strong>Bookmark the job:</strong> Click the bookmark button to add the job to your outreach list</li>
              <li><strong>Automatic enrichment:</strong> Quinton automatically finds and enriches contact information for relevant decision-makers</li>
              <li><strong>Organized tracking:</strong> All bookmarked jobs appear in your Get Clients tab for easy management</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Contact Scores</h3>
            
            <p className="text-gray-700 mb-4">
              Quinton assigns scores to contacts based on their relevance to the job posting. Here's what the scoring means:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Score: 100</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Job Poster</span>
                </div>
                <p className="text-gray-700 text-sm">
                  This person actually posted the job listing. They receive a perfect score of 100 because they're the most relevant contact for this specific opportunity.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Score: 80-99</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">High Relevance</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Decision-makers, hiring managers, or department heads closely related to the role.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Score: 60-79</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Medium Relevance</span>
                </div>
                <p className="text-gray-700 text-sm">
                  HR professionals, recruiters, or team members who might influence hiring decisions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Search className="w-6 h-6 mr-3 text-green-600" />
              Search Agent (Beta)
            </h2>
            
            <p className="text-gray-700 mb-6">
              The Search Agent automates the entire prospecting workflow, from finding jobs to drafting personalized outreach messages. This powerful feature handles multiple steps automatically, saving you hours of manual work.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How the Search Agent Works</h3>
            
            <p className="text-gray-700 mb-4">
              Instead of manually browsing job boards, the Search Agent performs comprehensive searches based on your criteria:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Define your search:</strong> Specify the job title you're recruiting for (e.g., "Nurse Practitioner")</li>
              <li><strong>Set location parameters:</strong> Choose your target geographic area (e.g., "California")</li>
              <li><strong>Identify decision-makers:</strong> List the types of contacts you want to reach (managers, HR, VPs, etc.)</li>
              <li><strong>Automated execution:</strong> The agent searches job boards, finds relevant postings, and identifies contacts</li>
              <li><strong>Message generation:</strong> Personalized outreach messages are automatically drafted for each contact</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Processing Time and Results</h3>
            
            <p className="text-gray-700 mb-4">
              The Search Agent typically takes 10-15 minutes to complete a comprehensive search. During this time, it's:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Scanning multiple job boards for relevant postings</li>
              <li>Extracting company information and job details</li>
              <li>Finding and enriching contact data for decision-makers</li>
              <li>Generating personalized outreach messages</li>
              <li>Organizing everything in your Agent Queue</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Managing Agent Queue Results</h3>
            
            <p className="text-gray-700 mb-4">
              Once the Search Agent completes its work, you'll find all results in the Agent Queue within your Unibox. Here's how to review and manage the results:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">For Each Contact, You Can:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Review their profile and company information</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Read the AI-generated personalized messages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Approve and start the outreach sequence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Edit messages before sending if needed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Delete contacts that don't meet your criteria</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-purple-600" />
              Best Practices and Tips
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Workflow Optimization</h3>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Create specific presets:</strong> Set up different contact presets for different types of roles or industries</li>
              <li><strong>Regular bookmark reviews:</strong> Check your bookmarked jobs regularly to maintain an organized outreach list</li>
              <li><strong>Prioritize job posters:</strong> Always reach out to contacts with a score of 100 first, as they posted the job</li>
              <li><strong>Batch processing:</strong> Use the Search Agent for bulk prospecting, then use manual bookmarking for specific opportunities</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Maximizing Response Rates</h3>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Timing matters:</strong> Reach out to job posters quickly after they post, as they're actively hiring</li>
              <li><strong>Personalize your approach:</strong> Reference the specific job posting in your outreach messages</li>
              <li><strong>Focus on decision-makers:</strong> Prioritize contacts with higher relevance scores</li>
              <li><strong>Follow up strategically:</strong> Use Quinton's automated sequences for consistent follow-up</li>
            </ul>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
              <p className="text-gray-700 mb-4">
                Now that you understand how to use the Get Clients tab, you're ready to start building your client pipeline. Consider exploring these related topics:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/university/docs/automation/workflows">
                    Learn Email Automation
                  </Link>
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
                  <a href="https://www.loom.com/share/4b3ded41e66e48b3bc468678dc473d36" target="_blank" rel="noopener noreferrer">
                    Watch Video Tutorial
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 