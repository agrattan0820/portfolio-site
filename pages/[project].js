import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../components/data";
import { motion, useAnimation } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const controls = useAnimation();
  const router = useRouter();
  const { project } = router.query;
  let projectObject;

  projectObject = projectsList.find((el) => el.project === project);

  const page = {
    hidden: {
      opacity: 0,
    },
    pageShow: {
      opacity: 1,
    },
  };

  useEffect(() => {
    document.body.style.overflowY = "auto";
    controls.start("pageShow");
    // gsap.registerPlugin(ScrollTrigger);
    // let gsapProjects1 = gsap.utils.toArray(".gsap-1");
    // let gsapProjects2 = gsap.utils.toArray(".gsap-2");

    // gsapProjects1.forEach((image1) => {
    //   gsap.from(image1, {
    //     scrollTrigger: {
    //       trigger: image1,
    //       start: "top center",
    //     },
    //     x: -200,
    //     opacity: 0,
    //     ease: "power3.out",
    //   });
    // });
    // gsapProjects2.forEach((image2) => {
    //   gsap.from(image2, {
    //     scrollTrigger: {
    //       trigger: image2,
    //       start: "top center",
    //     },
    //     x: 200,
    //     opacity: 0,
    //     ease: "power3.out",
    //   });
    // });
    // if (!projectObject?.figma && !projectObject?.old) {
    //   gsap.from(".gsap-3", {
    //     scrollTrigger: {
    //       trigger: ".gsap-3",
    //     },
    //     y: 100,
    //     opacity: 0,
    //   });
    // }
  }, [project]);

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate={controls}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Head>
        <title>{projectObject?.name}</title>
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
        <div className="text-content">
          <motion.a
            href={projectObject?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {projectObject?.name}
            </motion.h1>
          </motion.a>

          {projectObject?.longDescription
            ? projectObject?.longDescription
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)
            : projectObject?.description
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)}
        </div>
        {projectObject && projectObject?.figma && projectObject?.old ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectObject.old}
                alt={`${projectObject.name} Old Site`}
              />
              <h2>Old Version</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-1">
              <img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : projectObject?.figma ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : (
          <div className="comparison-container">
            <div className="image-compare gsap-3">
              <img src={projectObject?.image} alt={projectObject?.name} />
            </div>
          </div>
        )}

        <nav className="page-navigation">
          {projectObject?.id > 1 ? (
            <Link href={projectsList[projectObject.id - 2].project}>
              <motion.button
                className="previous-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
                Previous
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn previous-btn" disabled>
              <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
              Previous
            </button>
          )}
          {projectObject?.id < 7 ? (
            <Link href={projectsList[projectObject.id].project}>
              <motion.button
                className="next-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Next
                <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn next-btn" disabled>
              Next
              <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
            </button>
          )}
        </nav>
        {projectObject && (
          <div className="bottom-links">
            <motion.a
              href={projectObject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Open Site
              </motion.button>
            </motion.a>
            <motion.a
              href={projectObject.GitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Code
              </motion.button>
            </motion.a>
            <Link href="/">
              <div className="project-back">
                <FontAwesomeIcon icon={faArrowLeft} /> Back Home
              </div>
            </Link>
          </div>
        )}
      </main>
    </motion.div>
  );
}
