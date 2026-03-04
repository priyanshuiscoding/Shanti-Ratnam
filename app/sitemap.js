import { innerPages } from "@/lib/siteData";

const base = "https://shantiratnam.com";

export default function sitemap() {
  const staticRoutes = [
    "/", // home

    // main pages
    "/consultation",
    "/diabetic-reversal-program-sagar",
    "/neuro-pain-management-sagar",

    // legal pages
    "/privacy-policy",
    "/terms-and-conditions",
    "/medical-disclaimer",
    "/cancellation-refund-policy",
  ];

  const innerRoutes = innerPages.map((p) => `/${p.slug}`);

  // unique + clean
  const all = Array.from(new Set([...staticRoutes, ...innerRoutes]));

  return all.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
