import Head from "next/head";
import Link from "next/head";
import { projectsList } from "../../components/data";

export default function FirstPost() {
  const project = projectsList[0];

  return (
    <div className="container">
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="project-nav">
        <div className="space-between">
          <div className="logo">AG</div>
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="project-main">
        <img src={project.image} alt={project.name} />
        <div className="text-content">
          <h2>Guiding students and stuff</h2>
          <p>
            Grademyaid came from the notion that there was not an outright
            website that helped students to choose between schools if financials
            was a major factor. Options out there included US News, The
            Princeton Review, and niche.com. What grademyaid does that these
            resources does not is take the student's financial aid as an input
            and provide extra insight and context into how it compares to other
            students and if it is a good deal.
          </p>
        </div>
      </main>
    </div>
  );
}
