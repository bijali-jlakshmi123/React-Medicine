import React from 'react';
import './HowItWorksSection.css';

// Define the content for the four steps
const steps = [
    {
        number: 1,
        title: "Explore & Order",
        description: "Discover our tests – SIBO, Lactose Intolerance, Fructose Intolerance, and Helicobacter Pylori. Place an online order, and your kit will be delivered to your doorstep."
    },
    {
        number: 2,
        title: "Sample Collection",
        description: "Follow the user-friendly instructions in your kit to effortlessly collect samples at home. Our advanced technology ensures unparalleled accuracy in results."
    },
    {
        number: 3,
        title: "Evaluation",
        description: "Safely return samples to us. Samples undergo meticulous analysis using state-of-the-art technology. Results are carefully evaluated by our expert team."
    },
    {
        number: 4,
        title: "Results",
        description: "Receive your comprehensive health results securely via email. Opt for an expert consultation with our Gut Physiologist for further insights and guidance if required."
    },
];

export default function HowItWorksSection() {
    return (
        <section className="how-it-works-section">
            <div className="how-it-works-container">
                <h2 className="how-it-works-title">How It Works – At-Home Testing Made Simple</h2>
                <p className="how-it-works-subtitle">
                    We make getting to the root of your gut symptoms quick and hassle-free.
                </p>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number-container">
                                <span className="step-number">{step.number}</span>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}