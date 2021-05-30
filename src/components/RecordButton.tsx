import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const BUTTON_SIZE = '1.2em'

const useStyles = makeStyles({
  root: {
    background: Colors.coloredButtons.red,
    color: '#fff',
    display: 'inline-flex',
    lineHeight: BUTTON_SIZE,
    justifyContent: 'center',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    verticalAlign: 'middle',
    transform: 'translateY(-0.125em)',
    border: '2px solid #fff',
    borderRadius: '50%',
    fontSize: '0.95em',
  },
  inner: {
    transform: 'translateY(-0.075em)',
    fontSize: '0.95em',
  },
})

interface RecordButtonProps {
  className?: string
}

const RecordButton: React.FC<RecordButtonProps> = ({ className }) => {
  const classes = useStyles()
  return (
    <span aria-label="record button" className={clsx(classes.root, className)}>
      <span className={classes.inner}>R</span>
    </span>
  )
}

export default RecordButton
