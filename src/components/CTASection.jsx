import React from 'react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Take the First Step Now</h2>
      
      <div className="cta-cards-container">
        
        {/* Card 1: Speak with a Specialist (Left Side) */}
        <div className="cta-card card-specialist">
          <h3 className="card-heading">Speak with a gut health specialist</h3>
          <p className="card-description">
            Get personalized advice tailored to your unique symptoms and history.
          </p>
          <button className="cta-btn specialist-btn">Book a Consultation</button>
        </div>

        {/* Card 2: Order Your Test (Right Side) */}
        <div className="cta-card card-tests-order">
          <h3 className="card-heading">Know what you need? Order your test online</h3>
          <p className="card-description">
            Browse our range of accurate, at-home diagnostic kits.
          </p>
          <button className="cta-btn test-btn">Explore Tests</button>
        </div>
        
      </div>
      
    </section>
  );
}