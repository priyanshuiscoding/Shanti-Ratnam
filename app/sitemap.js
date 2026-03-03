import { innerPages } from "@/lib/siteData";

const base = "https://shantiratnam.com";

export default function sitemap() {
  // Add important pages that are NOT in innerPages
  const staticPaths = [
    "/consultation",
    "/diabetic-reversal-program-sagar",
    "/neuro-pain-management-sagar",
    "/privacy-policy",
    "/terms-and-conditions",
    "/medical-disclaimer",
    "/cancellation-refund-policy",
  ];

  const urls = new Set();

  // Home
  urls.add(`${base}/`);

  // Inner pages (/about-us, /blog, /contact-us, /treatment, etc.)
  innerPages.forEach((p) => {
    urls.add(`${base}/${p.slug}`);
  });

  // Missing static pages
  staticPaths.forEach((p) => {
    urls.add(`${base}${p}`);
  });

  return Array.from(urls).map((url) => ({
    url,
    changeFrequency: "weekly",
    priority: url === `${base}/` ? 1.0 : 0.8,
  }));
}