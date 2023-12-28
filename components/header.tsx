import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeaderProps = {
  logoLink: string;
};

const Header = ({ logoLink }: HeaderProps) => {
  return (
    <header>
      <nav className="nav">
        <div className="space-between">
          <Link href={logoLink}>
            <div className="logo">AG</div>
          </Link>
          <ul className="nav-list">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Alexander's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Alexander's GitHub"
              >
                <FaGithub />
                <span className="header-hidden-text">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Alexander on LinkedIn"
              >
                <FaLinkedin />
                <span className="header-hidden-text">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
