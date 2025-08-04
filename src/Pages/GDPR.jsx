import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const GDPRCompliance = () => {
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
            GDPR Compliance
          </h1>

          <section className="mb-6 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment</h2>
            <p className="mb-4">
              <strong>RecruAgent</strong> fully complies with the <strong>General Data Protection Regulation (GDPR)</strong>. This policy outlines how we protect your personal data in our AI-powered recruitment platform.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Data We Collect</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Account Information</h3>
              <p className="mb-4">
                Email, name, and contact details for account creation and service delivery.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Recruitment Data</h3>
              <p className="mb-4">
                Job postings, candidate profiles, and communications processed by our AI systems.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Technical Data</h3>
              <p className="mb-4">
                IP addresses, device information, and usage analytics for security and improvement.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-600 mb-2">Access & Portability</h3>
                <p>Request a copy of your data in machine-readable format.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-600 mb-2">Rectification</h3>
                <p>Update or correct inaccurate information.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-600 mb-2">Erasure</h3>
                <p>Request deletion of your personal data where applicable.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-600 mb-2">Restriction</h3>
                <p>Limit how we process your data in specific circumstances.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Data Protection Measures</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Encryption:</strong> All data transfers use TLS 1.2+ protocols</li>
              <li><strong>Access Controls:</strong> Strict role-based permissions</li>
              <li><strong>AI Data Handling:</strong> Anonymization where possible in our recruitment algorithms</li>
              <li><strong>Audits:</strong> Regular security assessments</li>
            </ul>

            <div className="p-6 bg-orange-100/30 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Third-Party Processors</h3>
              <p className="mb-2">
                We use GDPR-compliant vendors for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud hosting (AWS/GCP)</li>
                <li>Payment processing (Stripe)</li>
                <li>Analytics (Google Analytics with IP anonymization)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
            <p className="mb-4">
              To exercise your rights or for privacy questions:
            </p>
            <p className="font-medium text-orange-600">
              Data Protection Officer<br />
              <span className="text-gray-700">privacy@recruagent.com</span>
            </p>

            <p className="mt-8 text-base text-gray-500 text-center italic">
              Last updated: {new Date().toLocaleDateString()}
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

export default GDPRCompliance;