'use client';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt } from 'react-icons/fa';

export default function PensionPlanning() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaMoneyBillWave />,
      text: 'Individual Pension Plans',
      description: 'Tailored pension plans designed to meet your personal retirement goals and ensure financial security in your later years.',
    },
    {
      icon: <FaChartLine />,
      text: 'Company Pension Plans',
      description: 'Comprehensive pension solutions for businesses to provide their employees with secure and beneficial retirement options.',
    },
    {
      icon: <FaFileAlt />,
      text: 'Retirement Income Planning',
      description: 'Strategic planning to manage your retirement income, ensuring a steady and reliable financial future.',
    },
    {
      icon: <FaMoneyBillWave />,
      text: 'Investment Strategy for Pensions',
      description: 'Expert advice on investment strategies to grow your pension fund and maximize returns over time.',
    },
    {
      icon: <FaChartLine />,
      text: 'Pension Transfer Advice',
      description: 'Guidance on transferring your pension to ensure you make the most of your retirement savings.',
    },
  ];

  return (
    <main className="pension-planning">
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Pension Planning</h1>
          <p>Establishing a pension plan doesn’t have to be complicated. Our specialists are here to assist you with your retirement planning needs, offering personalized solutions to secure your financial future.</p>
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
        .pension-planning {
          font-family: 'Roboto', sans-serif;
          color: #333;
          line-height: 1.6;
          padding: 0 2rem;
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
        }
        .card h3 {
          color: #007bff;
          margin-bottom: 0.5rem;
        }
        .card p {
          color: #555;
          margin-top: 0;
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
