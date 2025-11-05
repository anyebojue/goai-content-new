import styles from './Solution.module.css';

export default function Solution() {
  return (
    <section id="solution" className={styles.solution}>
      <div className={styles.container}>
        <h2>Your 24/7 AI Analyst, Distilled into 3 Feeds.</h2>

        <div className={styles.featureRow}>
          <div className={styles.featureText}>
            <h3>Find Your Next &quot;Alpha Pick&quot;.</h3>
            <p>
              GoAI scans public and proprietary data to find high-conviction
              opportunities. We show you the key drivers and our in-depth
              analysis so you can see how the AI connected the dots, all in our
              GoAI Alpha opportunities feed.
            </p>
          </div>
          <div className={styles.featureImage}>
            <div className={styles.appCard}>
              <div className={styles.appCardHeader}>
                <div className={styles.appCardLogo}>
                  <img src="https://logo.clearbit.com/qcom.com" alt="QCOM" />
                </div>
                <div className={styles.appCardInfo}>
                  <h3 className={styles.appCardTitle}>
                    QUALCOMM Incorporated{' '}
                    <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>
                      (QCOM)
                    </span>
                  </h3>
                  <div className={styles.appRating}>
                    <i className="fas fa-star"></i> 4.3{' '}
                    <span style={{ marginLeft: '5px', color: 'var(--text-muted)' }}>
                      Created By GoAI &bull; 12h ago
                    </span>
                  </div>
                </div>
                <span className={`${styles.convictionTag} ${styles.alpha}`}>
                  GoAI Alpha
                </span>
              </div>
              <div className={styles.keyDrivers}>
                <h4>Key Drivers</h4>
                <ul className={styles.keyDriversList}>
                  <li>
                    <i className="fas fa-microchip"></i>
                    <div>
                      <strong>AI Market Expansion:</strong> Aggressive push into
                      data center and edge AI chips.
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-chart-line"></i>
                    <div>
                      <strong>Valuation Upside:</strong> DCF indicates highly
                      undervalued, low P/E vs. industry.
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-globe"></i>
                    <div>
                      <strong>Diversified Growth:</strong> Strong growth in
                      automotive and IoT segments.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.featureRow} ${styles.reverse}`}>
          <div className={styles.featureText}>
            <h3>Understand Market Mood, Instantly.</h3>
            <p>
              We don&apos;t just show you &quot;VIX: 18.6&quot;. We show you what it
              means. Our app visualizes the data with intuitive gauges and
              provides a synthesized implication, so you understand the &quot;so
              what&quot; in seconds. Our GoAI Signals feed keeps you informed.
            </p>
          </div>
          <div className={styles.featureImage}>
            <div className={`${styles.appCard} ${styles.signalCard}`}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em' }}>
                VIX Volatility Index
              </h3>
              <div
                style={{
                  fontSize: '2.5em',
                  fontWeight: 700,
                  color: 'var(--heading-color)',
                  marginBottom: '10px',
                }}
              >
                18.6
              </div>
              <span className={`${styles.convictionTag} ${styles.medium}`}>
                Rising Volatility
              </span>
              <p
                style={{
                  fontSize: '0.9em',
                  color: 'var(--text-muted)',
                  marginTop: '10px',
                }}
              >
                GoAI detects increasing market uncertainty.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.featureRow}>
          <div className={styles.featureText}>
            <h3>Anticipate Event Impacts.</h3>
            <p>
              GoAI analyzes data before an event to forecast its impact. See the
              AI-generated probability of an earnings beat/miss and the key theme
              investors are watching, so you are prepared with our Event Analysis
              feed.
            </p>
          </div>
          <div className={styles.featureImage}>
            <div className={styles.appCard}>
              <div className={styles.appCardHeader}>
                <div className={styles.appCardLogo}>
                  <img
                    src="https://logo.clearbit.com/microsoft.com"
                    alt="MSFT"
                  />
                </div>
                <div className={styles.appCardInfo}>
                  <h3 className={styles.appCardTitle}>
                    Microsoft Corp.{' '}
                    <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>
                      (MSFT)
                    </span>
                  </h3>
                  <p className={styles.appCardSubtitle}>Q4 Earnings Preview</p>
                </div>
                <span className={`${styles.convictionTag} ${styles.medium}`}>
                  Earnings Forecast
                </span>
              </div>
              <div
                style={{
                  fontSize: '1.1em',
                  fontWeight: 600,
                  color: 'var(--heading-color)',
                  marginBottom: '10px',
                }}
              >
                GoAI Forecast: 80% Beat Probability
              </div>
              <p style={{ fontSize: '0.9em', color: 'var(--text-color)' }}>
                <strong style={{ color: 'var(--heading-color)' }}>
                  Key Theme:
                </strong>{' '}
                Strong Azure growth expected to drive upside, despite PC market
                headwinds. Analysts are watching AI monetization closely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
