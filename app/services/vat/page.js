'use client';
import React, { useState } from 'react';
import { FaCalculator, FaClipboardList, FaChartLine, FaClock, FaShieldAlt, FaUserTie, FaComments } from 'react-icons/fa';

export default function VAT() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        { 
            icon: <FaCalculator />, 
            title: 'VAT Registration',
            text: 'We handle the entire VAT registration process with Revenue, ensuring your business is compliant from the start.'
        },
        { 
            icon: <FaClipboardList />, 
            title: 'VAT Return Preparation',
            text: 'Accurate and timely preparation of VAT returns, including RTD (Return of Trading Details) submissions.'
        },
        { 
            icon: <FaChartLine />, 
            title: 'VAT Planning',
            text: 'Strategic VAT planning to optimize your cash flow and ensure you are using the most beneficial VAT scheme for your business.'
        },
        { 
            icon: <FaClock />, 
            title: 'VAT Health Checks',
            text: 'Comprehensive reviews of your VAT processes to identify potential issues and ensure ongoing compliance.'
        },
        { 
            icon: <FaShieldAlt />, 
            title: 'VAT Audit Support',
            text: 'Expert assistance during Revenue VAT audits, helping you navigate the process with confidence.'
        },
    ];

    const reasons = [
        { icon: <FaUserTie />, text: 'Expertise in Irish VAT regulations and Revenue requirements' },
        { icon: <FaClock />, text: 'Timely submission of VAT returns to avoid penalties' },
        { icon: <FaChartLine />, text: 'Proactive approach to VAT planning and cash flow optimization' },
        { icon: <FaShieldAlt />, text: 'Support with VAT inspections and Revenue queries' },
        { icon: <FaComments />, text: 'Clear communication and jargon-free advice' },
    ];

    return (
        <main className="vat-service">
            <section className="hero">
                <div className="overlay"></div>
                <div className="content">
                    <h1>VAT Services for Irish Businesses</h1>
                    <p>Expert VAT management to ensure compliance and optimize your business finances</p>
                </div>
            </section>

            <section className="description">
                <div className="content">
                    <h2>Comprehensive VAT Support</h2>
                    <p>
                        At Soltax, we understand the complexities of Value Added Tax (VAT) for Irish businesses. Our expert team provides comprehensive VAT services to ensure your business remains compliant with Revenue regulations while maximizing financial efficiency.
                    </p>
                    <p>
                        Whether you&apos;re a small business owner or managing a large corporation, our VAT services are tailored to meet your specific needs. We stay up-to-date with the latest VAT legislation and Revenue guidelines to provide you with accurate and timely advice.
                    </p>
                </div>
            </section>

            <section className="services">
                <div className="content">
                    <h2>Our VAT Services Include:</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="service-item"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={hoveredIndex === index ? { transform: 'translateY(-10px)' } : {}}
                            >
                                <div className="icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="why-choose">
                <div className="content">
                    <h2>Why Choose Soltax for VAT Services?</h2>
                    <div className="reasons-container">
                        {reasons.map((reason, index) => (
                            <div key={index} className="reason-item">
                                <div className="reason-icon">{reason.icon}</div>
                                <p>{reason.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .vat-service {
                    font-family: 'Roboto', sans-serif;
                    color: #333;
                    line-height: 1.6;
                }
                .hero {
                    background-image: url('/images/Logo.jpg');
                    background-size: cover;
                    background-position: center;
                    color: white;
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
                .content {
                    position: relative;
                    z-index: 1;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                .hero .content {
                    max-width: 800px;
                }
                .hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .hero p {
                    font-size: 1.3rem;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }
                .description, .services, .additional-info {
                    padding: 4rem 0;
                }
                .description {
                    background-color: #f8f9fa;
                }
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    text-align: center;
                    color: #0066cc;
                }
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    justify-content: center;
                }
                .service-item {
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    text-align: left;
                    transition: all 0.3s ease;
                    border: 1px solid #e0e0e0;
                }
                .service-item:hover {
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }
                .icon {
                    font-size: 3rem;
                    color: #0066cc;
                    margin-bottom: 1rem;
                }
                .service-item h3 {
                    color: #0066cc;
                    margin-bottom: 1rem;
                    font-size: 1.4rem;
                }
                .service-item p {
                    color: #555;
                    margin-top: 0;
                    font-size: 1rem;
                }
                .additional-info {
                    background-color: #f8f9fa;
                }
                .additional-info .content {
                    text-align: left;
                }
                .additional-info h2 {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }
                .additional-info ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                .additional-info li {
                    margin-bottom: 1rem;
                    padding-left: 2rem;
                    position: relative;
                }
                .additional-info li:before {
                    content: '✓';
                    color: #0066cc;
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }

                .why-choose {
                    background-color: #f8f9fa;
                    padding: 4rem 0;
                }

                .reasons-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .reason-item {
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 1.5rem;
                    width: calc(33.333% - 2rem);
                    min-width: 250px;
                    display: flex;
                    align-items: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .reason-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }

                .reason-icon {
                    font-size: 2rem;
                    color: #0066cc;
                    margin-right: 1rem;
                    flex-shrink: 0;
                }

                .reason-item p {
                    margin: 0;
                    font-size: 1rem;
                    color: #333;
                }

                @media (max-width: 768px) {
                    .hero {
                        height: 50vh;
                    }
                    .hero h1 {
                        font-size: 2.5rem;
                    }
                    .hero p {
                        font-size: 1.1rem;
                    }
                    h2 {
                        font-size: 2rem;
                    }
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }
                    .service-item h3 {
                        font-size: 1.2rem;
                    }
                    .service-item p {
                        font-size: 0.9rem;
                    }
                    .icon {
                        font-size: 2.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero {
                        height: 40vh;
                    }
                    .hero h1 {
                        font-size: 2rem;
                    }
                    .hero p {
                        font-size: 0.9rem;
                    }
                    h2 {
                        font-size: 1.8rem;
                    }
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    .service-item {
                        padding: 1.5rem;
                    }
                    .service-item h3 {
                        font-size: 1.1rem;
                    }
                    .service-item p {
                        font-size: 0.8rem;
                    }
                    .icon {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </main>
    );
}
