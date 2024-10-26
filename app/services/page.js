"use client";

import React from 'react';
import Link from 'next/link';
import { FaBook, FaFileInvoice, FaCalculator, FaMoneyBillWave, FaBriefcase, FaClipboardList } from 'react-icons/fa';

export default function Services() {
    const services = [
        { title: 'Bookkeeping Services', link: '/services/bookkeeping', icon: <FaBook /> },
        { title: 'VAT Services', link: '/services/vat', icon: <FaFileInvoice /> },
        { title: 'Year-End Accounts Preparation', link: '/services/year-end-accounts', icon: <FaCalculator /> },
        { title: 'Income Tax Compliance', link: '/services/income-tax-compliance', icon: <FaMoneyBillWave /> },
        { title: 'Tax Planning', link: '/services/tax-planning', icon: <FaBriefcase /> },
        { title: 'Pension Planning', link: '/services/pension-planning', icon: <FaClipboardList /> },
        { title: 'Capital Gains Tax', link: '/services/capital-gains-tax', icon: <FaCalculator /> },
    ];

    return (
        <div className="services-container">
            <section className="services-section">
                <div className="overlay" />
                <div className="content">
                    <h1 className="title">Our Services</h1>
                    <p className="paragraph">
                        Explore our range of services designed to support your financial and accounting needs.
                    </p>
                    <div className="service-container">
                        {services.map((service, index) => (
                            <Link href={service.link} key={index} style={{ textDecoration: 'none' }}>
                                <div className="service-item">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <span className="service-title">
                                        {service.title}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <style jsx>{`
                .services-section {
                    padding: 4rem 2rem;
                    position: relative;
                    background-image: url("/images/soltax.jpeg");
                    background-size: cover;
                    background-position: center;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    animation: fadeIn 1s forwards;
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 1;
                }

                .content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    max-width: 1200px;
                    transform: translateY(20px);
                    animation: slideUp 0.5s forwards;
                }

                @keyframes slideUp {
                    to {
                        transform: translateY(0);
                    }
                }

                .title {
                    font-size: 3rem;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    text-align: center;
                    opacity: 0;
                    animation: fadeIn 1s 0.5s forwards;
                }

                .paragraph {
                    font-size: 1.2rem;
                    color: #ffffff;
                    margin-bottom: 3rem;
                    text-align: center;
                    opacity: 0;
                    animation: fadeIn 1s 0.7s forwards;
                }

                .service-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .service-item {
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 8px;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    opacity: 0;
                    animation: fadeIn 1s 0.9s forwards;
                }

                .service-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .service-icon {
                    font-size: 3rem;
                    color: #3498db;
                    margin-bottom: 1rem;
                }

                .service-title {
                    font-size: 1.2rem;
                    color: #333;
                    font-weight: bold;
                }

                .contact-section {
                    padding: 4rem 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f8f9fa;
                    opacity: 0;
                    animation: fadeIn 1s 1.1s forwards;
                }

                .contact-card {
                    background: #ffffff;
                    border-radius: 15px;
                    padding: 3rem;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                    text-align: center;
                    max-width: 600px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
                }

                .cta-button {
                    display: inline-block;
                    margin-top: 1.5rem;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, #6dd5ed, #2193b0);
                    color: #fff;
                    border-radius: 25px;
                    text-decoration: none;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: background 0.3s ease, transform 0.3s ease;
                    cursor: pointer;
                }

                .cta-button:hover {
                    background: linear-gradient(135deg, #2193b0, #6dd5ed);
                    transform: translateY(-3px);
                }

                @media (max-width: 1024px) {
                    .service-container {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .services-container {
                        padding: 2rem 1rem;
                    }

                    .title {
                        font-size: 2.5rem;
                    }

                    .paragraph {
                        font-size: 1rem;
                    }

                    .service-container {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }

                    .service-item {
                        padding: 1.5rem;
                    }

                    .service-icon {
                        font-size: 2.5rem;
                    }

                    .service-title {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 480px) {
                    .title {
                        font-size: 2rem;
                    }

                    .paragraph {
                        font-size: 0.9rem;
                    }

                    .service-container {
                        gap: 1rem;
                    }

                    .service-item {
                        padding: 1rem;
                    }

                    .service-icon {
                        font-size: 2rem;
                    }

                    .service-title {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}
