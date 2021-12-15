import { controlsState } from '@atoms'
import FullScreenError from '@components/FullScreenError'
import type { Channel } from '@data/epg/AllChannels'
import type { Stream } from '@data/epg/streams/Streams'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import { navigate, PageProps } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

type Props = PageProps<object, { channel: Channel; streamData: Stream }>

const useStyles = makeStyles({
  root: {
    background: '#000',
  },
})

const WatchChannelPage: React.FC<Props> = ({ pageContext: { channel, streamData } }) => {
  const classes = useStyles()
  const setControlsVisible = useSetRecoilState(controlsState)

  function goBack(e: SkyControlPressedEvent) {
    const control = e.detail.control

    if (['backUp'].includes(control)) {
      navigate('/', { state: { selectedTab: 'GUIDE' } })
    }
  }

  useEffect(() => {
    document.addEventListener('skyControlPressed', goBack)
    setControlsVisible(controlsShownStateSetter(['backUp'], true))

    return () => {
      document.removeEventListener('skyControlPressed', goBack)
      setControlsVisible(controlsShownStateSetter(['backUp'], false))
    }
  })

  return (
    <InnerLayout>
      <div className={classes.root}>
        <FullScreenError errorCode={30}>
          <br />
          There is a technical fault with this channel.
          <br />
          Please try again later.
        </FullScreenError>
      </div>
    </InnerLayout>
  )
}

export default WatchChannelPage
