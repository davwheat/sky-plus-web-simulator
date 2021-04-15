import channelList from './channelList.json'

const ChannelNumbers = Object.keys(channelList)
const AllChannels = Object.values(channelList) as Channel[]

export interface Channel {
  channelNumber: string
  name: string
  sid: number
  /**
   * `sd` - Standard Definition
   * `hd` - High Definition
   * `au` - Audio only
   */
  quality: 'sd' | 'hd' | 'au'
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

export function getChannelBySID(sid: number): Channel | null {
  return AllChannels.find(channel => channel.sid === sid) || null
}

export function getNChannelsFromNumber(channelNumber: string, n: number): Channel[] | null {
  const startIndex = ChannelNumbers.indexOf(channelNumber)

  if (startIndex === -1) return null

  return AllChannels.slice(startIndex, startIndex + n - 1) as Channel[]
}

export function getChannelNumberFromNumberPlusN(channelNumber: string, n: number): string {
  const startIndex = ChannelNumbers.indexOf(channelNumber)
  const result = ChannelNumbers[Math.min(Math.max(startIndex + n, 0), ChannelNumbers.length - 1)]

  return result
}
