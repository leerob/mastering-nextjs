const rehypePrism = require('@mapbox/rehype-prism');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/u,
    options: {
        hastPlugins: [rehypePrism]
    }
});

module.exports = withCSS(
    withMDX({
        experimental: {
            modern: true
        },
        pageExtensions: ['js', 'mdx']
    })
);
