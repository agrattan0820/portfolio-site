import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/alexander-grattan.jpeg";

export default function Homepage() {
  return (
    <div className="container">
      <IntroOverlay />
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
    </div>
  );
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const fileNames = fs.readdirSync(postsDirectory);

//   const

//     const fileContents = fs.readFileSync(fullPath, "utf8");
// }
