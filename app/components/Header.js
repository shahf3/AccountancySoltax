"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/soltax.jpeg"
              alt="SolTax Logo"
              width={120}
              height={75}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li 
              className={styles.hasDropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/services">Services</Link>
              <ul className={`${styles.dropdown} ${dropdownOpen ? styles.show : ''}`}>
                <li><Link href="/services/income-tax-compliance">Income Tax</Link></li>
                <li><Link href="/services/capital-gains-tax">Capital Gains</Link></li>
                <li><Link href="/services/bookkeeping">Bookkeeping</Link></li>
                <li><Link href="/services/pension-planning">Pension</Link></li>
                <li><Link href="/services/tax-planning">Tax Planning</Link></li>
                <li><Link href="/services/vat">VAT</Link></li>
                <li><Link href="/services/year-end-accounts">Year-End</Link></li>
              </ul>
            </li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
