import bg2005to2007 from '../audio/epg-bgmusic/2005-2007.mp3'
import bg2008 from '../audio/epg-bgmusic/2008.mp3'
import bg2009to2011 from '../audio/epg-bgmusic/2009-2011.mp3'
import bg2012 from '../audio/epg-bgmusic/2012.mp3'

export const audio = {
  '2005-2007': bg2005to2007,
  '2008': bg2008,
  '2009-2011': bg2009to2011,
  '2012': bg2012,
} as Record<string, string>

export const MusicKeys = Object.keys(audio)

function RandomItemFromArray(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)]
}

export const getMusic = (): string => {
  const userSelectedMusic = window.localStorage.getItem('epg-music')
  const index = MusicKeys.indexOf(userSelectedMusic)

  if (index >= 0) {
    return Object.values(audio)[index]
  }

  return RandomItemFromArray(Object.values(audio))
}

export default () => {
  const audioSrc = getMusic()

  window.__bgAudio.src = audioSrc
  return window.__bgAudio.play()
}
