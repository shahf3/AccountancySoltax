"use client";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.description}>
        Your trusted partner for tax solutions and financial advice. 
        We ensure compliance while maximizing your returns.
      </p>
      <p style={styles.slogan}>“Empowering Your Financial Future”</p>
      <p style={styles.copyright}>© {new Date().getFullYear()} Soltax. All rights reserved.</p>
      <p style={styles.links}>
        <span style={styles.separator}>  </span>
        <a href="https://linkedin.com/in/khizerzarrar" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
      </p>
      <style jsx>{`
        footer {
          background-color: #002147; /* Dark blue */
          color: white; /* White text */
          text-align: center; /* Center text */
          padding: 2rem 0; /* Padding */
          margin-top: 2rem; /* Space above the footer */
        }
        @media (max-width: 600px) {
          footer {
            padding: 1rem; /* Smaller padding on mobile */
          }
        }
      `}</style>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#002147',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 0',
    marginTop: '2rem',
    position: 'relative',
  },
  description: {
    margin: '0',
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
  slogan: {
    margin: '0.5rem 0',
    fontSize: '1.5rem',
    fontWeight: 'bold', 
    color: '#ffcc00', 
  },
  copyright: {
    margin: '0',
    fontSize: '1rem',
  },
  links: {
    margin: '0',
    fontSize: '1rem',
  },
  link: {
    color: '#aab8d1',
    textDecoration: 'none',
    margin: '0 0.5rem',
    transition: 'color 0.3s ease',
  },
  separator: {
    color: '#aab8d1',
  },
};

export default Footer;
