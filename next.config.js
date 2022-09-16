require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  // fixes page rendering issues on page refresh in nextjs/webpack5
  webpack5: true,
  env: {
    BASE_URL: process.env.FRONTEND_URL || 'http://localhost:3003'
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    },
    experimental: {
      // swcPlugins: [['next-superjson-plugin', {}]],
      //experimentalDecorators: true,
      // styledComponents: true
    }
  }
}

module.exports = nextConfig
