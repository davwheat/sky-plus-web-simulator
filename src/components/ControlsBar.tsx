import { makeStyles } from '@material-ui/core'
import React, { useEffect, useReducer, useState } from 'react'
import ControlText from './ControlText'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowY: 'hidden',
    overflowX: 'auto',
    marginTop: 16,
    userSelect: 'none',

    '& > *': {
      cursor: 'pointer',
    },
  },
})

const ControlsBar = () => {
  const [shownControls, setShownControls] = useState<typeof window.__shownControls>({
    backUp: false,
    select: false,

    red: false,
    green: false,
    yellow: false,
    blue: false,
  })

  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const classes = useStyles()

  useEffect(() => {
    function setControlVisibility(control: Control, visible?: boolean): void {
      setShownControls(controls => {
        console.log(controls)

        if (Object.keys(controls).includes(control)) {
          controls[control] = typeof visible !== 'boolean' ? !controls[control] : visible
        } else {
          console.error('Invalid control', control)
        }

        console.log(controls)
        return controls
      })

      forceUpdate()
    }

    window.__shownControls = shownControls
    window.__setControlVisibility = setControlVisibility

    return () => {
      window.__shownControls = undefined
      window.__setControlVisibility = undefined
    }
  })

  function triggerKeyPress(control: Control) {
    document.dispatchEvent(
      new CustomEvent('skyControlPressed', {
        bubbles: true,
        cancelable: true,
        composed: false,
        detail: {
          control,
        },
      }),
    )
  }

  return (
    <footer className={classes.root}>
      <div tabIndex={0} role="button" onClick={() => triggerKeyPress('backUp')} style={!shownControls.backUp ? { visibility: 'hidden' } : {}}>
        <ControlText>BACK UP</ControlText>
      </div>
    </footer>
  )
}

export default ControlsBar
