import { Button, IconButton, makeStyles } from '@material-ui/core'
import SettingsIcon from 'mdi-react/SettingsIcon'
import { SnackbarProvider, useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import ControlsBar from '../components/ControlsBar'
import Footer from '../components/Footer'
import Settings from '../components/Settings'
import chooseMusic from '../data/chooseMusic'
import Colors from '../data/Colors'

interface Props {
  children?: React.ReactNode
}

const useLayoutStyles = makeStyles({
  footer: {
    fontFamily: 'SkyLogo',
    fontSize: 18,
    color: Colors.main,
    userSelect: 'text',
    marginTop: 8,
  },
})

const PageWrapper: React.FC<Props> = ({ children }) => {
  const classes = useLayoutStyles()

  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3}>
        <AudioWrapper />
        <SettingsArea />
        <main>
          <Footer className={classes.footer} />
          <ControlsBar />
          {children}
        </main>
      </SnackbarProvider>
    </RecoilRoot>
  )
}

const AudioWrapper: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    const playPromise = chooseMusic()

    if (playPromise) {
      playPromise.catch(() => {
        console.warn("Background music won't auto-start")

        enqueueSnackbar('Music is muted', {
          variant: 'warning',
          persist: true,
          action: key => (
            <Button
              onClick={() => {
                window.__bgAudio.play()
                closeSnackbar(key)
              }}
            >
              Unmute music
            </Button>
          ),
        })
      })
    }
  })

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

export default PageWrapper
