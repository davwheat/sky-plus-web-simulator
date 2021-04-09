import React from 'react'

/**
 * List of known Sky error codes.
 *
 * Not complete at all.
 */
enum ErrorCodes {
  NO_CARD_INSERTED = 1,
  CARD_READ_ERROR = 2,
  CARD_CHECK_FAIL = 3,
  UNAUTHORISED_CARD = 6,
  /**
   * CP01 on Sky+HD R010 and newer
   */
  UNPAIRED_CARD = 7,
  ENCRYPTION_KEY_FAILURE = 8,
  UNAUTHORISED_CARD_2 = 9,
  NO_SATELLITE_SIGNAL = 28,
  NO_SATELLITE_SIGNAL_2 = 29,
}

export const ErrorText = {
  [ErrorCodes.NO_CARD_INSERTED]: <>Insert your Sky viewing card</>,
  [ErrorCodes.NO_SATELLITE_SIGNAL]: (
    <>
      No Satellite Signal is being received.
      <br />
      Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.
      <br />
      If the fault persists, contact customer services.
    </>
  ),
  [ErrorCodes.NO_SATELLITE_SIGNAL_2]: (
    <>
      No Satellite Signal is being received.
      <br />
      Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.
      <br />
      If the fault persists, contact customer services.
    </>
  ),
} as const

export default ErrorCodes
