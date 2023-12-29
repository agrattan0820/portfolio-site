/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withMDX(nextConfig);
