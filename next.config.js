const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/u
});

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
});
