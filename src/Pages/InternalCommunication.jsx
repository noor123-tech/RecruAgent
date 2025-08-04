import React, { useState } from 'react';
import { ArrowLeft, Plus, Bell, Search, Hash, Users, Send, Paperclip, Smile, Phone, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternalCommunication = () => {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = [
    { id: 'general', name: 'general', description: 'General company discussions', unread: 3 },
    { id: 'operations', name: 'operations', description: 'Equipment maintenance', unread: 0 },
    { id: 'sales', name: 'sales', description: 'Q1 targets looking...', unread: 1 },
    { id: 'announcements', name: 'announcements', description: 'New policy updates', unread: 2 }
  ];

  const onlineUsers = [
    { id: 1, name: 'Alice Johnson', role: 'Manager', avatar: 'https://i.pravatar.cc/150?img=1', status: 'online' },
    { id: 2, name: 'Bob Smith', role: 'Developer', avatar: 'https://i.pravatar.cc/150?img=2', status: 'online' },
    { id: 3, name: 'David Wilson', role: 'Analyst', avatar: 'https://i.pravatar.cc/150?img=3', status: 'online' }
  ];

  const messages = [
    {
      id: 1,
      user: 'Alice Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      time: '10:31 PM',
      message: "Good morning everyone! Don't forget about the team meeting at 2 PM today."
    },
    {
      id: 2,
      user: 'Bob Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      time: '10:32 PM',
      message: "Thanks for the reminder! I'll have the project updates ready."
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mt-20 mb-8 ">
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
                <h1 className="text-4xl font-bold text-gray-900">Internal Communication</h1>
                <p className="text-gray-600 mt-1">Stay connected with built-in messaging and team announcements</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Channel</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-80 border-r border-gray-200 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search channels..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Channels */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">CHANNELS</h3>
                  <div className="space-y-1">
                    {channels.map((channel) => (
                      <div
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel.id)}
                        className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                          selectedChannel === channel.id ? 'bg-orange-100 text-orange-900' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Hash className="h-4 w-4" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium truncate">{channel.name}</span>
                            {channel.unread > 0 && (
                              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                {channel.unread}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 truncate">{channel.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Online Users */}
                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">ONLINE (3)</h3>
                  <div className="space-y-2">
                    {onlineUsers.map((user) => (
                      <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <div className="relative">
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Hash className="h-5 w-5 text-gray-400" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{selectedChannel}</h2>
                      <p className="text-sm text-gray-500">General company discussions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Users className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex items-start space-x-3">
                    <img 
                      src={msg.avatar} 
                      alt={msg.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">{msg.user}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-gray-700">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message #general"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-20"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <button type="button" className="text-gray-400 hover:text-gray-600">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <button type="button" className="text-gray-400 hover:text-gray-600">
                        <Smile className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalCommunication;