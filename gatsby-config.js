module.exports = {
  siteMetadata: {
    title: "Sky Digibox Simulator",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
