import { controlsState } from '@atoms'
import ChannelListing from '@components/epg/ChannelListing/index'
import { Genres } from '@constants/Genres'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import isSSG from '@helpers/isSSG'
import InnerLayout from '@layouts/InnerLayout'
import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type Props = PageProps<object, object, WindowLocation<{ startFromChannelNumber?: string; genre?: Genres }>['state']>

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

function getGenreFromWindow(): number | null {
  if (!isSSG()) {
    try {
      return parseInt(new URL(window.location.href).searchParams.get('genre')) || null
    } catch {
      return null
    }
  } else {
    return null
  }
}

const ChannelListingPage: React.FC<Props> = ({ location }) => {
  const startFromChannelNumber = location?.state?.startFromChannelNumber || getStartChannelFromWindow() || '101'
  const genreNumber: number | null = location?.state?.genre || getGenreFromWindow() || null

  const [controlsVisible, setControlsVisible] = useRecoilState(controlsState)

  useEffect(() => {
    function goBack(e: SkyControlPressedEvent) {
      const control = e.detail.control

      if (['backUp'].includes(control)) {
        navigate('/', { state: { selectedTab: 'GUIDE' } })
      }
    }

    !controlsVisible.backUp && setControlsVisible(controlsShownStateSetter('backUp', true))
    document.addEventListener('skyControlPressed', goBack)

    return () => {
      document.removeEventListener('skyControlPressed', goBack)
      controlsVisible.backUp && setControlsVisible(controlsShownStateSetter(['backUp'], false))
    }
  }, [true])

  return (
    <InnerLayout>
      <ChannelListing startingChannel={startFromChannelNumber} genreFilter={genreNumber} />
    </InnerLayout>
  )
}

export default ChannelListingPage
