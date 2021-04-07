import { makeStyles } from '@material-ui/core'
import React from 'react'
import SkyLogo from '../../SkyLogo'

interface Props {
  logoText?: string
}

const useStyles = makeStyles({
  root: {},
  logo: {
    margin: 24,
    marginLeft: 32,
  },
})

/**
 * Main EPG Header
 */
const Header: React.FC<Props> = ({ logoText }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <SkyLogo text={logoText} className={classes.logo} />
    </header>
  )
}

export default Header
