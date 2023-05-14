import { useRef, useState } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import MyPeep from "../images/My_Peep.png";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import SEO from "../components/seo";
import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { projectsList } from "../utils/project-data";
import Image from "next/image";
import ProjectListing from "../components/project-listing";

export default function Homepage({
  project,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
            <Image src={MyPeep} alt="Alexander's Peep" className="peep-image" />
          </div>
          <p className="job-title">
            <span className="text-reveal">
              Alexander Grattan / Software Developer
            </span>
          </p>
          <div className="scroll-indicator-container">
            <button className="scroll-indicator" onClick={executeScroll}>
              <span>Some Projects</span>
              <FaChevronDown />
            </button>
          </div>
        </main>
        <div className="project-container" ref={projectsRef}>
          {projectsList.map((project, i) => (
            <ProjectListing key={i} project={project} />
          ))}
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
                <FaGithub />
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
                <FaLinkedin />
                <span className="footer-hidden-text">LinkedIn</span>
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
                <FaTwitter />
                <span className="footer-hidden-text">Twitter</span>
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  const project = (query?.project as string) ?? "";

  return {
    props: {
      project,
    },
  };
};
