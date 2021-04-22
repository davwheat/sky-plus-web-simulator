import MusicFiles from './musicFiles'

export const MusicKeys = Object.keys(MusicFiles).sort((a, b) => ('' + a).localeCompare(b))

function RandomItemFromArray<T extends any[]>(myArray: T): ArrayElement<T> {
  return myArray[Math.floor(Math.random() * myArray.length)]
}

const getMusic = (): [typeof MusicFiles[keyof typeof MusicFiles]['mp3' | 'ogg'], boolean] => {
  const SupportsOgg = window.__bgAudio.canPlayType('audio/ogg; codecs="vorbis"')

  const userSelectedMusic = window.localStorage.getItem('epg-music')
  const index = MusicKeys.indexOf(userSelectedMusic)

  if (index >= 0) {
    return [MusicFiles[userSelectedMusic][SupportsOgg ? 'ogg' : 'mp3'], false]
  }

  return [RandomItemFromArray(Object.values(MusicFiles))[SupportsOgg ? 'ogg' : 'mp3'], true]
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