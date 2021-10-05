/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resources',
        destination: 'https://github.com/vercel/next.js/discussions/29628',
        permanent: true,
      },
    ];
  },
};
