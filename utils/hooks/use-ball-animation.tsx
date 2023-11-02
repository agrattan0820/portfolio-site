import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type UseBallAnimationProps = {
  enabled: boolean;
  onComplete: () => void;
};

export const useBallAnimation = ({
  enabled,
  onComplete,
}: UseBallAnimationProps) => {
  useEffect(() => {
    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const projects: Element[] = gsap.utils.toArray(".project");
    const mediaQuery = window.matchMedia("(min-width: 967px)");

    const homeAnimation = () => {
      if (enabled) {
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
      }

      if (mediaQuery.matches) {
        projects.forEach((project) => {
          const tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          const projectImage = project.querySelector("img");
          const projectInfo = project.querySelector(".project-info");

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
          const tlProject = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          const projectImage = project.querySelector("img");
          const projectInfo = project.querySelector(".project-info");

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

      const tlFooter = gsap.timeline({
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
