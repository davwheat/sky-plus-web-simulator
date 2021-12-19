import hls from 'hls.js/dist/hls.light.min.js'
import './src/styles/main.less'

window.Hls = hls

window.__bgAudio = new Audio()
window.__bgAudio.loop = true
window.__bgAudio.autoplay = true
window.__bgAudio.volume = 0.15

window.__isLastPageOnSameDomain = false

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) window.__isLastPageOnSameDomain = true
}
