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
  publicRuntimeConfig: {
    // passing env to pgs (env set to 5/ default val 2)
    GQL_PER_PAGE: process.env.GQL_PER_PAGE,
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL: process.env.BACKEND_URL
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
