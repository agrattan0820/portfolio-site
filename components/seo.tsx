import Head from "next/head";

type SEOProps = {
  title: string;
  url: string;
  description?: string;
};

const SEO = ({ title, url, description }: SEOProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description ?? "Website for Alexander Grattan, a software developer studying Digital Narrative and Interactive Design at the University of Pittsburgh. Skilled with React, Gatsby, Next.js, JavaScript, TypeScript, Java, Python, TailwindCSS, Sass, Node.js, Django, and GSAP."}
      ></meta>
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:image" content="/agrattan_OG.png" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
