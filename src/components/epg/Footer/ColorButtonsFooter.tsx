import { controlsState as controlsStateAtom } from '@atoms'
import ColorButton from '@components/ControlVisualisers/ColorButton'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import useHasRendered from '@hooks/useHasRendered'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

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
    bottom: 48,
    left: 42,
    right: 8,
  },
  colorButton: {
    lineHeight: 1,
  },
})

interface Props {
  className?: string
  buttonPressHandler: (colorButton: SkyColorButton) => void
  buttonsText: Partial<Record<SkyColorButton, string>>
}

const ColorButtonsFooter: React.FC<Props> = ({ className, buttonPressHandler, buttonsText }) => {
  const classes = useStyles()
  const [controlsState, setControlsState] = useRecoilState(controlsStateAtom)
  const hasRendered = useHasRendered()

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

  function setControlsVisible() {
    if (controlsToEnable.some(control => !controlsState[control])) setControlsState(controlsShownStateSetter(controlsToEnable, true))
    if (controlsToDisable.some(control => controlsState[control])) setControlsState(controlsShownStateSetter(controlsToDisable, false))
  }

  // Detect when the coloured buttons are pressed
  useEffect(() => {
    setControlsVisible()

    document.addEventListener('skyControlPressed', buttonPressEventListener)

    return () => {
      document.removeEventListener('skyControlPressed', buttonPressEventListener)

      // Remove the coloured buttons from the available controls when this unmounts
      const buttons: (keyof ControlVisibility)[] = ['red', 'green', 'yellow', 'blue']
      if (buttons.some(control => controlsState[control])) setControlsState(controlsShownStateSetter(buttons, false))
    }
  }, [buttonPressEventListener])

  return (
    <footer className={clsx(classes.root, className)}>
      {!hasRendered ? (
        <div className={classes.colorButton} style={{ visibility: 'hidden', opacity: 0 }} aria-hidden="true">
          <ColorButton buttonColor="red" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </footer>
  )
}

export default ColorButtonsFooter
