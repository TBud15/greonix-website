import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      // from / to /ukr permanent redirect
      {
        source: "/",
        destination: "/ukr",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/ukr/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
