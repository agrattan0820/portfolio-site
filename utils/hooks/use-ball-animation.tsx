import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type UseBallAnimationProps = {
  project: string | false;
  onComplete: () => void;
  scrollTo: () => void;
};

export const useBallAnimation = ({
  project,
  onComplete,
  scrollTo,
}: UseBallAnimationProps) => {
  useEffect(() => {
    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let projects: Element[] = gsap.utils.toArray(".project");
    let mediaQuery = window.matchMedia("(min-width: 967px)");

    const homeAnimation = () => {
      if (!project) {
        tl.to(".ball", {
          duration: 2,
          y: "100vh",
          ease: "bounce.out",
        })
          .to(".ball", {
            duration: 1,
            scale: 30,
            ease: "power3.out",
            onComplete: onComplete,
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
      } else {
        onComplete();
        scrollTo();
      }

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

    homeAnimation();
  }, []);
};
