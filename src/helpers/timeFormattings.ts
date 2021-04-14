import dayjs from 'dayjs'

export function formatTimingHeader(dayjsObj: dayjs.Dayjs) {
  return dayjsObj.format('h:mma')
}

export function getScheduleStartTime() {
  const currentTime = dayjs()

  // Start of hour, plus 30 mins if needed
  return currentTime.startOf('hour').add(currentTime.get('minutes') >= 30 ? 30 : 0, 'minutes')
}
