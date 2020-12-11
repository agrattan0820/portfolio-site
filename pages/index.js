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
  faChevronRight,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ReactGA from "react-ga";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "scroll";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    ReactGA.initialize("UA-183066430-1");
    ReactGA.pageview("/");

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let projects = gsap.utils.toArray(".project-row .project");
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
          duration: 0.6,
          y: 100,
          opacity: 0,
          delay: 0.2,
          ease: "power3.out",
        })
        .from(".peep-image", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".job-title", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".scroll-indicator", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        });

      gsap.from(".project-row", {
        scrollTrigger: {
          trigger: ".project-container",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
        x: 500,
        opacity: 0,
        duration: 2,
      });

      if (mediaQuery.matches) {
        gsap.to(projects, {
          xPercent: -100 * (projects.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".project-container",
            pin: true,
            start: "top top",
            scrub: 1,
            snap: {
              snapTo: 1 / (projects.length - 1),
              duration: { min: 0.2, max: 1 },
              delay: 0,
            },
            // Base vertical scrolling on how wide the container is so it feels more natural.
            end: () =>
              "+=" + document.querySelector(".project-row").offsetHeight,
          },
        });
      }

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
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio for Alexander Grattan, web developer studying Digital Narrative and Interactive Design at the University of Pittsburgh. Skilled with React, JavaScript, Sass, and GSAP."
        ></meta>
        <title>Alexander Grattan / Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <nav className="home-nav">
          <div className="space-between">
            <div className="logo">AG</div>
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
                  href="https://www.linkedin.com/in/alexander-grattan-11a187149/"
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
        <main className="main-home">
          <div className="cta">
            <h1 className="title">
              I create <span className="playful">playful</span> experiences.
            </h1>
            <img
              src="/images/My_Peep.png"
              alt="My Peep"
              className="peep-image"
            />
          </div>

          <h3 className="job-title">Alexander Grattan / Web Developer</h3>
          <div className="scroll-indicator" onClick={executeScroll}>
            <p>Projects</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </main>
        <div className="project-container" ref={projectsRef}>
          <div className="project-row">
            {projectsList.map(
              ({ name, description, image, link, page, tools }) => (
                <div className="project">
                  <img src={image} alt={name} />
                  <div className="project-info">
                    <h3>{name}</h3>
                    {description.split("\n").map((str) => (
                      <p>{str}</p>
                    ))}
                    <h4>Tools used:</h4>
                    <ul className="tools-list">
                      {tools.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <motion.div className="project-btns">
                      <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.button className="project-btn">
                          Open Site
                        </motion.button>
                      </motion.a>
                      <motion.a
                        href={page}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
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
          {/* <div className="arrow-controls">
            <div className="left-arrow">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="right-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div> */}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan-11a187149/"
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
