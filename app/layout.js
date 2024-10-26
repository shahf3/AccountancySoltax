// app/layout.js
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Your Accountancy Website</title>
      </head>
      <body>
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="container">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        )}
        <style jsx global>{`
          html, body {
            height: 100%; /* Full height */
            margin: 0; /* Remove default margin */
          }
          .container {
            display: flex;
            flex-direction: column; /* Stack header, main, and footer vertically */
            min-height: 100vh; /* Full viewport height */
          }
          main {
            flex: 1; /* Allow the main content to grow */
            padding: 2rem; /* Padding for the main content */
            background-color: #f0f0f0; /* Light background */
          }
          body {
            font-family: Arial, sans-serif; /* Global font */
          }
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .loading-spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </body>
    </html>
  );
}
