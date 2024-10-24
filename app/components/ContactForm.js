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
        div {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input, textarea {
          margin: 0.5rem 0;
          padding: 0.8rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }
        textarea {
          resize: vertical;
        }
        button {
          padding: 0.7rem;
          background-color: #002147;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #004080;
        }
        p {
          text-align: center;
          color: green;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
