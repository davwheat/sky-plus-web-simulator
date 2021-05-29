import { timeState } from '@atoms'
import Colors from '@data/Colors'
import { makeStyles, NoSsr } from '@material-ui/core'
import React from 'react'
import { useRecoilValue } from 'recoil'

const useHeaderStyles = makeStyles({
  root: {
    fontFamily: 'Zurich',
    fontWeight: 700,
    color: Colors.accent,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 11,
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

interface Props {
  heading: string
}

const TitleHeader: React.FC<Props> = ({ heading }) => {
  const { time } = useRecoilValue(timeState)
  const timeText = time.format('h.mma ddd D MMM')

  const classes = useHeaderStyles()

  return (
    <NoSsr>
      <div className={classes.root}>
        <p className={classes.date}>{timeText}</p>
        <h1 className={classes.title}>{heading}</h1>
      </div>
    </NoSsr>
  )
}

export default TitleHeader
