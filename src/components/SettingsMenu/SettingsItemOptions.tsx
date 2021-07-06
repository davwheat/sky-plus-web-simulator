import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import type { ISettingsItemOptionsProps } from './SettingsTypes'

const useStyles = makeStyles({
  root: {
    flexBasis: '31%',

    position: 'relative',

    cursor: 'pointer',
    paddingLeft: 6,
    paddingRight: 6,
    height: 32,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: Colors.mainFaded,
    color: Colors.mainFadedText,
    lineHeight: '32px',

    listStyle: 'none',

    fontFamily: 'Zurich',
    fontStretch: 'expanded',
    letterSpacing: 0.4,

    outline: 'none',

    '&::before, &::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 24,
      width: 32,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${MenuMoreArrowSvg})`,
      right: 0,
      transformOrigin: 'center',
      opacity: 0,
    },

    '&::before': {
      transform: 'rotate(90deg)',
      left: -28,
    },

    '&::after': {
      transform: 'rotate(-90deg)',
      right: -28,
    },

    '[data-selected="true"] &': {
      background: Colors.mainHover,
      color: Colors.mainTextHover,

      '&::before, &::after': {
        opacity: 1,
      },
    },
  },
  hidden: {
    display: 'none',
  },
})

export default function SettingsItemOptions<T>({ options, settingsKey, settingsAtom, selected }: ISettingsItemOptionsProps<T>) {
  const classes = useStyles()

  const [settings, setSettings] = useRecoilState(settingsAtom)

  const currentSelectedValue: T = settings[settingsKey]

  const uniqueValues = new Set(options.map(v => v.value))
  if (uniqueValues.size !== options.length) throw 'Options array has multiple items with the same value.'

  /**
   * Accepts the new value of this setting and sets it in the Recoil atom while
   * preserving the values of other settings.
   */
  const setSetting = useCallback(
    (newValue: T) => {
      setSettings(prev => {
        const newObj = { ...prev }

        newObj[settingsKey] = newValue

        return newObj
      })
    },
    [settingsKey],
  )

  function changeSelectedOption(direction: 'left' | 'right') {
    if (direction === 'left') {
      const selectedIndex = options.findIndex(o => o.value === currentSelectedValue)

      let newIndex = selectedIndex - 1
      if (newIndex === -1) newIndex = options.length - 1

      setSetting(options[newIndex].value)
    } else if (direction === 'right') {
      const selectedIndex = options.findIndex(o => o.value === currentSelectedValue)

      let newIndex = selectedIndex + 1
      if (newIndex === options.length) newIndex = 0

      setSetting(options[newIndex].value)
    }
  }

  function handleOptionSwitching(e: SkyControlPressedEvent) {
    if (e.detail.control === 'leftArrow') {
      changeSelectedOption('left')
    } else if (e.detail.control === 'rightArrow') {
      changeSelectedOption('right')
    }
  }

  function handleKeyboardKeyPress(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      changeSelectedOption('left')
    } else if (e.key === 'ArrowRight') {
      changeSelectedOption('right')
    }
  }

  useEffect(() => {
    if (selected) {
      document.addEventListener('skyControlPressed', handleOptionSwitching)
      document.addEventListener('keyup', handleKeyboardKeyPress)
    }

    return () => {
      document.removeEventListener('skyControlPressed', handleOptionSwitching)
      document.removeEventListener('keyup', handleKeyboardKeyPress)
    }
  })

  return (
    <ul className={classes.root}>
      {options.map(option => {
        return (
          <li key={`${option.label}___${option.value}`} className={clsx({ [classes.hidden]: option.value !== currentSelectedValue })}>
            {option.label}
          </li>
        )
      })}
    </ul>
  )
}
