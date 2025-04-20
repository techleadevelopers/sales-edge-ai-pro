import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

/** @type {import('next').NextConfig} */
export default {
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
