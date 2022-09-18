/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    swcMinifyDebugOptions: {
      compress: {
        defaults: true,
        side_effects: false
      }
    }
  },
  compiler: {}
}

module.exports = nextConfig
