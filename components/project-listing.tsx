import { getImageProps } from "next/image";

import styles from "../styles/project-listing.module.scss";
import commonStyles from "../styles/common.module.scss";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

export default function ProjectListing({ project }: ProjectListingProps) {
  const { slug, image, mobileImage, name, description, link, code, type } =
    project;

  const {
    props: { srcSet: mobileSrc },
  } = getImageProps({ alt: name, src: mobileImage ?? "" });
  const {
    props: { src: imageSrc, ...rest },
  } = getImageProps({ alt: name, src: image });

  return (
    <div className={`project ${styles.projectListing}`} id={slug}>
      <div className={styles.projectItemContainer}>
        <a
          href={link ?? code}
          title={link ? `Open site of ${name}` : `View Code for ${name}`}
        >
          <picture>
            {mobileSrc && (
              <source srcSet={mobileSrc} media="(max-width:967px)" />
            )}
            <img {...rest} src={imageSrc} className={styles.projectImage} />
          </picture>
        </a>
        <div id="projectInfo" className={styles.projectInfo}>
          <a
            href={link ?? code}
            title={link ? `Open site of ${name}` : `View Code for ${name}`}
          >
            <h2 className={commonStyles.playfulHover}>{name}</h2>
          </a>
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          <p>{type}</p>
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
