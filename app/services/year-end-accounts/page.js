'use client';
import React from 'react';
import { FaFileInvoice, FaCalculator, FaChartBar, FaBuilding, FaBalanceScale, FaChartLine, FaClock, FaUserTie, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function YearEndAccounts() {
  const services = [
    { 
      icon: <FaFileInvoice />, 
      title: 'Statutory Financial Statements',
      text: 'Preparation of compliant financial statements tailored to your business structure, ensuring accuracy and adherence to relevant accounting standards.'
    },
    { 
      icon: <FaCalculator />, 
      title: 'Accounts for Limited Partnerships',
      text: 'Specialized accounting services for limited partnerships, addressing the unique reporting requirements and tax considerations of this business structure.'
    },
    { 
      icon: <FaChartBar />, 
      title: 'Annual Accounts for Charities',
      text: 'Comprehensive accounting services for charitable organizations, ensuring compliance with charity-specific regulations and transparent financial reporting.'
    },
    { 
      icon: <FaBuilding />, 
      title: 'Filing with Companies Registration Office',
      text: 'Timely and accurate filing of your company accounts with the CRO, ensuring full compliance with Irish company law and avoiding late filing penalties.'
    },
  ];

  const reasons = [
    {
      icon: <FaBalanceScale />,
      title: 'Expertise',
      text: 'Our team of qualified accountants has extensive experience in preparing year-end accounts for various business structures.'
    },
    {
      icon: <FaChartLine />,
      title: 'Accuracy',
      text: 'We ensure your financial statements are precise and compliant with the latest accounting standards and regulations.'
    },
    {
      icon: <FaClock />,
      title: 'Timeliness',
      text: 'We meet all statutory deadlines, helping you avoid late filing penalties and maintain good standing with authorities.'
    },
    {
      icon: <FaUserTie />,
      title: 'Personalized Service',
      text: 'We tailor our approach to your specific business needs, providing insights that go beyond basic compliance.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Peace of Mind',
      text: 'With Soltax, you can rest assured that your year-end accounts are in capable hands, allowing you to focus on running your business.'
    }
  ];

  const comprehensiveServices = [
    {
      icon: <FaFileInvoice />,
      title: 'Financial Statement Preparation',
      description: 'We meticulously prepare your financial statements, ensuring they comply with all relevant accounting standards and provide a true and fair view of your company\'s financial position.'
    },
    {
      icon: <FaCalculator />,
      title: 'Tax Computation',
      description: 'Our experts calculate your tax liabilities accurately, taking into account all allowable deductions and reliefs to optimize your tax position.'
    },
    {
      icon: <FaChartBar />,
      title: 'Performance Analysis',
      description: 'We provide insightful analysis of your financial performance, helping you understand your company\'s strengths and areas for improvement.'
    },
    {
      icon: <FaBuilding />,
      title: 'Statutory Filing',
      description: 'We handle all necessary filings with the Companies Registration Office (CRO) and Revenue, ensuring full compliance with Irish company law.'
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      description: 'We work efficiently to deliver your year-end accounts well before statutory deadlines, giving you peace of mind and avoiding late filing penalties.'
    }
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
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="comprehensive-support">
        <div className="content">
          <h2>Comprehensive Year-End Support</h2>
          <p className="section-intro">Our expert team handles all aspects of year-end accounting, allowing you to focus on running your business:</p>
          <div className="services-grid">
            {comprehensiveServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="content">
          <h2>Why Choose Soltax for Your Year-End Accounts?</h2>
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
          background-image: url('/images/Logo.jpg');
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
          margin-bottom: 1rem;
        }
        .service-item p {
          font-size: 0.9rem;
          color: #666;
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

        .additional-info {
          background-color: #f8f9fa;
          padding: 4rem 0;
        }

        .info-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2rem;
        }

        .info-item {
          flex-basis: calc(33.333% - 1.33rem);
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .info-item h3 {
          color: #0066cc;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .info-item p {
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
        }

        .why-choose {
          background-color: #f0f8ff;
          padding: 4rem 0;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
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

        .comprehensive-support {
          background-color: #f8f9fa;
          padding: 4rem 0;
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .comprehensive-support h2 {
          text-align: center;
          color: #0066cc;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .section-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-item {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          font-size: 2.5rem;
          color: #0066cc;
          margin-bottom: 1rem;
        }

        .service-item h3 {
          color: #0066cc;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .service-item p {
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
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
          .content {
            padding: 3rem 1.5rem;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .service-item {
            padding: 1.5rem;
          }
          .icon {
            font-size: 2.5rem;
          }
          .service-item h3 {
            font-size: 1.1rem;
          }
          .service-item p {
            font-size: 0.8rem;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .comprehensive-support h2 {
            font-size: 2rem;
          }
          .section-intro {
            font-size: 1rem;
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
          .content {
            padding: 2rem 1rem;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .service-item {
            padding: 1rem;
          }
          .icon {
            font-size: 2rem;
          }
          .service-item h3 {
            font-size: 1rem;
          }
          .service-item p {
            font-size: 0.75rem;
          }
          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .comprehensive-support {
            padding: 3rem 0;
          }
          .service-item {
            padding: 1rem;
          }
          .comprehensive-support h2 {
            font-size: 1.8rem;
          }
          .section-intro {
            font-size: 0.9rem;
          }
          .service-item h3 {
            font-size: 1.1rem;
          }
          .service-item p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </main>
  );
}
