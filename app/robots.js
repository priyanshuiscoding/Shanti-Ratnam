const base = "https://shantiratnam.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "*",
        disallow: [
          "/queue",
          "/queue/",
          "/queue/login",
          "/queue/admin",
          "/api"
        ]
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
