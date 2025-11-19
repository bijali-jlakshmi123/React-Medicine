import React from 'react';
import './TestHeaderSection.css';
import { ShieldCheck, HeartHandshake, FileText, Globe } from 'lucide-react'; // Using lucide-react for generic badge icons

// Using simplified mock data for the large logos/badges shown in Screenshot (111).jpg
const badges = [
  { name: 'NHS Grade', url: 'https://placehold.co/120x80/006eff/ffffff?text=NHS\nGRADE', icon: ShieldCheck },
  { name: 'Regulated by CQC', url: 'https://placehold.co/120x80/7a0050/ffffff?text=CQC', icon: HeartHandshake },
  { name: 'Registered by ICO', url: 'https://placehold.co/120x80/002b66/ffffff?text=ICO', icon: FileText },
  { name: 'UKCA Certified', url: 'https://placehold.co/120x80/000000/ffffff?text=UK\nCA', icon: Globe },
];

export default function TestHeaderSection() {
  return (
    <section className="test-header-section">
      <h2 className="test-header-title">Explore Our At-Home Gut Health Breath Tests</h2>
      <p className="test-header-subtitle">
        Accurate, doctor-reviewed, and easy to use from the comfort of your home.
      </p>

      <div className="large-badges-container">
        {badges.map((badge, index) => (
          <div key={index} className="large-badge-item">
            {/* In a real app, you'd use SVGs for the actual logos. Placeholders used here. */}
            <img src={badge.url} alt={badge.name} />
          </div>
        ))}
      </div>
      
    </section>
  );
}