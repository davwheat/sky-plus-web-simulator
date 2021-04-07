import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
  className?: string
  text?: string
}

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  underText: {
    marginTop: 6,
    fontFamily: 'SkyLogo',
    fontSize: 32,
    color: 'white',
    letterSpacing: 0.5,
  },
})

const SkyLogo: React.FC<Props> = ({ className, text }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)}>
      <StaticImage src="../assets/images/sky-logo-transparent.png" alt="Sky" height={50} placeholder="blurred" />
      {text && <span className={classes.underText}>{text}</span>}
    </div>
  )
}

export default SkyLogo
