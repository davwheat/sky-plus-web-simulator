import { createTheme } from '@material-ui/core'
import Colors from './Colors'

export default createTheme({
  typography: {
    allVariants: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
  },
  palette: {
    primary: {
      main: Colors.main,
    },
    secondary: {
      main: Colors.yellowMain,
    },
  },
})
