import dayjs from 'dayjs'

import dayjsUtc from 'dayjs/plugin/utc'
import dayjsTz from 'dayjs/plugin/timezone'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsTz)

export function formatTimingHeader(dayjsObj: dayjs.Dayjs) {
  return dayjsObj.format('h.mma')
}

/**
 * Round time down to last 30 minutes.
 */
export function getScheduleStartTime() {
  const currentTime = dayjs().tz('Europe/London')

  // Start of hour, plus 30 mins if needed
  return currentTime.startOf('hour').add(currentTime.get('minutes') >= 30 ? 30 : 0, 'minutes')
}
