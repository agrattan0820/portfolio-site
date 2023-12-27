import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="container">
      <Header logoLink={`/?back=true#${projectData.slug}`} />
      <main className="project-main">
        <div className="text-content">
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
      </main>
    </div>
  );
}
