import { atom } from 'recoil'

export const controlsState = atom({
  key: 'epg_controlsState',
  default: {
    backUp: false,
    select: false,

    red: false,
    green: false,
    yellow: false,
    blue: false,

    upArrow: false,
    downArrow: false,
    leftArrow: false,
    rightArrow: false,
  } as ControlVisibility,
})
