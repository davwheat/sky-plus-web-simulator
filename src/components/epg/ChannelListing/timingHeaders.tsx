import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Colors from '../../../data/Colors'
import { formatTimingHeader, getScheduleStartTime } from '../../../helpers/timeFormattings'

const useStyles = makeStyles({
  timingHeader: {
    color: Colors.accent,
    lineHeight: 1.25,

    '&:first-child': { textAlign: 'right' },
    '&:not(:first-child)': {
      gridColumnEnd: 'span 30',
    },
  },
})

const TimingHeaders: React.FC = () => {
  const [scheduleBeginTime, setScheduleBeginTime] = useState(getScheduleStartTime)
  const classes = useStyles()

  useEffect(() => {
    const interval = setInterval(() => {
      setScheduleBeginTime(getScheduleStartTime)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [getScheduleStartTime, setScheduleBeginTime])

  return (
    <>
      <span className={classes.timingHeader}>Today</span>
      {/* Spacer */}
      <span />
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleBeginTime)}</span>
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleBeginTime.add(30, 'minutes'))}</span>
      <span className={classes.timingHeader}>{formatTimingHeader(scheduleBeginTime.add(60, 'minutes'))}</span>
    </>
  )
}

export default TimingHeaders
