import React from 'react';
import './WhyChooseUsSection.css';
import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
    {
        title: "Convenience",
        description: "Experience the convenience of having comprehensive digestive health assessments conducted at your preferred location. Skip hospital waits and travel for tests.",
        icon: FaCheckCircle
    },
    {
        title: "Expert Care",
        description: "Our highly trained specialists deliver top-quality care and advanced diagnostic assessments, staying true to their specific areas of expertise.",
        icon: FaCheckCircle
    },
    {
        title: "Advanced Technology",
        description: "We only use cutting-edge equipment to perform only validated factual tests. We do not promote use of science-fiction and research level tests.",
        icon: FaCheckCircle
    },
    {
        title: "CQC Regulated",
        description: "Committed to the highest standards of safety and quality. We caution our patients for using providers without CQC licence.",
        icon: FaCheckCircle
    },
    {
        title: "NHS Aligned",
        description: "Offering an enhanced level of service in line with NHS standards. That is why our results are easily used by your both private and NHS clinicians.",
        icon: FaCheckCircle
    },
    {
        title: "Cross Checking Report",
        description: "Each individual test is reviewed by at least two experts to ensure highest quality of outcome, eliminating human error.",
        icon: FaCheckCircle
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">Why Choose Us?</h2>
                <p className="why-choose-us-subtitle">
                    It can take up to a year for gastroenterology out patients to receive the treatment they urgently need. Patients can wait months just to get a test and receive a diagnosis, while hospitals incur costs for exceeding waiting time limits.
                </p>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item">
                            <div className="item-header">
                                <benefit.icon className="benefit-check-icon" />
                                <h3 className="benefit-title">{benefit.title}</h3>
                            </div>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}