/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bloodstar.xyz',
        port: '',
        pathname: '/p/mate234/**',
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
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/wonhyo-e/botc-translations/blob/main/assets/**',
        search: '',
      },
    ],
    minimumCacheTTL: 60 * 60,
  },
};

module.exports = nextConfig;
