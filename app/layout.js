// app/layout.js
'use client';

import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Accountancy Website</title>
      </head>
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
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
        `}</style>
      </body>
    </html>
  );
}
