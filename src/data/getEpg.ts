import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc'
import dayjsTz from 'dayjs/plugin/timezone'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsTz)

export interface EPGChannelListing {
  /**
   * YYYYMMDD
   */
  date: string
  schedule: Programme[]
}

export interface Programme {
  /**
   * The start time of the programme as a Unix timestamp (milliseconds since epoch).
   *
   * Original: `st`. Original in seconds since epoch.
   */
  startTime: number
  /**
   * Duration of the show in seconds. (e.g. 3600 = 1 hour)
   *
   * Original: `d`
   */
  duration: number
  /**
   * ID for this event.
   *
   * Original: `eid`
   */
  eventId: string
  /**
   * Unique ID for this programme.
   *
   * Original: `programmeuuid`
   */
  programmeUuid: string | undefined
  /**
   * Programme season number.
   *
   * Defaults to `1` if not part of a series.
   *
   * Original: `seasonnumber`
   */
  seasonNumber: number | undefined
  /**
   * Programme episode number.
   *
   * Defaults to `1` if not part of a series.
   *
   * Original: `episodenumber`
   */
  episodeNumber: number | undefined
  /**
   * Unique ID for this programme's season.
   *
   * Original: `seasonuuid`
   */
  seasonUuid: string | undefined
  /**
   * Unique ID for this programme's series. (All seasons and eps.)
   *
   * Original: `seriesuuid`
   */
  seriesUuid: string | undefined
  /**
   * Whether the programme has children
   *
   * Original: `haschildren`
   */
  hasChildren: boolean
  /**
   * Programme title
   *
   * Original: `t`
   */
  title: string
  /**
   * Programme description
   *
   * Original: `sy`
   */
  synopsis: string
  /**
   * Unknown
   *
   * Original: `eg`
   */
  eg: number
  /**
   * Unknown
   *
   * Original: `esg`
   */
  esg: number
  /**
   * Unknown
   *
   * Original: `tso`
   */
  tso: number
  /**
   * Programme rating
   *
   * Original: `r`
   */
  rating: '--' | 'U' | 'PG' | '12' | '15' | '18' | 'R' | 'R+'
  /**
   * Audio technology for the programme.
   *
   * M for mono. S for stereo. DD for Dolby Digital.
   *
   * Original: `at`
   */
  audioTechnology: 'M' | 'S' | 'DD'
  /**
   * Original: `s`
   */
  hasSubtitles: boolean
  /**
   * Original: `ad`
   */
  hasAudioDescription: boolean
  /**
   * Original: `hd`
   */
  isHd: boolean
  /**
   * Is the programme new.
   *
   * Original: `new`
   */
  isNew: boolean
  /**
   * Can record as series link.
   *
   * Original: `canl`
   */
  canSeriesLink: boolean
  /**
   * Can record this programme (book planner entry).
   *
   * Original: `canb`
   */
  canBookRecording: boolean
  /**
   * If the show has alternative audio.
   *
   * Original: `hasAlternativeAudio`
   */
  hasAlternativeAudio: boolean
  /**
   * Can the programme be started from the beginning.
   *
   * Original: `restartable`
   */
  isRestartable: boolean
  /**
   * Unknown
   *
   * Original: `slo`
   */
  slo: boolean
  /**
   * Unknown
   *
   * Original: `w`
   */
  w: boolean
  /**
   * Impulse pay-per-view
   *
   * Original: `ippv`
   */
  ippv: boolean
  /**
   * Order-ahead pay-per-view
   *
   * Original: `oppv`
   */
  oppv: boolean
  /**
   * Only on Box Office programmes.
   *
   * Original: `marketingmessage`
   */
  marketingMessage?: string
  /**
   * Channel genre that this programme's channel is in.
   *
   * Original: `cgid`
   */
  channelGenreId: number
}

const EPG_API_URL = 'https://awk.epgsky.com/hawk/linear/schedule'

/**
 * Gets EPG schedule for a specified channel and date.
 *
 * Date, if unspecified, is today.
 *
 * **Example SIDs:**
 * - BBC One HD = `2076`
 * - BBC News = `2085`
 * - Sky Intro = `1819`
 *
 * @param channelSid Channel SID
 * @param date Date (YYYYMMDD)
 */
export default async function getProgrammeListingForSID(
  channelSid: string,
  { date, abortController }: Partial<{ date: string; abortController: AbortController }> = {},
): Promise<EPGChannelListing> {
  let realDate: string

  if (!date) {
    realDate = dayjs().tz('Europe/London').format('YYYYMMDD')
  } else {
    realDate = dayjs(date).tz('Europe/London').format('YYYYMMDD')
  }

  const jsonData = await (await fetch(`${EPG_API_URL}/${realDate}/${channelSid}`, { signal: abortController.signal })).json()

  const events = jsonData.schedule[0].events as Record<string, any>[]

  const response: EPGChannelListing = {
    date: jsonData.date,
    schedule: events.map(
      (event): Programme => ({
        startTime: event.st * 1000,
        duration: event.d,
        eventId: event.eid,
        channelGenreId: event.cgid,
        programmeUuid: event.programmeuuid,
        seasonNumber: event.seasonnumber,
        episodeNumber: event.episodenumber,
        seasonUuid: event.seasonuuid,
        seriesUuid: event.seriesuuid,
        hasChildren: event.haschildren,
        title: event.t,
        synopsis: event.sy,
        eg: event.eg,
        esg: event.esg,
        tso: event.tso,
        rating: event.r,
        audioTechnology: event.at,
        hasSubtitles: event.s,
        hasAudioDescription: event.ad,
        isHd: event.hd,
        isNew: event.new,
        canSeriesLink: event.canl,
        canBookRecording: event.canb,
        hasAlternativeAudio: event.hasAlternativeAudio,
        isRestartable: event.restartable,
        slo: event.slo,
        w: event.w,
        ippv: event.ippv,
        oppv: event.oppv,
      }),
    ),
  }

  return response
}
