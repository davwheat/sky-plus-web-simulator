import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const BUTTON_SIZE = '0.8em'

const useStyles = makeStyles({
  root: {
    background: 'currentColor',
    display: 'inline-block',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    verticalAlign: 'middle',
    transform: 'translateY(-0.125em)',
    marginRight: 6,
  },
})

interface ColorButtonProps {
  buttonColor: SkyColorButton
  className?: string
}

const ColorButton = ({ buttonColor, className }: ColorButtonProps) => {
  const classes = useStyles()

  return (
    <span
      aria-label={`${buttonColor} button graphic`}
      className={clsx(classes.root, className)}
      style={{ color: Colors.coloredButtons[buttonColor] }}
    />
  )
}

export default ColorButton
