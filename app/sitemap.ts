import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://agrattan.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.agrattan.com/blog/post/please-do-an-accessibility-audit",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.agrattan.com/blog/post/no-remote-early-in-my-career",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.agrattan.com/blog/post/falling-out-of-love-with-twin-macro",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
