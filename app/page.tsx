import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/alexander-grattan.jpeg";

const blogPosts: { title: string; slug: string; description: string }[] = [
  {
    title: "Hello World",
    slug: "hello-world",
    description: "An intro blog post by Alexander Grattan",
  },
  {
    title:
      "Woah this is a crazy long title, I wonder how your CSS is gonna handle this buddy boy???",
    slug: "really-long",
    description: "An intro blog post by Alexander Grattan",
  },
];

export default function Homepage() {
  return (
    <div className="container">
      <IntroOverlay />
      <div className="after-animation">
        <Header logoLink="/" />
        <main className="main-home">
          <div className="cta">
            <h1 className="title">
              I create<span className="playful"> playful </span> experiences.
            </h1>
            <div className="portrait-container">
              <Image
                src={AlexanderGrattan}
                alt="Portrait of Alexander Grattan"
                className="portrait"
                priority
              />
            </div>
          </div>
          <p className="job-title">
            <span className="text-reveal">
              Alexander Grattan / Software Developer
            </span>
          </p>
        </main>
        <section className="blog-preview-container">
          <h2>My Blog</h2>
          <ul>
            {blogPosts.map((post, i) => (
              <li key={i}>
                <Link href={`/blog/post/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="view-all-container">
            <Link href="/blog">
              View All <FaChevronRight />
            </Link>
          </div>
        </section>
        <section className="project-container" id="projects">
          <div className="project-title-container">
            <h2>My Projects</h2>
          </div>

          {projectsList.map((project) => (
            <ProjectListing key={project.slug} project={project} />
          ))}
        </section>
        <footer>
          <h2>Connect with Me</h2>
          <ul className="footer-links">
            <li>
              <a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Alexander's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Alexander's GitHub"
              >
                <FaGithub />
                <span className="footer-hidden-text">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Alexander on LinkedIn"
              >
                <FaLinkedin />
                <span className="footer-hidden-text">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Alexander on Twitter"
              >
                <FaTwitter />
                <span className="footer-hidden-text">Twitter</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const fileNames = fs.readdirSync(postsDirectory);

//   const

//     const fileContents = fs.readFileSync(fullPath, "utf8");
// }
