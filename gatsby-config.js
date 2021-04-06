const prodPlugins = process.env.NODE_ENV === 'production' ? [`gatsby-plugin-preact`] : []

module.exports = {
  siteMetadata: {
    title: 'Sky Digibox Simulator',
    description: 'A web simulation of the old Sky Digibox electronic programme guide (EPG).',
    author: `@davwheat`,
    siteUrl: `https://sky-epg.davwheat.dev`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-layout`,
    `gatsby-plugin-less`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/sky-logo.png',
      },
    },
    ...prodPlugins,
  ],
}
