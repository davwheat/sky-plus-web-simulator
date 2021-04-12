const Colors = {
  text: '#000',

  main: '#0025c9',
  mainLight: '#003399',
  mainText: '#fff',
  get mainHover() {
    return this.yellowMain
  },
  mainTextHover: '#0000b3',

  accent: '#051571',
  accentText: '#8787ff',
  get accentHover() {
    return this.yellowDark
  },
  accentTextHover: '#0000b3',

  yellowMain: '#fcda15',
  yellowText: '#ffeb00',
  yellowDark: '#fec200',

  get arrow() {
    return this.yellowDark
  },

  get controlBg() {
    return this.yellowMain
  },

  headerTabSelected: '#2a66e2',

  coloredButtons: {
    red: '#c20106',
    green: '#67d66d',
    yellow: '#fecf5b',
    blue: '#0025c9',
  },
}

export default Colors
