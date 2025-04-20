/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv')

// Carrega .env.local da raiz do monorepo
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

const nextConfig = {
  reactStrictMode: true,     // melhores práticas React
  // Next 13.2+ — transpila packages fora de apps/web
  transpilePackages: [
    '@salesedge/database',
    '@repo/ui'
  ],
  // Permite importar de fora da pasta web
  experimental: {
    externalDir: true,
    turbo: true             // ativa Turbopack se passar --turbopack
  },
  webpack(config) {
    // Mapeia seus aliases para o caminho físico
    config.resolve.alias = {
      ...config.resolve.alias,
      '@salesedge/database': path.resolve(__dirname, '../../packages/database/src'),
      '@repo/ui':               path.resolve(__dirname, '../../packages/ui/src')
    }
    return config
  },
  // Expõe variáveis de ambiente p/ o browser, se precisar
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  },
  typescript: {
    // garante que erro de tipo bloqueie o build
    ignoreBuildErrors: false
  },
  images: {
    // se for usar <Image> e precisar de domínios externos
    domains: ['your.cdn.com']
  }
}

module.exports = nextConfig
