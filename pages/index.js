import { useEffect, useState, useRef } from "react";
import { projectsList } from "../components/data";
import Head from "next/head";
import IntroOverlay from "../components/introOverlay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);
  const scrollRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  useEffect(() => {
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let projects = gsap.utils.toArray(".project");
    let mediaQuery = window.matchMedia("(min-width: 967px)");

    const homeAnimation = (animation) => {
      tl.to(".ball", {
        duration: 2,
        y: "100vh",
        ease: "bounce.out",
      })
        .to(".ball", {
          duration: 1,
          scale: 30,
          ease: "power3.out",
          onComplete: animation,
        })
        .from(".after-animation", {
          duration: 0.8,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".title", {
          duration: 0.5,
          y: 100,
          delay: 0.2,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".peep-image", {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".job-title", {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".scroll-indicator", {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        });

      // gsap.from(".project-row", {
      //   scrollTrigger: {
      //     trigger: ".project-container",
      //     start: "top center",
      //     end: "top top",
      //     scrub: 1,
      //   },
      //   x: 500,
      //   opacity: 0,
      //   duration: 2,
      // });

      // if (mediaQuery.matches) {
      //   gsap.to(projects, {
      //     xPercent: -100 * (projects.length - 1),
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: ".project-container",
      //       pin: true,
      //       start: "top top",
      //       scrub: 1,
      //       snap: {
      //         snapTo: 1 / (projects.length - 1),
      //         duration: { min: 0.2, max: 1 },
      //         delay: 0,
      //       },
      //       // Base vertical scrolling on how wide the container is so it feels more natural.
      //       end: () =>
      //         "+=" + document.querySelector(".project-row").offsetHeight,
      //     },
      //   });
      //   gsap.to("progress", {
      //     value: 100,
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: ".project-container",
      //       start: "center center",
      //       scrub: 0.3,
      //     },
      //   });
      // }

      if (mediaQuery.matches) {
        projects.forEach((project) => {
          let tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let projectImage = project.querySelector("img");
          let projectInfo = project.querySelector(".project-info");

          tlProject
            .from(projectImage, {
              x: -300,
              opacity: 0,
            })
            .from(projectInfo, {
              x: 300,
              opacity: 0,
            });
        });
      } else {
        projects.forEach((project) => {
          let tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let projectImage = project.querySelector("img");
          let projectInfo = project.querySelector(".project-info");

          tlProject
            .from(projectImage, {
              y: 100,
              opacity: 0,
            })
            .from(projectInfo, {
              y: 100,
              opacity: 0,
            });
        });
      }

      //       .from(project + " .project-info", {
      //   x: 300,
      //   opacity: 0,
      // });

      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      });

      tlFooter
        .from("footer h2", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        })
        .from("footer .footer-links", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        });
    };

    homeAnimation(completeAnimation);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      ref={scrollRef}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio for Alexander Grattan, software developer studying Digital Narrative and Interactive Design at the University of Pittsburgh. Skilled with React, Gatsby, Next.js, JavaScript, TypeScript, Java, Python, TailwindCSS, Sass, Node.js, Django, and GSAP."
        ></meta>
        <title>Alexander Grattan | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <nav className="home-nav">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/alexander-grattan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </motion.a>
              </li>
            </ul>
          </div>
        </nav>
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

          <h3 className="job-title">
            <span className="text-reveal">
              Alexander Grattan / Software Developer
            </span>
          </h3>
          <div className="scroll-indicator" onClick={executeScroll}>
            <p>Projects</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </main>
        <div className="project-container" ref={projectsRef}>
          {projectsList.map(
            ({
              name,
              description,
              image,
              link,
              project,
              GitHub,
              tools,
              index,
            }) => (
              <div className="project" key={index}>
                <Link href={project}>
                  <motion.img
                    className="project-image"
                    src={image}
                    alt={name}
                  />
                </Link>
                <div className="project-info">
                  <Link href={project}>
                    <h3>{name}</h3>
                  </Link>
                  {description.split("\n").map((str, index) => (
                    <p key={index}>{str}</p>
                  ))}
                  <Link href={project}>
                    <button className="project-read-more">
                      Read More <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </Link>
                  <h4>Tools used:</h4>
                  <ul className="tools-list">
                    {tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <motion.div className="project-btns">
                    <motion.a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.button className="project-btn">
                        Open Site
                      </motion.button>
                    </motion.a>
                    <motion.a
                      href={GitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.button className="project-btn">
                        View Code
                      </motion.button>
                    </motion.a>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
            <li>
              <motion.a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
}
