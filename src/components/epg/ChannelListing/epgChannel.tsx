import { scheduleTimeState } from '@atoms'
import Colors from '@data/Colors'
import { Channel } from '@data/epg/AllChannels'
import streamData from '@data/epg/streams/Streams'
import getProgrammeListingForSID, { EPGChannelListing, Programme } from '@data/getEpg'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import dayjs from 'dayjs'
import dayJsIsBetween from 'dayjs/plugin/isBetween'
import { navigate } from 'gatsby'
import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Programmes from './programmes'
import dayjsUtc from 'dayjs/plugin/utc'
import dayjsTz from 'dayjs/plugin/timezone'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsTz)
dayjs.extend(dayJsIsBetween)

interface Props {
  channel: Channel
}

const useStyles = makeStyles({
  item: {
    padding: '3px 4px',
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
    lineHeight: 1,
    cursor: 'not-allowed',

    '&[data-has-stream=true]': {
      cursor: 'pointer',
    },

    '&:hover, &:focus': {
      // Highlight channel's active programme
      '&, & ~ $programme[data-active-programme=true]:not(& ~ $programme[data-active-programme=true] ~ $programme[data-active-programme=true]):not($channelName:hover + span + [data-nolistings=true] ~ $programme[data-active-programme=true])':
        {
          background: Colors.yellowMain,
          color: Colors.main,
        },
    },
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
    lineHeight: 1,
  },
  noListings: {
    background: Colors.mainFaded,
    color: Colors.mainFadedText,
  },
})

function getEventsForNext90Minutes(startTime: dayjs.Dayjs, events: Programme[]): Programme[] {
  return events.filter(event => {
    const diff = dayjs(event.startTime).tz('Europe/London').diff(startTime, 'minutes')
    const diff2 = dayjs(event.startTime + event.duration * 1000)
      .tz('Europe/London')
      .diff(startTime, 'minutes')
    const ongoing = dayjs(startTime)
      .tz('Europe/London')
      .isBetween(event.startTime, event.startTime + event.duration * 1000, 'minutes', '()')

    return (diff >= 0 && diff < 90) || (diff2 > 0 && diff2 < 90) || ongoing
  })
}

const EpgChannel: React.FC<Props> = ({ channel }) => {
  const classes = useStyles()

  const { scheduleStartTime } = useRecoilValue(scheduleTimeState)
  const [programmeListings, setProgrammeListings] = useState<EPGChannelListing>(null)

  const eventsWeCareAbout = useMemo(() => {
    if (!programmeListings) {
      return null
    }

    return getEventsForNext90Minutes(scheduleStartTime, programmeListings.schedule)
  }, [getEventsForNext90Minutes, scheduleStartTime, programmeListings])

  useEffect(() => {
    if (programmeListings) return

    const abortController = new AbortController()

    getProgrammeListingForSID(String(channel.sid), {
      abortController,
    })
      .then(listings => {
        setProgrammeListings(listings)
      })
      .catch(() => {})

    return () => {
      abortController.abort()
    }
  }, [programmeListings, getProgrammeListingForSID, channel])

  const streamDetails = streamData.find(stream => stream.name === channel.name)

  function browseToStream() {
    if (!streamDetails) return

    navigate(`/watch-channel/${channel.channelNumber}`)
  }

  return (
    <>
      <span data-has-stream={!!streamDetails} role="button" className={clsx(classes.channelName, classes.item)} onClick={browseToStream}>
        <span className={classes.channelNumber}>{channel.channelNumber}</span>
        {channel.name}
      </span>

      {/* Spacer */}
      <span />

      {!programmeListings && !eventsWeCareAbout && <span aria-hidden style={{ gridColumnEnd: 'span 90' }} />}
      {programmeListings && eventsWeCareAbout && <Programmes className={clsx(classes.programme, classes.item)} programmes={eventsWeCareAbout} />}
      {programmeListings && !eventsWeCareAbout?.length && (
        <span data-nolistings className={clsx(classes.programme, classes.noListings, classes.item)} style={{ gridColumnEnd: 'span 90' }}>
          ..no listings available
        </span>
      )}
    </>
  )
}

export default EpgChannel
