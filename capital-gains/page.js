'use client';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt } from 'react-icons/fa';

export default function CapitalGains() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaMoneyBillWave />,
      text: 'Capital Gains Tax Planning',
      description: 'Expert strategies to minimize your capital gains tax liabilities and maximize your investment returns.',
    },
    {
      icon: <FaChartLine />,
      text: 'Investment Portfolio Analysis',
      description: 'Comprehensive analysis of your investment portfolio to identify opportunities for tax efficiency.',
    },
    {
      icon: <FaFileAlt />,
      text: 'Real Estate Capital Gains',
      description: 'Specialized advice on managing capital gains from real estate transactions to optimize your tax position.',
    },
    // Add more services as needed
  ];

  return (
    <main className="standard-design">
      <section className="hero" style={{ backgroundImage: `url('/images/capital-gains.jpeg')` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Capital Gains Planning</h1>
          <p>Our capital gains planning services are designed to help you navigate the complexities of capital gains tax, ensuring you retain more of your investment profits.</p>
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
          background-image: url('/images/capital-gains.jpeg');
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
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
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
