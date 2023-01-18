import "../styles/App.scss";
import Head from "next/head";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Project({ children, pageTitle, description }) {
  const page = {
    hidden: {
      opacity: 0,
    },
    pageShow: {
      opacity: 1,
    },
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <nav className="project-nav">
        <div className="space-between">
          <Link href="/">
            <div className="logo">AG</div>
          </Link>
          <ul className="nav-list">
            <li>
              <motion.a
                href="/Alexander_Grattan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="project-main">{children}</main>
    </>
  );
}
