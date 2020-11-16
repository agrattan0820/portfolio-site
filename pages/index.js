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
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ReactGA from "react-ga";

export default function Home() {
  const [dimensions, setDimensions] = useState();
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "scroll";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  useEffect(() => {
    ReactGA.initialize("G-EJ2KVMZM2G");
    ReactGA.pageview("/");

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    function debounce(fn, ms) {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          fn.apply(this, arguments);
        }, ms);
      };
    }

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      console.log(dimensions);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    gsap.registerPlugin(ScrollTrigger);

    const homeAnimation = (animation) => {
      let tl = gsap.timeline();

      let projects = gsap.utils.toArray(".project-row .project");

      tl.to("body", { duration: 0, css: { visibility: "visible" } })
        .from(".ball", {
          duration: 2,
          y: "-100vh",
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

      let x = window.matchMedia("(min-width: 967px)");

      if (x.matches) {
        gsap.from(".project-row", {
          scrollTrigger: {
            trigger: ".project-container",
            start: "top bottom",
            toggleActions: "restart",
          },
          x: "100vw",
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        });
      }

      if (x.matches) {
        gsap.to(projects, {
          xPercent: -100 * (projects.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".project-container",
            pin: true,
            start: "top top",
            scrub: 0.75,
            snap: {
              snapTo: 1 / (projects.length - 1),
              duration: { min: 0.2, max: 3 },
              delay: 0,
            },
            // Base vertical scrolling on how wide the container is so it feels more natural.
            end: () =>
              "+=" + document.querySelector(".project-row").offsetHeight,
          },
        });
      }
    };

    homeAnimation(completeAnimation);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Alexander Grattan Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <nav className="home-nav">
          <div className="space-between">
            <div className="logo">AG</div>
            <ul className="nav-list">
              <li>
                <a
                  href="/Resume_Alexander_Grattan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GameDog9988"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexander-grattan-11a187149/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="main-home">
          <h1 className="title">
            I create <span className="playful">playful</span> experiences.
          </h1>
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
                    <div className="project-btns">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className="project-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          View Site
                        </motion.button>
                      </a>
                      <a href={page} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className="project-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          The Code
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="scroll-right">
            <h4>Swipe right for more</h4>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <footer>
          <h2>Connect with Me</h2>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/GameDog9988"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan-11a187149/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
