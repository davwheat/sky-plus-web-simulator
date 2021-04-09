import { atom } from 'recoil'

import type { MainMenuTab } from '../pages/index'

export const mainMenuState = atom({
  key: 'epg_mainMenuState',
  default: {
    selectedTab: 'GUIDE' as MainMenuTab,
  },
})
