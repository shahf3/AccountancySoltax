// app/contact/page.js
"use client";

import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section>
      <ContactForm />
      <style jsx>{`
        section {
          padding: 2rem;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
