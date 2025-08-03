import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Clock, Users, TrendingUp, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimeTracking = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const activeWorkers = [
    {
      id: 1,
      name: 'Jim Halpert',
      task: 'Site Inspection',
      startTime: '08:30 AM',
      duration: '2h 18m',
      location: 'Building A',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Pam Beesly',
      task: 'Equipment Maintenance',
      startTime: '09:15 AM',
      duration: '1h 45m',
      location: 'Workshop',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Dwight Schrute',
      task: 'Client Meeting',
      startTime: '10:00 AM',
      duration: '45m',
      location: 'Conference Room',
      status: 'On Break',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'Angela Martin',
      task: 'Inventory Check',
      startTime: '07:45 AM',
      duration: '3h 12m',
      location: 'Warehouse',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 5,
      name: 'Kevin Malone',
      task: 'Quality Assurance',
      startTime: '09:30 AM',
      duration: '1h 22m',
      location: 'Lab',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
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
                <h1 className="text-4xl font-bold text-gray-900">Time Tracking</h1>
                <p className="text-gray-600 mt-1">Friday, August 1, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{formatTime(currentTime)}</div>
                <div className="text-sm text-gray-500">Current Time</div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Live Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Active Workers</div>
                <div className="text-3xl font-bold text-gray-900">4</div>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <Play className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">On Break</div>
                <div className="text-3xl font-bold text-gray-900">2</div>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Pause className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Total Hours</div>
                <div className="text-3xl font-bold text-gray-900">9h 32m</div>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Productivity</div>
                <div className="text-3xl font-bold text-gray-900">94%</div>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Auto Clock-in */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Auto Clock-in</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-2 right-8 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">6</span>
                </div>
                <div className="absolute bottom-8 left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">50m radius</div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Within Work Zone</span>
                  </div>
                  <div className="text-xs mt-1">Auto clock-in enabled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Timesheets */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Active Timesheets</h3>
              <span className="text-sm text-gray-500">6 workers</span>
            </div>
            <div className="space-y-4">
              {activeWorkers.map((worker) => (
                <div key={worker.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={worker.avatar} 
                      alt={worker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{worker.task}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          worker.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {worker.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{worker.name}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Started {worker.startTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{worker.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{worker.duration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
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

export default TimeTracking;