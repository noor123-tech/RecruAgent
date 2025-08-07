import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white grid place-items-center px-4 sm:px-6">
      {/* Base grey grid */}
      <div className="absolute inset-0 z-0 bg-white pattern-grid opacity-50" />

    {/* Soft orange radial glow */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 115, 22, 0.1) 0%, transparent 60%)`,
          transition: "background 0.1s ease-out",
        }}
      />

      {/* Glowing orange overlay on the same grid */}
     {/* Glowing clipped orange grid (on top of light grey grid) */}
       {/* Transparent glow grid overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none pattern-grid"
        style={{
          clipPath: `circle(80px at ${mousePos.x}px ${mousePos.y}px)`,
          filter:
            "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.3))",
          mixBlendMode: "screen",
          opacity: 1,
          transition: "clip-path 0.1s ease-out",
        }}
      />

      {/* Floating decorative circles */}
      <div className="absolute w-28 h-28 bg-orange-300/30 rounded-full top-10 left-10 animate-float" />
      <div className="absolute w-24 h-24 bg-orange-400/20 rounded-full bottom-20 right-20 animate-float-delay" />
      <div className="absolute w-32 h-32 bg-orange-300/25 rounded-full bottom-32 left-32 animate-float" />

      {/* Main content */}
      <motion.div
        className="z-20 text-center max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4 inline-block px-4 py-1 bg-gray-100 text-sm rounded-full text-gray-600 font-medium">
          Backed by <span className="text-orange-500 font-bold">University of Lahore</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          No more worrying about <br />
          <span className="text-orange-500">
            <Typewriter
              words={["Labor laws", "Compliance", "HR Tasks", "Payroll"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <motion.p
          className="mt-6 text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Stop hiring humans — start hiring our AI Agent.
        </motion.p>

        <div className="mt-8 flex justify-center">
          <motion.button
            className="relative px-6 py-3 rounded-xl bg-white border border-gray-200 font-medium text-gray-800 hover:bg-gray-50 transition shadow-sm hover:shadow-md min-w-[160px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(249, 115, 22, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Styles */}
      <style>{`
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
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px);
          background-size: 100px 100px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
