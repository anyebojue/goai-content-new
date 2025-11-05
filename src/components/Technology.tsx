import styles from './Technology.module.css';

export default function Technology() {
  return (
    <section id="technology" className={styles.technology}>
      <div className={styles.container}>
        <div className={styles.featureRow}>
          <div className={styles.featureText}>
            <h3>Powered by a Proprietary Knowledge Graph</h3>
            <p>
              Our system is built on a cutting-edge AI framework. It ingests
              public data (news, social) <strong>and</strong> exclusive insights
              (like proprietary analyst reports) into a massive Knowledge Graph.
              Our agents then analyze this network to find the non-obvious
              connections and themes that simple screeners always miss. This is
              our <strong>&quot;New Moat.&quot;</strong>
            </p>
          </div>
          <div className={styles.featureImage}>
            <img
              src="https://placehold.co/600x400/12182B/A4B2CD?text=Knowledge+Graph+Visualization"
              alt="GoAI Knowledge Graph Diagram"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
