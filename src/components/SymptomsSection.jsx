import React from 'react';
import './SymptomsSection.css';

// List of common symptoms based on the screenshot
const symptoms = [
  "Bloating", "Constipation", "Diarrhoea", "Stomach pain", "Nausea", 
  "Fatigue", "Gas / belching", "Food intolerance", "Reflux or heartburn", 
  "Irregular Bowel Habits"
];

export default function SymptomsSection() {
  return (
    <section className="symptoms-section">
      
      <h2 className="symptoms-question">Do you face any of these symptoms?</h2>
      
      {/* Grid of symptom buttons/cards */}
      <div className="symptoms-grid">
        {symptoms.map((symptom, index) => (
          <div key={index} className="symptom-card">
            {symptom}
          </div>
        ))}
      </div>

      <div className="symptoms-footer">
        <h3 className="footer-title">If yes... it's time to take charge of your gut health.</h3>
        <p className="footer-text">
          Your symptoms might be more than just discomfort – they could be signals from your gut microbiome. 
          Early action leads to better outcomes.
        </p>
      </div>
      
    </section>
  );
}