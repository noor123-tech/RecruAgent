import React from "react";
import {
  Bolt, Zap, Clock, Users, Calendar,
  MessageSquare, Settings, DollarSign
} from "lucide-react";
import dashboard from "../assets/dashboard.jpeg";
import ScheduleBoard from "../assets/ScheduleBoard.jpeg";
import HRmanagement from "../assets/HR management.jpeg";
import TimeTracking from "../assets/TimeTracking.jpeg";
import internalCommunications from "../assets/internalCommunications.png";
import employeescheduling from "../assets/employeescheduling.png";
import Dailyoperation from "../assets/Dailyoperations.jpeg";
import payrollentries from "../assets/payrollentries.jpeg";

export default function Feature() {
  const features = [
    {
      title: "AI-Powered Recruitment",
      description: "Our next-gen recruitment engine streamlines hiring by sourcing, screening, and scoring applicants using powerful AI. Say goodbye to manual resume scanning and hello to quality hires made in half the time.",
      benefits: [
        "Automated candidate sourcing from 50+ platforms",
        "AI-driven resume screening with 98% accuracy",
        "Bias reduction through objective scoring",
        "Human-in-the-loop for final decisions"
      ],
      image: dashboard,
      icon: <Zap className="text-orange-500" size={24} />,
      highlight: true
    },
    {
      title: "Smart Scheduling Board",
      description: "Simplify workforce planning with a visual, drag-and-drop scheduling tool. Integrated labor compliance and predictive staffing ensure your business stays ahead of demand.",
      benefits: [
        "Reduces scheduling conflicts by 92%",
        "Automatically complies with labor regulations",
        "Mobile-friendly shift swapping",
        "Predicts staffing needs 2 weeks in advance"
      ],
      image: ScheduleBoard,
      icon: <Calendar className="text-orange-500" size={24} />
    },
    {
      title: "Complete HR Management",
      description: "Automate everything from employee onboarding to offboarding with our unified HR suite. With real-time compliance monitoring and data-rich dashboards, your team will operate smarter.",
      benefits: [
        "Automated onboarding workflows",
        "Real-time compliance monitoring",
        "Predictive attrition risk scoring",
        "Customizable policy templates"
      ],
      image: HRmanagement,
      icon: <Users className="text-orange-500" size={24} />
    },
    {
      title: "Precision Time Tracking",
      description: "Beyond clock-ins. Our intelligent system verifies work hours, detects anomalies, and integrates seamlessly into your payroll process for precision without the paperwork.",
      benefits: [
        "Anomaly detection with 96% accuracy",
        "Automated overtime calculations",
        "Mobile GPS verification (optional)",
        "Real-time labor cost analytics"
      ],
      image: TimeTracking,
      icon: <Clock className="text-orange-500" size={24} />
    },
    {
      title: "Intelligent Communications",
      description: "Ensure timely, relevant, and effective communication across your teams with AI-prioritized messaging, integrated sentiment analysis, and smart delivery scheduling.",
      benefits: [
        "Priority-based message routing",
        "Optimal delivery time suggestions",
        "Organization-wide sentiment analysis",
        "Multi-channel communication tracking"
      ],
      image: internalCommunications,
      icon: <MessageSquare className="text-orange-500" size={24} />
    },
    {
      title: "Automated Workforce Scheduling",
      description: "Eliminate manual shift planning with AI that considers skills, availability, labor law, and business demand — saving time and reducing scheduling errors.",
      benefits: [
        "Real-time demand forecasting",
        "Automated shift coverage optimization",
        "Multi-factor availability matching",
        "Reduced manager workload by 65%"
      ],
      image: employeescheduling,
      icon: <Settings className="text-orange-500" size={24} />
    },
    {
      title: "Operations Intelligence",
      description: "Harness the power of data with dashboards that track KPIs, flag issues, and guide improvements. Keep operations lean, fast, and insight-driven.",
      benefits: [
        "Automated KPI tracking",
        "Predictive maintenance alerts",
        "Process improvement suggestions",
        "Customizable executive dashboards"
      ],
      image: Dailyoperation,
      icon: <Bolt className="text-orange-500" size={24} />
    },
    {
      title: "Smart Payroll Processing",
      description: "Run payroll with confidence. Our system ensures tax compliance, payslips, and labor costs are accurate and accessible — all with 99.9% reliability.",
      benefits: [
        "99.9% payroll accuracy guarantee",
        "Automated tax compliance",
        "Self-service pay inquiries",
        "Real-time labor cost reporting"
      ],
      image: payrollentries,
      icon: <DollarSign className="text-orange-500" size={24} />
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-white  mt-30">
      <div className="absolute inset-0 z-0 bg-white pattern-grid opacity-30" />
      <div className="absolute w-28 h-28 bg-orange-300/30 rounded-full top-10 left-10 animate-float" />
      <div className="absolute w-24 h-24 bg-orange-400/20 rounded-full bottom-20 right-20 animate-float-delay" />
      <div className="absolute w-32 h-32 bg-orange-300/25 rounded-full bottom-32 left-32 animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Revolutionizing HR with AI Precision
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            The only platform delivering <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">99% AI automation</span> with essential <span className="font-bold text-gray-800">human oversight</span> for perfect results.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 gap-12 ${feature.highlight ? 'bg-orange-50 p-10 rounded-2xl' : ''}`}
          >
            <div className="w-full md:w-1/2 relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto rounded-xl shadow-lg object-cover border border-gray-200"
              />
              {feature.highlight && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Industry First Innovation
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-6">{feature.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg md:text-xl">{benefit}</span>
                  </div>
                ))}
              </div>

              {feature.highlight && (
                <div className="mt-6 bg-white p-6 rounded-lg border border-orange-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Our Unique AI Advantage</h4>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">99%</div>
                      <h5 className="font-medium text-gray-900">AI Automation</h5>
                      <p className="text-sm text-gray-600">Advanced algorithms handle the heavy lifting with superhuman speed and precision</p>
                    </div>
                    <div className="flex-1">
                      <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">1%</div>
                      <h5 className="font-medium text-gray-900">Human Insight</h5>
                      <p className="text-sm text-gray-600">Strategic oversight ensures cultural fit and handles exceptional cases</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mt-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl p-10 text-center text-white shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h3>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies leveraging our 99% AI-powered platform to reduce HR costs by 40% while improving employee satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-md">
              See Live Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Floating and Grid Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(-15px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 9s ease-in-out infinite 1s; }

        .pattern-grid {
          background-image:
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px);
          background-size: 100px 100px;
        }
      `}</style>
    </section>
  );
}
