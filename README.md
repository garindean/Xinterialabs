# Xinteria Labs design

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/gbottens-projects/v0-xinteria-labs-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/RrCGZRi2djN)

## Overview

This repository contains the Xinteria Labs website built with Next.js and optimized for deployment on Cloudflare Pages.

## Deployment

### Cloudflare Pages Deployment

#### Option 1: Automatic Git Integration (Recommended)
1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run pages:build`
3. Set build output directory: `.vercel/output/static`
4. Deploy automatically on git push

#### Option 2: Manual CLI Deployment
1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build for Cloudflare Pages:**
   \`\`\`bash
   npm run pages:build
   \`\`\`

3. **Deploy to Cloudflare Pages:**
   \`\`\`bash
   npm run pages:deploy
   \`\`\`

### Local Development

**Standard Next.js development:**
\`\`\`bash
npm run dev
\`\`\`

**Cloudflare Pages development (with edge runtime):**
\`\`\`bash
npm run pages:dev
\`\`\`

## Build Configuration

### Build Settings for Cloudflare Pages Dashboard:
- **Build command:** `npm run pages:build`
- **Build output directory:** `.vercel/output/static`
- **Root directory:** `/` (leave empty)
- **Node.js version:** `18` or `20`

### Environment Variables
No environment variables required for basic deployment.

## Project Structure

- **Static Export:** Configured for static site generation
- **Image Optimization:** Disabled for Cloudflare compatibility
- **Trailing Slashes:** Enabled for better routing
- **Output Directory:** `out` for standard builds, `.vercel/output/static` for Pages

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Push changes to your connected Git repository
3. Cloudflare Pages automatically builds and deploys
4. Static assets are served from Cloudflare's global CDN
5. Fast, reliable performance worldwide

## Troubleshooting

### Build Issues
- Ensure Node.js version is 18 or higher
- Check that all dependencies are installed
- Verify build command is `npm run pages:build`

### Deployment Issues
- Confirm output directory is `.vercel/output/static`
- Check build logs in Cloudflare Pages dashboard
- Ensure repository is properly connected

### Local Development
- Use `npm run dev` for standard Next.js development
- Use `npm run pages:dev` to test with Cloudflare Pages runtime
