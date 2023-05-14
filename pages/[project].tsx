import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Header from "../components/header";
import SEO from "../components/seo";
import { projectsList, ProjectType } from "../utils/project-data";
import Image from "next/image";

type ProjectPageProps = {
  projectData: ProjectType;
};

const Project: NextPage<ProjectPageProps> = ({ projectData }) => {
  const controls = useAnimation();

  const page = {
    hidden: {
      opacity: 0,
    },
    pageShow: {
      opacity: 1,
    },
  };

  useEffect(() => {
    controls.stop();
    controls.set("hidden");
    document.body.style.overflowY = "auto";
    controls.start("pageShow");
  }, [projectData]);

  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <SEO
        title={`${projectData?.name} | Alexander Grattan`}
        url={`https://agrattan.com/${projectData.slug}`}
        description={projectData.description}
      />
      <Header logoLink={`/?project=${projectData.slug}`} />
      <motion.main
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0 }}
        variants={page}
        className="project-main"
      >
        <div className="text-content">
          <motion.a
            href={projectData?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {projectData?.name}
            </motion.h1>
          </motion.a>

          {projectData?.longDescription
            ? projectData?.longDescription
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)
            : projectData?.description
                .split("\n")
                .map((str, index) => <p key={index}>{str}</p>)}
        </div>
        {projectData && projectData?.figma && projectData?.old ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              {/* Using regular `img` tag because next/image would show 
              previous project image when navigating */}
              <img
                src={projectData.old.src}
                alt={`${projectData.name} Old Site`}
              />

              <h2>Old Version</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectData.figma.src}
                alt={`${projectData.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-1">
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : projectData?.figma ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectData.figma.src}
                alt={`${projectData.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : (
          <div className="comparison-container">
            <div className="image-compare gsap-3">
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
            </div>
          </div>
        )}
        <nav className="page-navigation">
          {projectData?.id > 1 ? (
            <Link href={projectsList[projectData.id - 2].slug}>
              <motion.button
                className="previous-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Previous Project"
              >
                <FaChevronLeft className="prev-arrow" />
                Previous
              </motion.button>
            </Link>
          ) : (
            <button className="previous-btn" disabled>
              <FaChevronLeft className="prev-arrow" />
              Previous
            </button>
          )}
          {projectData?.id < projectsList.length ? (
            <Link href={projectsList[projectData.id].slug}>
              <motion.button
                className="next-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Next Project"
              >
                Next
                <FaChevronRight className="next-arrow" />
              </motion.button>
            </Link>
          ) : (
            <button className="next-btn" disabled>
              Next
              <FaChevronRight className="next-arrow" />
            </button>
          )}
        </nav>
        {projectData && (
          <div className="bottom-links">
            <div className="project-links">
              {projectData.link && (
                <motion.a
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={`Open site of ${projectData.name}`}
                >
                  Open Site
                </motion.a>
              )}
              {projectData.code && (
                <motion.a
                  href={projectData.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={`View Code for ${projectData.name}`}
                >
                  View Code
                </motion.a>
              )}
            </div>

            <Link href="/" className="project-back">
              <FaArrowLeft /> Back Home
            </Link>
          </div>
        )}
      </motion.main>
    </motion.div>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const projectPaths = projectsList.map((item) => {
    return {
      params: {
        project: item.slug,
      },
    };
  });

  return {
    paths: projectPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectSlug = context.params.project;

  const projectData = projectsList.find((el) => el.slug === projectSlug);

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData,
    },
  };
};
