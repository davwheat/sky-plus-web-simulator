import dayjs from 'dayjs'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { scheduleTimeState } from '../../../atoms/timeState'
import { Programme } from '../../../data/getEpg'

interface Props {
  programmes: Programme[]
  className: string
}

const Programmes: React.FC<Props> = ({ programmes, className }) => {
  const { scheduleStartTime } = useRecoilValue(scheduleTimeState)

  const programmeCount = programmes.length
  let totalTime = 0

  return (
    <>
      {programmes.map((programme, i) => {
        let durationPassed = -dayjs(programme.startTime).diff(scheduleStartTime, 'minutes')

        let durationMins = Math.round(programme.duration / 60) - (durationPassed > 0 ? durationPassed : 0)

        if (i < programmeCount - 1) {
          totalTime += durationMins
        } else {
          // Last item should only fill remaining space!
          durationMins = 90 - totalTime
        }

        return (
          <span style={{ gridColumnEnd: `span ${durationMins}` }} className={className} key={`${programme.startTime}__${programme.eventId}`}>
            {programme.title}
          </span>
        )
      })}
    </>
  )
}

export default React.memo(Programmes)
