import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPathsContext,
  InferGetStaticPropsType,
} from "next";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
    </div>
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
  console.log(fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  if (!fileContents) {
    return {
      notFound: true,
    };
  }

  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      slug,
      contentHtml,
      ...matterResult.data,
    },
  };
};
