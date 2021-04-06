const prodPlugins = process.env.NODE_ENV === 'production' ? [`gatsby-plugin-preact`] : []

module.exports = {
  siteMetadata: {
    title: 'Sky Digibox Simulator',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-layout`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/sky-logo.png',
      },
    },
    ...prodPlugins,
  ],
}
