/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ← ADD THIS LINE for Netlify
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