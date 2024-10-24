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
                        statements to tax returns, we&apos;ve got your year-end needs covered.
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

            <section className="cta">
                <div className="content">
                    <h2>Ready to Streamline Your Year End Process?</h2>
                    <p>Let&apos;s discuss how our Year End services can benefit your business.</p>
                    <button className="cta-button">Contact Us Today</button>
                </div>
            </section>

            <style jsx>{`
                // ... (copy the entire style block from the VAT page)
                // Replace .vat-service with .year-end-service
            `}</style>
        </main>
    );
}
