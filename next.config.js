const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/u,
    options: {
        hastPlugins: [rehypePrism],
    },
});

module.exports = withMDX({
    pageExtensions: ['js', 'mdx'],
    webpack: (config, {isServer}) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    },
});
