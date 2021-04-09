import React, { useEffect, useState } from 'react'
import chooseMusic from '../data/chooseMusic'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Button, IconButton, makeStyles } from '@material-ui/core'
import Settings from '../components/Settings'
import SettingsIcon from 'mdi-react/SettingsIcon'
import ControlsBar from '../components/ControlsBar'
import { RecoilRoot } from 'recoil'

interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3}>
        <AudioWrapper />
        <SettingsArea />
        <main>
          {/* These are reversed with CSS. ControlsBar needs to come first to fix issues with `window.__setControlVisibility` not being defined. */}
          <footer>
            Created by{' '}
            <a target="_blank" href="https://github.com/davwheat">
              David Wheatley
            </a>{' '}
            •{' '}
            <a target="_blank" href="https://github.com/davwheat/sky-digibox-web-simulator">
              View the source code on GitHub
            </a>
          </footer>
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
