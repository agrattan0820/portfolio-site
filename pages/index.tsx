import { useRef, useState } from "react";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import SEO from "../components/seo";
import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { projectsList } from "../utils/project-data";

type HomepageProps = {
  project: string | false;
};

const Homepage: NextPage<HomepageProps> = ({ project }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  const scrollToProject = () => {
    if (typeof window !== "undefined") {
      if (project) {
        // Use the hash to find the first element with that id
        const element = document.getElementById(project);

        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView();
        }
      }
    }
  };

  useBallAnimation({
    project,
    onComplete: completeAnimation,
    scrollTo: scrollToProject,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <SEO
        title="Alexander Grattan | Pittsburgh Software Developer"
        url="https://agrattan.com/"
      />
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <Header logoLink="/" />
        <main className="main-home">
          <div className="cta">
            <h1 className="title">
              I create<span className="playful"> playful </span> experiences.
            </h1>
            <img
              src="/images/My_Peep.png"
              alt="My Peep"
              className="peep-image"
            />
          </div>

          <p className="job-title">
            <span className="text-reveal">
              Alexander Grattan / Software Developer
            </span>
          </p>
          <div className="scroll-indicator-container">
            <button className="scroll-indicator" onClick={executeScroll}>
              <span>Some Projects</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </main>
        <div className="project-container" ref={projectsRef}>
          {projectsList.map(
            (
              {
                name,
                description,
                longDescription,
                image,
                mobileImage,
                link,
                slug,
                code,
                tools,
              },
              i
            ) => (
              <div className="project" key={i} id={slug}>
                <Link href={slug}>
                  <picture>
                    <source srcSet={image} media="(min-width: 1280px)" />
                    <img
                      className="project-image"
                      src={mobileImage}
                      alt={name}
                    />
                  </picture>
                </Link>
                <div className="project-info">
                  <Link href={slug}>
                    <h2>{name}</h2>
                  </Link>
                  {description.split("\n").map((str, index) => (
                    <p key={index}>{str}</p>
                  ))}
                  {longDescription && (
                    <Link href={slug}>
                      <button className="project-read-more">
                        <span>Read More</span>{" "}
                        <div className="read-more-arrow">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </button>
                    </Link>
                  )}
                  <h3>Tools used:</h3>
                  <ul className="tools-list">
                    {tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <motion.div className="project-btns">
                    {link && (
                      <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`Open site of ${name}`}
                        className="project-btn"
                      >
                        Open Site
                      </motion.a>
                    )}
                    {code && (
                      <motion.a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`View Code for ${name}`}
                        className="project-btn"
                      >
                        View Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            )
          )}
        </div>
        <footer>
          <h2>Connect with Me</h2>
          <ul className="footer-links">
            <li>
              <motion.a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Alexander's Resume"
              >
                Resume
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Alexander's GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="footer-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Connect with Alexander on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span className="footer-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Follow Alexander on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span className="footer-hidden-text">Twitter</span>
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
};

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const project = query?.project ?? false;

  return {
    props: {
      project,
    },
  };
};
