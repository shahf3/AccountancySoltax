import React from 'react';

export default function StandardDesign({ children, title, description, backgroundImage }) {
  return (
    <main className="standard-design">
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      {children}
      <style jsx>{`
        .standard-design {
          font-family: 'Roboto', sans-serif;
          color: #333;
          line-height: 1.6;
          padding: 0 2rem;
          background-color: #f4f4f9;
        }
        .hero {
          height: 50vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          background-size: cover;
          background-position: center;
          margin-bottom: 2rem;
          border-radius: 10px;
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
          max-width: 800px;
          padding: 1rem;
        }
      `}</style>
    </main>
  );
}
