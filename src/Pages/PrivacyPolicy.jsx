import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="mt-10 relative w-full min-h-screen overflow-hidden bg-white px-6 py-20 sm:px-12">
        {/* Decorative floating circles */}
        <div className="absolute w-24 h-24 bg-orange-300/30 rounded-full top-10 left-10 animate-float" />
        <div className="absolute w-28 h-28 bg-orange-400/20 rounded-full bottom-20 right-20 animate-float-delay" />
        <div className="absolute w-32 h-32 bg-orange-300/25 rounded-full bottom-32 left-32 animate-float" />

        {/* Grid pattern background */}
        <div className="absolute inset-0 z-0 bg-white pattern-grid opacity-30" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold mb-6 text-orange-500 text-center">
            RecruAgent Privacy Policy
          </h1>

          <p className="mb-4 text-lg">
            This policy explains how RecruAgent's AI-powered recruitment platform collects, processes, 
            and protects your data in compliance with global privacy standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">1. Data Collection</h2>
          <p className="mb-4">
            We collect:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Recruitment Data:</strong> Job descriptions, candidate profiles, resumes, and interview records processed by our AI</li>
            <li><strong>Account Information:</strong> Name, email, company details for service delivery</li>
            <li><strong>Behavioral Data:</strong> Platform interactions to improve AI matching accuracy</li>
            <li><strong>Technical Data:</strong> IP addresses, device info for security monitoring</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">2. AI Data Processing</h2>
          <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
            <p>
              Our AI systems analyze recruitment data to:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Score and rank candidates based on job requirements</li>
              <li>Identify potential biases in hiring processes</li>
              <li>Generate predictive insights about candidate success</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              All AI processing follows strict ethical guidelines and data minimization principles.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">3. Data Protection</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Encryption:</strong> AES-256 for data at rest, TLS 1.3 for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based permissions with MFA enforcement</li>
            <li><strong>AI Security:</strong> Regular bias audits and model validation</li>
            <li><strong>Compliance:</strong> SOC 2 Type II certified infrastructure</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">4. Third-Party Sharing</h2>
          <p className="mb-4">
            Data may be shared with:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-orange-600">Essential Services</h3>
              <p className="text-sm">AWS (hosting), Stripe (payments)</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-orange-600">Analytics</h3>
              <p className="text-sm">Google Analytics (anonymized data only)</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            All vendors undergo rigorous GDPR compliance reviews.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">5. Your Rights</h2>
          <div className="mb-4 grid sm:grid-cols-2 gap-3">
            <div className="p-3 border-l-4 border-orange-400 bg-orange-50">
              <h3 className="font-bold">Access/Portability</h3>
              <p className="text-sm">Request your data in CSV/JSON format</p>
            </div>
            <div className="p-3 border-l-4 border-orange-400 bg-orange-50">
              <h3 className="font-bold">Correction</h3>
              <p className="text-sm">Update inaccurate candidate profiles</p>
            </div>
            <div className="p-3 border-l-4 border-orange-400 bg-orange-50">
              <h3 className="font-bold">Deletion</h3>
              <p className="text-sm">Remove data from active processing</p>
            </div>
            <div className="p-3 border-l-4 border-orange-400 bg-orange-50">
              <h3 className="font-bold">Objection</h3>
              <p className="text-sm">Opt-out of specific AI processing</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">6. Data Retention</h2>
          <p className="mb-4">
            Recruitment data is retained for <strong>24 months</strong> after last activity, then automatically anonymized. 
            Account data is deleted after 6 months of inactivity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-400">7. Changes & Contact</h2>
          <p className="mb-4">
            We'll notify you of material changes via email. For privacy requests:
          </p>
          <p className="mb-4 font-semibold text-orange-600">
            Data Protection Officer<br />
            privacy@recruagent.com<br />
            +1 (555) 123-4567
          </p>

          <p className="mt-8 text-sm text-gray-500 text-center">
            Effective: {new Date().toLocaleDateString()} | Version 2.1
          </p>
        </motion.div>

        {/* Animations and Pattern Styling */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(-10px); }
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
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;