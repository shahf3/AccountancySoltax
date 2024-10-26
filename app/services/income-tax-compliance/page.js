'use client';
import React from 'react';
import Image from 'next/image';
import { FaCalculator, FaFileAlt, FaChartLine, FaCalendarAlt, FaUserShield, FaUserTie, FaClipboardCheck, FaShieldAlt, FaComments } from 'react-icons/fa';

export default function IncomeTaxCompliance() {
  const services = [
    {
      icon: <FaCalculator />,
      title: 'Tax Return Preparation',
      description: 'Accurate preparation and filing of Form 11 for self-employed individuals and Form 12 for PAYE workers with additional income.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Revenue Registration',
      description: 'Assistance with registering for income tax, including setting up your Revenue Online Service (ROS) account.'
    },
    {
      icon: <FaChartLine />,
      title: 'Tax Liability Calculations',
      description: 'Detailed calculations of your income tax, USC, and PRSI liabilities, ensuring you only pay what you owe.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Preliminary Tax Planning',
      description: 'Strategic planning for preliminary tax payments to optimize your cash flow and avoid underpayment penalties.'
    },
    {
      icon: <FaUserShield />,
      title: 'Revenue Correspondence',
      description: 'Expert handling of any queries or correspondence from Revenue on your behalf.'
    }
  ];

  const reasons = [
    {
      icon: <FaUserTie />,
      title: 'Expert Knowledge',
      text: 'Our team has in-depth knowledge of Irish tax legislation and Revenue requirements.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Timely Submissions',
      text: 'We ensure timely preparation and submission of tax returns to avoid late filing surcharges.'
    },
    {
      icon: <FaChartLine />,
      title: 'Tax Optimization',
      text: 'We take a proactive approach to identifying tax-saving opportunities for our clients.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance Assurance',
      text: 'We keep you compliant with all relevant tax laws and regulations, minimizing audit risks.'
    },
    {
      icon: <FaComments />,
      title: 'Clear Communication',
      text: 'We provide clear explanations of your tax position and ongoing support throughout the year.'
    }
  ];

  return (
    <main className="income-tax-compliance">
      <section className="hero">
        <Image src="/images/Logo.jpg" alt="Income Tax Compliance" layout="fill" objectFit="cover" quality={100} />
        <div className="overlay"></div>
        <div className="content">
          <h1>Income Tax Compliance Services</h1>
          <p>Expert assistance in navigating Irish income tax regulations and ensuring full compliance with Revenue requirements.</p>
        </div>
      </section>

      <section className="description">
        <div className="content">
          <h2>Comprehensive Income Tax Support</h2>
          <p>
            At Soltax, we understand the complexities of the Irish income tax system. Our team of experienced tax professionals is dedicated to ensuring your full compliance with Revenue regulations while maximizing your tax efficiency.
          </p>
          <p>
            Whether you&apos;re a PAYE worker with additional income, a self-employed individual, or a company director, we provide tailored income tax services to meet your specific needs. Our goal is to simplify the tax process for you, ensuring accurate filings and helping you avoid potential penalties.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="content">
          <h2>Our Income Tax Compliance Services</h2>
          <div className="card-container">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="content">
          <h2>Why Choose Soltax for Income Tax Compliance?</h2>
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
        .income-tax-compliance {
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
          padding: 0 1rem;
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
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
        .description, .services, .additional-info {
          padding: 4rem 2rem;
        }
        .description {
          background-color: #f8f9fa;
        }
        h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #0066cc;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }
        .card {
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .card .icon {
          font-size: 2.5rem;
          color: #0066cc;
          margin-bottom: 1rem;
        }
        .card h3 {
          color: #0066cc;
          margin-bottom: 0.5rem;
        }
        .additional-info ul {
          list-style-type: disc;
          margin-left: 20px;
        }
        .additional-info li {
          margin-bottom: 0.5rem;
        }

        .final-cta {
          background-color: #0066cc;
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .final-cta .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .final-cta h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .final-cta p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .primary-btn, .secondary-btn {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .primary-btn {
          background-color: white;
          color: #0066cc;
          border: none;
        }

        .secondary-btn {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .primary-btn:hover, .secondary-btn:hover {
          transform: translateY(-3px);
        }

        .primary-btn:hover {
          background-color: #f0f0f0;
        }

        .secondary-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
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
            font-size: 1.8rem;
          }
          .description, .services, .additional-info {
            padding: 3rem 1rem;
          }
          .card-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
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
            font-size: 1rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          .description, .services, .additional-info {
            padding: 2rem 1rem;
          }
          .card-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .card {
            padding: 1rem;
          }
          .card h3 {
            font-size: 1rem;
          }
          .card p {
            font-size: 0.8rem;
          }
          .final-cta {
            padding: 3rem 0;
          }
          .final-cta h2 {
            font-size: 1.8rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .primary-btn, .secondary-btn {
            width: 100%;
            max-width: 250px;
            margin-bottom: 0.5rem;
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
        }

        .reason-item p {
          font-size: 0.9rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
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
        }
      `}</style>
    </main>
  );
}
