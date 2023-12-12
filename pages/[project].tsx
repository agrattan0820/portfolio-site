import { motion } from "framer-motion";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Header from "../components/header";
import SEO from "../components/seo";
import { projectsList } from "../utils/project-data";

const Project: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  index,
  projectData,
}) => {
  return (
    <motion.div
      key={projectData.slug}
      exit={{ opacity: 0 }}
      className="container"
    >
      <SEO
        title={`${projectData?.name} | Alexander Grattan`}
        url={`https://agrattan.com/${projectData.slug}`}
        description={projectData.description}
      />
      <Header logoLink={`/#${projectData.slug}`} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="project-main"
      >
        <div className="text-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {projectData?.name}
          </motion.h1>

          {projectData?.longDescription
            ? projectData?.longDescription
                .split("\n")
                .map((str, i) => <p key={i}>{str}</p>)
            : projectData?.description
                .split("\n")
                .map((str, i) => <p key={i}>{str}</p>)}
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
          {index > 0 ? (
            <Link href={projectsList[index - 1].slug}>
              <button className="previous-btn" title="Previous Project">
                <FaChevronLeft className="prev-arrow" />
                Previous
              </button>
            </Link>
          ) : (
            <button className="previous-btn" disabled>
              <FaChevronLeft className="prev-arrow" />
              Previous
            </button>
          )}
          {index < projectsList.length - 1 ? (
            <Link href={projectsList[index + 1].slug}>
              <button className="next-btn" title="Next Project">
                Next
                <FaChevronRight className="next-arrow" />
              </button>
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
                <a
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  title={`Open site of ${projectData.name}`}
                >
                  Open Site
                </a>
              )}
              {projectData.code && (
                <a
                  href={projectData.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  title={`View Code for ${projectData.name}`}
                >
                  View Code
                </a>
              )}
            </div>

            <Link
              href={`/#${projectData.slug}`}
              scroll={false}
              className="project-back"
            >
              <FaArrowLeft /> Back Home
            </Link>
          </div>
        )}
      </motion.main>
    </motion.div>
  );
};

export default Project;

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const projectSlug = context.params.project;

  const index = projectsList.findIndex((el) => el.slug === projectSlug);

  if (index === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      index,
      projectData: projectsList[index],
    },
  };
};
