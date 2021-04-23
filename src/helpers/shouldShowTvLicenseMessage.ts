import type { TVLicenseState } from '@atoms/tvLicenseState'
import isSSG from './isSSG'

// Ask every 28 days
const TIME_TO_REFRESH_TV_LICENSE_PROMPT = 1000 * 60 * 60 * 24 * 28

export default function shouldShowTvLicenseMessage(tvLicenseStateValue: TVLicenseState): boolean {
  if (isSSG()) return false

  return (
    // No TV license and has not opted out of streams
    (!tvLicenseStateValue.hasTvLicense && !tvLicenseStateValue.hasOptedOutOfTvLicenseContent) ||
    // or has been 28 days since last asked
    Date.now() - tvLicenseStateValue.savedAt > TIME_TO_REFRESH_TV_LICENSE_PROMPT
  )
}
