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
  // Static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig
