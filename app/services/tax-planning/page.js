'use client';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileAlt, FaHandshake, FaClipboardCheck, FaGlobe, FaUserClock } from 'react-icons/fa';
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

  const reasons = [
    {
      icon: <FaChartLine />,
      title: 'Strategic Approach',
      text: 'We take a proactive, strategic approach to minimize your tax liabilities and maximize your wealth.'
    },
    {
      icon: <FaHandshake />,
      title: 'Personalized Service',
      text: 'Your dedicated tax planner will work closely with you to align your tax strategy with your financial goals.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Compliance Assurance',
      text: 'We ensure you take advantage of every legitimate tax-saving opportunity while maintaining full compliance.'
    },
    {
      icon: <FaGlobe />,
      title: 'Holistic Planning',
      text: 'Our comprehensive solutions consider the interplay between different tax areas to optimize your overall position.'
    },
    {
      icon: <FaUserClock />,
      title: 'Ongoing Support',
      text: 'We provide continuous support and regularly review your tax strategy as laws and circumstances change.'
    }
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

      <section className="why-choose">
        <div className="content">
          <h2>Why Choose Soltax for Your Tax Planning Needs?</h2>
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
        .tax-planning {
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
        .content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 1.2rem;
        }
        .services {
          text-align: center;
          padding: 2rem;
        }
        .services h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          justify-content: center;
        }
        .card {
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card h3 {
          color: #007bff;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        .card p {
          color: #555;
          margin-top: 0.5rem;
          font-size: 1rem;
        }
        .icon {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero {
            height: 50vh;
          }
          .content h1 {
            font-size: 2.5rem;
          }
          .content p {
            font-size: 1rem;
          }
          .services h2 {
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
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 40vh;
          }
          .content h1 {
            font-size: 2rem;
          }
          .content p {
            font-size: 0.9rem;
          }
          .services {
            padding: 1.5rem;
          }
          .services h2 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
          .card-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .card {
            padding: 1rem;
          }
          .card h3 {
            font-size: 1.1rem;
          }
          .card p {
            font-size: 0.8rem;
          }
          .icon {
            font-size: 1.8rem;
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
