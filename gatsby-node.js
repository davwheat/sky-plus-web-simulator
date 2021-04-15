exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(ogg)$/i,
          type: 'asset/resource',
        },
      ],
    },
  })
}
