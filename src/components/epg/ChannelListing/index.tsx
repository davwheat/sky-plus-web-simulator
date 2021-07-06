import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { GenreName, Genres } from '@constants/Genres'
import { makeStyles, NoSsr } from '@material-ui/core'
import React from 'react'
import { Header, TitleHeader } from '../Header'
import Channels from './listings'

interface Props {
  startingChannel: string
  /**
   * Optional number to filter by genre.
   */
  genreFilter?: Genres
}

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
})

const ChannelListing: React.FC<Props> = ({ startingChannel, genreFilter }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header logoText="guide">
        <NoSsr>
          <TitleHeader heading={GenreName[genreFilter] || 'All channels'} />
        </NoSsr>
      </Header>
      <NoSsr>
        <Channels firstChannel={startingChannel} genreFilter={genreFilter} />
      </NoSsr>
    </div>
  )
}

export default ChannelListing
