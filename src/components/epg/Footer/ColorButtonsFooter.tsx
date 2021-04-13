import { makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { controlsState } from '../../../atoms'
import Colors from '../../../data/Colors'
import controlsShownStateSetter from '../../../helpers/controlsShownStateSetter'
import ColorButton from '../../ColorButton'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    fontFamily: 'Zurich',
    fontStretch: 'condensed',
    fontSize: 24,
    letterSpacing: 0.2,
    color: Colors.accent,
    bottom: 52,
    left: 56,
    right: 28,
  },
  colorButton: {
    lineHeight: 1,
  },
})

interface Props {
  buttonPressHandler: (colorButton: SkyColorButton) => void
  buttonsText: Record<SkyColorButton, string>
}

const ColorButtonsFooter: React.FC<Props> = ({ buttonPressHandler, buttonsText }) => {
  const classes = useStyles()
  const setControlsState = useSetRecoilState(controlsState)

  const controlsToEnable: SkyColorButton[] = []
  const controlsToDisable: SkyColorButton[] = []

  buttonsText['red'] ? controlsToEnable.push('red') : controlsToDisable.push('red')
  buttonsText['green'] ? controlsToEnable.push('green') : controlsToDisable.push('green')
  buttonsText['yellow'] ? controlsToEnable.push('yellow') : controlsToDisable.push('yellow')
  buttonsText['blue'] ? controlsToEnable.push('blue') : controlsToDisable.push('blue')

  function buttonPressEventListener(e: SkyControlPressedEvent) {
    if (['red', 'green', 'yellow', 'blue'].includes(e.detail.control)) {
      // One of the coloured buttons was pressed
      e.stopImmediatePropagation()
      buttonPressHandler(e.detail.control as SkyColorButton)
    }
  }

  // Detect when the coloured buttons are pressed
  useEffect(() => {
    setControlsState(controlsShownStateSetter(controlsToEnable, true))
    setControlsState(controlsShownStateSetter(controlsToDisable, false))

    document.addEventListener('skyControlPressed', buttonPressEventListener as EventListener)

    return () => {
      document.removeEventListener('skyControlPressed', buttonPressEventListener as EventListener)

      // Remove the coloured buttons from the available controls when this unmounts
      setControlsState(controlsShownStateSetter(['red', 'green', 'yellow', 'blue'], false))
    }
  })

  return (
    <footer className={classes.root}>
      {buttonsText.red ? (
        <div className={classes.colorButton}>
          <ColorButton buttonColor="red" />
          {buttonsText.red}
        </div>
      ) : (
        <div />
      )}
      {buttonsText.green ? (
        <div className={classes.colorButton}>
          <ColorButton buttonColor="green" />
          {buttonsText.green}
        </div>
      ) : (
        <div />
      )}
      {buttonsText.yellow ? (
        <div className={classes.colorButton}>
          <ColorButton buttonColor="yellow" />
          {buttonsText.yellow}
        </div>
      ) : (
        <div />
      )}
      {buttonsText.blue ? (
        <div className={classes.colorButton}>
          <ColorButton buttonColor="blue" />
          {buttonsText.blue}
        </div>
      ) : (
        <div />
      )}
    </footer>
  )
}

export default ColorButtonsFooter
