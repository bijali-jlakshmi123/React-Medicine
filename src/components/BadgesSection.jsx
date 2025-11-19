import React from 'react';
import './BadgesSection.css';

export default function BadgesSection() {
  const imageUrl = "https://www.gi-cognition.com/wp-content/uploads/2025/05/gi-cognition-trust-badges.png";
  const altText = "Accreditation badges including 36 Hour Test, NHS, CQC Registered, and UK Lab";

  return (
    <div className="badges-container">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="trust-badges-image" 
      />
    </div>
  );
}