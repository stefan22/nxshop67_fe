/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  loader: 'https://cloudinary.com', // wrkng √
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com']
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    //force swc next cause of babelrc
    forceSwcTransform: true
  },
  env: {
    GQL_PRODUCT_ENDPOINT_PROD: 'http://localhost:3000/api/graphql',
    GQL_PRODUCT_ENDPOINT_DEV: process.env.GQL_PRODUCT_ENDPOINT_DEV,
    FRONTEND_URL: process.env.FRONTEND_URL
  },
  perPage: 5 // 5 items w/pagination
}

module.exports = nextConfig
