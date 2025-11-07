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
            <div className={`${styles.appCard} ${styles.demoCard}`}>
              <div className={styles.demoCardHeader}>
                <div className={styles.demoHeaderLeft}>
                  <div className={styles.demoAvatar} aria-hidden />
                  <div className={styles.demoIdentity}>
                    <span className={styles.demoTicker}>USAR</span>
                    <h3 className={styles.demoTitle}>US Rare Earth</h3>
                  </div>
                </div>
                <div className={styles.demoTag}>+ Watchlist</div>
              </div>

              <div className={styles.demoMeta}>
                <span>2 hours ago</span>
                <span className={styles.demoChange}>+1.5%</span>
              </div>

              <div className={styles.demoPills}>
                <span>Materials</span>
                <span>Rare Earths</span>
              </div>

              <div className={styles.demoSection}>
                <h4>Performance</h4>
              </div>

              <div className={styles.demoSection}>
                <h4>Key Drivers</h4>
                <ul className={styles.demoDrivers}>
                  <li>
                    <strong>Policy Support</strong>
                    <p>
                      Benefiting from the United States&apos; Domestic Supply policy,
                      committed to establishing a rare-earth supply chain.
                    </p>
                  </li>
                  <li>
                    <strong>Demand Surge</strong>
                    <p>
                      Utilize local reserves to meet the growing demand for green
                      energy such as electric vehicles and wind power.
                    </p>
                  </li>
                  <li>
                    <strong>Market Position</strong>
                    <p>
                      The United States has a strong &apos;moat&apos; in domestic rare-earth
                      extraction and magnet manufacturing.
                    </p>
                  </li>
                </ul>
              </div>

              <div className={styles.demoFooter}>
                <button type="button" className={styles.demoShare}>
                  <span className={styles.demoShareIcon} aria-hidden>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.667 5.333 10 2m0 0H6.667M10 2v3.333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.333 3.333H4.667A2.667 2.667 0 0 0 2 6v4A2.667 2.667 0 0 0 4.667 12.667h4A2.667 2.667 0 0 0 11.333 10v-1.666"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Share
                </button>
                <div className={styles.demoMetric}>
                  <span className={styles.demoMetricIcon} aria-hidden>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="demoDiamond" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#0266FF" />
                          <stop offset="100%" stopColor="#5C54FF" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M10 2.5 16.5 8.5 10 17.5 3.5 8.5 10 2.5Z"
                        fill="url(#demoDiamond)"
                        stroke="#E5ECFF"
                        strokeWidth="1.1"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m3.5 8.5 6.5 3 6.5-3M10 2.5l-2 6 2 9 2-9-2-6Z"
                        stroke="rgba(255,255,255,0.65)"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className={styles.demoMetricValue}>368</span>
                    <span className={styles.demoMetricLabel}>AI watchers</span>
                  </div>
                </div>
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
