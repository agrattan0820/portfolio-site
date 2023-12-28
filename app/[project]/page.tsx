import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "../../styles/project.module.scss";

import Header from "../../components/header";
import { projectsList } from "../../utils/project-data";

export function generateMetadata({
  params,
}: {
  params: { project: string };
}): Metadata {
  const projectSlug = params.project;

  const index = projectsList.findIndex((el) => el.slug === projectSlug);

  const projectData = projectsList[index];

  return {
    title:
      index !== -1
        ? `${projectData?.name} | Alexander Grattan`
        : "Project | Alexander Grattan",
    description: index !== -1 ? projectData?.description : undefined,
  };
}

export function generateStaticParams() {
  const projectPaths = projectsList.map(({ slug }) => {
    return {
      project: slug,
    };
  });

  return projectPaths;
}

export default function Project({ params }: { params: { project: string } }) {
  const projectSlug = params.project;

  const index = projectsList.findIndex((el) => el.slug === projectSlug);

  if (index === -1) {
    return notFound();
  }

  const projectData = projectsList[index];

  return (
    <div className={styles.projectContainer}>
      <Header logoLink="/?back=true" />
      <main className={styles.projectMain}>
        <div className={styles.textContent}>
          <h1>{projectData?.name}</h1>

          {projectData?.longDescription
            ? projectData?.longDescription
                .split("\n")
                .map((str, i) => <p key={i}>{str}</p>)
            : projectData?.description
                .split("\n")
                .map((str, i) => <p key={i}>{str}</p>)}
        </div>
        {projectData && projectData?.figma && projectData?.old ? (
          <div className={styles.comparisonContainer}>
            <div className={styles.imageCompare}>
              {/* Using regular `img` tag because next/image would show 
              previous project image when navigating */}
              <img
                src={projectData.old.src}
                alt={`${projectData.name} Old Site`}
              />

              <h2>Old Version</h2>
            </div>
            <div className={styles.imageCompare}>
              <img
                src={projectData.figma.src}
                alt={`${projectData.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className={styles.imageCompare}>
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : projectData?.figma ? (
          <div className={styles.comparisonContainer}>
            <div className={styles.imageCompare}>
              <img
                src={projectData.figma.src}
                alt={`${projectData.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>
            <div className={styles.imageCompare}>
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : (
          <div className={styles.comparisonContainer}>
            <div className={styles.imageCompare}>
              <img
                src={projectData.image.src}
                alt={`${projectData.name} Live Site`}
              />
            </div>
          </div>
        )}
        <nav className={styles.pageNavigation}>
          {index > 0 ? (
            <Link href={projectsList[index - 1].slug} passHref legacyBehavior>
              <button className={styles.previousBtn} title="Previous Project">
                <FaChevronLeft className={styles.prevArrow} />
                Previous
              </button>
            </Link>
          ) : (
            <button className={styles.previousBtn} disabled>
              <FaChevronLeft className={styles.prevArrow} />
              Previous
            </button>
          )}
          {index < projectsList.length - 1 ? (
            <Link href={projectsList[index + 1].slug}>
              <button className={styles.nextBtn} title="Next Project">
                Next
                <FaChevronRight className={styles.nextArrow} />
              </button>
            </Link>
          ) : (
            <button className={styles.nextBtn} disabled>
              Next
              <FaChevronRight className={styles.nextArrow} />
            </button>
          )}
        </nav>
        {projectData && (
          <div className={styles.bottomLinks}>
            <div className={styles.projectLinks}>
              {projectData.link && (
                <a
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectBtn}
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
                  className={styles.projectBtn}
                  title={`View Code for ${projectData.name}`}
                >
                  View Code
                </a>
              )}
            </div>

            <Link
              href={`/?back=true#${projectData.slug}`}
              className={styles.projectBack}
            >
              <FaArrowLeft /> Back Home
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
