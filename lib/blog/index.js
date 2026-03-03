import { localPosts } from "./localPosts";

const BLOG_SOURCE = process.env.BLOG_SOURCE || "local";

function sortByPublishedDateDesc(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

async function getCmsPosts() {
  // CMS adapter placeholder.
  // Replace with Sanity/Strapi/WordPress fetch logic later.
  return [];
}

export async function getAllPosts() {
  if (BLOG_SOURCE === "cms") {
    const cmsPosts = await getCmsPosts();
    return sortByPublishedDateDesc(cmsPosts);
  }

  return sortByPublishedDateDesc(localPosts);
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getAllPostSlugs() {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}
