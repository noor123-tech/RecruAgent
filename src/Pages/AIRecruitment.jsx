import React, { useState } from 'react';
import { ArrowLeft, Briefcase, UserPlus, Bot, Calendar, Users, CheckCircle, Clock, Star, MapPin, DollarSign, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIRecruitment = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const ModuleSelection = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mt-20 mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
            <div className="h-6 border-l border-gray-300" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">AI HR Recruitment</h1>
              <p className="text-gray-600 mt-2">AI-powered recruitment and hiring workflow</p>
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hire Module */}
          <div 
            onClick={() => setSelectedModule('hire')}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I Want to Hire</h2>
              <p className="text-gray-600 mb-6">
                Post job openings and let our AI handle the entire recruitment process from sourcing to final selection.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>AI-powered candidate sourcing</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Automated resume screening</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>AI-conducted interviews</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Smart candidate ranking</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Hiring Process
              </button>
            </div>
          </div>

          {/* Get Hired Module */}
          <div 
            onClick={() => setSelectedModule('get-hired')}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <UserPlus className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I Want to Get Hired</h2>
              <p className="text-gray-600 mb-6">
                Browse available job opportunities and apply with our AI-assisted application process.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Browse curated job listings</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>AI-optimized applications</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Automated interview scheduling</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Real-time application tracking</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Find Jobs
              </button>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Powered by Advanced AI</h3>
            <p className="text-gray-600">Our AI agent handles 99% of the recruitment process automatically</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Screening Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">75%</div>
              <div className="text-sm text-gray-600">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const HireModule = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => setSelectedModule(null)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Modules
            </button>
            <div className="h-6 border-l border-gray-300" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Post a Job</h1>
              <p className="text-gray-600 mt-1">Create a job posting and let AI handle the recruitment</p>
            </div>
          </div>
        </div>

        {/* Job Posting Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Software Developer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Department</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Support</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  placeholder="e.g. New York, NY (Remote available)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range *</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="flex items-center text-gray-500">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Entry Level (0-2 years)</option>
                  <option>Mid Level (3-5 years)</option>
                  <option>Senior Level (6-10 years)</option>
                  <option>Executive Level (10+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
              <textarea
                rows={6}
                placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills *</label>
              <input
                type="text"
                placeholder="e.g. React, Node.js, TypeScript, AWS (comma separated)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">AI Screening Criteria</label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" defaultChecked />
                  <span className="text-sm text-gray-700">Automatically screen resumes for required skills</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" defaultChecked />
                  <span className="text-sm text-gray-700">Conduct initial AI interviews</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" defaultChecked />
                  <span className="text-sm text-gray-700">Rank candidates by fit score</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm text-gray-700">Require human approval for final selection</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Post Job & Start AI Recruitment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const GetHiredModule = () => {
    const jobs = [
      {
        id: 1,
        title: 'Senior Software Developer',
        company: 'TechCorp Inc.',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$80,000 - $120,000',
        posted: '2 days ago',
        applicants: 45,
        match: 92,
        skills: ['React', 'Node.js', 'TypeScript'],
        description: 'We are looking for a senior software developer to join our growing team...'
      },
      {
        id: 2,
        title: 'Product Manager',
        company: 'InnovateLabs',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$90,000 - $130,000',
        posted: '1 week ago',
        applicants: 67,
        match: 85,
        skills: ['Product Strategy', 'Analytics', 'Leadership'],
        description: 'Join our product team to drive innovation and growth...'
      },
      {
        id: 3,
        title: 'UX Designer',
        company: 'DesignStudio',
        location: 'Remote',
        type: 'Contract',
        salary: '$60,000 - $80,000',
        posted: '3 days ago',
        applicants: 23,
        match: 78,
        skills: ['Figma', 'User Research', 'Prototyping'],
        description: 'Create beautiful and intuitive user experiences...'
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setSelectedModule(null)}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Modules
              </button>
              <div className="h-6 border-l border-gray-300" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Find Your Next Job</h1>
                <p className="text-gray-600 mt-1">Browse AI-curated job opportunities</p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        job.match >= 90 ? 'bg-green-100 text-green-800' :
                        job.match >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Posted {job.posted}</span>
                        <span>{job.applicants} applicants</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Save Job
                        </button>
                        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          Apply with AI
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render based on selected module
  if (selectedModule === 'hire') {
    return <HireModule />;
  } else if (selectedModule === 'get-hired') {
    return <GetHiredModule />;
  } else {
    return <ModuleSelection />;
  }
};

export default AIRecruitment;