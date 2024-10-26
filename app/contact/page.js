// app/contact/page.js
"use client";

import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="title">Get in Touch</h1>
        <p className="subtitle">We&apos;d love to hear from you. Send us a message!</p>
        <ContactForm />
      </div>
      <style jsx>{`
        .contact-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 80px);
          padding: 4rem 2rem;
          background-color: #f7f8fa;
        }
        .container {
          width: 100%;
          max-width: 1200px;
        }
        .title {
          font-size: 3rem;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 3rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 1.5rem;
          }
          .title {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        }
        @media (max-width: 480px) {
          .contact-section {
            padding: 2rem 1rem;
          }
          .title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
