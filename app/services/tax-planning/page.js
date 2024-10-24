'use client';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function TaxPlanning() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaMoneyBillWave />,
      text: 'Tax Optimization Strategies',
      description: 'Our team will help you identify and implement strategies to optimize your tax situation, ensuring you pay the least amount of tax legally possible.',
    },
    {
      icon: <FaChartLine />,
      text: 'Corporate Tax Planning',
      description: 'We provide expert advice on corporate tax planning to help your business minimize tax liabilities and maximize profitability.',
    },
    {
      icon: <FaFileAlt />,
      text: 'Personal Tax Planning',
      description: 'Our personal tax planning services are tailored to your individual needs, helping you manage your finances and plan for the future.',
    },
    // Add more services as needed
  ];

  return (
    <main className="tax-planning">
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Tax Planning</h1>
          <p>Our experts provide comprehensive tax planning services to help you minimize your tax liabilities and maximize your savings. Whether you are an individual or a corporation, we have the expertise to guide you through the complexities of tax planning.</p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services Include:</h2>
        <div className="card-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={hoveredIndex === index ? { transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' } : {}}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.text}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .tax-planning {
          font-family: 'Roboto', sans-serif;
          color: #333;
          line-height: 1.6;
          padding: 0 2rem;
          // Add or modify styles based on bookkeeping and capital gains pages
        }
        .hero {
          height: 50vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          background-image: url('/images/soltax.jpeg');
          background-size: cover;
          background-position: center;
          margin-bottom: 2rem;
          // Add or modify styles based on bookkeeping and capital gains pages
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
          max-width: 800px;
          padding: 1rem;
        }
        .services {
          text-align: center;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .card {
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          width: 280px;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          // Add or modify styles based on bookkeeping and capital gains pages
        }
        .card h3 {
          color: #007bff;
          margin-bottom: 0.5rem;
        }
        .card p {
          color: #555;
          margin-top: 0.5rem;
        }
        .icon {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </main>
  );
}
