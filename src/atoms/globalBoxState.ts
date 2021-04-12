import { atom } from 'recoil'

export const globalBoxState = atom({
  key: 'globalState',
  default: {
    bootTime: Date.now(),
    lastInteractiveSearch: -1,
  },
})
