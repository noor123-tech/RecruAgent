import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeft, Download, Plus, Settings, RefreshCw, Calendar, Clock, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced mock data with realistic schedule extending beyond 5 PM
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
          endTime: '17:30', 
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
          endTime: '16:30', 
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
          endTime: '18:00', 
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
          endTime: '17:00', 
          priority: 'Medium',
          color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
        }
      ]
    }
  ],
  openShifts: [
    { 
      id: '601', 
      name: 'Evening Shift', 
      startTime: '17:00', 
      endTime: '19:00', 
      priority: 'Medium',
      color: 'bg-gray-100 border-gray-400 text-gray-800'
    },
    { 
      id: '602', 
      name: 'Night Support', 
      startTime: '20:00', 
      endTime: '22:00', 
      priority: 'High',
      color: 'bg-gray-100 border-gray-400 text-gray-800'
    }
  ]
};

const TimeSlot = ({ hour, isHalfHour = false }) => {
  const formatTime = (h) => {
    if (h < 12) return `${h} AM`;
    if (h === 12) return '12 PM';
    return `${h - 12} PM`;
  };
  
  const displayTime = isHalfHour ? 
    (hour < 12 ? `${hour}:30 AM` : hour === 12 ? '12:30 PM' : `${hour - 12}:30 PM`) :
    formatTime(hour);
  
  return (
    <div className="text-xs text-gray-500 text-center border-r border-gray-200 px-3 py-2 min-w-[80px] bg-gray-50">
      {displayTime}
    </div>
  );
};

const TaskBlock = ({ task, startHour, onTaskClick, onDragStart, isDragging }) => {
  const taskStartHour = parseInt(task.startTime.split(':')[0]);
  const taskStartMinute = parseInt(task.startTime.split(':')[1]);
  const taskEndHour = parseInt(task.endTime.split(':')[0]);
  const taskEndMinute = parseInt(task.endTime.split(':')[1]);
  
  const startPosition = ((taskStartHour - startHour) * 80) + (taskStartMinute * 80 / 60);
  const duration = ((taskEndHour - taskStartHour) * 60) + (taskEndMinute - taskStartMinute);
  const width = duration * 80 / 60;
  
  return (
    <div
      className={`absolute h-12 rounded-lg border-l-4 cursor-move hover:shadow-lg transition-all duration-200 ${task.color} ${isDragging ? 'opacity-50 z-50' : 'z-10'}`}
      style={{
        left: `${startPosition}px`,
        width: `${Math.max(width, 60)}px`,
        top: '8px'
      }}
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onClick={() => onTaskClick(task)}
    >
      <div className="px-3 py-1 h-full flex flex-col justify-center">
        <div className="text-xs font-semibold truncate">
          {task.name}
        </div>
        <div className="text-xs opacity-75">
          {task.startTime} - {task.endTime}
        </div>
      </div>
    </div>
  );
};

const WorkerRow = ({ worker, startHour, endHour, onTaskClick, onDragStart, onDrop, onDragOver, isDragging }) => {
  return (
    <div 
      className="flex border-b border-gray-200 hover:bg-gray-50 transition-colors"
      onDrop={(e) => onDrop(e, worker.id)}
      onDragOver={onDragOver}
    >
      <div className="w-56 p-4 border-r border-gray-200 bg-white sticky left-0 z-20">
        <div className="flex items-center space-x-3">
          <img 
            src={worker.avatar} 
            alt={worker.name} 
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <div className="font-semibold text-gray-900 text-sm">{worker.name}</div>
            <div className="text-xs text-gray-500">{worker.role}</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative h-20 bg-white min-w-0">
        {worker.tasks.map(task => (
          <TaskBlock 
            key={task.id} 
            task={task} 
            startHour={startHour}
            onTaskClick={onTaskClick}
            onDragStart={onDragStart}
            isDragging={isDragging}
          />
        ))}
      </div>
    </div>
  );
};

const OpenShiftsRow = ({ openShifts, startHour, onTaskClick, onDragStart, onDrop, onDragOver, isDragging }) => {
  return (
    <div 
      className="flex border-b-2 border-orange-200 bg-orange-50"
      onDrop={(e) => onDrop(e, 'open')}
      onDragOver={onDragOver}
    >
      <div className="w-56 p-4 border-r border-gray-200 bg-orange-100 sticky left-0 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
            <Plus className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <div className="font-semibold text-orange-900 text-sm">Open Shifts</div>
            <div className="text-xs text-orange-600">Available</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative h-20 bg-orange-50 min-w-0">
        {openShifts.map(task => (
          <TaskBlock 
            key={task.id} 
            task={task} 
            startHour={startHour}
            onTaskClick={onTaskClick}
            onDragStart={onDragStart}
            isDragging={isDragging}
          />
        ))}
      </div>
    </div>
  );
};

