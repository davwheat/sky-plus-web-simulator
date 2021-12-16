import ArrowSvg from '@assets/icons/list-arrow.inline.svg'
import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    background: Colors.main,
    padding: 0,
    fontFamily: 'ZurichBT',
    fontWeight: 'bold',
    fontSize: 18,
    verticalAlign: 'middle',
    transform: 'translateY(-0.1em)',
  },
  vertical: {
    flexDirection: 'column',

    '& > svg': {
      height: '0.6em',

      '&:first-child': {
        transformOrigin: 'center',
        transform: 'rotate(0.5turn)',
        marginBottom: 2,
      },
      '&:last-child': {},
    },
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '1.3em',

    '& > svg': {
      height: '0.6em',
      transformOrigin: 'center',

      '&:first-child': {
        transform: 'rotate(90deg)',
        marginLeft: '-0.25em',
      },
      '&:last-child': {
        transform: 'rotate(-90deg)',
        marginLeft: '-0.45em',
        marginRight: '-0.25em',
      },
    },
  },
})

interface Props {
  className?: string
  variant: 'vertical' | 'horizontal'
}

export default function ControlArrows({ className, variant }: Props) {
  const classes = useStyles()

  return (
    <span
      className={clsx(classes.root, className, { [classes.vertical]: variant === 'vertical', [classes.horizontal]: variant === 'horizontal' })}
    >
      <ArrowSvg />
      <ArrowSvg />
    </span>
  )
}
