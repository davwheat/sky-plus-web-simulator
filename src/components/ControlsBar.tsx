import React from 'react'

import { makeStyles } from '@material-ui/core'
import ControlText from './ControlText'

import { useRecoilValue } from 'recoil'
import { controlsState } from '../atoms'
import type { Control } from '../atoms/controlsState'

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
  const shownControls = useRecoilValue(controlsState)
  const classes = useStyles()

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
