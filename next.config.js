/** @type {import('next').NextConfig} */
const nextConfig = {   reactStrictMode: true, 
  rewrites: async () => {
    return [
    {
        source: '/api/:path*',
        destination:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5555/api/:path*'
            : '/api/',
    },
    ]
  },
}
const path = require('path')

module.exports = nextConfig,
  {
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
}


