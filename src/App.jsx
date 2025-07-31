// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <div className="mt-24 px-4">
        {/* Your main content here */}
        <h1 className="text-2xl font-bold">Welcome to RecruAgent</h1>
      </div>
    </div>
  );
}

export default App;
