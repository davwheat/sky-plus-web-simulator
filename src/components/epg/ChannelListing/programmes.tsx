import InfoIcon from '@assets/icons/info.inline.svg'
import { scheduleTimeState } from '@atoms'
import { Programme } from '@data/getEpg'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import dayjs from 'dayjs'
import React from 'react'
import { useRecoilValue } from 'recoil'
import dayjsUtc from 'dayjs/plugin/utc'
import dayjsTz from 'dayjs/plugin/timezone'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsTz)

interface Props {
  programmes: Programme[]
  className: string
}

const useStyles = makeStyles({
  info: {
    height: '0.75em',
    display: 'inline-block',
  },
  infoContainer: {},
})

const CUTOFF_FOR_INFO_ICON_IN_MINUTES = 25

const Programmes: React.FC<Props> = ({ programmes, className }) => {
  const classes = useStyles()
  const { scheduleStartTime } = useRecoilValue(scheduleTimeState)

  const programmeCount = programmes.length
  let totalTime = 0

  return (
    <>
      {programmes.map((programme, i) => {
        let durationPassed = -dayjs(programme.startTime).tz('Europe/London').diff(scheduleStartTime, 'minutes')

        let durationMins = Math.round(programme.duration / 60) - (durationPassed > 0 ? durationPassed : 0)

        if (i < programmeCount - 1) {
          totalTime += durationMins
        } else {
          // Last item should only fill remaining space!
          durationMins = 90 - totalTime
        }

        const isActiveProgramme = dayjs()
          .tz('Europe/London')
          .isBetween(programme.startTime, programme.startTime + programme.duration * 1000)

        return (
          <span
            style={{ gridColumnEnd: `span ${durationMins}` }}
            className={clsx(className, durationMins < CUTOFF_FOR_INFO_ICON_IN_MINUTES && classes.infoContainer)}
            key={`${programme.startTime}__${programme.eventId}`}
            data-active-programme={isActiveProgramme}
          >
            {durationMins < CUTOFF_FOR_INFO_ICON_IN_MINUTES ? <InfoIcon className={classes.info} /> : programme.title}
          </span>
        )
      })}
    </>
  )
}

export default React.memo(Programmes)
