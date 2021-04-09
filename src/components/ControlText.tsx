import { makeStyles } from '@material-ui/core'
import React from 'react'
import Colors from '../data/Colors'

const useStyles = makeStyles({
  root: {
    border: '1px solid #fff',
    background: Colors.controlBg,
    color: '#000',
    padding: '2px 4px',
    fontFamily: 'ZurichBT',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

const ControlText: React.FC = ({ children }) => {
  const classes = useStyles()

  return <span className={classes.root}>{children}</span>
}

export default ControlText
