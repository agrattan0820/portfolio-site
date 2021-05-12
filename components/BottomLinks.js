import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../components/data";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function BottomLinks() {
  const router = useRouter();
  const { project } = router.query;
  let projectObject;
  projectObject = projectsList.find((el) => el.project === project);

  console.log(projectObject);
  return (
    <div className="bottom-links">
      <motion.a
        // href={projectObject.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="project-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Open Site
        </motion.button>
      </motion.a>
      <motion.a
        // href={projectObject.GitHub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="project-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Code
        </motion.button>
      </motion.a>
      <Link href="/">
        <div className="project-back">
          <FontAwesomeIcon icon={faArrowLeft} /> Back Home
        </div>
      </Link>
    </div>
  );
}

export default BottomLinks;
