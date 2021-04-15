import dayjs from 'dayjs'
import { atom } from 'recoil'
import { getScheduleStartTime } from '../helpers/timeFormattings'

export const scheduleTimeState = atom({
  key: 'epgScheduleTime',
  default: {
    scheduleStartTime: getScheduleStartTime(),
  },
})

export const timeState = atom({
  key: 'realTime',
  default: {
    time: dayjs(),
  },
})
