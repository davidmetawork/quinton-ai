import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Search, Target, Mail, CheckCircle, AlertCircle, ExternalLink, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FindCandidatesGuide() {
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
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Find Candidates Guide
              </h1>
              <p className="text-gray-600 mt-2">Search for candidates, find personal contact information, and send targeted outreach</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              10 min read
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
                <Users className="w-5 h-5 mr-2" />
                What You'll Learn
              </h2>
              <ul className="text-blue-800 space-y-2 mb-0">
                <li>How to search for candidates using multiple criteria</li>
                <li>Finding personal email addresses for direct outreach</li>
                <li>Searching for specific individuals by name and company</li>
                <li>Using LinkedIn integration for candidate prospecting</li>
                <li>Sending personalized candidate outreach sequences</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Search className="w-6 h-6 mr-3 text-blue-600" />
              Candidate Search Overview
            </h2>
            
            <p className="text-gray-700 mb-6">
              The Find Candidates platform allows you to search for potential candidates using multiple criteria including job titles, locations, skills, and target companies. Unlike client acquisition, candidate outreach focuses on finding personal email addresses for more effective direct communication.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Platform Updates</h4>
                  <p className="text-yellow-700 text-sm">
                    The Find Candidates platform is actively being developed. Features and interface may be updated throughout 2025 to enhance functionality and user experience.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Criteria Options</h3>
            
            <p className="text-gray-700 mb-4">
              You can search for candidates using various criteria to narrow down your results:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Basic Search Fields</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li><strong>Job Title:</strong> e.g., "Staff Software Engineer"</li>
                    <li><strong>Location:</strong> e.g., "San Francisco"</li>
                    <li><strong>Skills:</strong> e.g., "Python" (from LinkedIn profiles)</li>
                    <li><strong>Companies:</strong> e.g., "Google, Meta, Microsoft"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Options</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li><strong>Specific Name:</strong> Search for individuals</li>
                    <li><strong>Current Company:</strong> Target specific employers</li>
                    <li><strong>Multiple Companies:</strong> Search across several organizations</li>
                    <li><strong>Skill Combinations:</strong> Multiple technical skills</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Performing a Candidate Search</h3>
            
            <p className="text-gray-700 mb-4">
              Here's a step-by-step process for conducting an effective candidate search:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Enter job title:</strong> Start with the specific role you're recruiting for (e.g., "Staff Software Engineer")</li>
              <li><strong>Set location:</strong> Add the geographic area where candidates should be located</li>
              <li><strong>Add relevant skills:</strong> Include technical skills that appear on LinkedIn profiles</li>
              <li><strong>Target companies:</strong> List companies where ideal candidates currently work</li>
              <li><strong>Execute search:</strong> Run the search to see matching candidates</li>
              <li><strong>Review results:</strong> Browse through the candidate profiles returned</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-green-600" />
              Contact Information & Outreach
            </h2>
            
            <p className="text-gray-700 mb-6">
              The platform prioritizes finding personal email addresses for candidate outreach, as these typically have higher response rates than business emails. The system automatically enriches candidate profiles with contact information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Email Priority</h3>
            
            <p className="text-gray-700 mb-4">
              For candidate outreach, personal emails are preferred over business emails because:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Higher response rates:</strong> Personal emails are checked more frequently</li>
              <li><strong>Less filtering:</strong> Avoid corporate spam filters and email policies</li>
              <li><strong>Direct communication:</strong> Reach candidates without going through company systems</li>
              <li><strong>Privacy considerations:</strong> Candidates may prefer discussing opportunities privately</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bulk vs. Individual Outreach</h3>
            
            <p className="text-gray-700 mb-4">
              The platform supports both individual and bulk candidate outreach:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Outreach</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>Select a single candidate from search results</li>
                    <li>Review their profile and background</li>
                    <li>Generate personalized email content</li>
                    <li>Send targeted, customized outreach</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bulk Outreach</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>Select multiple candidates from search results</li>
                    <li>Automatically find contact information for all selected</li>
                    <li>Generate personalized emails for each candidate</li>
                    <li>Schedule sequences for efficient outreach</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="w-6 h-6 mr-3 text-purple-600" />
              Individual Candidate Search
            </h2>
            
            <p className="text-gray-700 mb-6">
              When you need to find a specific person, the platform offers powerful individual search capabilities. This is particularly useful when you have a candidate's name from LinkedIn, Sales Navigator, or other sources.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Searching by Name and Company</h3>
            
            <p className="text-gray-700 mb-4">
              The most effective way to find a specific individual is to use their full name and current company:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Enter full name:</strong> Use the person's complete name as it appears on LinkedIn</li>
              <li><strong>Add current company:</strong> Include their current employer for accurate matching</li>
              <li><strong>Optional location:</strong> Add location if needed for disambiguation</li>
              <li><strong>Execute search:</strong> The system will find the specific individual</li>
              <li><strong>Verify match:</strong> Confirm it's the correct person before proceeding</li>
              <li><strong>Get contact info:</strong> The platform will enrich the profile with email addresses</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Pro Tip</h4>
                  <p className="text-green-700 text-sm">
                    When searching for individuals, use their exact name as it appears on their LinkedIn profile for the most accurate results. Including their current company significantly improves match accuracy.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3 text-orange-600" />
              Best Practices for Candidate Outreach
            </h2>
            
            <p className="text-gray-700 mb-6">
              Successful candidate outreach requires a strategic approach that balances personalization with efficiency. Here are proven strategies for maximizing your response rates.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Personalization</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Personalization Elements</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li><strong>Use their name:</strong> Always address candidates by their first name</li>
                    <li><strong>Reference their role:</strong> Mention their current position and company</li>
                    <li><strong>Highlight relevant skills:</strong> Reference specific technologies or expertise</li>
                    <li><strong>Connect to opportunity:</strong> Explain why they're a good fit for the role</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Personalization</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li><strong>Recent achievements:</strong> Reference recent promotions or projects</li>
                    <li><strong>Mutual connections:</strong> Mention shared contacts when appropriate</li>
                    <li><strong>Industry insights:</strong> Share relevant market trends or opportunities</li>
                    <li><strong>Company knowledge:</strong> Show understanding of their current employer</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Timing and Follow-up</h3>
            
            <p className="text-gray-700 mb-4">
              Effective candidate outreach requires strategic timing and persistent follow-up:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Initial contact:</strong> Send first email during business hours (Tuesday-Thursday)</li>
              <li><strong>Follow-up sequence:</strong> Plan 3-4 follow-up emails spaced 3-5 days apart</li>
              <li><strong>Value-added content:</strong> Include industry insights or career advice in follow-ups</li>
              <li><strong>Multiple channels:</strong> Consider LinkedIn messages as secondary outreach</li>
              <li><strong>Persistence with respect:</strong> Be persistent but respectful of their time and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Rate Optimization</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Factors That Increase Response Rates</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>Personal email addresses (vs. business emails)</li>
                <li>Personalized subject lines mentioning their name or company</li>
                <li>Clear value proposition for the candidate</li>
                <li>Specific role details and compensation ranges</li>
                <li>Professional but conversational tone</li>
                <li>Mobile-optimized email formatting</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Finding Candidates?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Use the Find Candidates platform to search for qualified candidates, find their contact information, and send personalized outreach that gets results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                  <Link href="/university/videos">
                    Watch Video Tutorials
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                  <a href="https://www.loom.com/share/370369a605ea497c8cb328600bd4e01e" target="_blank" rel="noopener noreferrer">
                    View Platform Demo
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