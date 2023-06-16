/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:5555/:path*",
      }
    ];
  };
  return {
    rewrites,
  },
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
};

// module.exports = nextConfig
