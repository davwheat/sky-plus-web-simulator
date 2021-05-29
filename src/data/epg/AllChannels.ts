import channelList from './channelList.json'

const ChannelNumbers = Object.keys(channelList)
const AllChannels = Object.values(channelList) as Channel[]

export interface Channel {
  sid: string
  channelNumber: string
  name: string
  /**
   * `sd` - Standard Definition
   * `hd` - High
   * `au` - Audio only
   */
  quality: 'sd' | 'hd' | 'au',
  /**
   * - `1` - Shopping
   * - `2` - Kids
   * - `3` - Entertainment
   * - `5` - News
   * - `6` - Movies
   * - `7` - Sports
   * - `11` - Documentaries
   * - `12` - Music
   * - `13` - Religion
   * - `14` - International
   * - `15` - Specialist
   */
  genre: number
}

export function isValidChannelNumber(channelNumber: string) {
  return ChannelNumbers.includes(channelNumber)
}

export function getAllChannels(): Record<string, Channel> {
  return channelList as Record<string, Channel>
}

export function getChannelByChannelNumber(channelNumber: string): Channel | null {
  return channelList[channelNumber] || null
}

export function getChannelBySID(sid: string): Channel | null {
  return AllChannels.find(channel => channel.sid === sid) || null
}

export function getNChannelsFromNumber(channelNumber: string, n: number): Channel[] | null {
  const startIndex = ChannelNumbers.indexOf(channelNumber)

  if (startIndex === -1) return null

  return AllChannels.slice(startIndex, startIndex + n) as Channel[]
}

export function getChannelNumberFromNumberPlusN(channelNumber: string, n: number): string {
  const startIndex = ChannelNumbers.indexOf(channelNumber)
  const result = ChannelNumbers[Math.min(Math.max(startIndex + n, 0), ChannelNumbers.length - 1)]

  return result
}
