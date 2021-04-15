import Colors from '@data/Colors'
import { randomNumber } from '@helpers/randomNumber'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React, { useEffect } from 'react'

type Props = PageProps<
  object,
  object,
  WindowLocation<{
    serviceName: string
    nextUrl: string
    serviceDescription: string
  }>['state']
>

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
  message: {
    lineHeight: 2.25,
    fontSize: 28,
    textAlign: 'center',
    width: '85%',
    padding: 16,
    color: '#fff',
    background: '#003399',
  },
  header: {
    fontFamily: 'ZurichBT',
  },
  title: {
    fontFamily: 'Zurich',
    fontStretch: 'expanded',
  },
  description: {
    fontFamily: 'Zurich',
    fontStretch: 'condensed',
  },
})

const ComingNext: React.FC<Props> = ({ location }) => {
  const classes = useStyles()

  const serviceName = location?.state?.serviceName || 'Unknown'
  const nextUrl = location?.state?.nextUrl || '/interactive/service-unavailable'
  const serviceDescription = location?.state?.serviceDescription || 'I have no clue what service this is'

  useEffect(() => {
    const timeoutKey = setTimeout(() => {
      navigate(nextUrl)
    }, randomNumber(6000, 10000))

    return () => {
      clearTimeout(timeoutKey)
    }
  })

  return (
    <InnerLayout>
      <div className={classes.root}>
        <article className={classes.message}>
          {/* WHY IS IT 4 FULL STOPS?! */}
          <h1 className={classes.header}>Coming next....</h1>
          <h2 className={classes.title}>{serviceName}</h2>
          <p className={classes.description}>{serviceDescription}</p>
        </article>
      </div>
    </InnerLayout>
  )
}

export default ComingNext
