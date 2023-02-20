/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com']
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    //force swc next cause of babelrc
    forceSwcTransform: true
  },
  perPage: 5 // 5 items w/pagination
}

module.exports = nextConfig
