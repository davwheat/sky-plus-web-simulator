import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu'

import EpgBackgroundImage from '../../../assets/images/guide-bg.sized.png'

const MainMenuItems = [
  {
    text: 'All Channels',
    onClick: () => {},
  },
  {
    text: 'Entertainment',
    onClick: () => {},
  },
  {
    text: 'Lifestyle & Culture',
    onClick: () => {
      alert('l&c')
    },
  },
  {
    text: 'Movies',
    onClick: () => {},
  },
  {
    text: 'Sports',
    onClick: () => {},
  },
  {
    text: 'News',
    onClick: () => {},
  },
  {
    text: 'Documentaries',
    onClick: () => {},
  },
  {
    text: 'Kids',
    onClick: () => {},
  },
  {
    text: 'Music',
    onClick: () => {},
  },
  {
    text: 'Radio',
    onClick: () => {},
  },
  {
    text: 'Shopping',
    onClick: () => {},
  },
  {
    text: 'Religion',
    onClick: () => {},
  },
  {
    text: 'International',
    onClick: () => {},
  },
  {
    text: 'Gaming & Dating',
    onClick: () => {},
  },
  {
    text: 'Specialist',
    onClick: () => {},
  },
  {
    text: 'Adult',
    onClick: () => {},
  },
]

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
})

const MainMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header logoText="guide" />
      <Menu listItems={MainMenuItems} />
    </div>
  )
}

export default MainMenu
