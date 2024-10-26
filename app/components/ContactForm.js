'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validateEmail = (email) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); 
    setErrors({ name: '', email: '' }); 
    let hasErrors = false;

    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Name is required.' }));
      hasErrors = true;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Valid email is required.' }));
      hasErrors = true;
    }

    if (hasErrors) return; 

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatusMessage('Message sent successfully!'); 
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage(result.message || 'Failed to send message.'); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          placeholder="Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} 

        <input
          type="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <textarea
          value={formData.message}
          placeholder="Your Message"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
        />
        <button type="submit">Send Message</button>
        <p>{statusMessage}</p>
      </form>

      <style jsx>{`
        .contact-form {
          background-color: #ffffff;
          padding: 4rem;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 2rem;
        }
        label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #333;
          font-size: 1.2rem;
        }
        input,
        textarea {
          width: 100%;
          padding: 1.25rem;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1.2rem;
          transition: border-color 0.3s ease;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #0070f3;
        }
        textarea {
          min-height: 200px;
          resize: vertical;
        }
        button {
          background-color: #0070f3;
          color: #ffffff;
          border: none;
          padding: 1.25rem 2.5rem;
          font-size: 1.3rem;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0051a2;
        }
        @media (max-width: 1200px) {
          .contact-form {
            padding: 3rem;
            max-width: 800px;
          }
          label {
            font-size: 1.1rem;
          }
          input,
          textarea,
          button {
            font-size: 1.1rem;
            padding: 1.1rem;
          }
        }
        @media (max-width: 768px) {
          .contact-form {
            padding: 2.5rem;
            max-width: 600px;
          }
          label {
            font-size: 1rem;
          }
          input,
          textarea,
          button {
            font-size: 1rem;
            padding: 1rem;
          }
        }
        @media (max-width: 480px) {
          .contact-form {
            padding: 2rem;
          }
          label {
            font-size: 0.9rem;
          }
          input,
          textarea,
          button {
            font-size: 0.9rem;
            padding: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
