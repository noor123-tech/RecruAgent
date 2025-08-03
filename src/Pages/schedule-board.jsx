import React, { useState } from 'react';
import { ArrowLeft, Download, Plus, Settings, RefreshCw, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced mock data with more realistic schedule
const mockScheduleData = {
  date: new Date().toISOString().split('T')[0],
  workers: [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Operations',
      avatar: 'https://i.pravatar.cc/150?img=1',
      tasks: [
        { 
          id: '101', 
          name: 'Setup Equipment', 
          startTime: '08:00', 
          endTime: '09:30', 
          priority: 'Medium',
          color: 'bg-blue-100 border-blue-400 text-blue-800'
        },
        { 
          id: '102', 
          name: 'Team Meeting', 
          startTime: '10:00', 
          endTime: '11:00', 
          priority: 'High',
          color: 'bg-green-100 border-green-400 text-green-800'
        },
        { 
          id: '103', 
          name: 'Quality Check', 
          startTime: '14:00', 
          endTime: '15:30', 
          priority: 'High',
          color: 'bg-orange-100 border-orange-400 text-orange-800'
        }
      ]
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Sales',
      avatar: 'https://i.pravatar.cc/150?img=2',
      tasks: [
        { 
          id: '201', 
          name: 'Client Call', 
          startTime: '09:00', 
          endTime: '10:00', 
          priority: 'High',
          color: 'bg-purple-100 border-purple-400 text-purple-800'
        },
        { 
          id: '202', 
          name: 'Sales Report', 
          startTime: '11:30', 
          endTime: '13:00', 
          priority: 'Medium',
          color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
        },
        { 
          id: '203', 
          name: 'Follow-up Calls', 
          startTime: '15:00', 
          endTime: '16:30', 
          priority: 'Medium',
          color: 'bg-green-100 border-green-400 text-green-800'
        }
      ]
    },
    {
      id: '3',
      name: 'Carol Davis',
      role: 'Support',
      avatar: 'https://i.pravatar.cc/150?img=3',
      tasks: [
        { 
          id: '301', 
          name: 'Customer Support', 
          startTime: '08:30', 
          endTime: '12:00', 
          priority: 'High',
          color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
        },
        { 
          id: '302', 
          name: 'Documentation', 
          startTime: '13:00', 
          endTime: '14:30', 
          priority: 'Low',
          color: 'bg-pink-100 border-pink-400 text-pink-800'
        }
      ]
    },
    {
      id: '4',
      name: 'David Wilson',
      role: 'IT',
      avatar: 'https://i.pravatar.cc/150?img=4',
      tasks: [
        { 
          id: '401', 
          name: 'System Maintenance', 
          startTime: '08:00', 
          endTime: '10:00', 
          priority: 'High',
          color: 'bg-blue-100 border-blue-400 text-blue-800'
        },
        { 
          id: '402', 
          name: 'Security Audit', 
          startTime: '14:00', 
          endTime: '16:00', 
          priority: 'High',
          color: 'bg-red-100 border-red-400 text-red-800'
        }
      ]
    },
    {
      id: '5',
      name: 'Emma Brown',
      role: 'Marketing',
      avatar: 'https://i.pravatar.cc/150?img=5',
      tasks: [
        { 
          id: '501', 
          name: 'Content Creation', 
          startTime: '09:00', 
          endTime: '11:30', 
          priority: 'Medium',
          color: 'bg-purple-100 border-purple-400 text-purple-800'
        },
        { 
          id: '502', 
          name: 'Campaign Analysis', 
          startTime: '13:30', 
          endTime: '15:00', 
          priority: 'Medium',
          color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
        }
      ]
    }
  ],
  openShifts: [
    { 
      id: '601', 
      name: 'Open Shift', 
      startTime: '10:00', 
      endTime: '11:00', 
      priority: 'Medium',
      color: 'bg-gray-100 border-gray-400 text-gray-800'
    }
  ]
};

const TimeSlot = ({ hour, isHalfHour = false }) => {
  const displayHour = hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;
  const halfHourDisplay = hour < 12 ? `${hour}:30 AM` : hour === 12 ? '12:30 PM' : `${hour - 12}:30 PM`;
  
  return (
    <div className="text-xs text-gray-500 text-center border-r border-gray-200 px-2 py-1 min-w-[60px]">
      {isHalfHour ? halfHourDisplay : displayHour}
    </div>
  );
};

const TaskBlock = ({ task, startHour, onTaskClick }) => {
  const taskStartHour = parseInt(task.startTime.split(':')[0]);
  const taskStartMinute = parseInt(task.startTime.split(':')[1]);
  const taskEndHour = parseInt(task.endTime.split(':')[0]);
  const taskEndMinute = parseInt(task.endTime.split(':')[1]);
  
  const startPosition = ((taskStartHour - startHour) * 120) + (taskStartMinute * 2);
  const duration = ((taskEndHour - taskStartHour) * 60) + (taskEndMinute - taskStartMinute);
  const width = duration * 2;
  
  return (
    <div
      className={`absolute h-8 rounded border-l-4 cursor-pointer hover:shadow-md transition-shadow ${task.color}`}
      style={{
        left: `${startPosition}px`,
        width: `${width}px`,
        top: '4px'
      }}
      onClick={() => onTaskClick(task)}
    >
      <div className="px-2 py-1 text-xs font-medium truncate">
        {task.name}
      </div>
      <div className="px-2 text-xs opacity-75">
        {task.startTime} - {task.endTime}
      </div>
    </div>
  );
};

