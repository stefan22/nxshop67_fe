/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com']
  },
  compiler: {
    styledComponents: true
  },
  env: {
    GQL_PRODUCT_ENDPOINT_PROD: 'http://localhost:3000/api/graphql',
    GQL_PRODUCT_ENDPOINT_DEV: process.env.GQL_PRODUCT_ENDPOINT_DEV,
    FRONTEND_URL: process.env.FRONTEND_URL
  }
}

module.exports = nextConfig
