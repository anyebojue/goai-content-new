'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function SFFPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Title with gradient animation
  const titleText = 'GoAI Pioneer Program';
  const titleLetters = Array.from(titleText);
  const gradientSize = `${titleLetters.length * 100}% 100%`;

  // Email validation regex - RFC 5322 compliant
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setError('Please enter your email address');
      return false;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    setError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);

    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyTkLIknmCF1ZHMqIGYU5XsGQaj-i8E9_abpFzkHviHN1lfeGf6zvzcE7INiY4RZMWL/exec';

    try {
      // Create FormData
      const formData = new FormData();
      formData.append('email', email);

      // Send to Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.result === 'success') {
        // Success!
        setError('');
        alert('Success! Thank you for signing up.');
        setEmail(''); // Clear the form
      } else {
        // Handle known errors from the script
        throw new Error(data.message || 'An unknown error occurred.');
      }

    } catch (err) {
      console.error('Error!', err);
      setError('Error: Could not submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.backdrop} />

          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.logoGroup}>
                <div className={styles.festivalLogo}>
                  <img src="https://goai-ai-investing-pi-4dps.bolt.host/SFF%20logo.png" alt="Singapore Fintech Festival 2025 Celebrating 10 Years" />
                </div>
                <span className={styles.divider}>×</span>
                <div className={styles.goaiLogo}>
                  <img src="https://goai-ai-investing-pi-4dps.bolt.host/GoAI%20logo.png" alt="GoAI" />
                </div>
              </div>

              <div className={styles.chip}>EARLY ACCESS</div>

              <h1 className={styles.title} aria-label={titleText}>
                {titleLetters.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={styles.titleLetter}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, var(--logo-blue), var(--logo-purple))',
                      backgroundSize: gradientSize,
                      backgroundPosition: `${
                        titleLetters.length > 1 ? (index / (titleLetters.length - 1)) * 100 : 50
                      }% 0%`,
                    }}
                  >
                    {char === ' ' ? '\u00a0' : char}
                  </span>
                ))}
              </h1>

              <h2 className={styles.subtitle}>Your Personal AI Investment Analyst — Shaped By You</h2>

              <div className={styles.perkBadge}>
                <span className={styles.perkIcon}>✨</span>
                1-month Pro access — free for pioneers
              </div>

              <div className={styles.formWrapper}>
                <form className={`${styles.form} ${error ? styles.formError : ''}`} onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={styles.emailInput}
                    placeholder="Enter your email to join"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className={styles.joinButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Become a Pioneer →'}
                  </button>
                </form>
                {error && (
                  <div className={styles.errorMessage}>
                    {error}
                  </div>
                )}
              </div>

              <p className={styles.description}>
                Help us build GoAI to truly serve investors. <br/>
                We're looking for early adopters to provide feedback and help us shape an AI tool that makes intelligent, data-driven investing more accessible.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
