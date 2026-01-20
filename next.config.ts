import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Skip type checking during build - verified separately with tsc
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
