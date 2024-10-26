'use client'; // Marking this component as a Client Component

import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt, FaUserTie, FaBalanceScale, FaHandshake, FaClipboardCheck } from 'react-icons/fa';
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

  const reasons = [
    {
      icon: <FaUserTie />,
      title: 'Expert Knowledge',
      text: 'Our team of tax professionals has in-depth knowledge of Irish CGT legislation and stays updated with the latest changes in tax laws.'
    },
    {
      icon: <FaChartLine />,
      title: 'Strategic Planning',
      text: 'We provide proactive CGT planning, helping you make informed decisions about asset disposals to optimize your tax position.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Tailored Solutions',
      text: 'We offer personalized CGT strategies that align with your financial goals and specific circumstances.'
    },
    {
      icon: <FaHandshake />,
      title: 'Clear Communication',
      text: 'We explain complex CGT concepts in simple terms, ensuring you understand your tax obligations and opportunities.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Compliance Assurance',
      text: 'Our meticulous approach ensures accurate CGT calculations and timely filings, keeping you compliant with Revenue requirements.'
    }
  ];

  return (
    <main className="standard-design">
      <section className="hero" style={{ backgroundImage: `url('/images/Logo.jpg')` }}>
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

      <section className="why-choose">
        <div className="content">
          <h2>Why Choose Soltax for Capital Gains Tax Services?</h2>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-item">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
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
          width: calc(25% - 1.125rem);
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
        
        @media (max-width: 1024px) {
          .card {
            width: calc(33.33% - 1rem);
          }
        }

        @media (max-width: 768px) {
          .standard-design {
            padding: 0 1rem;
          }
          .hero {
            height: 40vh;
          }
          .content h1 {
            font-size: 2.5rem;
          }
          .content p {
            font-size: 1rem;
          }
          .services h2 {
            font-size: 1.8rem;
          }
          .card-container {
            gap: 1rem;
          }
          .card {
            width: calc(50% - 0.5rem);
            padding: 1rem;
          }
          .card h3 {
            font-size: 1.2rem;
          }
          .card p {
            font-size: 0.9rem;
          }
          .icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 30vh;
          }
          .content h1 {
            font-size: 2rem;
          }
          .content p {
            font-size: 0.9rem;
          }
          .services h2 {
            font-size: 1.5rem;
          }
          .card-container {
            gap: 0.75rem;
          }
          .card {
            width: calc(50% - 0.375rem);
            padding: 0.75rem;
          }
          .card h3 {
            font-size: 1rem;
          }
          .card p {
            font-size: 0.8rem;
          }
          .icon {
            font-size: 1.5rem;
          }
        }

        .why-choose {
          background-color: #f8f9fa;
          padding: 4rem 0;
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .why-choose h2 {
          text-align: center;
          color: #0066cc;
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .reason-item {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .reason-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .reason-icon {
          font-size: 2.5rem;
          color: #0066cc;
          margin-bottom: 1rem;
        }

        .reason-item h3 {
          color: #0066cc;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .reason-item p {
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-choose h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
          .why-choose {
            padding: 3rem 0;
          }
          .reason-item {
            padding: 1rem;
          }
          .why-choose h2 {
            font-size: 1.8rem;
          }
          .reason-item h3 {
            font-size: 1.1rem;
          }
          .reason-item p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </main>
  );
}
