import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import styles from "../styles/project-listing.module.scss";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

const ProjectListing = ({ project }: ProjectListingProps) => {
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
        <Link href={slug}>
          <picture>
            {mobileImage && (
              <source srcSet={mobileImage.src} media="(max-width:967px)" />
            )}
            <img src={image.src} alt={name} className={styles.projectImage} />
          </picture>
        </Link>
        <div id="projectInfo" className={styles.projectInfo}>
          <Link href={slug}>
            <h2>{name}</h2>
          </Link>
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          {longDescription && (
            <Link href={slug} className={styles.projectReadMore}>
              <span>Read More</span>{" "}
              <span>
                <FaChevronRight />
              </span>
            </Link>
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
                target="_blank"
                rel="noopener noreferrer"
                title={`Open site of ${name}`}
                className={styles.projectBtn}
              >
                Open Site
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
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
};

export default ProjectListing;
