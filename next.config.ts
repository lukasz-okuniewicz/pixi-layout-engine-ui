import path from 'node:path'
import type { NextConfig } from 'next'

const layoutEnginePath = path.resolve(__dirname, '../pixi-layout-engine')

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['pixi-layout-engine'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'pixi-layout-engine': layoutEnginePath,
    }
    return config
  },
}

export default nextConfig
