import type { WindowLocation } from '@reach/router'
import type { PageProps } from 'gatsby'
import React from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { mainMenuState } from '../atoms/mainMenuState'
import MainMenu from '../components/epg/Menus/MainMenu'
import InnerLayout from '../layouts/InnerLayout'

export type MainMenuTab = 'GUIDE' | 'BOX OFFICE' | 'SERVICES' | 'INTERACTIVE'

type ThisPageProps = PageProps<object, object, WindowLocation<{ selectedTab: MainMenuTab }>['state']>

const IndexPage: React.FC<ThisPageProps> = ({ location }) => {
  const setMainMenuState = useSetRecoilState(mainMenuState)
  const resetMainMenuState = useResetRecoilState(mainMenuState)

  if (location.state && location.state.selectedTab) setMainMenuState(s => ({ ...s, selectedTab: location.state.selectedTab }))
  else resetMainMenuState()

  return (
    <InnerLayout>
      <MainMenu />
    </InnerLayout>
  )
}

export default IndexPage
