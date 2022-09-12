require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.FRONTEND_URL || 'http://localhost:3003'
  }
}

module.exports = nextConfig
