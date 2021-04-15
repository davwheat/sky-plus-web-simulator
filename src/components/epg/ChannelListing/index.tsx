import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Header } from '../Header'
import ProgrammeListingHeaderContent from './header'
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
        <ProgrammeListingHeaderContent />
      </Header>
      <Channels firstChannel={startingChannel} />
    </div>
  )
}

export default ChannelListing
