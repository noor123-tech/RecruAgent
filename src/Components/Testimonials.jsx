import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This is the first time our scheduler, time tracker, and team communication are all in one place. It's incredibly simple to use, and I can definitely see us sticking with it for years.",
      author: "Alex Johnson",
      role: "Product Manager at TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "The seamless integration of all our workflow tools has saved us countless hours every week. Our team's productivity has never been higher!",
      author: "Sam Wilson",
      role: "CTO at InnovateX",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "As a remote team, having everything in one platform has transformed how we collaborate. The intuitive interface makes onboarding new team members a breeze.",
      author: "Taylor Smith",
      role: "Team Lead at DigitalNomads",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Subtle grid background */}
      {/* <div className="absolute inset-0 z-0 pattern-grid opacity-10" /> */}
            <div className="absolute inset-0 z-0 bg-white pattern-grid opacity-30" />

      {/* Floating decorative elements */}
      <div className="absolute w-32 h-32 bg-orange-300/10 rounded-full top-16 left-16 animate-float" />
      <div className="absolute w-28 h-28 bg-orange-400/10 rounded-full bottom-24 right-24 animate-float-delay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-orange-500">Innovative</span> Teams
        </motion.h2>
        
        <div className="relative h-[400px] md:h-[350px] w-full max-w-4xl mx-auto">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg w-full max-w-3xl">
                <div className="text-6xl text-orange-400/30 font-serif mb-6 leading-none">"</div>
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-orange-500 text-sm font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots - improved */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
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
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;