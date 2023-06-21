/** @type {import('next').NextConfig} */
const nextConfig = {   reactStrictMode: true, }
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.com',
      },
      {
        protocol: 'https',
        hostname: '**.photos', 
      }
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost/:path*',
      }
    ]
  }
}

