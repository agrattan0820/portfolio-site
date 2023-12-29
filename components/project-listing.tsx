import { FaChevronRight } from "react-icons/fa";

import styles from "../styles/project-listing.module.scss";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

export default function ProjectListing({ project }: ProjectListingProps) {
  const {
    slug,
    image,
    mobileImage,
    name,
    description,
    longDescription,
    link,
    code,
    tools,
  } = project;

  return (
    <div className={`project ${styles.projectListing}`} id={slug}>
      <div className={styles.projectItemContainer}>
        <a
          href={link ?? code}
          title={link ? `Open site of ${name}` : `View Code for ${name}`}
        >
          <picture>
            {mobileImage && (
              <source srcSet={mobileImage.src} media="(max-width:967px)" />
            )}
            <img src={image.src} alt={name} className={styles.projectImage} />
          </picture>
        </a>
        <div id="projectInfo" className={styles.projectInfo}>
          <a
            href={link ?? code}
            title={link ? `Open site of ${name}` : `View Code for ${name}`}
          >
            <h2>{name}</h2>
          </a>
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          {longDescription && (
            <a
              href={link ?? code}
              className={styles.projectReadMore}
              title={link ? `Open site of ${name}` : `View Code for ${name}`}
            >
              <span>Read More</span>{" "}
              <span>
                <FaChevronRight />
              </span>
            </a>
          )}
          <h3>Tools used:</h3>
          <ul className={styles.toolsList}>
            {tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.projectBtns}>
            {link && (
              <a
                href={link}
                title={`Open site of ${name}`}
                className={styles.projectBtn}
              >
                Open Site
              </a>
            )}
            {code && (
              <a
                href={code}
                title={`View Code for ${name}`}
                className={styles.projectBtn}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
