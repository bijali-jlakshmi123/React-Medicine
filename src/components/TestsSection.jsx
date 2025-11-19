import React from 'react';
import './TestsSection.css';

export default function TestsSection() {
  return (
    <section className="services-section">
      
      {/* Three Card Layout based on Screenshot (108).jpg */}
      <div className="service-cards-container">
        
        {/* Card 1: Consultation (Pink/Reddish Tint) */}
        <div className="service-card card-consultation">
          <h3>Consultation</h3>
          <p>Connect with GI & Neuro-Gastro Experts.</p>
          <button className="card-btn primary-btn-dark">Book a Consultation</button>
        </div>

        {/* Card 2: At-Home Tests (Green Tint) */}
        <div className="service-card card-tests">
          <h3>At-Home Tests</h3>
          <p>Accurate, Easy-to-Use At-Home Gut Tests</p>
          <button className="card-btn secondary-btn-dark">Explore Tests</button>
        </div>
        
        {/* Card 3: In-Clinic Services (Blue/Purple Tint) */}
        <div className="service-card card-clinic">
          <h3>In-Clinic Services</h3>
          <p>Advanced Diagnostics by Specialists</p>
          <button className="card-btn primary-btn-dark">View Services</button>
        </div>

      </div>
    </section>
  );
}