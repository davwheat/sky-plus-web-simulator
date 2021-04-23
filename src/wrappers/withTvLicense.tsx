import { tvLicenseState } from '@atoms/tvLicenseState'
import isSSG from '@helpers/isSSG'
import shouldShowTvLicenseMessage from '@helpers/shouldShowTvLicenseMessage'
import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

const TV_LICENSE_EXEMPT = ['/tv-license-settings']

export default function withTvLicense(wrappedComponent: React.ReactNode) {
  const [hasMounted, setHasMounted] = useState(false)
  const tvLicenseStateValue = useRecoilValue(tvLicenseState)

  const shouldShowLicenseMessage = shouldShowTvLicenseMessage(tvLicenseStateValue)

  console.log('tv-rendered')

  useEffect(() => {
    !hasMounted && setHasMounted(true)
  }, [])

  console.log('PATH: ', !isSSG() && window.location.pathname)

  if (!hasMounted) {
    return wrappedComponent
  } else if (hasMounted && shouldShowLicenseMessage) {
    // Only navigate if not on exempt page
    if (!isSSG() && !TV_LICENSE_EXEMPT.includes(window.location.pathname)) {
      navigate('/tv-license-settings')
    }

    return wrappedComponent
  }

  return wrappedComponent
}
