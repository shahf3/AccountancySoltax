'use client'; // Marking this component as a Client Component

import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function CapitalGainsTax() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaChartLine />,
      text: 'Assessment of Potential CGT Liabilities',
      description: 'Evaluate your assets to determine potential capital gains tax liabilities and plan accordingly.',
    },
    {
      icon: <FaMoneyBillWave />,
      text: 'Strategies for Minimizing CGT',
      description: 'Implement effective strategies to reduce your capital gains tax burden legally and efficiently.',
    },
    {
      icon: <FaFileAlt />,
      text: 'Tax Planning for Property Sales',
      description: 'Plan your property sales to optimize tax outcomes and ensure compliance with tax regulations.',
    },
    {
      icon: <FaMoneyBillWave />,
      text: 'Handling CGT Returns and Filings',
      description: 'Expert assistance in preparing and filing your capital gains tax returns accurately and on time.',
    },
  ];

  return (
    <main className="standard-design">
      <section className="hero" style={{ backgroundImage: `url('/images/soltax.jpeg')` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Capital Gains Tax</h1>
          <p>Capital Gains Tax (CGT) is a tax on the profit made from selling or disposing of an asset. We offer comprehensive services to help you navigate the complexities of CGT.</p>
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
        .standard-design {
          font-family: 'Roboto', sans-serif;
          color: #333;
          line-height: 1.6;
          padding: 0 2rem;
          background-color: #f4f4f9;
        }
        .hero {
          height: 50vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          background-size: cover;
          background-position: center;
          margin-bottom: 2rem;
          border-radius: 10px;
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
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          width: 280px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card h3 {
          color: #007bff;
          margin-top: 0.5rem;
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
