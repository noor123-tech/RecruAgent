import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import FoundersImage from "../assets/Founders.jpeg";

const AboutUs = () => {
  return (
    <div className="mt-20 flex flex-col min-h-screen bg-white">
      <main className="relative w-full flex-grow px-6 py-12 sm:px-8 lg:px-12">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="w-24 h-24 bg-orange-300/30 rounded-full absolute top-10 left-10 animate-float" />
          <div className="w-28 h-28 bg-orange-400/20 rounded-full absolute bottom-20 right-20 animate-float-delay" />
          <div className="absolute inset-0 bg-white pattern-grid opacity-20" />
        </div>

        <motion.div 
          className="relative z-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Founders Image */}
            <motion.div 
              className="w-full lg:w-1/2 sticky top-8"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-orange-100">
                <img 
                  src={FoundersImage} 
                  alt="RecruAgent Founders" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold mb-4 text-orange-500">
                  About RecruAgent
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  We're revolutionizing recruitment through ethical AI and human expertise.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm border border-orange-100"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 2023 by HR technology veterans, RecruAgent was born from our frustration with biased and inefficient hiring processes. We combined our expertise in artificial intelligence and talent acquisition to build a better solution.
                  </p>
                  <p>
                    What started as an experiment in fair hiring algorithms has grown into a platform trusted by companies worldwide to build diverse, high-performing teams.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-orange-50 p-8 rounded-xl"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Eliminate hiring bias through transparent AI algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Reduce time-to-hire from weeks to days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Make quality hiring accessible to companies of all sizes</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm border border-orange-100"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Technology</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-orange-600">AI Matching Engine</h3>
                    <p>98% accuracy in candidate-job compatibility scoring</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-600">Bias Detection</h3>
                    <p>Identifies and eliminates 23 types of hiring bias in real-time</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-600">Predictive Analytics</h3>
                    <p>91% accuracy in forecasting candidate success and retention</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 7s ease-in-out infinite 1s; }
        .pattern-grid {
          background-image:
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;