const WorkerRow = ({ worker, startHour, endHour, onTaskClick }) => {
  return (
    <div className="flex border-b border-gray-200 hover:bg-gray-50">
      <div className="w-48 p-4 border-r border-gray-200 bg-white sticky left-0 z-10">
        <div className="flex items-center space-x-3">
          <img 
            src={worker.avatar} 
            alt={worker.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-gray-900 text-sm">{worker.name}</div>
            <div className="text-xs text-gray-500">{worker.role}</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative h-16 bg-white">
        {worker.tasks.map(task => (
          <TaskBlock 
            key={task.id} 
            task={task} 
            startHour={startHour}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  );
};

const OpenShiftsRow = ({ openShifts, startHour, onTaskClick }) => {
  return (
    <div className="flex border-b border-gray-200 bg-orange-50">
      <div className="w-48 p-4 border-r border-gray-200 bg-orange-100 sticky left-0 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center">
            <Plus className="w-4 h-4 text-orange-600" />
          </div>
          <div>
            <div className="font-medium text-orange-900 text-sm">Open</div>
            <div className="text-xs text-orange-600">Available Shifts</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative h-16 bg-orange-50">
        {openShifts.map(task => (
          <TaskBlock 
            key={task.id} 
            task={task} 
            startHour={startHour}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  );
};

const ScheduleBoard = ({ data, startHour, endHour, onScheduleUpdate, onTaskClick }) => {
  const timeSlots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    timeSlots.push(hour);
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        {/* Header with time slots */}
        <div className="flex border-b border-gray-200">
          <div className="w-48 p-4 border-r border-gray-200 bg-gray-50 sticky left-0 z-20">
            <div className="font-medium text-gray-900">Workers</div>
          </div>
          <div className="flex bg-gray-50">
            {timeSlots.map(hour => (
              <TimeSlot key={hour} hour={hour} />
            ))}
          </div>
        </div>

        {/* Worker rows */}
        {data.workers.map(worker => (
          <WorkerRow 
            key={worker.id} 
            worker={worker} 
            startHour={startHour}
            endHour={endHour}
            onTaskClick={onTaskClick}
          />
        ))}

        {/* Open shifts row */}
        <OpenShiftsRow 
          openShifts={data.openShifts}
          startHour={startHour}
          onTaskClick={onTaskClick}
        />
      </div>
    </div>
  );
};

const TaskModal = ({ task, isOpen, onClose }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{task.name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium text-gray-500">Time:</span>
            <span className="ml-2 text-sm text-gray-900">{task.startTime} - {task.endTime}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Priority:</span>
            <span className={`ml-2 text-sm px-2 py-1 rounded ${
              task.priority === 'High' ? 'bg-red-100 text-red-800' :
              task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {task.priority}
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit Task
          </button>
        </div>
      </div>
    </div>
  );
};

const ScheduleBoardPage = () => {
  const [scheduleData, setScheduleData] = useState(mockScheduleData);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleScheduleUpdate = (newData) => {
    setScheduleData(newData);
    console.log('Schedule updated:', newData);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setScheduleData({
      ...scheduleData,
      date,
    });
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  };

  const exportSchedule = () => {
    const csvContent = [
      ['Worker', 'Task', 'Start Time', 'End Time', 'Priority'],
      ...scheduleData.workers.flatMap(worker =>
        worker.tasks.map(task => [
          worker.name,
          task.name,
          task.startTime,
          task.endTime,
          task.priority || 'N/A'
        ])
      ),
      ...scheduleData.openShifts.map(task => [
        'Unassigned',
        task.name,
        task.startTime,
        task.endTime,
        task.priority || 'N/A'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schedule-${selectedDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const totalTasks = scheduleData.workers.reduce((total, worker) => total + worker.tasks.length, 0);
  const utilization = Math.round((totalTasks / (totalTasks + scheduleData.openShifts.length)) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
            <div className="h-6 border-l border-gray-300 hidden lg:block" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Schedule Board</h1>
              <p className="text-gray-600">Manage employee schedules and task assignments</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={exportSchedule}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </button>
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm font-medium text-gray-500">Total Workers</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">
              {scheduleData.workers.length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm font-medium text-gray-500">Assigned Tasks</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">
              {totalTasks}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm font-medium text-gray-500">Open Shifts</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">
              {scheduleData.openShifts.length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm font-medium text-gray-500">Utilization</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">
              {utilization}%
            </div>
          </div>
        </div>

        {/* Schedule Board Header */}
        <div className="bg-white rounded-t-lg border border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Schedule Board</h2>
              <p className="text-sm text-gray-500">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Tasks Overview: {totalTasks}/15 Assigned
          </div>
        </div>

        {/* Schedule Board */}
        <div className="border-x border-b border-gray-200 rounded-b-lg">
          <ScheduleBoard
            data={scheduleData}
            startHour={8}
            endHour={17}
            onScheduleUpdate={handleScheduleUpdate}
            onTaskClick={handleTaskClick}
          />
        </div>

        {/* Task Modal */}
        <TaskModal 
          task={selectedTask}
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
        />

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">How to Use the Schedule Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Click Tasks:</span> Click on any task block to view detailed information and edit options.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Time Grid:</span> Tasks are positioned based on their start and end times across the timeline.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Open Shifts:</span> Unassigned tasks appear in the orange "Open" row for easy identification.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Export Data:</span> Use the Export button to download schedule data as CSV for external use.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBoardPage;