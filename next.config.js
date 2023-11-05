/** @type {import('next').NextConfig} */
const nextConfig = {// skip linting & type checking
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '/content/v1/**',
      },
    ],
  },
}

module.exports = nextConfig
