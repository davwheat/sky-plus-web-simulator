import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { mainMenuState } from '../atoms/mainMenuState'
import MainMenu from '../components/epg/Menus/MainMenu'
import InnerLayout from '../layouts/InnerLayout'

export type MainMenuTab = 'GUIDE' | 'BOX OFFICE' | 'SERVICES' | 'INTERACTIVE'

type ThisPageProps = PageProps<object, object, WindowLocation<{ selectedTab: MainMenuTab }>['state']>

const IndexPage: React.FC<ThisPageProps> = ({ location }) => {
  const setMainMenuState = useSetRecoilState(mainMenuState)

  if (location?.state?.selectedTab)
    setMainMenuState(s => {
      // Wipe state
      navigate('/', { replace: true, state: {} })

      return { ...s, selectedTab: location.state.selectedTab }
    })

  return (
    <InnerLayout>
      <MainMenu />
    </InnerLayout>
  )
}

export default IndexPage
