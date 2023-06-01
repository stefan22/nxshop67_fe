require('dotenv').config()
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com']
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // can't resolve fs module on the client
      config.resolve.fallback = {
        fs: false
      }
    }
    return config
  }
}
