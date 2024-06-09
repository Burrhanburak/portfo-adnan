import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://portfo-adnan.vercel.app/";

export default async function sitemap() {
  // Fetch blog posts and format them for the sitemap
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Define additional static routes
  let additionalRoutes = [
    "/about",
    "/iletisim",

    // Add other static routes here
  ];

  // Combine base routes, additional routes, and format them for the sitemap
  let routes = ["", "/blog", ...additionalRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Return the combined array of routes and blog posts
  return [...routes, ...blogs];
}
