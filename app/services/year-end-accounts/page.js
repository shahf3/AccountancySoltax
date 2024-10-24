'use client';
import React from 'react';
import { FaFileInvoice, FaCalculator, FaChartBar, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

export default function YearEndAccounts() {
  const services = [
    { icon: <FaFileInvoice />, text: 'Statutory Financial Statements' },
    { icon: <FaCalculator />, text: 'Accounts for Limited Partnerships' },
    { icon: <FaChartBar />, text: 'Annual Accounts for Charities' },
    { icon: <FaBuilding />, text: 'Filing with Companies Registration Office' },
  ];

  return (
    <main className="year-end-accounts">
      <section className="hero">
        <div className="content">
          <h1>Year-End Accounts Preparation</h1>
          <p>Ensuring accuracy and compliance with relevant standards to give you peace of mind.</p>
        </div>
      </section>

      <section className="services">
        <div className="content">
          <h2>Our Services Include</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="icon">{service.icon}</div>
                <h3>{service.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="description">
        <div className="content">
          <h2>Comprehensive Year-End Support</h2>
          <p>
            We help prepare your year-end accounts, ensuring accuracy and compliance with relevant standards to give you peace of mind.
            Our expert team handles all aspects of year-end accounting, allowing you to focus on running your business.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="content">
          <h2>Ready to Streamline Your Year-End Accounts?</h2>
          <p>Lets discuss how our year-end accounting services can benefit your business.</p>
          <button className="cta-button">Contact Us Today</button>
        </div>
      </section>

      <style jsx>{`
        .year-end-accounts {
          font-family: 'Arial', sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .hero {
          height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          background-image: url('/images/soltax.jpeg');
          background-size: cover;
          background-position: center;
        }
        .hero::before {
          content: '';
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
        }
        .hero p {
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        .services, .description, .cta {
          padding: 4rem 0;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-item {
          background-color: #f8f9fa;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-5px);
        }
        .icon {
          font-size: 3rem;
          color: #0066cc;
          margin-bottom: 1rem;
        }
        .service-item h3 {
          font-size: 1.2rem;
        }
        .description {
          background-color: #f8f9fa;
        }
        .cta {
          background-color: #0066cc;
          color: white;
          text-align: center;
        }
        .cta-button {
          background-color: white;
          color: #0066cc;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </main>
  );
}
