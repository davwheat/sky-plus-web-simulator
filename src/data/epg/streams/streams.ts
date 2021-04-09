import streamData from './uk-m3u-streams.json'

const Regions = {
  /**
   * Everywhere (worldwide)
   */
  INT: 'International',
  UK: 'United Kingdom',
  IE: 'Ireland',
  IR: 'Iran',
} as const

type StreamRegionsOriginal = keyof typeof Regions
type StreamRegions = typeof Regions[StreamRegionsOriginal]

interface Stream {
  /**
   * Channel name.
   *
   * If not extracted correctly, will be `"Unknown"`.
   */
  name: string
  /**
   * The stream's HLS (m3u8) stream URL.
   */
  streamUrl: string
  /**
   * HTTP `User-Agent` header required to access the stream.
   */
  userAgent?: string
  /**
   * URL to channel logo image.
   */
  logo?: string
  /**
   * Languages that the channel broadcasts in.
   */
  languages?: string[]
  /**
   * Regions (countries or groups of countries) that the stream is intended to be broadcast to.
   */
  streamsTo?: StreamRegions[]
}

let out = streamData

// Replace `streamsTo` with nicer string values from `Regions`
out.forEach(c => {
  const original = c.streamsTo
  let newTo = []

  original.forEach(st => newTo.push(Regions[st] || st))
})

export default out as Stream[]
