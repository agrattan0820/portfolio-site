import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../components/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const router = useRouter();
  console.log(router);
  const { project } = router.query;
  let projectObject;

  console.log(project);

  projectObject = projectsList.find((el) => el.project === project);

  console.log(projectObject);

  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
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
                href="https://github.com/GameDog9988"
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
      <main className="project-main">
        {projectObject && (
          <motion.img
            className="main-image"
            src={projectObject.image}
            alt={projectObject.name}
          />
        )}

        <div className="text-content">
          <h1>{projectObject?.name}</h1>
          <p>{projectObject?.description}</p>
        </div>
        {projectObject?.name && (
          <div className="figma-comparison">
            <div className="figma-1">
              <motion.img src={projectObject.image} alt={projectObject.name} />
              <h2>Figma Design</h2>
            </div>
            <div className="figma-2">
              <motion.img src={projectObject.image} alt={projectObject.name} />
              <h2>Live Version</h2>
            </div>
          </div>
        )}

        <nav className="page-navigation">
          {projectObject?.id > 1 ? (
            <Link href={projectsList[projectObject.id - 2].project}>
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
                Previous
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn" disabled>
              <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
              Previous
            </button>
          )}
          {projectObject?.id < 5 ? (
            <Link href={projectsList[projectObject.id].project}>
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Next
                <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn" disabled>
              Next
              <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
            </button>
          )}
          <Link href="/">
            <div className="project-back">
              <FontAwesomeIcon icon={faArrowLeft} /> Back Home
            </div>
          </Link>
        </nav>
      </main>
    </motion.div>
  );
}
