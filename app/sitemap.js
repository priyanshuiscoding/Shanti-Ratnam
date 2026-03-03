import { innerPages } from "@/lib/siteData";

const base = "https://shantiratnam.com";

export default function sitemap() {
  const pages = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    ...innerPages.map((page) => ({
      url: `${base}/${page.slug}`,
      changeFrequency: "weekly",
      priority: 0.8
    }))
  ];

  return pages;
}
