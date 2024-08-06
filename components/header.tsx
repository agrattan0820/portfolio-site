import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo} rel="home">
            <span aria-hidden="true">AG</span>
            <span className={commonStyles.hiddenText}>
              Alexander Grattan - Homepage
            </span>
          </Link>
          <ul className={styles.navList}>
            <li>
              <a
                href="https://github.com/agrattan0820"
                title="Go to Alexander's GitHub"
              >
                GitHub
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan/"
                title="Connect with Alexander on LinkedIn"
              >
                LinkedIn
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
