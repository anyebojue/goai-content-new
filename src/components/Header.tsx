import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.headerNav}>
          <Link href="#" className={styles.logo}>
            <Image
              src="/svg/IOS-Appicon.svg"
              alt="GoAI logo"
              width={56}
              height={56}
              className={styles.logoWordmark}
              priority
            />
          </Link>
          <Link href="#cta" className={styles.navCta}>
            Download App
          </Link>
        </nav>
      </div>
    </header>
  );
}
