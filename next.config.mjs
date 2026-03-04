/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Locale cleanup (you already added)
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/hi/:path*", destination: "/:path*", permanent: true },

      // WP -> New redirects
      { source: "/about-us-2", destination: "/about-us", permanent: true },
      { source: "/book-appointement", destination: "/consultation", permanent: true },
      { source: "/terms-conditions", destination: "/terms-and-conditions", permanent: true },
      { source: "/package", destination: "/packages", permanent: true },
      { source: "/package/", destination: "/packages", permanent: true },
      { source: "/services", destination: "/diseases-treated", permanent: true },
      { source: "/services/", destination: "/diseases-treated", permanent: true },
      { source: "/treatment", destination: "/diseases-treated", permanent: true },

      // MERGE service pages -> /diseases-treated (Specialities)
      { source: "/aayurveda-panchkarma", destination: "/diseases-treated", permanent: true },
      { source: "/acupuncture", destination: "/diseases-treated", permanent: true },
      { source: "/chiropractic", destination: "/diseases-treated", permanent: true },
      { source: "/diet-therapy", destination: "/diseases-treated", permanent: true },
      { source: "/mantra-healing", destination: "/diseases-treated", permanent: true },
      { source: "/meditation", destination: "/diseases-treated", permanent: true },
      { source: "/natural-treatment", destination: "/diseases-treated", permanent: true },
      { source: "/physical-therapy", destination: "/diseases-treated", permanent: true },
      { source: "/rehabilitation", destination: "/diseases-treated", permanent: true },
      { source: "/yoga", destination: "/diseases-treated", permanent: true },

      // spelling variants for "specialities/specialties"
      { source: "/specialities", destination: "/diseases-treated", permanent: true },
      { source: "/specialties", destination: "/diseases-treated", permanent: true },

      // BLOG POSTS (old WP) -> /blog
      { source: "/ancient-ayurveda", destination: "/blog", permanent: true },
      { source: "/natures-potential-unleashed", destination: "/blog", permanent: true },
      {
        source: "/transforming-stress-into-serenity-ayurvedic-techniques-for-anxiety-management",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/unlocking-wellness-exploring-the-benefits-of-panchakarma-therapy",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/revitalize-your-essence-delving-into-ayurvedic-detoxification-techniques",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/gut-health-and-ayurveda-nourishing-your-digestive-fire-for-optimal-wellness",
        destination: "/blog",
        permanent: true
      },
      {
        source:
          "/cultivating-mental-wellness-ayurvedic-insights-into-managing-stress-and-boosting-mental-clarity",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/understanding-parkinsons-disease-an-ayurvedic-perspective",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/discovering-the-power-of-marma-points-an-ayurvedic-approach-to-healing",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/winter-asthma-symptoms-causes-and-ayurveda-treatments",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/understanding-psoriasis-through-ayurveda-a-holistic-approach-to-healing",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/migraine-in-depth-overview-of-symptoms-triggers-and-ayurvedic-treatment-approaches",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/understanding-pitta-dosha-the-energy-of-transformation",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/the-role-of-abhyanga-in-panchakarma-for-multiple-diseases-and-pain",
        destination: "/blog",
        permanent: true
      },

      // Elementor junk pages -> home
      { source: "/elementor-3734", destination: "/", permanent: true },
      { source: "/elementor-3734-2", destination: "/", permanent: true },
      { source: "/elementor-3734-duplicate-3734", destination: "/", permanent: true },

      // WP category/author/tag/search pagination -> /blog
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/blog", permanent: true },
      { source: "/blog/page/:path*", destination: "/blog", permanent: true },
      { source: "/page/:path*", destination: "/", permanent: true }
    ];
  },
};

export default nextConfig;
