// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BadgesSection from "./components/BadgesSection";
import ExpertiseBanner from "./components/ExpertiseBanner";
import TestsSection from "./components/TestsSection";
import MicrobiomeSection from "./components/MicrobiomeSection";
import useScrollToTopOnArrow from "./components/useScrollToTopOnArrow";

import "./App.css";
import HeroImage from "./assets/hero-woman.png";
import SymptomsSection from "./components/SymptomsSection";
import CTASection from "./components/CTASection";
import FooterBanner from "./components/FooterBanner";
import TestHeaderSection from "./components/TestHeaderSection";
import ProductGrid from "./components/ProductGrid";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import AboutSection from "./components/AboutSection";
import InClinicConsult from "./components/InClinicConsult";
import Footer from "./components/Footer";

function App() {
  // activate the arrow-to-top listener hook
  useScrollToTopOnArrow();

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SymptomsSection" element={<SymptomsSection />} />
        <Route path="/TestHeaderSection" element={<TestHeaderSection />} />
        <Route path="/HowItWorksSection" element={<HowItWorksSection />} />
        <Route path="/AboutSection" element={<AboutSection />} />
        {/* Add other route paths as needed */}
      </Routes>
    </Router>
  );
}

/* Home component containing the main hero + page sections */
function Home() {
  return (
    <>
      {/* 2. Main Hero Section (YELLOW BACKGROUND CONTAINER - FLEX PARENT) */}
      <div className="hero-section">
        {/* LEFT SIDE: Content, Buttons, and BADGES (Grouped) */}
        <div className="hero-content-and-badges-wrapper">
          <div className="hero-content">
            <h1>Struggling with bloating, gas, IBS, diarrhoea, or constipation?</h1>
            <p>Chronic gut discomfort is common – but the right test can provide answers.</p>

            <ul className="info-list">
              <li>
                <strong>Find Clarity:</strong> Discover the cause with our simple at-home breath tests.
              </li>
              <li>
                <strong>Convenient At-Home Sample Collection:</strong> Collect your sample easily without leaving home.
              </li>
              <li>
                <strong>UK Lab Testing:</strong> Your sample is analysed in our UK laboratory.
              </li>
              <li>
                <strong>Expert Consultation Available:</strong> Get personalised advice from a neurogastroenterologist.
              </li>
            </ul>

            <div className="hero-actions">
              <button className="explore-btn">Explore Tests →</button>
              <button className="book-btn">Book a Consultation →</button>
            </div>
          </div>

          {/* BADGES PLACEMENT */}
          <BadgesSection />
        </div>

        {/* RIGHT SIDE: Hero Image */}
        <div className="hero-image-container">
          <img
            src={HeroImage}
            alt="Woman with stomach pain, representing gut discomfort"
            className="hero-image"
          />
        </div>
      </div>

      {/* Main Page Components - These will make the page scrollable */}
      <ExpertiseBanner />
      <TestsSection />
      <MicrobiomeSection />
      <SymptomsSection />
      <CTASection />
      <FooterBanner />
      <TestHeaderSection />
      <ProductGrid />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <AboutSection />
      <InClinicConsult />

      <Footer />

      {/* Indicator to show the feature works */}
      <button className="chat-widget">Send message</button>
    </>
  );
}

export default App;
