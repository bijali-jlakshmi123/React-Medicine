import React from 'react';
import './MicrobiomeSection.css';

export default function MicrobiomeSection() {
  return (
    <section className="microbiome-section">
      <h2 className="section-title">Your Gut Microbiome Is At The Core Of Your Well-Being</h2>
      <p className="section-subtitle">
        The gut-brain axis is the complex link between your digestive system and central nervous system.
        Our tests provide the data needed to nourish your gut and improve your overall health and mood.
      </p>

      {/* Stats/Facts section, potentially visible in the next scroll */}
      <div className="stats-container">
        <div className="stat-item">
          <p className="stat-number">70%</p>
          <p className="stat-label">of your immune system is in your gut</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">95%</p>
          <p className="stat-label">of serotonin (the happiness hormone) is made in the gut</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">80%</p>
          <p className="stat-label">Your Mood & Energy Levels Impacted</p>
        </div>
      </div>
      
      <div className="info-block">
        <h3 className="info-title">Why Gut Health Matters</h3>
        <p>
          An imbalanced microbiome can lead to chronic inflammation, poor nutrient absorption, and debilitating digestive symptoms. By accurately identifying imbalances like SIBO, Candida, or dysbiosis, our experts can guide you to a targeted, science-backed treatment plan.         </p>
        <button className="read-more-btn">Read Our Latest Research →</button>
      </div>

    </section>
  );
}