import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const CookiePolicy = () => {
  return (
    <div className="mt-20 flex flex-col min-h-screen bg-white">
      <main className="relative w-full flex-grow overflow-y-auto px-6 py-10 sm:px-12">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="w-24 h-24 bg-orange-300/30 rounded-full absolute top-10 left-10 animate-float" />
          <div className="w-28 h-28 bg-orange-400/20 rounded-full absolute bottom-20 right-20 animate-float-delay" />
          <div className="absolute inset-0 bg-white pattern-grid opacity-30" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-orange-500 text-center">
            Cookie Policy
          </h1>

          <section className="mb-6 text-lg leading-relaxed">
            <p className="mb-4">
              This Cookie Policy explains how <strong>RecruAgent</strong> uses cookies and similar technologies to enhance your experience on our platform.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device that help:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remember your preferences (e.g., login sessions)</li>
              <li>Improve platform performance</li>
              <li>Analyze how users interact with our services</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Types of Cookies We Use</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Essential Cookies</h3>
              <p className="mb-4">
                Necessary for core functions like secure login and account management. These cannot be disabled.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Performance Cookies</h3>
              <p className="mb-4">
                Collect anonymous data about usage patterns to help us optimize the platform.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Functional Cookies</h3>
              <p className="mb-4">
                Remember your preferences (e.g., language, region settings).
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Managing Cookies</h2>
            <p className="mb-4">
              You can control cookies through:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Browser settings (Chrome, Firefox, Safari, etc.)</li>
              <li>Our cookie consent banner when you first visit</li>
            </ul>
            <p className="mb-4 text-orange-600">
              <strong>Note:</strong> Disabling cookies may affect platform functionality.
            </p>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Third-Party Cookies</h3>
              <p>
                We may use services like Google Analytics that place their own cookies. These are used solely for performance measurement.
              </p>
            </div>

            <p className="mt-8 text-base text-gray-500 text-center italic">
              Last updated: {new Date().toLocaleDateString()}. For questions, contact <strong>support@recruagent.com</strong>.
            </p>
          </section>
        </motion.div>
      </main>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 9s ease-in-out infinite 1s; }
        .pattern-grid {
          background-image:
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 100px 100px;
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;