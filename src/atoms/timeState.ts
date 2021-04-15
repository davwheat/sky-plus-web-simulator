import { getScheduleStartTime } from '@helpers/timeFormatting'
import dayjs from 'dayjs'
import { atom } from 'recoil'

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
