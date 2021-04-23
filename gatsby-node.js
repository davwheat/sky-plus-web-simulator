const path = require('path')

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
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@atoms': path.resolve(__dirname, 'src/atoms'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@wrappers': path.resolve(__dirname, 'src/wrappers'),
      },
    },
  })
}
