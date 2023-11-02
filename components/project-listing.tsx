import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { ProjectType } from "../utils/project-data";
import Image from "next/image";

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
    <div className="project" id={slug}>
      <div className="project-container">
        <Link href={slug}>
          <picture>
            {mobileImage && (
              <source srcSet={mobileImage.src} media="(max-width:967px)" />
            )}
            <img src={image.src} alt={name} className="project-image" />
          </picture>
        </Link>
        <div className="project-info">
          <Link href={slug}>
            <h2>{name}</h2>
          </Link>
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          {longDescription && (
            <Link href={slug} className="project-read-more">
              <span>Read More</span>{" "}
              <span className="read-more-arrow">
                <FaChevronRight />
              </span>
            </Link>
          )}
          <h3>Tools used:</h3>
          <ul className="tools-list">
            {tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <motion.div className="project-btns">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Open site of ${name}`}
                className="project-btn"
              >
                Open Site
              </motion.a>
            )}
            {code && (
              <motion.a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`View Code for ${name}`}
                className="project-btn"
              >
                View Code
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
