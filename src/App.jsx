// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Feature from "./Components/Features";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Testimonials/>
      <Feature/>
            <Footer/>
    </div>
  );
}

export default App;
