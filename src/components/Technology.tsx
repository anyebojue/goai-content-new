import styles from './Technology.module.css';

export default function Technology() {
  return (
    <section id="technology" className={styles.technology}>
      <div className={styles.container}>
        <div className={styles.featureRow}>
          <div className={styles.featureText}>
            <h3>Powered by a Proprietary Knowledge Graph</h3>
            <p className={styles.lede}>
              Our system is built on a cutting-edge AI framework. It ingests
              public data (news, social) <strong>and</strong> exclusive insights
              (like proprietary analyst reports) into a massive Knowledge Graph.
              Our agents map every entity, theme, and signal to surface the
              non-obvious connections that simple screeners always miss. This is
              our <strong>&quot;New Moat.&quot;</strong>
            </p>
          </div>
          <div className={styles.featureImage}>
            <div className={styles.graphCard}>
              <div className={styles.graphPulse}></div>
              <img
                src="https://placehold.co/600x400/12182B/A4B2CD?text=Knowledge+Graph+Visualization"
                alt="GoAI Knowledge Graph Diagram"
                className={styles.heroImage}
              />
              <div className={styles.graphBadge}>
                <span className={styles.graphBadgeDot}>•</span>
                <span className={styles.graphBadgeText}>GoAI Alpha</span>
              </div>
              <div className={styles.graphMeta}>
                <span className={styles.graphMetaText}>Knowledge Graph Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
