import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'inline',
    border: '1px solid #fff',
    background: Colors.controlBg,
    color: '#000',
    padding: 2,
    fontFamily: 'ZurichBT',
    fontWeight: 'bold',
    fontSize: 18,
    verticalAlign: 1,
  },
})

interface Props {
  className?: string
  children?: React.ReactNode
}

const ControlText: React.FC<Props> = ({ className, children }) => {
  const classes = useStyles()

  return <span className={clsx(classes.root, className)}>{children}</span>
}

export default ControlText
