import React from 'react'
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
]

const MainMenu: React.FC = () => {
  return (
    <div>
      <Menu listItems={MainMenuItems} />
    </div>
  )
}

export default MainMenu
