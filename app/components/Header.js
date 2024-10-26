"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);

  const services = [
    { title: 'All Services', link: '/services' },
    { title: 'Bookkeeping Services', link: '/services/bookkeeping' },
    { title: 'VAT Services', link: '/services/vat' },
    { title: 'Year-End Accounts Preparation', link: '/services/year-end-accounts' },
    { title: 'Income Tax Compliance', link: '/services/income-tax-compliance' },
    { title: 'Tax Planning', link: '/services/tax-planning' },
    { title: 'Pension Planning', link: '/services/pension-planning' },
    { title: 'Capital Gains Tax', link: '/services/capital-gains-tax' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleMenuMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/Logo.jpg" alt="Soltax Logo" className={styles.logoImage} />
          </Link>
        </div>
        <div
          ref={menuToggleRef}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav 
          ref={navRef} 
          className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <ul className={styles.navList}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li className={styles.servicesDropdown}>
              <Link href="/services" onClick={(e) => { e.preventDefault(); toggleServices(e); }}>
                Services
                <span className={`${styles.dropdownArrow} ${isServicesOpen ? styles.open : ''}`}></span>
              </Link>
              <ul className={`${styles.dropdownMenu} ${isServicesOpen ? styles.open : ''}`}>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} onClick={closeMenu}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
