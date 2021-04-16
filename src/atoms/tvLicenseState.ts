import { atom, AtomEffect, DefaultValue } from 'recoil'

export interface TVLicenseState {
  hasTvLicense: boolean
  hasOptedOutOfTvLicenseContent: boolean
  /**
   * Timestamp or `null`.
   */
  savedAt: number | null
}

/**
 * Returns `true` if we're in the server-side rendering process.
 */
const isSSR = (): boolean => typeof localStorage === 'undefined'

const localStorageEffect = (key: string): AtomEffect<TVLicenseState> => ({ setSelf, onSet }) => {
  const savedValue = isSSR() ? null : localStorage.getItem(key)

  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      !isSSR() && localStorage.removeItem(key)
    } else {
      !isSSR() && localStorage.setItem(key, JSON.stringify(newValue))
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
