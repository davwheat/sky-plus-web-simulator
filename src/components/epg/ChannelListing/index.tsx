import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Header, TitleHeader } from '../Header'
import Channels from './listings'

interface Props {
  startingChannel: string
}

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
})

const ChannelListing: React.FC<Props> = ({ startingChannel }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header logoText="guide">
        <TitleHeader heading="All channels" />
      </Header>
      <Channels firstChannel={startingChannel} />
    </div>
  )
}

export default ChannelListing
