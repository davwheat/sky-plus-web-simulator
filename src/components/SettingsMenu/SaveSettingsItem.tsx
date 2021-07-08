import { controlsState } from '@atoms/controlsState'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',

    outline: 'none',
  },
  label: {
    flexBasis: '65%',

    paddingLeft: 6,
    paddingRight: 6,
    height: 32,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    background: Colors.main,
    color: Colors.mainText,
    lineHeight: '32px',

    fontFamily: 'ZurichBT',
    letterSpacing: 0.4,

    '[data-selected="true"] &': {
      background: Colors.mainHover,
      color: Colors.mainTextHover,

      '&::before': {
        background: Colors.accentHover,
        color: Colors.accentTextHover,
      },
    },
  },
})

interface ISaveSettingsProps {
  onSave: () => void
  selected: boolean
}

export default function SaveSettingsItem({ onSave, selected }: ISaveSettingsProps) {
  const classes = useStyles()
  const setControlsState = useSetRecoilState(controlsState)

  function handleSelectButton(e: SkyControlPressedEvent) {
    if (e.detail.control === 'select') {
      e.stopImmediatePropagation()

      onSave()
    }
  }

  function handleKeyboardKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      onSave()
    }
  }

  useEffect(() => {
    if (selected) {
      document.addEventListener('skyControlPressed', handleSelectButton)
      document.addEventListener('keyup', handleKeyboardKeyPress)

      setControlsState(controlsShownStateSetter('select', true))
    }

    return () => {
      document.removeEventListener('skyControlPressed', handleSelectButton)
      document.removeEventListener('keyup', handleKeyboardKeyPress)

      setControlsState(controlsShownStateSetter('select', false))
    }
  })

  return (
    <li data-selected={selected} className={classes.root} tabIndex={0} onClick={() => onSave()}>
      <span className={classes.label}>Save New Settings</span>
    </li>
  )
}

/**
 * Wrapper for SaveSettingsItem which accepts a generic onSave function.
 */
export function createSaveSettingsItem(onSave: ISaveSettingsProps['onSave']) {
  return function (props: Omit<ISaveSettingsProps, 'onSave'>) {
    return SaveSettingsItem({ ...props, onSave })
  }
}
