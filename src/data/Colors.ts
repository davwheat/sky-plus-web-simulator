export default {
  text: '#000',

  main: '#0025c9',
  mainLight: '#022ad9',
  mainText: '#fff',
  get mainHover() {
    return this.yellowMain
  },
  mainTextHover: '#0000b3',

  accent: '#001a8f',
  accentText: '#8787ff',
  get accentHover() {
    return this.yellowDark
  },
  accentTextHover: '#0000b3',

  yellowMain: '#fcda25',
  yellowText: '#ffeb00',
  yellowDark: '#fec200',

  get arrow() {
    return this.yellowDark
  },

  get controlBg() {
    return this.yellowMain
  },

  headerTabSelected: '#2a66e2'
}
