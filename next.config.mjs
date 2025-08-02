/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuration for Cloudflare Workers
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig
