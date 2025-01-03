import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";
import introOverlayStyles from "../styles/intro-overlay.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/alexander-grattan.jpg";

const blogPosts: { title: string; slug: string; date: string }[] = [
  {
    title: "I Just Read User Friendly by Cliff Kuang and Robert Fabricant",
    slug: "just-read-user-friendly",
    date: " June 8, 2024",
  },
  {
    title: "Please Do an Accessibility Audit of Your Website",
    slug: "please-do-an-accessibility-audit",
    date: " April 27, 2024",
  },
  {
    title: "Why I Don't Want to Work Remotely Early in My Career",
    slug: "no-remote-early-in-my-career",
    date: " January 3, 2024",
  },
  {
    title: "Falling Out of Love with Twin Macro",
    slug: "falling-out-of-love-with-twin-macro",
    date: "December 29, 2023",
  },
];

export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <Suspense
        fallback={<div className={introOverlayStyles.introOverlay}></div>}
      >
        <IntroOverlay />
      </Suspense>
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 className={commonStyles.hiddenText}>Alexander Grattan</h1>
              <h2 id="title" className={styles.title}>
                I create
                <span className={commonStyles.playful}> playful </span>{" "}
                experiences.
              </h2>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={AlexanderGrattan}
                  alt="Portrait of Alexander Grattan"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Alexander Grattan / Software Developer
            </p>
          </section>
          <section id="aboutContainer" className={styles.aboutContainer}>
            <h2>About Me</h2>
            <p>
              Hi there! My name is Alexander Grattan and I&apos;m a software
              developer at Gray Swan AI, a AI safety and security company
              located in Pittsburgh, PA. <br />
              <br /> My current software development skills primarily focus
              around web development, but I also enjoy experimenting with app
              development, creative coding, data visualization, Human-Computer
              Interaction (HCI), and UX.
            </p>
          </section>
          <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>My Blog</h2>
            <ul>
              {blogPosts.map((post, i) => (
                <li key={i}>
                  <Link href={`/blog/post/${post.slug}`}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>

            <div className={styles.projectListingsContainer}>
              {projectsList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <h2>Connect with Me</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Alexander's GitHub"
              >
                GitHub
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Alexander on LinkedIn"
              >
                LinkedIn
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
