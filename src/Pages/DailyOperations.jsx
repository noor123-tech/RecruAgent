import React, { useState } from 'react';
import { ArrowLeft, Plus, Download, CheckCircle, Clock, AlertCircle, BarChart3, User, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const DailyOperations = () => {
  const [checklists] = useState([
    {
      id: 1,
      name: 'Daily Opening Checklist',
      progress: 50,
      status: 'IN PROGRESS',
      date: '8/1/2025',
      totalTasks: 8,
      completedTasks: 4
    },
    {
      id: 2,
      name: 'Daily Closing Checklist',
      progress: 0,
      status: 'PENDING',
      date: '8/1/2025',
      totalTasks: 6,
      completedTasks: 0
    }
  ]);

  const [tasks] = useState([
    {
      id: 1,
      title: 'Unlock all entrance doors',
      assignee: 'Alice Johnson',
      location: 'Main Entrance',
      duration: '5 min',
      priority: 'HIGH',
      completed: false,
      required: true
    },
    {
      id: 2,
      title: 'Check all equipment is functional',
      assignee: 'Bob Smith',
      location: 'Workshop',
      duration: '15 min',
      priority: 'HIGH',
      completed: false,
      required: true
    },
    {
      id: 3,
      title: 'Verify cleaning supplies are stocked',
      assignee: 'Carol Davis',
      location: 'Storage Room',
      duration: '10 min',
      priority: 'MEDIUM',
      completed: true,
      required: false
    },
    {
      id: 4,
      title: 'Complete safety equipment check',
      assignee: 'David Wilson',
      location: 'Safety Station',
      duration: '20 min',
      priority: 'HIGH',
      completed: true,
      required: false
    }
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'bg-red-100 text-red-800';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
      case 'LOW': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'IN PROGRESS': return 'bg-orange-100 text-orange-800';
      case 'PENDING': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mt-20 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="h-6 border-l border-gray-300" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Daily Operations</h1>
                <p className="text-gray-600 mt-1">Complete daily checklists to ensure smooth operations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Checklist</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">TOTAL CHECKLISTS</div>
                <div className="text-3xl font-bold text-gray-900">2</div>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">COMPLETED TASKS</div>
                <div className="text-3xl font-bold text-gray-900">4</div>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">PENDING TASKS</div>
                <div className="text-3xl font-bold text-gray-900">10</div>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">PROGRESS</div>
                <div className="text-3xl font-bold text-gray-900">29%</div>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Daily Checklists Sidebar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Daily Checklists</h3>
            <div className="space-y-4">
              {checklists.map((checklist) => (
                <div key={checklist.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{checklist.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(checklist.status)}`}>
                      {checklist.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Complete all tasks before opening</p>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{checklist.completedTasks}/{checklist.totalTasks}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${checklist.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{checklist.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Daily Opening Checklist</h3>
                <p className="text-gray-600 mt-1">Complete all tasks before opening</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-500">50%</div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>

            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className={`p-4 border rounded-lg transition-colors ${
                  task.completed ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:bg-gray-50'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        readOnly
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-medium ${task.completed ? 'text-green-800 line-through' : 'text-gray-900'}`}>
                          {task.title} {task.required && <span className="text-red-500">*</span>}
                        </h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{task.assignee}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{task.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{task.duration}</span>
                        </span>
                      </div>
                      {task.completed && (
                        <div className="mt-2 text-sm text-green-600 font-medium">
                          ✓ Complete
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOperations;