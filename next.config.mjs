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
  // Ensure static export for Cloudflare compatibility
  output: 'export',
  trailingSlash: true,
  // Configuration for Cloudflare Workers
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig
