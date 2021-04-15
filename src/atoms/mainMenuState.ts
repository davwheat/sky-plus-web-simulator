import { atom } from 'recoil'

export const mainMenuState = atom({
  key: 'epg_mainMenuState',
  default: {
    selectedTab: 'GUIDE' as MainMenuTab,
  },
})
