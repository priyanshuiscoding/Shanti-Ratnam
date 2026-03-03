/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      // Legacy redirects from original requirements
      {
        source: '/about-us-2',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/book-appointement',
        destination: '/consultation',
        permanent: true,
      },
      {
        source: '/natural-treatment',
        destination: '/treatment',
        permanent: true,
      },
      {
        source: '/aayurveda-panchkarma',
        destination: '/treatment',
        permanent: true,
      },
      
      // SEO redirects for singular to plural URL changes
      {
        source: '/disease-treated',
        destination: '/diseases-treated',
        permanent: true,
      },
      {
        source: '/disease-treated/:path*',
        destination: '/diseases-treated/:path*',
        permanent: true,
      },
      {
        source: '/package',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/package/:path*',
        destination: '/packages/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
