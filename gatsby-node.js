const allStreams = require('./src/data/epg/streams/uk-m3u-streams.json')
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
        '@constants': path.resolve(__dirname, 'src/constants'),
      },
    },
  })
}

const channelList = require('./src/data/epg/channelList.json')

function getAllChannels() {
  return Object.values(channelList)
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const allChannels = getAllChannels()

  const channelsWithStreams = allStreams.reduce((channels, streamData) => {
    const streamChannels = allChannels.filter(channel => streamData.name === channel.name)

    if (streamChannels.length) {
      streamChannels.forEach(channel => {
        channels.push({
          channel,
          streamData,
        })
      })
    }

    return channels
  }, [])

  channelsWithStreams.forEach(({ channel, streamData }) => {
    createPage({
      path: `/watch-channel/${channel.channelNumber}`,
      component: path.resolve(`./src/components/Watch/WatchChannelPage.tsx`),
      context: { channel, streamData },
    })
  })
}
