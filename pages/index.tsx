import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

// import fs from "fs";
// import path from "path";
// import type { GetStaticPropsContext } from "next";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import SEO from "../components/seo";
import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/alexander-grattan.jpeg";

// const postsDirectory = path.join(process.cwd(), "posts");

export default function Homepage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();
  const ballRoot = useRef<HTMLDivElement>(null);

  useBallAnimation({
    root: ballRoot,
    enabled: router.asPath === "/",
    onComplete: () => {
      setAnimationComplete(true);
      document.body.style.overflowY = "auto";
    },
  });

  return (
    <motion.div
      key="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      ref={ballRoot}
    >
      <SEO
        title="Alexander Grattan | Software Developer Based in Pittsburgh"
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
            <div className="portrait-container">
              <Image
                src={AlexanderGrattan}
                alt="Portrait of Alexander Grattan"
                className="portrait"
                priority
              />
            </div>
          </div>
          <p className="job-title">
            <span className="text-reveal">
              Alexander Grattan / Software Developer
            </span>
          </p>
          <div className="scroll-indicator-container">
            <a className="scroll-indicator" href="#projects">
              <span>Some Projects</span>
              <FaChevronDown />
            </a>
          </div>
        </main>
        <div className="project-container" id="projects">
          {projectsList.map((project) => (
            <ProjectListing key={project.slug} project={project} />
          ))}
        </div>
        <footer>
          <h2>Connect with Me</h2>
          <ul className="footer-links">
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
                <span className="footer-hidden-text">GitHub</span>
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
                <span className="footer-hidden-text">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Alexander on Twitter"
              >
                <FaTwitter />
                <span className="footer-hidden-text">Twitter</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const fileNames = fs.readdirSync(postsDirectory);

//   const

//     const fileContents = fs.readFileSync(fullPath, "utf8");
// }
