require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
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
      swcPlugins: [['next-superjson-plugin', {}]],
      experimentalDecorators: true
    }
  }
}

module.exports = nextConfig
