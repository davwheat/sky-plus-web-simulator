import { controlsState } from '@atoms/controlsState'
import TVLicenseMessage from '@components/TVLicenseMessage'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const TVLicenseSettings = () => {
  const setControlsVisible = useSetRecoilState(controlsState)
  setControlsVisible(controlsShownStateSetter('backUp', true))

  function goBack() {
    if (window.__isLastPageOnSameDomain) window.history.back()
    else navigate('/')
  }

  function controlPressed(e: SkyControlPressedEvent) {
    if (e.detail.control === 'backUp') {
      goBack()
    }
  }

  useEffect(() => {
    document.addEventListener('skyControlPressed', controlPressed)

    return () => window.removeEventListener('skyControlPressed', controlPressed)
  })

  return <TVLicenseMessage onSelectLicenseStatus={goBack} />
}

export default TVLicenseSettings
