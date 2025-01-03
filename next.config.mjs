import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  themes: {
    light: "one-dark-pro",
    dark: "one-dark-pro",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypeShiki, options]],
  },
});

export default withMDX(nextConfig);