const ScheduleBoard = ({ data, startHour, endHour, onScheduleUpdate, onTaskClick, onTaskMove }) => {
  const [draggedTask, setDraggedTask] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const timeSlots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    timeSlots.push(hour);
  }

  const handleDragStart = useCallback((e, task) => {
    setDraggedTask(task);
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', task.id);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetWorkerId) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (draggedTask && onTaskMove) {
      onTaskMove(draggedTask, targetWorkerId);
    }
    setDraggedTask(null);
  }, [draggedTask, onTaskMove]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        {/* Header with time slots */}
        <div className="flex border-b-2 border-gray-300">
          <div className="w-56 p-4 border-r border-gray-200 bg-gray-100 sticky left-0 z-30">
            <div className="font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Workers
            </div>
          </div>
          <div className="flex bg-gray-100 min-w-0">
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
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            isDragging={isDragging}
          />
        ))}

        {/* Open shifts row */}
        <OpenShiftsRow 
          openShifts={data.openShifts}
          startHour={startHour}
          onTaskClick={onTaskClick}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          isDragging={isDragging}
        />
      </div>
    </div>
  );
};

const TaskModal = ({ task, isOpen, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState(task || {});

  React.useEffect(() => {
    setEditedTask(task || {});
  }, [task]);

  if (!isOpen || !task) return null;

  const handleSave = () => {
    if (onSave) {
      onSave(editedTask);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-bold text-gray-900">{task.name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
            <input
              type="text"
              value={editedTask.name || ''}
              onChange={(e) => setEditedTask({...editedTask, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <input
                type="time"
                value={editedTask.startTime || ''}
                onChange={(e) => setEditedTask({...editedTask, startTime: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input
                type="time"
                value={editedTask.endTime || ''}
                onChange={(e) => setEditedTask({...editedTask, endTime: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={editedTask.priority || 'Medium'}
              onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
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

  const handleTaskMove = (task, targetWorkerId) => {
    const newData = { ...scheduleData };
    
    // Remove task from current location
    newData.workers = newData.workers.map(worker => ({
      ...worker,
      tasks: worker.tasks.filter(t => t.id !== task.id)
    }));
    newData.openShifts = newData.openShifts.filter(t => t.id !== task.id);
    
    // Add task to new location
    if (targetWorkerId === 'open') {
      newData.openShifts.push(task);
    } else {
      const targetWorker = newData.workers.find(w => w.id === targetWorkerId);
      if (targetWorker) {
        targetWorker.tasks.push(task);
      }
    }
    
    setScheduleData(newData);
  };

  const handleTaskSave = (updatedTask) => {
    const newData = { ...scheduleData };
    
    // Update task in workers
    newData.workers = newData.workers.map(worker => ({
      ...worker,
      tasks: worker.tasks.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      )
    }));
    
    // Update task in open shifts
    newData.openShifts = newData.openShifts.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    
    setScheduleData(newData);
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
        {/* Header with proper margin */}
        <div className="mt-20 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
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
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Schedule Board</h1>
                <p className="text-lg text-gray-600">Manage employee schedules and task assignments</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Total Workers</div>
                <div className="text-3xl font-bold text-gray-900">
                  {scheduleData.workers.length}
                </div>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Assigned Tasks</div>
                <div className="text-3xl font-bold text-gray-900">
                  {totalTasks}
                </div>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Open Shifts</div>
                <div className="text-3xl font-bold text-gray-900">
                  {scheduleData.openShifts.length}
                </div>
              </div>
              <Plus className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Utilization</div>
                <div className="text-3xl font-bold text-gray-900">
                  {utilization}%
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Schedule Board Header */}
        <div className="bg-white rounded-t-xl border border-gray-200 p-6 mb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Daily Schedule</h2>
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
            <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              8:00 AM - 10:00 PM Schedule
            </div>
          </div>
        </div>

        {/* Schedule Board - Extended timeline */}
        <div className="border-x border-b border-gray-200 rounded-b-xl mb-8">
          <ScheduleBoard
            data={scheduleData}
            startHour={8}
            endHour={22} // Extended to 10 PM
            onScheduleUpdate={handleScheduleUpdate}
            onTaskClick={handleTaskClick}
            onTaskMove={handleTaskMove}
          />
        </div>

        {/* Task Modal */}
        <TaskModal 
          task={selectedTask}
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onSave={handleTaskSave}
        />

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">How to Use the Schedule Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Drag & Drop:</span> Drag task blocks between workers to reassign them. Tasks can be moved to any worker or back to open shifts.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Click to Edit:</span> Click on any task block to view and edit detailed information including time and priority.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Extended Hours:</span> Schedule now supports 8 AM to 10 PM timeline for full day coverage.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Real-time Updates:</span> All changes are reflected immediately in the utilization statistics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBoardPage;