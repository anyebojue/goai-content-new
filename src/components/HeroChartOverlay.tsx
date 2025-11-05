import { type CSSProperties, useId } from 'react';
import styles from './HeroChartOverlay.module.css';

type HeroChartOverlayProps = {
  className?: string;
  variant?: 'blue' | 'mint';
};

const VARIANT_CONFIG = {
  blue: {
    areaGradientStart: 'rgba(20, 185, 255, 0.7)',
    areaGradientEnd: 'rgba(20, 185, 255, 0)',
    areaPath:
      'M0 290 L60 270 L110 240 L165 260 L220 210 L280 240 L335 180 L390 205 L445 150 L500 190 L560 140 L600 120 L600 360 L0 360 Z',
    primaryPath:
      'M0 290 L60 270 L110 240 L165 260 L220 210 L280 240 L335 180 L390 205 L445 150 L500 190 L560 140 L600 120',
    secondaryPath:
      'M0 310 L55 300 L120 280 L175 295 L230 255 L285 285 L340 245 L395 265 L450 220 L505 250 L560 215 L600 195',
    primaryLine: 'rgba(20, 185, 255, 0.95)',
    primaryGlow: 'rgba(20, 185, 255, 0.6)',
    secondaryLine: 'rgba(160, 72, 255, 0.55)',
    indicatorBorder: 'rgba(20, 185, 255, 0.35)',
    indicatorValue: '#4fd1ff',
    indicatorMeta: 'rgba(226, 232, 240, 0.65)',
    glowA: 'rgba(20, 185, 255, 0.38)',
    glowB: 'rgba(160, 72, 255, 0.32)',
  },
  mint: {
    areaGradientStart: 'rgba(255, 158, 67, 0.58)',
    areaGradientEnd: 'rgba(255, 158, 67, 0)',
    areaPath:
      'M0 235 L45 210 L95 215 L150 180 L205 200 L260 160 L315 185 L365 150 L410 170 L455 148 L505 156 L550 142 L585 125 L600 110 L600 360 L0 360 Z',
    primaryPath:
      'M0 235 L45 210 L95 215 L150 180 L205 200 L260 160 L315 185 L365 150 L410 170 L455 148 L505 156 L550 142 L585 125 L600 110',
    secondaryPath:
      'M0 250 L55 225 L120 235 L165 205 L220 225 L275 195 L330 208 L385 180 L440 192 L495 175 L540 168 L575 152 L600 138',
    primaryLine: 'rgba(255, 158, 67, 0.95)',
    primaryGlow: 'rgba(255, 158, 67, 0.45)',
    secondaryLine: 'rgba(255, 111, 161, 0.55)',
    indicatorBorder: 'rgba(255, 158, 67, 0.38)',
    indicatorValue: '#ffb96f',
    indicatorMeta: 'rgba(255, 237, 222, 0.72)',
    glowA: 'rgba(255, 158, 67, 0.35)',
    glowB: 'rgba(255, 111, 161, 0.3)',
  },
} as const;

export default function HeroChartOverlay({ className, variant = 'blue' }: HeroChartOverlayProps) {
  const gradientId = useId();
  const areaGradientId = `${gradientId}-area`;
  const variantConfig = VARIANT_CONFIG[variant];
  const overlayClassName = [styles.chartOverlay, className].filter(Boolean).join(' ');

  const styleVars = {
    '--chart-primary': variantConfig.primaryLine,
    '--chart-primary-glow': variantConfig.primaryGlow,
    '--chart-secondary': variantConfig.secondaryLine,
    '--chart-indicator-border': variantConfig.indicatorBorder,
    '--chart-value-color': variantConfig.indicatorValue,
    '--chart-meta-color': variantConfig.indicatorMeta,
    '--chart-glow-a': variantConfig.glowA,
    '--chart-glow-b': variantConfig.glowB,
  } as CSSProperties;

  return (
    <div className={overlayClassName} aria-hidden="true" style={styleVars}>
      <div className={styles.chartGrid} />
      <svg
        className={styles.chartSvg}
        viewBox="0 0 600 360"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={variantConfig.areaGradientStart} />
            <stop offset="100%" stopColor={variantConfig.areaGradientEnd} />
          </linearGradient>
        </defs>
        <path
          className={styles.chartArea}
          d={variantConfig.areaPath}
          fill={`url(#${areaGradientId})`}
        />
        <path
          className={styles.chartLinePrimary}
          d={variantConfig.primaryPath}
        />
        <path
          className={styles.chartLineSecondary}
          d={variantConfig.secondaryPath}
        />
      </svg>
      <div className={styles.chartIndicator}>
        <span className={styles.chartValue}>+12.4%</span>
        <span className={styles.chartMeta}>GoAI Alpha</span>
      </div>
    </div>
  );
}
