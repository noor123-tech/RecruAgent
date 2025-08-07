import React, { useEffect, useState } from "react";
import { Bolt } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 mx-auto px-4 sm:px-6 transition-all duration-300 ease-in-out ${
        scrolled
          ? "max-w-3xl backdrop-blur-sm bg-white/80 shadow-lg rounded-full"
          : "max-w-6xl bg-white shadow-md rounded-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-2 transition-all duration-300 ease-in-out">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Bolt className="text-orange-500" size={20} />
          <span className="font-semibold text-lg text-gray-900">RecruAgent</span>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/demo")}
            className="hidden md:block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Book a Demo
          </button>

          {isLoggedIn ? (
            <Link
              to="/dashboard"
              className="border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="border border-gray-300 px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
