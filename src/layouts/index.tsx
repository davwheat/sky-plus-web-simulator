import ControlsBar from '@components/ControlsBar'
import Footer from '@components/Footer'
import Settings from '@components/Settings'
import StateManager from '@components/StateManager'
import withPlayMusic from '@data/chooseMusic'
import Colors from '@data/Colors'
import muiTheme from '@data/muiTheme'
import { CssBaseline, IconButton, makeStyles, ThemeProvider } from '@material-ui/core'
import withTvLicense from '@wrappers/withTvLicense'
import SettingsIcon from 'mdi-react/SettingsIcon'
import { SnackbarProvider, useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { RecoilRoot } from 'recoil'

interface Props {
  children?: React.ReactNode
}

const useLayoutStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  epg: {
    display: 'flex',
    userSelect: 'none',
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    position: 'relative',

    '& > *': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      flexGrow: 1,
    },
  },
  footer: {
    fontFamily: 'SkyScreen',
    fontSize: 18,
    color: Colors.main,
    userSelect: 'text',
    marginTop: 8,
  },
})

const RecoilWrapper: React.FC<Props> = ({ children }) => (
  <RecoilRoot>
    <PageWrapper>{children}</PageWrapper>
  </RecoilRoot>
)

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <StateManager />
        <AudioWrapper />
        <SettingsArea />
        <ContentWrapper>{children}</ContentWrapper>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

const ContentWrapper: React.FC = ({ children }) => {
  const classes = useLayoutStyles()

  return (
    <main className={classes.main}>
      <div className={classes.epg}>{withTvLicense(children)}</div>
      <ControlsBar />
      <Footer className={classes.footer} />
    </main>
  )
}

const AudioWrapper: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  withPlayMusic()

  return null
}

const useSettingsStyles = makeStyles({
  btn: {
    position: 'relative',
    zIndex: 101,
  },
})

const SettingsArea: React.FC = () => {
  const [shown, setShown] = useState(false)
  const classes = useSettingsStyles()

  if (shown) {
    return (
      <>
        <IconButton className={classes.btn} color="primary" onClick={() => setShown(false)} aria-label="close settings">
          <SettingsIcon />
        </IconButton>
        <Settings />
      </>
    )
  }

  return (
    <IconButton className={classes.btn} color="primary" onClick={() => setShown(true)} aria-label="open settings">
      <SettingsIcon />
    </IconButton>
  )
}

export default RecoilWrapper
