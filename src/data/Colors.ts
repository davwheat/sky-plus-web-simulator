const Colors = {
  text: '#000',

  main: '#002db6',
  mainLight: '#003399',
  mainText: '#fff',
  get mainHover() {
    return this.yellowMain
  },
  mainTextHover: '#0000b3',
  mainFaded: '#2144C4',
  mainFadedText: '#99AAEE',

  accent: '#00137d',
  accentText: '#758ae5',
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
} as const

export default Colors
