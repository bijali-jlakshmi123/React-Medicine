import React from 'react';
import './InClinicConsult.css';

const InClinicConsult = () => {
  return (
    <div className="in-clinic-consult-container">
      
      {/* --- Header Section (From Screenshot 1) --- */}
      <header className="consult-header">
        <h2>Visit Our London Clinic for<br />**In - Person Consultation & Testing**</h2>
        <p>If you'd prefer to consult a Neuro-Gastroenterologist in person or complete your diagnostic test at our clinic – we've got you covered.</p>
      </header>

      {/* --- Main Content Section (Split Columns) --- */}
      <main className="consult-content-body">
        
        {/* --- Left Column: CTA/Branding Section --- */}
        <div className="cta-section">
          {/* Section from Screenshot 1 */}
          <div className="cta-text-content">
            <h3>Take control of your **Gut Health** with **reliable breath tests**</h3>
            <div className="fastest-result">
              <div className="time-indicator">
                <span className="time-number">36</span>
                <span className="time-unit">HOURS</span>
              </div>
              <p className="fastest-tag">FASTEST TEST RESULT IN UK</p>
            </div>
          </div>
          
          {/* Image Placeholder from Screenshot 1 */}
          <div className="cta-image-placeholder">
            {/* The image is split across the boundary of the two screenshots */}
          </div>

          {/* New Branding/Logo Section (From Screenshot 2) */}
          <div className="gut-insights-brand">
            <div className="logo-container">
                {/* Placeholder for the Gut Insights Logo/Icon */}
                <div className="logo-icon">
                    {/* The green wave icon */}
                    <div className="wave top"></div> 
                    <div className="wave bottom"></div>
                </div>
                <div className="logo-text">
                    <span className="logo-title">Gut</span>
                    <span className="logo-title-bold">Insights</span>
                </div>
            </div>
            <p className="logo-tagline">Fast, accurate, non-invasive gut health testing</p>
            {/* Wavy border/divider line */}
            <div className="wavy-divider"></div>
          </div>
        </div>

        {/* --- Right Column: Clinic Offerings --- */}
        <div className="offerings-section">
          <h3>What We Offer In-Clinic:</h3>
          
          <ul className="offerings-list">
            {/* Offerings from Screenshot 1 */}
            <li className="offering-item">
              <div className="icon">✓</div> 
              <div className="text-content">
                <h4>Oesophageal Manometry</h4>
                <p>Diagnose oesophageal motility disorders with precision.</p>
              </div>
            </li>
            <li className="offering-item">
              <div className="icon">✓</div>
              <div className="text-content">
                <h4>24-hour Reflux Test</h4>
                <p>Monitors acid reflux levels over 24 hours to identify GERD and related conditions.</p>
              </div>
            </li>
            <li className="offering-item">
              <div className="icon">✓</div>
              <div className="text-content">
                <h4>Supragastric Belching Diagnosis</h4>
                <p>Evaluates abnormal belching patterns to identify functional disorders.</p>
              </div>
            </li>

            {/* New Offerings from Screenshot 2 */}
            <li className="offering-item">
              <div className="icon">✓</div>
              <div className="text-content">
                <h4>High-resolution Manometry</h4>
                <p>Provides detailed mapping of oesophageal muscle activity for accurate diagnosis.</p>
              </div>
            </li>
            <li className="offering-item">
              <div className="icon">✓</div>
              <div className="text-content">
                <h4>24-hour pH-Impedance</h4>
                <p>Tracks both acid and non-acid reflux for a complete reflux assessment.</p>
              </div>
            </li>
            <li className="offering-item">
              <div className="icon">✓</div>
              <div className="text-content">
                <h4>In-Clinic Breath Tests</h4>
                <p>For those who prefer on-site testing under expert supervision.</p>
              </div>
            </li>
          </ul>

          {/* --- Final CTA Section (From Screenshot 2) --- */}
          <div className="final-cta">
            <p className="cta-question">**Questions on your mind?** Or want to book right away? Speak with us now.</p>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </main>

      {/* Optional: Navigation Bar from the top of Screenshot 2 */}
      
      
    </div>
  );
};

export default InClinicConsult;