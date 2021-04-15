import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { scheduleTimeState, timeState } from '../atoms/timeState'
import { getScheduleStartTime } from '../helpers/timeFormattings'

interface Props {
  children?: React.ReactNode
}

/**
 * Component which renders only its children, but manages global Recoil state updates, such as
 * updating the current time.
 */
const StateManager: React.FC<Props> = ({ children }) => {
  const scheduleTime = useRecoilValue(scheduleTimeState)

  const setScheduleBeginTime = useSetRecoilState(scheduleTimeState)
  const setTime = useSetRecoilState(timeState)

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = getScheduleStartTime()

      // Prevent unneeded re-renders, since stock comparisons would see
      // values being different due to being different class instances
      if (!startTime.isSame(scheduleTime.scheduleStartTime)) {
        setScheduleBeginTime({ scheduleStartTime: getScheduleStartTime() })
      }

      setTime({ time: dayjs() })
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [getScheduleStartTime, setScheduleBeginTime])

  return <>{children}</>
}

export default StateManager
