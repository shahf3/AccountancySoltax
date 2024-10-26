'use client';
import React from 'react';
import { FaCalculator, FaFileAlt, FaChartBar, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function YearEnd() {
    const benefits = [
        { icon: <FaCalculator />, text: 'Accurate financial statements preparation' },
        { icon: <FaFileAlt />, text: 'Timely submission of annual accounts' },
        { icon: <FaChartBar />, text: 'Comprehensive financial analysis' },
        { icon: <FaClock />, text: 'Time-saving for business owners' },
        { icon: <FaShieldAlt />, text: 'Compliance with regulatory requirements' },
    ];

    return (
        <main className="year-end-service">
            <section className="hero">
                <div className="overlay"></div>
                <div className="content">
                    <h1>Year End Accounting Services</h1>
                    <p>Expert financial reporting and analysis to close your fiscal year with confidence</p>
                </div>
            </section>

            <section className="description">
                <div className="content">
                    <h2>Comprehensive Year End Support</h2>
                    <p>
                        Our Year End services ensure your financial records are accurate, compliant, 
                        and provide valuable insights for future planning. From preparing financial 
                        statements to tax returns, we've got your year-end needs covered.
                    </p>
                </div>
            </section>

            <section className="benefits">
                <div className="content">
                    <h2>Benefits of Our Year End Services</h2>
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

            <style jsx>{`
                .year-end-service {
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
                .description, .benefits {
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

                @media (max-width: 768px) {
                    .hero {
                        padding: 4rem 1rem;
                    }
                    .hero h1 {
                        font-size: 2.5rem;
                    }
                    .hero p {
                        font-size: 1.1rem;
                    }
                    h2 {
                        font-size: 1.8rem;
                    }
                    .description, .benefits {
                        padding: 3rem 1rem;
                    }
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }
                    .benefit-item {
                        padding: 1.2rem;
                    }
                    .icon {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero h1 {
                        font-size: 2rem;
                    }
                    .hero p {
                        font-size: 0.9rem;
                    }
                    h2 {
                        font-size: 1.5rem;
                    }
                    .description, .benefits {
                        padding: 2rem 1rem;
                    }
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    .benefit-item {
                        padding: 1rem;
                    }
                    .icon {
                        font-size: 1.8rem;
                        margin-bottom: 0.5rem;
                    }
                    .benefit-item p {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </main>
    );
}
