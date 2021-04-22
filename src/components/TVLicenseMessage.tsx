import { TVLicenseState, tvLicenseState } from '@atoms/tvLicenseState'
import Colors from '@data/Colors'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import FullScreenError from './FullScreenError'

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    padding: 8,
    gap: 8,
    marginBottom: 2,
  },
  button: {
    padding: 4,
    fontFamily: 'ZurichBT',
    fontWeight: 'normal',
    fontSize: 22,
    flexBasis: '50%',
    border: 'none',
    appearance: 'none',
    background: Colors.yellowMain,
    color: Colors.main,
    cursor: 'pointer',
    '&:disabled': {
      background: Colors.mainFaded,
      color: Colors.mainFadedText,
    },
  },
  smallText: {
    fontSize: 18,
    lineHeight: 1.25,
    marginTop: 6,
    marginBottom: 6,
  },
})

interface Props {
  onSelectLicenseStatus?: (newState: TVLicenseState) => void
}

const TVLicenseMessage: React.FC<Props> = ({ onSelectLicenseStatus }) => {
  const classes = useStyles()

  const [disableButtons, setDisableButtons] = useState(false)
  const setTvLicenseState = useSetRecoilState(tvLicenseState)

  function submitTvLicenseSelection(hasLicense: boolean) {
    setDisableButtons(true)
    const savedAt = Date.now()

    const newState = {
      hasOptedOutOfTvLicenseContent: !hasLicense,
      hasTvLicense: hasLicense,
      savedAt,
    }

    setTvLicenseState(newState)
    typeof onSelectLicenseStatus === 'function' && onSelectLicenseStatus(newState)
  }

  return (
    <InnerLayout>
      <FullScreenError errorCode={null}>
        <p>We provide access to free-to-view broadcast TV streams which require a UK TV License.</p>
        <p className={classes.smallText}>
          You can still access this site without a TV license, but you will not be able to view the broadcast TV streams.{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.tvlicensing.co.uk/check-if-you-need-one">
            Learn more
          </a>
        </p>
        <div className={classes.buttonContainer}>
          <button disabled={disableButtons} className={classes.button} onClick={() => submitTvLicenseSelection(false)}>
            I do not have a TV license
          </button>
          <button disabled={disableButtons} className={classes.button} onClick={() => submitTvLicenseSelection(true)}>
            I have a TV license
          </button>
        </div>
      </FullScreenError>
    </InnerLayout>
  )
}

export default TVLicenseMessage
