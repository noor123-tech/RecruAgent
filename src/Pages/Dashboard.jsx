import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  Calendar,
  DollarSign,
  MessageSquare,
  Settings,
  Users,
  Zap,
  Bolt,
} from "lucide-react";

const stats = [
  {
    label: "Total Employees",
    value: 142,
    change: "+12% from last month",
    icon: <Users className="text-orange-500" />,
  },
  {
    label: "Hours This Week",
    value: 1248,
    change: "+5% from last month",
    icon: <Clock className="text-orange-500" />,
  },
  {
    label: "Pending Tasks",
    value: 23,
    change: "-8% from last month",
    icon: <Settings className="text-orange-500" />,
  },
  {
    label: "Monthly Payroll",
    value: "$89,420",
    change: "+3% from last month",
    icon: <DollarSign className="text-orange-500" />,
  },
];

const modules = [
  {
    label: "Employee Scheduling",
    description: "Manage shifts, schedules, and resource allocation",
    icon: Calendar,
    link: "/employee-scheduling",
  },
  {
    label: "Schedule Board",
    description: "Visual timeline view with drag & drop scheduling",
    icon: Calendar,
    link: "/schedule-board",
  },
  {
    label: "Time Tracking",
    description: "Monitor attendance and working hours",
    icon: Clock,
    link: "/time-tracking",
  },
  {
    label: "Daily Operations",
    description: "Track daily tasks and operational workflows",
    icon: Zap,
    link: "/daily-operations",
  },
  {
    label: "Internal Communication",
    description: "Team messaging and collaboration tools",
    icon: MessageSquare,
    link: "/internal-communication",
  },
  {
    label: "Payroll Management",
    description: "Process salaries and manage compensation",
    icon: DollarSign,
    link: "/payroll",
  },
  {
    label: "HR Management",
    description: "Employee records and human resources",
    icon: Users,
    link: "/hr",
  },
  {
    label: "AI HR Recruitment",
    description: "AI-powered recruitment and hiring workflow",
    icon: Bolt,
    link: "/ai-recruitment",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-20 py-12 px-6 bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="mb-8 text-gray-600">
          Welcome back! Here's what's happening with your business.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 rounded-xl">{stat.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {stat.label}
                  </h2>
                  <p className="text-2xl font-bold text-black">{stat.value}</p>
                  <p className="text-sm text-orange-500">{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Modules - Now full width */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Business Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => navigate(module.link)}
                className="cursor-pointer p-5 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all hover:border-orange-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <module.icon className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {module.label}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;