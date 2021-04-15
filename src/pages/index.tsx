import { mainMenuState } from '@atoms'
import MainMenu from '@components/epg/Menus/MainMenu'
import InnerLayout from '@layouts/InnerLayout'
import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React from 'react'
import { useSetRecoilState } from 'recoil'

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
