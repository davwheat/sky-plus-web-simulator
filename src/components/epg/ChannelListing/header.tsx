import { makeStyles } from '@material-ui/core'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import Colors from '../../../data/Colors'

const useHeaderStyles = makeStyles({
  root: {
    fontFamily: 'Zurich',
    fontWeight: 700,
    color: Colors.accent,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginTop: 20,
  },
  date: {
    fontStretch: 'condensed',
    fontSize: 24,
  },
  title: {
    fontStretch: 'expanded',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    fontSize: 28,
  },
})

function getEpgTime() {
  return dayjs().format('h:mma ddd D MMM')
}

const ProgrammeListingHeaderContent: React.FC = () => {
  const [timeText, setTimeText] = useState(getEpgTime())
  const classes = useHeaderStyles()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeText(getEpgTime())
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className={classes.root}>
      <p className={classes.date}>{timeText}</p>
      <h1 className={classes.title}>All channels</h1>
    </div>
  )
}

export default ProgrammeListingHeaderContent
