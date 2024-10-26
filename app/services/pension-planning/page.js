'use client';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt, FaUserTie, FaBuilding } from 'react-icons/fa';

export default function PensionPlanning() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaMoneyBillWave />,
      text: 'Personal Retirement Savings Accounts (PRSAs)',
      description: 'Tailored PRSA advice to help you save for retirement with flexibility and tax efficiency, suitable for employees, self-employed, and those without pension coverage.',
    },
    {
      icon: <FaChartLine />,
      text: 'Occupational Pension Schemes',
      description: 'Expert guidance on setting up and managing company pension schemes, ensuring compliance with Irish pension regulations and maximizing benefits for both employers and employees.',
    },
    {
      icon: <FaFileAlt />,
      text: 'Retirement Benefits Planning',
      description: 'Comprehensive planning for your retirement, including analysis of pension options, tax-free lump sum calculations, and Approved Retirement Fund (ARF) considerations.',
    },
    {
      icon: <FaUserTie />,
      text: 'Executive Pension Plans',
      description: 'Specialized pension solutions for company directors and key employees, optimizing tax relief and retirement benefits within Revenue limits.',
    },
    {
      icon: <FaBuilding />,
      text: 'Small Self-Administered Pension Schemes (SSAPs)',
      description: 'Bespoke pension arrangements for business owners and company directors, offering greater control over investment choices and potential for property investment.',
    },
  ];

  return (
    <main className="pension-planning">
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Pension Planning Services</h1>
          <p>Expert guidance to secure your financial future in retirement, tailored to Irish pension regulations and tax benefits.</p>
        </div>
      </section>

      <section className="description">
        <div className="content">
          <h2>Comprehensive Pension Planning Support</h2>
          <p>
            At Soltax, we understand the importance of planning for your retirement in the context of Ireland&apos;s pension landscape. Our expert team provides comprehensive pension planning services to help you make informed decisions about your financial future.
          </p>
          <p>
            We take into account the latest Irish pension regulations, tax relief opportunities, and your personal circumstances to create a pension strategy that works for you. Whether you&apos;re an employee, self-employed, or a company director, we have the expertise to guide you through the complexities of pension planning.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="content">
          <h2>Our Pension Planning Services Include:</h2>
          <div className="card-container">
            {services.map((service, index) => (
              <div
                key={index}
                className="card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={hoveredIndex === index ? { transform: 'translateY(-10px)' } : {}}
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.text}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="additional-info">
        <div className="content">
          <h2>Why Choose Soltax for Pension Planning?</h2>
          <ul>
            <li>In-depth knowledge of Irish pension legislation and Revenue requirements</li>
            <li>Tailored advice considering your unique financial situation and retirement goals</li>
            <li>Expertise in maximizing tax relief on pension contributions</li>
            <li>Regular reviews and adjustments to your pension strategy as needed</li>
            <li>Clear communication and explanation of complex pension concepts</li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .pension-planning {
          font-family: 'Roboto', sans-serif;
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
          background-image: url('/images/Logo.jpg');
          background-size: cover;
          background-position: center;
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
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          justify-content: center;
        }
        .card {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: left;
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0;
        }
        .card:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .card h3 {
          color: #0066cc;
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }
        .card p {
          color: #555;
          margin-top: 0;
          font-size: 1rem;
        }
        .icon {
          font-size: 3rem;
          color: #0066cc;
          margin-bottom: 1rem;
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
          .card-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .card h3 {
            font-size: 1.2rem;
          }
          .card p {
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
          .card-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .card {
            padding: 1.5rem;
          }
          .card h3 {
            font-size: 1.1rem;
          }
          .card p {
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
