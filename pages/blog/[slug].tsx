import {
  GetStaticPropsContext,
  GetStaticPathsContext,
  InferGetStaticPropsType,
} from "next";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { motion } from "framer-motion";
import SEO from "../../components/seo";
import Header from "../../components/header";

const postsDirectory = path.join(process.cwd(), "posts");

type PostPageProps = {
  title: string;
  date: string;
  slug: string;
  contentHtml: string;
};

export default function Post(props: PostPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <SEO
        title={`${props?.title} | Alexander Grattan`}
        url={`https://agrattan.com/blog/${props.slug}`}
      />
      <Header logoLink={`/`} />
      <div className="post-main">
        <h1 className="post-title">{props.title}</h1>
        <div className="post-date">
          {new Date(props.date).toLocaleDateString()}
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
      </div>
    </motion.div>
  );
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params.slug;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  if (!fileContents) {
    return {
      notFound: true,
    };
  }

  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      slug,
      contentHtml,
      ...JSON.parse(JSON.stringify(matterResult.data)),
    },
  };
};
