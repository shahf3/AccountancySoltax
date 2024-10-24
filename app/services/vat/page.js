'use client';
import React from 'react';
import { FaCheckCircle, FaClipboardList, FaChartLine, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function VAT() {
    const benefits = [
        { icon: <FaCheckCircle />, text: 'Accurate VAT calculations and submissions' },
        { icon: <FaClipboardList />, text: 'Compliance with HMRC regulations' },
        { icon: <FaChartLine />, text: 'Optimized cash flow management' },
        { icon: <FaClock />, text: 'Time-saving for business owners' },
        { icon: <FaShieldAlt />, text: 'Protection against VAT-related penalties' },
    ];

    return (
        <main className="vat-service">
            <section className="hero">
                <div className="overlay"></div>
                <div className="content">
                    <h1>VAT Services</h1>
                    <p>Expert VAT management to ensure compliance and optimize your business finances</p>
                </div>
            </section>

            <section className="description">
                <div className="content">
                    <h2>Comprehensive VAT Support</h2>
                    <p>
                        Our VAT services are designed to take the complexity out of VAT management, 
                        ensuring your business remains compliant while maximizing financial efficiency. 
                        From registration and returns to planning and problem-solving, we&apos;ve got you covered.
                    </p>
                </div>
            </section>

            <section className="benefits">
                <div className="content">
                    <h2>Benefits of Our VAT Services</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <div className="icon">{benefit.icon}</div>
                                <p>{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="content">
                    <h2>Ready to Optimize Your VAT Management?</h2>
                    <p>Let&apos;s discuss how our VAT services can benefit your business.</p>
                    <button className="cta-button">Contact Us Today</button>
                </div>
            </section>

            <style jsx>{`
                .vat-service {
                    font-family: 'Arial', sans-serif;
                    color: #333;
                    line-height: 1.6;
                }
                .hero {
                    background-image: url('/images/soltax.jpeg');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    padding: 6rem 2rem;
                    text-align: center;
                    position: relative;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .hero .content {
                    position: relative;
                    z-index: 1;
                }
                .hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .hero p {
                    font-size: 1.3rem;
                    max-width: 600px;
                    margin: 0 auto;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }
                .content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                .description, .benefits, .cta {
                    padding: 4rem 2rem;
                }
                .description {
                    background-color: #f8f9fa;
                }
                h2 {
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                    color: #0066cc;
                }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .benefit-item {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .benefit-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }
                .icon {
                    font-size: 2.5rem;
                    color: #0066cc;
                    margin-bottom: 1rem;
                }
                .cta {
                    background-color: #f0f8ff;
                    text-align: center;
                }
                .cta-button {
                    background-color: #0066cc;
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }
                .cta-button:hover {
                    background-color: #0052a3;
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .hero h1 {
                        font-size: 2.5rem;
                    }
                    .hero p {
                        font-size: 1.1rem;
                    }
                    h2 {
                        font-size: 1.75rem;
                    }
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </main>
    );
}
