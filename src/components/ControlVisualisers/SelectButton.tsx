import SelectSvg from '@assets/icons/remote/select-button.inline.svg'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    padding: 0,
    fontFamily: 'ZurichBT',
    fontWeight: 'bold',
    fontSize: 18,
    verticalAlign: 'middle',
    transform: 'translateY(-0.1em)',

    '& > svg': {
      height: '1.4em',
    },
  },
})

interface Props {
  className?: string
}

export default function SelectButton({ className }: Props) {
  const classes = useStyles()

  return (
    <span className={clsx(classes.root, className)}>
      <SelectSvg />
    </span>
  )
}
