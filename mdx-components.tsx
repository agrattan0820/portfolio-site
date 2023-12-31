import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";

import commonStyles from "./styles/common.module.scss";
import postStyles from "./styles/post.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, ...props }) => (
      <a {...props} className={commonStyles.playfulHover}>
        {children}
      </a>
    ),
    Image: (props) => (
      <Image {...(props as ImageProps)} alt={props.alt ?? ""} />
    ),
    img: (props) => <Image {...(props as ImageProps)} alt={props.alt ?? ""} />,
    figure: ({ children, ...props }) => (
      <div className={postStyles.codeContainer}>
        <figure {...props}>{children}</figure>
      </div>
    ),
  };
}
