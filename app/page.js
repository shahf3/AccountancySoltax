'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GoogleReviews from '../components/GoogleReviews';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/services');
  };

  useEffect(() => {
    const section = document.querySelector('.home-section');
    section.classList.add('fade-in');
  }, []);

  const services = [
    'Tax Compliance and Consulting',
    'Bookkeeping and Financial Reporting',
    'Capital Gains Planning',
    'Pensions and Retirement Planning',
    'Tax Planning',
    'VAT Services',
    'Year-End Accounts',
  ];

  return (
    <>
      <section className="home-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="animate-title">Welcome to Soltax</h1>
          <p className="animate-text">
            Expert tax advice and accounting solutions for businesses and individuals across Ireland.
          </p>
          <button onClick={handleButtonClick} className="animate-button">
            Explore Our Services
          </button>
        </div>
      </section>

      <section className="services-section">
        <h2 className="animate-title">Our Services</h2>
        <p className="animate-text">Comprehensive financial solutions tailored to your needs</p>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item animate-service">
              <span className="service-icon">✓</span>
              <span className="service-name">{service}</span>
            </div>
          ))}
        </div>
      </section>

      <GoogleReviews placeId="ChIJ48uLBBoPZ0gRlcOAPrvUb1k" />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/images/soltax.jpeg');
          background-size: cover;
          background-position: center;
          position: relative;
          color: #ffffff;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          padding: 2rem;
        }

        .animate-title {
          opacity: 0;
          animation: slideUp 0.8s ease-out 0.5s forwards;
        }

        .animate-text {
          opacity: 0;
          animation: slideUp 0.8s ease-out 0.8s forwards;
        }

        .animate-button {
          opacity: 0;
          animation: scaleIn 0.8s ease-out 1.1s forwards;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        button {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2c3e50;
          background-color: #ffffff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        button:hover {
          background-color: #f8f9fa;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .services-section {
          background-color: #f8f9fa;
          padding: 5rem 2rem;
          text-align: center;
        }

        .services-section h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .services-section p {
          font-size: 1.2rem;
          color: #34495e;
          margin-bottom: 3rem;
        }

        .services-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-item {
          display: flex;
          align-items: center;
          background-color: #ffffff;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          opacity: 0;
          animation: scaleIn 0.6s ease-out forwards;
        }

        .service-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 1.2rem;
          color: #3498db;
          margin-right: 0.5rem;
        }

        .service-name {
          font-size: 1rem;
          color: #2c3e50;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1rem;
          }

          .services-list {
            flex-direction: column;
            align-items: center;
          }

          .service-item {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </>
  );
}
