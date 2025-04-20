// apps/web/next.config.js
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

/** 
 * Gera um __dirname compatível com ESM
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Carrega .env.local da raiz do monorepo
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@salesedge/database', '@repo/ui'],
  experimental: {
    externalDir: true
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@salesedge/database': path.resolve(__dirname, '../../packages/database/'),
      '@repo/ui': path.resolve(__dirname, '../../packages/ui/src')
    }
    return config
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    domains: ['your.cdn.com']
  }
}

export default nextConfig
