# Xinteria Labs design

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/gbottens-projects/v0-xinteria-labs-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/RrCGZRi2djN)

## Overview

This repository contains the Xinteria Labs website built with Next.js and optimized for deployment on Cloudflare Workers.

## Deployment

### Cloudflare Workers Deployment

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build for Cloudflare:**
   \`\`\`bash
   npm run cf:build
   \`\`\`

3. **Deploy to Cloudflare Workers:**
   \`\`\`bash
   npm run cf:deploy
   \`\`\`

### Alternative Deployment Methods

**Cloudflare Pages:**
\`\`\`bash
npm run pages:build
npm run pages:deploy
\`\`\`

**Local Development:**
\`\`\`bash
npm run dev
\`\`\`

**Worker Development:**
\`\`\`bash
npm run worker:dev
\`\`\`

## Build Process

The build process:
1. Runs `next build` to create the Next.js production build
2. Uses `@cloudflare/next-on-pages` to convert the build for Cloudflare Workers
3. Outputs the worker-compatible files to `.vercel/output/static/`

## Configuration

- **Next.js Config:** Configured for static export with image optimization disabled
- **Wrangler Config:** Set up for Cloudflare Workers deployment
- **Build Command:** `npm run cf:build` for Cloudflare compatibility

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. The Next.js app is built and converted to a Cloudflare Worker
3. Static assets are served from Cloudflare's edge network
4. Dynamic functionality runs on Cloudflare Workers
