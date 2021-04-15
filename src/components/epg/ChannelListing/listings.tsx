import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { getChannelNumberFromNumberPlusN, getNChannelsFromNumber } from '../../../data/epg/AllChannels'
import ColorButtonsFooter from '../Footer/ColorButtonsFooter'
import EpgChannel from './epgChannel'
import TimingHeaders from './timingHeaders'

interface Props {
  firstChannel: string
}

const CHANNELS_PER_PAGE = 10
const HOURS_PER_PAGE = 1.5
const MINUTES_PER_PAGE = HOURS_PER_PAGE * 60

const useStyles = makeStyles({
  root: {
    display: 'grid',

    // Grid column span is used to give programmes the right duration.
    // A span of `10` would equate to a width equal to 10 minutes.
    //
    // This is done by creating 90 columns of width `1fr`, so we have 90
    // columns of equal width.
    gridTemplateColumns: `33% 4px repeat(${MINUTES_PER_PAGE}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${CHANNELS_PER_PAGE + 1}, calc(1em + 8px))`,
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    gap: 4,
    overflow: 'hidden',
    fontFamily: 'Zurich',
    fontStretch: 'condensed',
    fontSize: 24,
  },
})

const Channels: React.FC<Props> = ({ firstChannel }) => {
  const classes = useStyles()
  const [startingChannel, setStartingChannel] = useState(firstChannel)

  const channelsOnPage = getNChannelsFromNumber(startingChannel, CHANNELS_PER_PAGE)

  function changePage(change: 1 | -1) {
    let newStartingChannel = 0

    setStartingChannel(first => {
      const newStart = getChannelNumberFromNumberPlusN(first, change * CHANNELS_PER_PAGE)

      if (window.history.replaceState) {
        const newURL = new URL(window.location.href)
        newURL.search = '?start=' + newStart
        window.history.replaceState({ path: newURL.href }, '', newURL.href)
      }

      return newStart
    })
  }

  return (
    <>
      <section className={classes.root}>
        <TimingHeaders />

        {channelsOnPage && channelsOnPage.map(channel => <EpgChannel key={channel.sid} channel={channel} />)}
      </section>
      <ColorButtonsFooter
        buttonPressHandler={btn => {
          if (btn === 'red') {
            changePage(-1)
          } else if (btn === 'green') {
            changePage(+1)
          }
        }}
        buttonsText={{ red: 'Page Up', green: 'Page Down', yellow: '+24 Hours', blue: '-24 Hours' }}
      />
    </>
  )
}

export default Channels
