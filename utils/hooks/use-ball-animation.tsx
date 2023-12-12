import { MutableRefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type UseBallAnimationProps = {
  root: MutableRefObject<HTMLDivElement>;
  enabled: boolean;
  onComplete: () => void;
};

export const useBallAnimation = ({
  root,
  enabled,
  onComplete,
}: UseBallAnimationProps) => {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const breakPoint = 967;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions;

        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        const projects: Element[] = gsap.utils.toArray(".project");

        const homeAnimation = () => {
          if (enabled) {
            tl.to(".ball", {
              duration: reduceMotion ? 0 : 2,
              y: "100vh",
              ease: "bounce.out",
            })
              .to(".ball", {
                duration: reduceMotion ? 0 : 1,
                delay: 0.15,
                scale: isDesktop ? 20 : 30,
                ease: "power3.out",
                onComplete: onComplete,
              })
              .from(".after-animation", {
                duration: reduceMotion ? 0 : 0.8,
                opacity: 0,
                ease: "power3.out",
              })
              .from(".title", {
                duration: reduceMotion ? 0 : 0.5,
                y: 100,
                delay: 0.2,
                opacity: 0,
                ease: "power3.out",
              })
              .from(".peep-image", {
                duration: reduceMotion ? 0 : 0.5,
                y: 100,
                opacity: 0,
                ease: "power3.out",
              })
              .from(".job-title", {
                duration: reduceMotion ? 0 : 0.5,
                y: 100,
                opacity: 0,
                ease: "power3.out",
              })
              .from(".scroll-indicator", {
                duration: reduceMotion ? 0 : 0.5,
                y: 100,
                opacity: 0,
                ease: "power3.out",
              });
          } else {
            onComplete();
          }

          if (!reduceMotion) {
            if (isDesktop) {
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
          }
        };

        homeAnimation();
      },
      root
    );

    return () => mm.revert();
  }, []);
};
