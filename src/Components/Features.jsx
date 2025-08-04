import React, { useEffect, useRef, useState } from "react";
import {
  Zap, Calendar, Users, Clock,
  MessageSquare, Settings, Bolt, DollarSign
} from "lucide-react";

import ScheduleBoard from "../assets/ScheduleBoard.jpeg";
import HRmanagement from "../assets/HR management.jpeg";
import TimeTracking from "../assets/TimeTracking.jpeg";
import internalCommunications from "../assets/internalcommunications.png";
import employeescheduling from "../assets/employeescheduling.png";
import Dailyoperation from "../assets/DailyOperations.jpeg";
import payrollentries from "../assets/payrollentries.jpeg";
import AI from "../assets/AIHRrecruitment.jpeg";

const features = [
  {
    title: "Employee Scheduling",
    description: "Create perfect schedules in seconds with drag-and-drop ease and automatic shift assignments.",
    icon: <Calendar size={20} />,
    image: ScheduleBoard
  },
  {
    title: "Time Tracking",
    description: "Effortless clock-ins using worker location and geofence.",
    icon: <Clock size={20} />,
    image: TimeTracking
  },
  {
    title: "Daily Operations",
    description: "Digitize your workflows with mobile checklists, job forms, and task tracking that workers actually use.",
    icon: <Bolt size={20} />,
    image: Dailyoperation
  },
  {
    title: "Internal Communication",
    description: "Streamline team communication with priority-based routing and sentiment analysis.",
    icon: <MessageSquare size={20} />,
    image: internalCommunications
  },
  {
    title: "Payroll",
    description: "Ensure tax compliance, generate payslips, and track costs accurately with automation.",
    icon: <DollarSign size={20} />,
    image: payrollentries
  },
  {
    title: "HR Management",
    description: "Manage onboarding, compliance, and employee data in one place.",
    icon: <Users size={20} />,
    image: HRmanagement
  },
  {
    title: "AI-Powered Recruitment",
    description: "Smart hiring with automated sourcing, screening, and scoring.",
    icon: <Zap size={20} />,
    image: AI
  },
  {
    title: "Automated Workforce Scheduling",
    description: "AI-based shift optimization based on skills, laws, and availability.",
    icon: <Settings size={20} />,
    image: employeescheduling
  }
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
        Streamline your workforce management
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 relative">
        {/* Accordion List */}
        <div className="w-full md:w-1/2 relative">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`px-6 py-5 cursor-pointer transition-all duration-300 border-b border-gray-200 ${
                  i === activeIndex
                    ? "bg-white border-l-4 border-orange-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center gap-3 font-medium ${
                      i === activeIndex ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {feature.icon}
                    {feature.title}
                  </div>
                  <span
                    className={`text-2xl font-semibold transition-transform duration-200 ${
                      i === activeIndex ? "text-orange-600" : "text-gray-600"
                    }`}
                  >
                    {i === activeIndex ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    i === activeIndex ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full md:w-[90%] min-h-[420px] aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-700 bg-white">
            <img
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
