import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu'

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

const MainMenu: React.FC = () => {
  return (
    <div>
      <Header logoText="guide" />
      <Menu listItems={MainMenuItems} />
    </div>
  )
}

export default MainMenu
