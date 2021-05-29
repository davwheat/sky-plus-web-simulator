import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { controlsState, mainMenuState } from '@atoms'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import ColorButtonsFooter from '../Footer/ColorButtonsFooter'
import Header, { HeaderTabs } from '../Header/Header'
import Menu from '../Menu'
import InteractiveMenu from './InteractiveMenu'
import * as MenuColorButtons from './menuColourButtons'
import * as MenuItems from './menuItems'

const TABS: MainMenuTab[] = ['GUIDE', 'BOX OFFICE', 'SERVICES', 'INTERACTIVE']

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
  content: {
    marginTop: 38,
  },
  centeredErrorMessage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
})

function getMenuItems(selectedTab: MainMenuTab) {
  switch (selectedTab) {
    default:
    case 'GUIDE':
      return MenuItems.tvGuideListItems
    case 'BOX OFFICE':
      return MenuItems.boxOfficeListItems
    case 'SERVICES':
      return MenuItems.servicesListItems
  }
}

function getMenuColorButtons(selectedTab: MainMenuTab) {
  switch (selectedTab) {
    case 'GUIDE':
      return MenuColorButtons.tvGuideColorButtons
    default:
      return null
  }
}

const MainMenu: React.FC = () => {
  const classes = useStyles()

  const mainMenuStateValue = useRecoilValue(mainMenuState)
  const setMainMenuState = useSetRecoilState(mainMenuState)

  const setControlsState = useSetRecoilState(controlsState)

  const menuItems = getMenuItems(mainMenuStateValue.selectedTab)
  const colorButtonText = getMenuColorButtons(mainMenuStateValue.selectedTab)

  function buttonPressHandler(color: SkyColorButton) {
    switch (color) {
      case 'red':
        alert("Anytime isn't implemented yet.")
        break
      case 'green':
        alert("Planner isn't implemented yet.")
        break
      case 'yellow':
        alert("Search A-Z isn't implemented yet.")
        break
      case 'blue':
        alert("Favourites isn't implemented yet.")
        break
    }
  }

  const currentTabIndex = TABS.indexOf(mainMenuStateValue.selectedTab)

  // Switch EPG tabs
  useEffect(() => {
    // Show arrow buttons
    setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], true))

    function watchForLRArrowPress(e: SkyControlPressedEvent) {
      const control = e.detail.control

      if (['leftArrow', 'rightArrow'].includes(control)) {
        // Left or right arrows pressed

        let newTabIndex = currentTabIndex

        control === 'leftArrow' ? (newTabIndex -= 1) : (newTabIndex += 1)

        if (newTabIndex < 0) newTabIndex = TABS.length - 1
        else if (newTabIndex >= TABS.length) newTabIndex = 0

        setMainMenuState({ selectedTab: TABS[newTabIndex] })
      }
    }

    document.addEventListener('skyControlPressed', watchForLRArrowPress)

    return () => {
      document.removeEventListener('skyControlPressed', watchForLRArrowPress)
      setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], false))
    }
  }, [setMainMenuState, currentTabIndex])

  return (
    <div className={classes.root}>
      <Header logoText="guide">
        <HeaderTabs />
      </Header>
      <div className={classes.content}>
        {mainMenuStateValue.selectedTab !== 'INTERACTIVE' && <Menu listItems={menuItems} key={mainMenuStateValue.selectedTab} />}
        {mainMenuStateValue.selectedTab === 'INTERACTIVE' && <InteractiveMenu />}
      </div>
      {colorButtonText && <ColorButtonsFooter buttonPressHandler={buttonPressHandler} buttonsText={colorButtonText} />}
    </div>
  )
}

export default MainMenu
