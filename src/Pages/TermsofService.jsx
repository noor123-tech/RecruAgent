import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const TermsOfService = () => {
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
            RecruAgent Terms of Service
          </h1>

          <section className="mb-6 text-lg leading-relaxed space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Platform Usage</h2>
              <p>
                By accessing RecruAgent's AI-powered recruitment platform, you agree to use our services solely for lawful hiring purposes. Prohibited activities include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Scraping or reverse-engineering our AI models</li>
                <li>Posting discriminatory job requirements</li>
                <li>Misrepresenting candidate information</li>
                <li>Bypassing our fair hiring algorithms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">2. AI-Assisted Hiring</h2>
              <p>
                Our platform provides AI-generated candidate rankings and insights, but final hiring decisions remain your responsibility. RecruAgent:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Does not guarantee hiring outcomes</li>
                <li>May retain candidate data to improve matching algorithms</li>
                <li>Provides explainability features for AI decisions upon request</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">3. Payments & Refunds</h2>
              <p>
                <strong>All subscription fees are non-refundable.</strong> Services are billed monthly/annually in advance. Additional fees may apply for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>High-volume candidate processing</li>
                <li>Custom AI model training</li>
                <li>Priority support services</li>
              </ul>
              <p className="mt-2">
                A <strong>5% digital service tax</strong> applies to all transactions where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">4. Data Ownership</h2>
              <p>
                You retain ownership of your job postings and candidate data. By using our services, you grant RecruAgent:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>A license to process data for service delivery</li>
                <li>Permission to use anonymized data for AI improvement</li>
                <li>The right to display your logo as a client (opt-out available)</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">5. Service Limitations</h2>
              <p>
                RecruAgent is not liable for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Hiring decisions made using our platform</li>
                <li>Candidate misrepresentation or fraud</li>
                <li>Internet connectivity issues during AI-assisted interviews</li>
                <li>Third-party integrations (e.g., ATS systems)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">6. Modifications</h2>
              <p>
                We may update these terms with 30 days' notice. Continued use after changes constitutes acceptance. Major updates will be communicated via:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email to account administrators</li>
                <li>In-platform notifications</li>
                <li>Updated documentation</li>
              </ul>
            </div>

            <div className="text-center border-t pt-6 mt-4">
              <p className="text-gray-600">
                For disputes or questions, contact our legal team at <strong>legal@recruagent.com</strong>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Effective: {new Date().toLocaleDateString()} | v3.2
              </p>
            </div>
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

export default TermsOfService;