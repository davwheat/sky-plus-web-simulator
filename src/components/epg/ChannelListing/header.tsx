import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { timeState } from '../../../atoms/timeState'
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

const ProgrammeListingHeaderContent: React.FC = () => {
  const { time } = useRecoilValue(timeState)
  const timeText = time.format('h:mma ddd D MMM')

  const classes = useHeaderStyles()

  return (
    <div className={classes.root}>
      <p className={classes.date}>{timeText}</p>
      <h1 className={classes.title}>All channels</h1>
    </div>
  )
}

export default ProgrammeListingHeaderContent
