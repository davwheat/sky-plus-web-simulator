import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Colors from '../../../data/Colors'
import { getChannelNumberFromNumberPlusN, getNChannelsFromNumber } from '../../../data/epg/AllChannels'
import ColorButtonsFooter from '../Footer/ColorButtonsFooter'
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
  channelNumber: {
    width: '3ch',
    marginRight: 4,
  },
  channelName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: '".."',
    color: '#fff',
    background: Colors.main,
    padding: '4px 8px',
    lineHeight: 1,
  },

  programme: {
    '&': {
      // Fallback value for Chrome
      textOverflow: 'ellipsis',
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: '".."',
    color: '#fff',
    background: Colors.main,
    padding: '4px 8px',
    lineHeight: 1,
    gridColumnEnd: `var(--duration)`,
  },
})

const Channels: React.FC<Props> = ({ firstChannel }) => {
  const classes = useStyles()
  const [startingChannel, setStartingChannel] = useState(firstChannel)

  const channelsOnPage = getNChannelsFromNumber(startingChannel, CHANNELS_PER_PAGE)

  function changePage(change: 1 | -1) {
    setStartingChannel(first => getChannelNumberFromNumberPlusN(first, change * CHANNELS_PER_PAGE))
  }

  return (
    <>
      <section className={classes.root}>
        <TimingHeaders />

        {channelsOnPage &&
          channelsOnPage.map(channel => (
            <React.Fragment key={channel.sid}>
              <span className={classes.channelName}>
                <span className={classes.channelNumber}>{channel.channelNumber}</span>
                {channel.name}
              </span>

              {/* Spacer */}
              <span />

              <span style={{ ['--duration' as any]: 'span 30' }} className={classes.programme}>
                Programme A
              </span>
              <span style={{ ['--duration' as any]: 'span 45' }} className={classes.programme}>
                Programme B
              </span>
              <span style={{ ['--duration' as any]: 'span 15' }} className={classes.programme}>
                Programme C
              </span>
            </React.Fragment>
          ))}
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
