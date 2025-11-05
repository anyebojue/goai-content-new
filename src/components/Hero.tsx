import Link from 'next/link';
import styles from './Hero.module.css';

const BACKDROP_IMAGE =
  'https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/resize=width:1600/output=format:webp/oXIAOr5gQny2cAfPpq02';

const HERO_VIDEO =
  'https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/d66nnRxEQpatoaaSG3ww';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backdrop}>
        <div className={styles.backdropBlur}>
          <img src={BACKDROP_IMAGE} alt="Backdrop" loading="lazy" />
        </div>
      </div>

      <div className={styles.heroInner}>
        <div className={styles.mediaContainer}>
          <div className={styles.mediaFrame}>
            <video
              className={styles.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              poster={BACKDROP_IMAGE}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
              <img
                src={BACKDROP_IMAGE}
                alt="Abstract data landscape"
                className={styles.heroVideoFallback}
                loading="lazy"
              />
            </video>
            <div className={styles.mediaGlow} />
          </div>
        </div>

        <div className={styles.textOverlay}>
          <div className={styles.textColumn}>
            <span className={styles.tag}>GOAI Alpha</span>
            <h1>See the Opportunities Others Don&apos;t.</h1>
            <p className={styles.subtitle}>
              GoAI analyzes millions of data points to uncover bespoke,
              high-conviction opportunities before the market reacts.
            </p>
            <div className={styles.buttonRow}>
              <Link href="#cta" className={styles.primaryButton}>
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
