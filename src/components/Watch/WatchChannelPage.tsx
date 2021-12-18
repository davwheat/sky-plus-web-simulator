import { controlsState, tvLicenseState } from '@atoms'
import FullScreenError from '@components/FullScreenError'
import type { Channel } from '@data/epg/AllChannels'
import type { Stream } from '@data/epg/streams/Streams'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { Button, makeStyles } from '@material-ui/core'
import { navigate, PageProps } from 'gatsby'
import type Hls from 'hls.js'
import { useSnackbar } from 'notistack'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import SearchAndScan from './SearchAndScan'

type Props = PageProps<object, { channel: Channel; streamData: Stream }>

const useStyles = makeStyles({
  root: {
    background: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
})

const WatchChannelPage: React.FC<Props> = ({ pageContext: { channel, streamData } }) => {
  const classes = useStyles()
  const setControlsVisible = useSetRecoilState(controlsState)
  const tvLicenseStateValue = useRecoilValue(tvLicenseState)
  const [pageState, setPageState] = useState({
    error: false,
  })
  const videoRef = useRef(null)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  function goBack(e: SkyControlPressedEvent) {
    const control = e.detail.control

    if (['backUp'].includes(control)) {
      navigate('/', { state: { selectedTab: 'GUIDE' } })
    }
  }

  setControlsVisible(controlsShownStateSetter(['backUp'], true))

  useEffect(() => {
    document.addEventListener('skyControlPressed', goBack)
    window.__bgAudio.pause()

    let hls: Hls

    if (tvLicenseStateValue.hasTvLicense) {
      if (videoRef.current) {
        if (!window.Hls.isSupported() && !pageState.error) {
          setPageState(s => ({ ...s, error: true }))
        }

        hls = new window.Hls()
        hls.loadSource(streamData.streamUrl)
        hls.attachMedia(videoRef.current)

        hls.on(window.Hls.Events.MEDIA_ATTACHED, () => {
          videoRef.current.play().catch(() => {
            enqueueSnackbar('TV stream is paused', {
              variant: 'warning',
              persist: true,
              key: 'STREAM_PAUSED',
              action: key => (
                <Button
                  onClick={() => {
                    videoRef.current.play()
                    closeSnackbar(key)
                  }}
                >
                  Resume stream
                </Button>
              ),
            })
          })
        })
      }
    }

    return () => {
      document.removeEventListener('skyControlPressed', goBack)
      setControlsVisible(controlsShownStateSetter(['backUp'], false))
      window.__bgAudio.play()

      if (hls) {
        hls.destroy()
      }

      closeSnackbar('STREAM_PAUSED')
    }
  })

  return (
    <InnerLayout>
      <div className={classes.root}>
        {tvLicenseStateValue.hasTvLicense && !pageState.error && <video ref={videoRef} className={classes.video} />}
        {tvLicenseStateValue.hasTvLicense && pageState.error && (
          <FullScreenError errorCode={30}>
            <br />
            There is a technical fault with this channel
            <br />
            Please try again later
          </FullScreenError>
        )}

        {tvLicenseStateValue.hasOptedOutOfTvLicenseContent && (
          <FullScreenError errorCode={null} controlPrompt controlPromptAction="return">
            <br />
            This content is only available to TV Licensees
          </FullScreenError>
        )}

        <SearchAndScan channel={channel} />
      </div>
    </InnerLayout>
  )
}

export default WatchChannelPage