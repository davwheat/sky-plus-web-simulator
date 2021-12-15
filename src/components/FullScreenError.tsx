import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage'

const useStyles = makeStyles({
  root: {
    background: Colors.accent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBox: {
    width: '80%',
    overflow: 'hidden',
    maxHeight: '80%',
  },
  messageBoxHeader: {
    background: Colors.yellowMain,
    color: Colors.main,
    textTransform: 'uppercase',
    lineHeight: '29px',
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',
  },
  messageBoxErrorCode: {
    position: 'absolute',
    right: 4,
  },
  messageBoxContent: {
    padding: 4,
    paddingBottom: 0,
    fontFamily: 'ZurichBT',
    background: Colors.mainLight,
    color: Colors.mainText,
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: '32px',
  },
})

/**
 * Displays a full-screen Sky error message using the props provided.
 */
const FullScreenError = ({ ...props }: ErrorMessageProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ErrorMessage {...props} />
    </div>
  )
}

export default FullScreenError
