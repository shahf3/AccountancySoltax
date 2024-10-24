'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IncomeTaxCompliance() {
  return (
    <main className="income-tax-compliance">
      <section className="hero">
        <Image src="/images/soltax.jpg" alt="Income Tax Compliance" layout="fill" objectFit="cover" quality={100} />
        <div className="overlay"></div>
        <div className="content">
          <h1>Income Tax Compliance</h1>
          <p>Ensuring accurate and timely filing of your income tax returns.</p>
        </div>
      </section>

      <section className="services">
        <h2>Our Income Tax Compliance Services</h2>
        <div className="card-container">
          <div className="card">
            <h3>Tax Return Preparation</h3>
            <p>We help you prepare and file your tax returns accurately and on time.</p>
          </div>
          <div className="card">
            <h3>Registration with Revenue</h3>
            <p>Assistance with registering your business with the relevant tax authorities.</p>
          </div>
          <div className="card">
            <h3>Tax Liability Calculations</h3>
            <p>Calculate your tax liabilities to ensure compliance and avoid penalties.</p>
          </div>
          <div className="card">
            <h3>Rental Statements for Investment Properties</h3>
            <p>Prepare rental statements to manage your investment property taxes.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Ensure Your Tax Compliance?</h2>
        <p>Let&apos;s discuss how our income tax compliance services can benefit you.</p>
        <Link href="/contact" className="cta-button">Contact Us Today</Link>
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
          background-image: url('/images/soltax.jpeg');
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
        }
        .services {
          padding: 2rem;
          text-align: center;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .card {
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          width: 250px;
          text-align: left;
        }
        .card h3 {
          color: #007bff; /* Blue text color */
          margin-bottom: 0.5rem;
        }
        .cta {
          padding: 2rem;
          text-align: center;
        }
        .cta-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
      `}</style>
    </main>
  );
}
