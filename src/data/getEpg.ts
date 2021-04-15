interface EPGChannelListing {
  /**
   * YYYYMMDD
   */
  date: string
  schedule: ChannelSchedule
}

interface ChannelSchedule {
  /**
   * Channel SID
   */
  sid: string
  events: Programme[]
}

interface Programme {
  /**
   * The start time of the programme measured in seconds since Unix epoch.
   *
   * Convert to JS date with `new Date(time * 1000)`.
   *
   * Original: `haschildren`
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
  programmeUuid: string
  /**
   * Programme season number.
   *
   * Defaults to `1` if not part of a series.
   *
   * Original: `seasonnumber`
   */
  seasonNumber: number
  /**
   * Programme episode number.
   *
   * Defaults to `1` if not part of a series.
   *
   * Original: `episodenumber`
   */
  episodeNumber: number
  /**
   * Unique ID for this programme's season.
   *
   * Original: `seasonuuid`
   */
  seasonUuid: string
  /**
   * Unique ID for this programme's series. (All seasons and eps.)
   *
   * Original: `seriesuuid`
   */
  seriesUuid: string
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
   * Interactive (?) Pay Per View
   *
   * Original: `ippv`
   */
  ippv: boolean
  /**
   * ???? Pay Per View
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
}

const EPG_API_URL = 'http://awk.epgsky.com/hawk/linear/schedule'

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
export default async function (channelSid: string, date?: string) {
  let realDate = date

  if (!realDate) {
    const now = new Date()

    realDate = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}`
  }

  const jsonData = await (await fetch(`${EPG_API_URL}/${realDate}/${channelSid}`)).json()

  return jsonData
}

function pad(num: number): string {
  return String(num).padStart(2, '0')
}
