import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Tax Consulting', path: '/services/tax-consulting' },
        { name: 'Bookkeeping', path: '/services/bookkeeping' },
        { name: 'Payroll', path: '/services/payroll' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <span>Soltax</span>
        </Link>
      </div>
      <div className="nav-container" ref={menuRef}>
        {isMobile && (
          <div
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <nav className={`nav ${isMobile ? 'mobile-nav' : 'desktop-nav'} ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <div key={item.name} className="nav-item">
              <Link href={item.path}>
                <span className={router.pathname === item.path ? 'active' : ''}>
                  {item.name}
                </span>
              </Link>
              {item.dropdown && (
                <div className="dropdown">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.name} href={subItem.path}>
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-container {
          position: relative;
        }
        .nav {
          display: flex;
        }
        .nav-item {
          position: relative;
          margin-left: 1.5rem;
        }
        .nav-item span {
          cursor: pointer;
        }
        .nav-item span.active {
          color: #3498db;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: none;
          min-width: 150px;
        }
        .nav-item:hover .dropdown {
          display: block;
        }
        .dropdown span {
          display: block;
          padding: 0.5rem 1rem;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        .hamburger span {
          width: 2rem;
          height: 0.25rem;
          background: #333;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        .hamburger.open span:first-child {
          transform: rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
        }
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            border-radius: 4px;
            flex-direction: column;
            min-width: 200px;
            display: none;
          }
          .nav.open {
            display: flex;
          }
          .nav-item {
            margin: 0.5rem 0;
          }
          .dropdown {
            position: static;
            display: block;
            box-shadow: none;
            margin-left: 1rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
