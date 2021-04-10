import { atom } from 'recoil'

export interface ControlVisibility {
  backUp: boolean
  select: boolean

  red: boolean
  green: boolean
  yellow: boolean
  blue: boolean
}

export type Control = keyof ControlVisibility

export const controlsState = atom({
  key: 'epg_controlsState',
  default: {
    backUp: false,
    select: false,

    red: false,
    green: false,
    yellow: false,
    blue: false,
  } as ControlVisibility,
})
