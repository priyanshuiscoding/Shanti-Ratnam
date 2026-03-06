/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Domain cleanup
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/hi/:path*",
        destination: "/:path*",
        permanent: true,
      },

      // Direct redirects
      {
        source: "/about-us-2",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about-us-2/",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/book-appointement",
        destination: "/consultation",
        permanent: true,
      },
      {
        source: "/book-appointement/",
        destination: "/consultation",
        permanent: true,
      },
      {
        source: "/package",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/package/",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-conditions/",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/services/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/department",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/department/",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/signature-programs",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/signature-programs/",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/old-age-problem",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/old-age-problem/",
        destination: "/diseases-treated",
        permanent: true,
      },

      // Service/treatment pages
      {
        source: "/aayurveda-panchkarma",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/aayurveda-panchkarma/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/natural-treatment",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/natural-treatment/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/yoga",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/yoga/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/physical-therapy",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/physical-therapy/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/diet-therapy",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/diet-therapy/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/rehabilitation",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/rehabilitation/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/chiropractic",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/chiropractic/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/acupuncture",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/acupuncture/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/mantra-healing",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/mantra-healing/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/meditation",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/meditation/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/ancient-ayurveda",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/ancient-ayurveda/",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/natures-potential-unleashed",
        destination: "/diseases-treated",
        permanent: true,
      },
      {
        source: "/natures-potential-unleashed/",
        destination: "/diseases-treated",
        permanent: true,
      },

      // Blog posts -> blog
      {
        source:
          "/transforming-stress-into-serenity-ayurvedic-techniques-for-anxiety-management",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/transforming-stress-into-serenity-ayurvedic-techniques-for-anxiety-management/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/unlocking-wellness-exploring-the-benefits-of-panchakarma-therapy",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/unlocking-wellness-exploring-the-benefits-of-panchakarma-therapy/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/revitalize-your-essence-delving-into-ayurvedic-detoxification-techniques",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/revitalize-your-essence-delving-into-ayurvedic-detoxification-techniques/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/gut-health-and-ayurveda-nourishing-your-digestive-fire-for-optimal-wellness",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/gut-health-and-ayurveda-nourishing-your-digestive-fire-for-optimal-wellness/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/cultivating-mental-wellness-ayurvedic-insights-into-managing-stress-and-boosting-mental-clarity",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/cultivating-mental-wellness-ayurvedic-insights-into-managing-stress-and-boosting-mental-clarity/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-parkinsons-disease-an-ayurvedic-perspective",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-parkinsons-disease-an-ayurvedic-perspective/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/discovering-the-power-of-marma-points-an-ayurvedic-approach-to-healing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/discovering-the-power-of-marma-points-an-ayurvedic-approach-to-healing/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/winter-asthma-symptoms-causes-and-ayurveda-treatments",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/winter-asthma-symptoms-causes-and-ayurveda-treatments/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/understanding-psoriasis-through-ayurveda-a-holistic-approach-to-healing",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/understanding-psoriasis-through-ayurveda-a-holistic-approach-to-healing/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/migraine-in-depth-overview-of-symptoms-triggers-and-ayurvedic-treatment-approaches",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/migraine-in-depth-overview-of-symptoms-triggers-and-ayurvedic-treatment-approaches/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-pitta-dosha-the-energy-of-transformation",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/understanding-pitta-dosha-the-energy-of-transformation/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-role-of-abhyanga-in-panchakarma-for-multiple-diseases-and-pain",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-role-of-abhyanga-in-panchakarma-for-multiple-diseases-and-pain/",
        destination: "/blog",
        permanent: true,
      },

      // Archive/taxonomy
      {
        source: "/author/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/page/:path*",
        destination: "/blog",
        permanent: true,
      },

      // Junk pages
      {
        source: "/elementor-3734",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-3734/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-3734-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-3734-2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-3734-duplicate-3734",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-3734-duplicate-3734/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
