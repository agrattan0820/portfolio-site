import Head from "next/head";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", { duration: 0, css: { visibility: "visible" } });
    gsap.from(".title", { duration: 1, y: 20, opacity: 0, ease: "power4.out" });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Alexander Grattan Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
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
      </nav>
      <main className="main">
        <h1 className="title">Alexander Grattan</h1>
        <h3 className="job-title">Full Stack Developer</h3>
      </main>
      <div className="project-container">
        <div className="project-row">
          <div className="project"></div>
        </div>
      </div>
    </div>
  );
}
