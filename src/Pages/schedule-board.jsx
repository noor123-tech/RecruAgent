import React, { useState } from 'react';
import { ArrowLeft, Download, Plus, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const mockScheduleData = {
  date: new Date().toISOString().split('T')[0],
  workers: [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Operations',
      avatar: 'https://i.pravatar.cc/150?img=1',
      tasks: [
        { id: '101', name: 'Setup Equipment', startTime: '08:00', endTime: '09:30', priority: 'Medium' },
        { id: '102', name: 'Team Meeting', startTime: '10:00', endTime: '11:00', priority: 'High' }
      ]
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Sales',
      avatar: 'https://i.pravatar.cc/150?img=2',
      tasks: [
        { id: '201', name: 'Client Call', startTime: '09:00', endTime: '10:00', priority: 'High' }
      ]
    }
  ],
  openShifts: [
    { id: '301', name: 'Inventory Count', startTime: '10:30', endTime: '12:00', priority: 'Medium' }
  ]
};

const ScheduleBoard = ({ data, startHour, endHour, onScheduleUpdate }) => {
  // Implement your schedule board UI and logic here
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Schedule board implementation */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Worker</th>
              {Array.from({ length: endHour - startHour + 1 }).map((_, i) => (
                <th key={i} className="px-4 py-2 text-center">
                  {startHour + i}:00
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.workers.map(worker => (
              <tr key={worker.id}>
                <td className="px-4 py-2 border-t">
                  <div className="flex items-center">
                    <img src={worker.avatar} alt={worker.name} className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <div className="font-medium">{worker.name}</div>
                      <div className="text-sm text-gray-500">{worker.role}</div>
                    </div>
                  </div>
                </td>
                {Array.from({ length: endHour - startHour + 1 }).map((_, i) => (
                  <td key={i} className="px-4 py-2 border-t">
                    {/* Render tasks for this time slot */}
                    {worker.tasks
                      .filter(task => {
                        const taskHour = parseInt(task.startTime.split(':')[0]);
                        return taskHour === startHour + i;
                      })
                      .map(task => (
                        <div key={task.id} className="bg-blue-100 rounded p-1 mb-1 text-xs">
                          {task.name}
                        </div>
                      ))}
                  </td>
                ))}
              </tr>
            ))}
            {/* Open shifts row */}
            <tr>
              <td className="px-4 py-2 border-t font-medium">Open Shifts</td>
              {Array.from({ length: endHour - startHour + 1 }).map((_, i) => (
                <td key={i} className="px-4 py-2 border-t">
                  {data.openShifts
                    .filter(task => {
                      const taskHour = parseInt(task.startTime.split(':')[0]);
                      return taskHour === startHour + i;
                    })
                    .map(task => (
                      <div key={task.id} className="bg-gray-100 rounded p-1 mb-1 text-xs">
                        {task.name}
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ScheduleBoardPage = () => {
  const [scheduleData, setScheduleData] = useState(mockScheduleData);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
            <div className="h-6 border-l border-gray-300 hidden md:block" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Schedule Board</h1>
              <p className="text-gray-600">Manage employee schedules and task assignments</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={exportSchedule}
              className="flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </button>
            <button className="flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-sm font-medium text-gray-500">Total Workers</div>
            <div className="text-xl font-bold text-gray-900 mt-1">
              {scheduleData.workers.length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-sm font-medium text-gray-500">Assigned Tasks</div>
            <div className="text-xl font-bold text-gray-900 mt-1">
              {scheduleData.workers.reduce((total, worker) => total + worker.tasks.length, 0)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-sm font-medium text-gray-500">Open Shifts</div>
            <div className="text-xl font-bold text-gray-900 mt-1">
              {scheduleData.openShifts.length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-sm font-medium text-gray-500">Utilization</div>
            <div className="text-xl font-bold text-gray-900 mt-1">
        <div className="text-xl font-bold text-gray-900 mt-1">
  {Math.round(
    (scheduleData.workers.reduce((total, worker) => total + worker.tasks.length, 0) / 
    (scheduleData.workers.reduce((total, worker) => total + worker.tasks.length, 0) + 
    scheduleData.openShifts.length)) * 100
  )}%
</div>
            </div>
          </div>
        </div>

        {/* Schedule Board */}
        <ScheduleBoard
          data={scheduleData}
          startHour={8}
          endHour={17}
          onScheduleUpdate={handleScheduleUpdate}
        />

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
            <div className="flex items-start">
              <span className="font-medium mr-1">Drag & Drop:</span>
              Click and drag task blocks to reassign them between workers or move them to open shifts.
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-1">Task Details:</span>
              Click on any task block to view detailed information including description and priority.
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-1">Time Grid:</span>
              Tasks are positioned based on their start and end times across the horizontal timeline.
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-1">Open Shifts:</span>
              Unassigned tasks appear in the "Open Shifts\" row at the bottom of the schedule.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBoardPage;