'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBottom}>
          <div className={styles.footerColumn}>
            <p>
              © {year} GoAI. All rights reserved. This is not investment advice.
            </p>
            <ul className={styles.bottomLinks}>
              <li>
                <a href="#" aria-label="Terms of Service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" aria-label="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" aria-label="Security and Safety">
                  Security &amp; Safety
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className={styles.backToTop} onClick={handleBackToTop}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
