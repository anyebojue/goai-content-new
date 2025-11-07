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
              {/* ========== 第二部分：图片 + 文字组 + 按钮 ========== */}
              <div className={styles.demoCardHeader}>
                {/* 图片 */}
                <div className={styles.demoAvatar} aria-hidden />

                {/* 文字组（主标题 + 副标题）*/}
                <div className={styles.demoIdentity}>
                  <span className={styles.demoTicker}>USAR</span>
                  <h3 className={styles.demoTitle}>US Rare Earth</h3>
                </div>

                {/* Watchlist 按钮 */}
                <div className={styles.demoTag}>
                  <div className={styles.demoPlusContainer}>
                    <img src="/svg/plus-icon.svg" width="11" height="11" alt="" />
                  </div>
                  <div className={styles.demoTagText}>Watchlist</div>
                </div>
              </div>

              {/* ========== 第三部分：左侧（徽章+标签）+ 右侧（Performance）========== */}
              <div className={styles.demoContent}>
                {/* 左侧容器 */}
                <div className={styles.demoLeftSection}>
                  {/* 第一行：GoAI Alpha 徽章 + · + 时间 */}
                  <div className={styles.demoBadgeRow}>
                    {/* GoAI Alpha 徽章 */}
                    <div className={styles.demoAlphaBadge}>
                      <div className={styles.demoAlphaIcon}>
                        <img className={styles.demoAlphaIconImg} src="/svg/diamond.svg" width="14" height="12" alt="" />
                      </div>
                      <div className={styles.demoAlphaText}>GoAI Alpha</div>
                    </div>
                    {/* 分隔符 */}
                    <div className={styles.demoDot}>·</div>
                    {/* 时间戳 */}
                    <div className={styles.demoTime}>2 hours ago</div>
                  </div>

                  {/* 第二行：标签（Materials, Rare Earths）*/}
                  <div className={styles.demoTagsRow}>
                    <div className={styles.demoTagItem}>
                      <div className={styles.demoTagItemText}>Materials</div>
                    </div>
                    <div className={styles.demoTagItem}>
                      <div className={styles.demoTagItemText}>Rare Earths</div>
                    </div>
                  </div>
                </div>

                {/* 右侧：Performance 指标 */}
                <div className={styles.demoPerformance}>
                  {/* 上部分：绿色背景 + 图标 + +1.5% */}
                  <div className={styles.demoPerformanceTop}>
                    <div className={styles.demoPerformanceIcon}>
                      <div className={styles.demoPerformanceIconInner}>
                        <img src="/svg/arrows.svg" alt="" />
                      </div>
                    </div>
                    <div className={styles.demoPerformanceValue}>+1.5%</div>
                  </div>
                  {/* 下部分：Performance 文字 */}
                  <div className={styles.demoPerformanceBottom}>
                    <div className={styles.demoPerformanceLabel}>Performance</div>
                  </div>
                </div>
              </div>

              {/* ========== 第四部分：Key Drivers ========== */}
              <div className={styles.demoKeyDrivers}>
                <div className={styles.demoKeyDriversTitle}>Key Drivers</div>
                <div className={styles.demoKeyDriversList}>
                  <div className={styles.demoKeyDriverItem}>
                    <div className={styles.demoKeyDriverIcon}>
                      <img src="/svg/file.svg" alt="" />
                    </div>
                    <div className={styles.demoKeyDriverContent}>
                      <div className={styles.demoKeyDriverName}>Policy Support</div>
                      <div className={styles.demoKeyDriverDesc}>
                        Benefiting from the United States&apos; &quot;Domestic Supply&quot; policy, committed to establishing a rare earth magnet supply chain in the United States.
                      </div>
                    </div>
                  </div>
                  <div className={styles.demoKeyDriverItem}>
                    <div className={styles.demoKeyDriverIcon}>
                      <img src="/svg/chart.svg" alt="" />
                    </div>
                    <div className={styles.demoKeyDriverContent}>
                      <div className={styles.demoKeyDriverName}>Demand Surge</div>
                      <div className={styles.demoKeyDriverDesc}>
                        Utilize local reserves to meet the growing demand for green energy (such as electric vehicles, wind turbines) and defense needs.
                      </div>
                    </div>
                  </div>
                  <div className={styles.demoKeyDriverItem}>
                    <div className={styles.demoKeyDriverIcon}>
                      <img src="/svg/shield.svg" alt="" />
                    </div>
                    <div className={styles.demoKeyDriverContent}>
                      <div className={styles.demoKeyDriverName}>Market Position</div>
                      <div className={styles.demoKeyDriverDesc}>
                        The United States has a strong &quot;moat&quot; in the domestic rare earth extraction and magnet manufacturing fields.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 分割线 */}
              <div className={styles.demoDivider}></div>

              {/* ========== 第五部分：底部操作栏 ========== */}
              <div className={styles.demoFooter}>
                <div className={styles.demoShare}>
                  <div className={styles.demoShareIcon}>
                    <img src="/svg/share.svg?v=2" alt="" />
                  </div>
                  <div className={styles.demoShareText}>Share</div>
                </div>
                <div className={styles.demoLikes}>
                  <div className={styles.demoLikesIcon}>
                    <img src="/svg/rocket.svg" alt="" />
                  </div>
                  <div className={styles.demoLikesCount}>368</div>
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
