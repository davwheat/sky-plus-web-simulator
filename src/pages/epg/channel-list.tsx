import { controlsState } from '@atoms'
import ChannelListing from '@components/epg/ChannelListing/index'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import isSSG from '@helpers/isSSG'
import InnerLayout from '@layouts/InnerLayout'
import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

type Props = PageProps<object, object, WindowLocation<{ startFromChannelNumber?: string }>['state']>

function getStartChannelFromWindow(): string | null {
  if (!isSSG()) {
    try {
      return new URL(window.location.href).searchParams.get('start')
    } catch {
      return null
    }
  } else {
    return null
  }
}

const ChannelListingPage: React.FC<Props> = ({ location }) => {
  const startFromChannelNumber = location?.state?.startFromChannelNumber || getStartChannelFromWindow() || '101'

  const setControlsVisible = useSetRecoilState(controlsState)
  setControlsVisible(controlsShownStateSetter(['backUp'], true))

  function goBack(e: SkyControlPressedEvent) {
    const control = e.detail.control

    if (['backUp'].includes(control)) {
      navigate('/', { state: { selectedTab: 'GUIDE' } })
    }
  }

  useEffect(() => {
    addEventListener('skyControlPressed', goBack as EventListener)

    return () => {
      removeEventListener('skyControlPressed', goBack as EventListener)
    }
  })

  return (
    <InnerLayout>
      <ChannelListing startingChannel={startFromChannelNumber} />
    </InnerLayout>
  )
}

export default ChannelListingPage
