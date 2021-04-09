import React from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import MainMenu from '../components/epg/Menus/MainMenu'
import InnerLayout from '../layouts/InnerLayout'

import { mainMenuState } from '../atoms/mainMenuState'

export type MainMenuTab = 'GUIDE' | 'BOX OFFICE' | 'SERVICES' | 'INTERACTIVE'

const IndexPage: React.FC = ({ location }) => {
  const setMainMenuState = useSetRecoilState(mainMenuState)
  const resetMainMenuState = useResetRecoilState(mainMenuState)

  if (location.state && location.state.selectedTab) setMainMenuState(s => ({ ...s, selectedTab: location.state.selectedTab as MainMenuTab }))
  else resetMainMenuState()

  return (
    <InnerLayout>
      <MainMenu />
    </InnerLayout>
  )
}

export default IndexPage
