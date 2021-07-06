import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import ControlText from '@components/ControlVisualisers/ControlText'
import ErrorMessage from '@components/ErrorMessage'
import RecordButton from '@components/RecordButton'
import { Genres } from '@constants/Genres'
import Colors from '@data/Colors'
import { getChannelAtIndex, getChannelNumberFromNumberPlusN, getFirstChannelNumber, getNChannelsFromNumber } from '@data/epg/AllChannels'
import usePrevious from '@hooks/usePrevious'
import { makeStyles, NoSsr } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import ColorButtonsFooter from '../Footer/ColorButtonsFooter'
import EpgChannel from './epgChannel'
import TimingHeaders from './timingHeaders'

interface Props {
  firstChannel: string
  /**
   * Optional number to filter by genre.
   */
  genreFilter?: Genres
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
  },
  rootWithListArrows: {
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
  noChannelsErrorMsg: {
    gridColumn: '1 / -1',
    gridRow: '2 / -1',
    justifySelf: 'center',
    alignSelf: 'center',
    width: '100%',
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

const Channels: React.FC<Props> = ({ firstChannel, genreFilter }) => {
  const classes = useStyles()
  const [startingChannel, setStartingChannel] = useState(firstChannel)

  const prevSettings = usePrevious(`${startingChannel}__${genreFilter}`)
  const [channelsOnPage, setChannelsOnPage] = useState([])

  useEffect(() => {
    if (prevSettings !== `${startingChannel}__${genreFilter}`) {
      const data = getNChannelsFromNumber(startingChannel, CHANNELS_PER_PAGE, genreFilter)

      setChannelsOnPage(data)
    }
  })

  function changePage(change: 1 | -1) {
    setStartingChannel(first => {
      let newStart = getChannelNumberFromNumberPlusN(first, change * CHANNELS_PER_PAGE, genreFilter)

      // If the start channel matches the current, we're at the end of the list, so
      // let's wrap to the other side.
      if (newStart === first) {
        if (change === 1) {
          // down a page
          newStart = getChannelAtIndex(0, genreFilter)?.channelNumber || getFirstChannelNumber(genreFilter) || '101'
        } else {
          // up a page
          newStart = getChannelAtIndex(-1, genreFilter)?.channelNumber || getFirstChannelNumber(genreFilter) || '101'
        }
      }

      if (window.history.replaceState) {
        updateBrowserUrl(newStart, genreFilter)
      }

      return newStart
    })
  }

  const noChannels = !channelsOnPage || channelsOnPage.length === 0

  return (
    <>
      <section className={clsx(classes.root, !noChannels && classes.rootWithListArrows)}>
        <TimingHeaders />

        <NoSsr>
          {channelsOnPage?.map(channel => (
            <EpgChannel key={channel.sid} channel={channel} />
          ))}

          {noChannels && (
            <ErrorMessage errorCode={null} className={classes.noChannelsErrorMsg} controlPrompt controlPromptAction="cancel">
              <br />
              There are no services of this type available.
            </ErrorMessage>
          )}
        </NoSsr>
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
        buttonsText={noChannels ? {} : { red: 'Page Up', green: 'Page Down', yellow: '+24 Hours', blue: '–24 Hours' }}
      />

      <p className={classes.controlPrompt}>
        {!noChannels && (
          <>
            Press <ControlText className={classes.controlText}>SELECT</ControlText> to view or <RecordButton /> to record
          </>
        )}
      </p>
    </>
  )
}

export default Channels
