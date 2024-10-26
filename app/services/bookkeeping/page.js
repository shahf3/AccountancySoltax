"use client";

import React from 'react';
import { FaCalculator, FaChartLine, FaClock, FaCloudUploadAlt, FaShieldAlt } from 'react-icons/fa';

export default function Bookkeeping() {
    const benefits = [
        { icon: <FaCalculator />, text: 'Accurate financial records', description: 'Ensure your books are always up-to-date and error-free, providing a clear picture of your financial position.' },
        { icon: <FaChartLine />, text: 'Improved financial insights', description: 'Gain valuable insights into your business performance with detailed financial reports and analysis.' },
        { icon: <FaClock />, text: 'Time-saving for business owners', description: 'Focus on running your business while we handle the time-consuming task of maintaining your financial records.' },
        { icon: <FaCloudUploadAlt />, text: 'Cloud-based solutions', description: 'Access your financial data anytime, anywhere with our secure cloud-based bookkeeping systems.' },
        { icon: <FaShieldAlt />, text: 'Compliance with regulations', description: 'Stay compliant with Irish tax laws and accounting standards, avoiding penalties and legal issues.' },
    ];

    return (
        <main className="bookkeeping-service">
            <section className="hero">
                <div className="overlay"></div>
                <div className="content">
                    <h1>Professional Bookkeeping Services</h1>
                    <p>Accurate and efficient financial record-keeping tailored for Irish businesses</p>
                </div>
            </section>

            <section className="description">
                <div className="content">
                    <h2>Comprehensive Bookkeeping Support</h2>
                    <p>
                        At Soltax, we offer professional bookkeeping services designed to meet the unique needs of Irish businesses. Our experienced team ensures your financial records are accurate, up-to-date, and compliant with Irish accounting standards and tax regulations.
                    </p>
                    <p>
                        We handle all aspects of your day-to-day financial transactions, including:
                    </p>
                    <ul>
                        <li>Recording income and expenses</li>
                        <li>Bank reconciliations</li>
                        <li>Accounts payable and receivable management</li>
                        <li>Payroll processing</li>
                        <li>VAT return preparation</li>
                        <li>Monthly financial reporting</li>
                    </ul>
                    <p>
                        By outsourcing your bookkeeping to us, you free up valuable time to focus on growing your business while having peace of mind that your finances are in expert hands.
                    </p>
                </div>
            </section>

            <section className="benefits">
                <div className="content">
                    <h2>Benefits of Our Bookkeeping Services</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <div className="icon">{benefit.icon}</div>
                                <h3>{benefit.text}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bookkeeping-service {
                    font-family: 'Arial', sans-serif;
                    color: #333;
                    line-height: 1.6;
                }
                .hero {
                    background-image: url('/images/Logo.jpg');
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
                .description ul {
                    list-style-type: disc;
                    margin-left: 20px;
                    margin-bottom: 1rem;
                }
                .benefit-item h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    color: #0066cc;
                }
                .benefit-item p {
                    font-size: 0.9rem;
                    color: #555;
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
                    .content {
                        padding: 1.5rem;
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
                    .benefit-item h3 {
                        font-size: 1.1rem;
                    }
                    .benefit-item p {
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero h1 {
                        font-size: 2rem;
                    }
                    .hero p {
                        font-size: 1rem;
                    }
                    h2 {
                        font-size: 1.5rem;
                    }
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                    .benefit-item {
                        padding: 1rem;
                    }
                    .icon {
                        font-size: 1.8rem;
                    }
                    .benefit-item h3 {
                        font-size: 1rem;
                    }
                    .benefit-item p {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </main>
    );
}
