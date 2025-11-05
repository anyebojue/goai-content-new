import Image from 'next/image';
import styles from './CTA.module.css';

export default function BrandReveal() {
  return (
    <section className={styles.brandRevealSimple}>
      <Image
        src="/svg/goai-wordmark.svg"
        alt="GoAI wordmark"
        width={160}
        height={58}
        className={styles.wordmark}
      />
    </section>
  );
}
