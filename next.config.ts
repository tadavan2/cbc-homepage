import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // =============================================================================
  // REDIRECTS - Handle old WordPress URLs and other moved pages
  // 
  // Add new redirects here when you find dead links in analytics.
  // Format: { source: '/old-path', destination: '/new-path', permanent: true }
  // 
  // permanent: true = 308 redirect (SEO-friendly, cached by browsers)
  // permanent: false = 307 redirect (temporary, not cached)
  // =============================================================================
  async redirects() {
    return [
      // Old WordPress URLs - redirect to cultivar explorer subdomain
      {
        source: '/breeding-program/cultivars',
        destination: 'https://cultivars.cbcberry.com',
        permanent: true,
      },
      {
        source: '/breeding-program/cultivars/:slug',
        destination: 'https://cultivars.cbcberry.com',
        permanent: true,
      },
      {
        source: '/breeding-program',
        destination: '/breeding',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Add more redirects as needed...
    ];
  },
};

export default nextConfig;
