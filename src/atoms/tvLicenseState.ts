import { atom, AtomEffect, DefaultValue } from 'recoil'

interface TVLicenseState {
  hasTvLicense: boolean
  hasOptedOutOfTvLicenseContent: boolean
  /**
   * Timestamp or `null`.
   */
  savedAt: number | null
}

const localStorageEffect = (key: string): AtomEffect<TVLicenseState> => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  })
}

export const tvLicenseState = atom<TVLicenseState>({
  key: 'tvLicense',
  default: {
    hasTvLicense: false,
    hasOptedOutOfTvLicenseContent: false,
    savedAt: null,
  },
  effects_UNSTABLE: [localStorageEffect('has_tv_license')],
})
