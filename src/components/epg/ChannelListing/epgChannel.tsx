import { scheduleTimeState } from '@atoms'
import Colors from '@data/Colors'
import { Channel } from '@data/epg/AllChannels'
import getProgrammeListingForSID, { EPGChannelListing, Programme } from '@data/getEpg'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import dayjs from 'dayjs'
import dayJsIsBetween from 'dayjs/plugin/isBetween'
import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Programmes from './programmes'

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
    const diff = dayjs(event.startTime).diff(startTime, 'minutes')
    const diff2 = dayjs(event.startTime + event.duration * 1000).diff(startTime, 'minutes')
    const ongoing = dayjs(startTime).isBetween(event.startTime, event.startTime + event.duration * 1000, 'minutes', '()')

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

  channel.channelNumber === '916' && programmeListings && console.log(programmeListings, eventsWeCareAbout, eventsWeCareAbout.length === 0)

  return (
    <>
      <span className={clsx(classes.channelName, classes.item)}>
        <span className={classes.channelNumber}>{channel.channelNumber}</span>
        {channel.name}
      </span>

      {/* Spacer */}
      <span />

      {!programmeListings && !eventsWeCareAbout && <span aria-hidden style={{ gridColumnEnd: 'span 90' }} />}
      {programmeListings && eventsWeCareAbout && <Programmes className={clsx(classes.programme, classes.item)} programmes={eventsWeCareAbout} />}
      {programmeListings && eventsWeCareAbout && eventsWeCareAbout.length === 0 && (
        <span className={clsx(classes.programme, classes.noListings, classes.item)} style={{ gridColumnEnd: 'span 90' }}>
          ..no listings available
        </span>
      )}
    </>
  )
}

export default EpgChannel
