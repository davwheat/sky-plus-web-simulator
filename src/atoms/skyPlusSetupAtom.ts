import { persistentAtom } from 'recoil-persistence/react'

export interface ISkyPlusSetupState {
  diskSpaceMgmt: 'auto' | 'warning' | 'manual'
  /**
   * Measured in mins.
   */
  instantRewind: 0 | 5 | 15 | 30 | 60
  /**
   * Measured in mins.
   *
   * -1 is auto
   */
  addToStartRec: -1 | 0 | 1 | 2 | 5 | 10
  /**
   * Measured in mins.
   *
   * -1 is auto
   */
  addToEndRec: -1 | 0 | 1 | 2 | 5 | 10
  frontPanelIndicator: 'standard' | 'demo' | 'off'
}

export const skyPlusSetupAtom = persistentAtom<ISkyPlusSetupState>({
  key: 'skyPlusSetup',
  default: {
    diskSpaceMgmt: 'auto',
    instantRewind: 60,
    addToStartRec: -1,
    addToEndRec: -1,
    frontPanelIndicator: 'standard',
  },
})
