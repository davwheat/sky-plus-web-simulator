import streamData from './uk-m3u-streams.json'
export interface Stream {
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
}

export default streamData as Stream[]
