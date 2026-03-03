/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // ---- Locale safety redirects -> canonical non-locale URLs ----
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/hi/:path*", destination: "/:path*", permanent: true },

      // ---- Core direct redirects ----
      { source: "/about-us-2", destination: "/about-us", permanent: true },
      { source: "/book-appointement", destination: "/consultation", permanent: true },
      { source: "/package", destination: "/packages", permanent: true },
      { source: "/terms-conditions", destination: "/terms-and-conditions", permanent: true },
      { source: "/department", destination: "/about-us", permanent: true },

      // ---- WP archives -> blog ----
      { source: "/author/:path*", destination: "/blog", permanent: true },
      { source: "/category/:path*", destination: "/blog", permanent: true },

      // ---- WP blog pagination -> blog ----
      { source: "/blog/page/2", destination: "/blog", permanent: true },
      { source: "/blog/page/3", destination: "/blog", permanent: true },
      { source: "/blog/page/4", destination: "/blog", permanent: true },
      { source: "/blog/page/5", destination: "/blog", permanent: true },

      // ---- Old service pages merged into /treatment ----
      { source: "/aayurveda-panchkarma", destination: "/treatment", permanent: true },
      { source: "/acupuncture", destination: "/treatment", permanent: true },
      { source: "/ancient-ayurveda", destination: "/treatment", permanent: true },
      { source: "/chiropractic", destination: "/treatment", permanent: true },
      { source: "/diet-therapy", destination: "/treatment", permanent: true },
      { source: "/mantra-healing", destination: "/treatment", permanent: true },
      { source: "/meditation", destination: "/treatment", permanent: true },
      { source: "/natural-treatment", destination: "/treatment", permanent: true },
      { source: "/natures-potential-unleashed", destination: "/treatment", permanent: true },
      { source: "/physical-therapy", destination: "/treatment", permanent: true },
      { source: "/rehabilitation", destination: "/treatment", permanent: true },
      { source: "/yoga", destination: "/treatment", permanent: true },

      // ---- Old blog posts (not migrated) -> blog ----
      {
        source:
          "/cultivating-mental-wellness-ayurvedic-insights-into-managing-stress-and-boosting-mental-clarity",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/discovering-the-power-of-marma-points-an-ayurvedic-approach-to-healing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/gut-health-and-ayurveda-nourishing-your-digestive-fire-for-optimal-wellness",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/migraine-in-depth-overview-of-symptoms-triggers-and-ayurvedic-treatment-approaches",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/revitalize-your-essence-delving-into-ayurvedic-detoxification-techniques",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-role-of-abhyanga-in-panchakarma-for-multiple-diseases-and-pain",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/transforming-stress-into-serenity-ayurvedic-techniques-for-anxiety-management",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-parkinsons-disease-an-ayurvedic-perspective",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-pitta-dosha-the-energy-of-transformation",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-psoriasis-through-ayurveda-a-holistic-approach-to-healing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/unlocking-wellness-exploring-the-benefits-of-panchakarma-therapy",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/winter-asthma-symptoms-causes-and-ayurveda-treatments",
        destination: "/blog",
        permanent: true,
      },

      // NOTE: we intentionally DO NOT add redirects for:
      // /elementor-3734-2  (junk)
      // /wp-content/...    (media / 404 already)
    ];
  },
};

export default nextConfig;
