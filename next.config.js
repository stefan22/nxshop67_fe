/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    experimental: {
      swcPlugins: [['next-superjson-plugin', {}]],
      experimentalDecorators: true
    }
  }
}

module.exports = nextConfig
