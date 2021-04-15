import { globalBoxState } from '@atoms/globalBoxState'
import ErrorMessage from '@components/ErrorMessage'
import { randomNumber } from '@helpers/randomNumber'
import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Menu from '../Menu'
import { interactiveListItems } from './menuItems'

const useStyles = makeStyles({
  centeredErrorMessage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
})

/**
 * Handles showing the interactive menu and 'Searching for listings' message.
 */
const InteractiveMenu: React.FC = () => {
  const globalBoxStateValue = useRecoilValue(globalBoxState)

  /**
   * Did box boot less than 30s ago
   */
  const isNewBoot = Date.now() - globalBoxStateValue.bootTime < 30 * 1000

  const [hasLoaded, setHasLoaded] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    if (!hasLoaded) {
      const timeoutKey = setTimeout(() => {
        setHasLoaded(true)
      }, randomNumber(2000, isNewBoot ? 10000 : 6000))

      return () => {
        clearTimeout(timeoutKey)
      }
    }
  })

  if (!hasLoaded) {
    return (
      <div className={classes.centeredErrorMessage}>
        <ErrorMessage errorCode={null} wider horizontallyCentered>
          <br />
          Searching for listings
          <br />
          Please wait
        </ErrorMessage>
      </div>
    )
  }

  return <Menu noForcedUpperCase key="interactive" listItems={interactiveListItems} />
}

export default InteractiveMenu
