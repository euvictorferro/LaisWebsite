import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/servicos',
        destination: '/#servicos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
