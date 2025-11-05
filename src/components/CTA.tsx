import Image from 'next/image';
import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <h2 className={styles.ctaTitle}>Stop Researching. Start Analyzing.</h2>
            <p>
              Download GoAI today and get your first week of Pro-level insights,
              free. Join thousands of investors who are leveraging AI to find their
              next big opportunity.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="#" className={styles.storeButton}>
                <i className="fab fa-apple"></i>
                <div>
                  Download on the
                  <br />
                  <strong>App Store</strong>
                </div>
              </Link>
              <Link href="#" className={styles.storeButton}>
                <i className="fab fa-google-play"></i>
                <div>
                  Get it on
                  <br />
                  <strong>Google Play</strong>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.mediaBlock}>
            <Image
              src="/images/iPhone.png"
              alt="GoAI mobile app preview"
              className={styles.heroDevice}
              width={1323}
              height={1626}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
