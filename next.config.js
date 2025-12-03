/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig