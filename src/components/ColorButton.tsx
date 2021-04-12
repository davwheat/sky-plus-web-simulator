import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import Colors from '../data/Colors'

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

const ColorButton: React.FC<ColorButtonProps> = ({ buttonColor, className }) => {
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
