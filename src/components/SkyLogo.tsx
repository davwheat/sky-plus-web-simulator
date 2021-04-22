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
    fontFamily: 'SkyLogo',
    fontSize: 32,
    color: 'white',
    letterSpacing: 2,
    lineHeight: 1,
  },
})

const SkyLogo: React.FC<Props> = ({ className, text }) => {
  const classes = useStyles()

  return (
    <div role="presentation" aria-label={`Sky ${text}`} className={clsx(classes.root, className)}>
      <StaticImage
        src="../assets/images/sky-logo-transparent.png"
        alt="Sky"
        // Squash vertically a little to make it more realistic
        width={83}
        height={45}
        placeholder="none"
        transformOptions={{ fit: 'fill' }}
      />
      {text && <span className={classes.underText}>{text}</span>}
    </div>
  )
}

export default SkyLogo
