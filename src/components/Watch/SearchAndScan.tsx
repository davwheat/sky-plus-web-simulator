import { timeState } from '@atoms/timeState'
import ColorButton from '@components/ControlVisualisers/ColorButton'
import ControlArrows from '@components/ControlVisualisers/ControlArrows'
import Colors from '@data/Colors'
import type { Channel } from '@data/epg/AllChannels'
import getProgrammeListingForSID, { Programme } from '@data/getEpg'
import { makeStyles } from '@material-ui/core'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import dayjsUtc from 'dayjs/plugin/utc'
import dayjsTz from 'dayjs/plugin/timezone'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsTz)

interface Props {
  channel: Channel
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 100,
    width: '80%',
    bottom: 48,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
  },
  header: {
    color: Colors.main,
    fontFamily: 'Zurich',
    fontSize: 22,
    padding: '0 4px',
    paddingLeft: 6,
    display: 'flex',
    borderBottom: `4px solid ${Colors.mainFadedText}`,
    height: 32,
  },
  headerTime: {
    marginLeft: 'auto',
    color: Colors.mainFadedText,
  },
  main: {
    padding: '4px 0',
    paddingLeft: 48,
    background: Colors.mainFaded,
    fontSize: 22,
    height: '2.75em',
    display: 'grid',
    gridTemplateColumns: '18fr 82fr',
    gridTemplateRows: '1fr 1fr',
    fontFamily: 'ZurichBT',
    gap: 6,
    lineHeight: 1,
    '& > *': {
      '&': {
        textOverflow: 'ellipsis',
      },
      'text-overflow': '".."',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
  footer: {
    color: Colors.main,
    fontFamily: 'Zurich',
    fontSize: 22,
    borderTop: `4px solid ${Colors.mainFadedText}`,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: 32,
    paddingLeft: 6,
    alignItems: 'end',
  },
  controlArrow: {
    fontSize: 22,
    position: 'absolute',
    transform: 'translateY(0.5px)',

    '& + span': {
      marginLeft: '1.7em',
    },
  },
  footerSection: {
    position: 'relative',
    maxHeight: '100%',

    '& > $footerLabel': {
      display: 'inline-block',
      transform: 'translateY(-2px)',
    },
  },
  footerLabel: {},
  now: {
    color: '#fff',
  },
  later: {
    color: Colors.mainFadedText,
  },
  noInfo: {
    color: Colors.yellowText,
    gridColumn: '1 / span 2',
  },
})

export default function SearchAndScan({ channel }: Props) {
  const classes = useStyles()
  const { time } = useRecoilValue(timeState)
  const [programmeInfo, setProgrammeInfo] = useState<null | false | Programme[]>(null)

  useEffect(() => {
    const abortController = new AbortController()

    if (programmeInfo === null) {
      getProgrammeListingForSID(channel.sid, { abortController })
        .then(listing => {
          const currentProgrammeIndex = listing.schedule.findIndex(
            programme =>
              programme.startTime <= time.toDate().getTime() && programme.startTime + programme.duration * 1000 >= time.toDate().getTime(),
          )

          if (currentProgrammeIndex === -1) {
            setProgrammeInfo(false)
          } else {
            setProgrammeInfo([listing.schedule[currentProgrammeIndex], listing.schedule?.[currentProgrammeIndex + 1]].filter(Boolean))
          }
        })
        .catch(e => {
          if (e.name === 'AbortError') return

          console.error(e)
        })
    }

    return () => {
      abortController.abort()
    }
  })

  const noInfoMessage = <span className={classes.noInfo}>Further schedule information is not available</span>

  return (
    <aside className={classes.root}>
      <div className={classes.header}>
        <span style={{ width: `${channel.channelNumber.length + 0.5}ch` }}>{channel.channelNumber}</span>
        <span>{channel.name}</span>
        <span className={classes.headerTime}>{time.format('h.mma ddd D MMM')}</span>
      </div>
      <div className={classes.main}>
        {programmeInfo?.[0] && (
          <>
            <span className={classes.now}>NOW</span>
            <span className={classes.now}>{(programmeInfo[0] as Programme).title}</span>
          </>
        )}
        {programmeInfo?.[1] ? (
          <>
            <span className={classes.later}>{dayjs(programmeInfo[1].startTime).tz('Europe/London').format('h.mma')}</span>
            <span className={classes.later}>{(programmeInfo[1] as Programme).title}</span>
          </>
        ) : (
          noInfoMessage
        )}
        {programmeInfo === false && noInfoMessage}
      </div>
      <div className={classes.footer}>
        <div className={classes.footerSection}>
          <ControlArrows className={classes.controlArrow} variant="horizontal" />
          <span className={classes.footerLabel}>Time</span>
        </div>
        <div className={classes.footerSection}>
          <ControlArrows className={classes.controlArrow} variant="vertical" />
          <span className={classes.footerLabel}>Channel</span>
        </div>
        <div className={classes.footerSection}>
          <ColorButton buttonColor="yellow" />
          <span className={classes.footerLabel}>Messages</span>
        </div>
        <div className={classes.footerSection}>
          <ColorButton buttonColor="blue" />
          <span className={classes.footerLabel}>Favourite</span>
        </div>
      </div>
    </aside>
  )
}
