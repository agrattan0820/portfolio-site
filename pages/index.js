import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
      <main className="main">
        <h1 className="title">I create playful experiences.</h1>
        <h3 className="job-title">Alexander Grattan / Full Stack Developer</h3>
      </main>
      <div className="project-container">
        <div className="project-row">
          <div className="project">
            <img src="/images/www.grademyaid.com_.png" alt="grademyaid" />
            <h3>grademyaid</h3>
          </div>
          <div className="project">
            <img src="/images/www.grademyaid.com_.png" alt="grademyaid" />
            <h3>grademyaid</h3>
          </div>
          <div className="project">
            <img src="/images/www.grademyaid.com_.png" alt="grademyaid" />
            <h3>grademyaid</h3>
          </div>
        </div>
      </div>
      <footer>
        <ul className="footer-links">
          <li>GitHub</li>
          <li>Resume</li>
          <li>Twitter</li>
        </ul>
      </footer>
    </div>
  );
}
