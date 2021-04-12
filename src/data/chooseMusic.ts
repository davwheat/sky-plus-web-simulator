import bg2005to2007 from '../assets/audio/epg-bgmusic/2005-2007.mp3'
import bg2008 from '../assets/audio/epg-bgmusic/2008.mp3'
import bg2009to2011 from '../assets/audio/epg-bgmusic/2009-2011.mp3'
import bg2012 from '../assets/audio/epg-bgmusic/2012.mp3'
import games2013 from '../assets/audio/sky-games/2013.mp3'

const AudioFiles = {
  '2005-2007': bg2005to2007,
  '2008': bg2008,
  '2009-2011': bg2009to2011,
  '2012': bg2012,
  'Sky Games 2013': games2013,
} as const

export const MusicKeys = Object.keys(AudioFiles).sort((a, b) => ('' + a).localeCompare(b))

function RandomItemFromArray<T extends any[]>(myArray: T): ArrayElement<T> {
  return myArray[Math.floor(Math.random() * myArray.length)]
}

const getMusic = (): [typeof AudioFiles[keyof typeof AudioFiles], boolean] => {
  const userSelectedMusic = window.localStorage.getItem('epg-music')
  const index = MusicKeys.indexOf(userSelectedMusic)

  if (index >= 0) {
    return [Object.values(AudioFiles)[index], false]
  }

  return [RandomItemFromArray(Object.values(AudioFiles)), true]
}

export default () => {
  const [audioSrc, isRandom] = getMusic()

  const fullSourceUrl = new URL(audioSrc, document.baseURI).href

  if ((isRandom && window.__bgAudio.src === '') || window.__bgAudio.src !== fullSourceUrl) {
    window.__bgAudio.src = fullSourceUrl
    return window.__bgAudio.play()
  } else {
    return new Promise(() => {
      return true
    })
  }
}
