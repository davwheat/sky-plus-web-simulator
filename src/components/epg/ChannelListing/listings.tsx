import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import ControlText from '@components/ControlText'
import Colors from '@data/Colors'
import { getChannelNumberFromNumberPlusN, getNChannelsFromNumber } from '@data/epg/AllChannels'
import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ColorButtonsFooter from '../Footer/ColorButtonsFooter'
import EpgChannel from './epgChannel'
import TimingHeaders from './timingHeaders'

interface Props {
  firstChannel: string
  /**
   * Optional number to filter by genre.
   */
  genreFilter?: number
}

const CHANNELS_PER_PAGE = 10
const HOURS_PER_PAGE = 1.5
const MINUTES_PER_PAGE = HOURS_PER_PAGE * 60

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'grid',

    // Grid column span is used to give programmes the right duration.
    // A span of `10` would equate to a width equal to 10 minutes.
    //
    // This is done by creating 90 columns of width `1fr`, so we have 90
    // columns of equal width.
    gridTemplateColumns: `33% 2px repeat(${MINUTES_PER_PAGE}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${CHANNELS_PER_PAGE + 1}, calc(1em + 6px))`,
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    gap: 4,
    overflow: 'visible',
    fontFamily: 'Zurich',
    fontStretch: 'condensed',
    fontSize: 24,
    marginTop: -4,

    '&::after, &::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 24,
      width: 32,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${MenuMoreArrowSvg})`,
      right: 0,
      transformOrigin: 'center',
    },

    '&::after': {
      bottom: 0,
      transform: 'translateY(100%)',
    },

    '&::before': {
      // Row height + row gap
      top: 30 + 4,
      transform: 'translateY(-100%) rotate(0.5turn)',
    },
  },
  colorButtons: {
    position: 'static',
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    marginTop: 16,
  },
  controlPrompt: {
    fontFamily: 'ZurichBT',
    color: Colors.accent,
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    fontSize: 24,
    marginTop: 8,
  },
  controlText: {
    fontSize: 20,
  },
})

function updateBrowserUrl(startingChannel: string, genreFilter: number | null) {
  const newURL = new URL(window.location.href)
  newURL.search = '?start=' + startingChannel

  if (genreFilter !== null) {
    newURL.search = newURL.search + '&genre=' + genreFilter
  }

  window.history.replaceState({ path: newURL.href }, '', newURL.href)
}

// Music starts unmuted in firefox
// Browser decides what to do based on what it thinks the user wants. Chrome will autostart if you have interacted with the page "enough" in the past... it's verryyyy weird
const Channels: React.FC<Props> = ({ firstChannel, genreFilter }) => {
  const classes = useStyles()
  const [startingChannel, setStartingChannel] = useState(firstChannel)

  const channelsOnPage = getNChannelsFromNumber(startingChannel, CHANNELS_PER_PAGE)

  console.log('firstChannel', firstChannel)
  console.log('genre', genreFilter)

  function changePage(change: 1 | -1) {
    setStartingChannel(first => {
      const newStart = getChannelNumberFromNumberPlusN(first, change * CHANNELS_PER_PAGE)

      if (window.history.replaceState) {
        updateBrowserUrl(newStart, genreFilter)
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
        className={classes.colorButtons}
        buttonPressHandler={btn => {
          if (btn === 'red') {
            changePage(-1)
          } else if (btn === 'green') {
            changePage(+1)
          }
        }}
        buttonsText={{ red: 'Page Up', green: 'Page Down', yellow: '+24 Hours', blue: '–24 Hours' }}
      />

      <p className={classes.controlPrompt}>
        Press <ControlText className={classes.controlText}>SELECT</ControlText> to view
      </p>
    </>
  )
}

export default Channels
