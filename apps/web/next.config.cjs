/** @type {import('next').NextConfig} */
const path   = require('path');
const dotenv = require('dotenv');

// Carrega .env.local da raiz
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@salesedge/database', '@repo/ui'],
  experimental: { externalDir: true },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@salesedge/database': path.resolve(__dirname, '../../packages/database/src'),
      '@repo/ui':            path.resolve(__dirname, '../../packages/ui/src')
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  typescript: { ignoreBuildErrors: false },
  images: { domains: ['your.cdn.com'] }
};
