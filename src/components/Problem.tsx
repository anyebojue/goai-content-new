import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section id="problem" className={styles.problem}>
      <div className={styles.container}>
        <h2>
          The Market Moves Fast. Your Time and Focus are Limited.
        </h2>
        <p>
          By the time you read about an opportunity in the news, the real move
          has often already happened. The challenge for investors is two-fold: the
          <strong>time</strong> it takes to find the signal in the daily noise, and the limitations of our own <strong>knowledge structure</strong>.
        </p>
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <i className="fas fa-clock"></i>
            <h3>Time Constraint</h3>
            <p>
              Investors lack the 40+ hours/week required to sift through endless
              market noise, earnings calls, and reports.
            </p>
          </div>
          <div className={styles.problemCard}>
            <i className="fas fa-eye-slash"></i>
            <h3>Knowledge Constraint</h3>
            <p>
              We naturally miss opportunities outside our personal expertise and
              comfort zone, leading to cognitive bias.
            </p>
          </div>
          <div className={`${styles.problemCard} ${styles.solutionCard}`}>
            <i className="fas fa-brain"></i>
            <h3>GoAI&apos;s Advantage</h3>
            <p>
              Our agent works 24/7, finding non-obvious, cross-sector connections
              you might have otherwise missed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
