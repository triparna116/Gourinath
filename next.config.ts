import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbopack for better deployment compatibility
  output: 'standalone', // Better for containerized deployments
};

export default nextConfig;
