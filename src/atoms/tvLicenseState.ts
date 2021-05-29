import { persistentAtom } from 'recoil-persistence/react'

export interface TVLicenseState {
  hasTvLicense: boolean
  hasOptedOutOfTvLicenseContent: boolean
  /**
   * Timestamp or `null`.
   */
  savedAt: number | null
}

export const tvLicenseState = persistentAtom<TVLicenseState>({
  key: 'tvLicense',
  default: {
    hasTvLicense: false,
    hasOptedOutOfTvLicenseContent: false,
    savedAt: null,
  },
})
