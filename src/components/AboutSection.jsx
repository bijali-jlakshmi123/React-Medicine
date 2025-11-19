import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
    // Placeholder image URL for Dr. Jafari
    const drJafariImageUrl = "https://placehold.co/400x450/0056b3/ffffff?text=Dr.+Jafar+Jafari";

    return (
        <section className="about-section">
            <div className="about-container">
                {/* Left Column: Image and Profile Details */}
                <div className="dr-jafari-profile">
                    <img
                        src={drJafariImageUrl}
                        alt="Dr. Jafar Jafari, Founder and Clinical Director"
                        className="dr-jafari-image"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x450/cccccc/333333?text=Dr.+Jafar+Jafari" }}
                    />
                    
                    <div className="dr-jafari-info">
                        <h2>Dr Jafar Jafari</h2>
                        <h3 className="dr-jafari-title">Founder & Clinical Director</h3>
                        <p className="dr-jafari-bio">
                            Consultant in Gastroenterology & Neurogastroenterology, Clinical Scientist
                            MD in General Medicine, PhD in Neurogastroenterology
                        </p>
                        <button className="read-more-dr-btn">
                            Read more about Dr Jafar Jafari
                        </button>
                    </div>
                </div>

                {/* Right Column: About Text and General CTA */}
                <div className="gi-cognition-text">
                    <h2 className="gi-cognition-title">About GI Cognition</h2>
                    
                    <p>
                        At GI Cognition, we believe that gut health is the foundation of overall well-being.
                        Our journey began with a simple but powerful vision: to make advanced gut
                        diagnostics accessible, accurate, and patient-centered.
                    </p>
                    
                    <p>
                        Led by **Dr. Jafar Jafari**, a renowned **Neuro-Gastroenterologist** with decades
                        of clinical expertise, we bring together medical excellence and compassionate care.
                        Dr. Jafari's pioneering work in motility disorders and functional gut conditions has
                        helped reshape the way patients are diagnosed and treated across the UK.
                    </p>
                    
                    <p>
                        From at-home breath tests to in-clinic diagnostics and specialist consultations, GI
                        Cognition delivers a seamless, clinically trusted service. Results are provided within
                        **36 hours** and are always supported by expert medical guidance.
                    </p>
                    
                    <p>
                        Whether you're struggling with bloating, IBS, or complex gut-brain interactions, our
                        dedicated team is here to listen, understand, and provide solutions that truly make
                        a difference.
                    </p>
                    
                    <button className="read-more-general-btn">
                        Read more about us
                    </button>
                </div>
            </div>
        </section>
    );
}