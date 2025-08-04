// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Feature from "./Components/Features";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ScheduleBoard from "./Pages/schedule-board";
import TimeTracking from "./Pages/TimeTracking";
import DailyOperations from "./Pages/DailyOperations";
import InternalCommunication from "./Pages/InternalCommunication";
import PayrollManagement from "./Pages/PayrollManagement";
import HRManagement from "./Pages/HRManagement";
import AIRecruitment from "./Pages/AIRecruitment";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsofService";
import CookiePolicy from "./Pages/CookiePolicy";
import GDPRCompliance from "./Pages/GDPR";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar
          isLoggedIn={isLoggedIn}
          onSignInClick={() => window.location.href = "/login"}
          onDashboardClick={() => window.location.href = "/dashboard"}
          onHomeClick={() => window.location.href = "/"}
        />

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Testimonials />
              <Feature />
              <Footer />
            </>
          } />
             <Route path="/schedule-board" element={
            <>
               <ScheduleBoard/>
            </>
          } />
          
          <Route path="/time-tracking" element={<TimeTracking />} />
          <Route path="/daily-operations" element={<DailyOperations />} />
          <Route path="/internal-communication" element={<InternalCommunication />} />
          <Route path="/payroll" element={<PayrollManagement />} />
          <Route path="/hr" element={<HRManagement />} />
                    <Route path="/contact" element={<ContactUs/>} />

          <Route path="/ai-recruitment" element={<AIRecruitment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/GDPR" element={<GDPRCompliance />} />
            <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login
                onLoginSuccess={() => {
                  setIsLoggedIn(true);
                }}
              />
            )
          } />

          <Route path="/dashboard" element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;