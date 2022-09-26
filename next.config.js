/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  env: {
    GQL_PRODUCT_ENDPOINT_PROD:
      process.env.GQL_PRODUCT_ENDPOINT_PROD || '',
    GQL_PRODUCT_ENDPOINT_DEV: process.env.GQL_PRODUCT_ENDPOINT_DEV,
    FRONTEND_URL_DEV: process.env.FRONTEND_URL_DEV
  }
}

module.exports = nextConfig
