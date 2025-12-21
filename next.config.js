/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bloodstar.xyz',
        port: '',
        pathname: '/p/mate234/1/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.bloodstar.xyz',
        port: '',
        pathname: '/p/mate234/2/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'botc.app',
        port: '',
        pathname: '/assets/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    minimumCacheTTL: 60 * 60,
  },
};

module.exports = nextConfig;
