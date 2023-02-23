const dotenv = require('dotenv').config()
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
  publicRuntimeConfig: {
    // passing env to pgs (env set to 5/ default val 2)
    GQL_PER_PAGE: process.env.GQL_PER_PAGE,
    PRODUCTION_URL: process.env.PRODUCTION_URL
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
