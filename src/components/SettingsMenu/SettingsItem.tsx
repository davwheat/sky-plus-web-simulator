import Colors from '@data/Colors'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import SettingsItemOptions from './SettingsItemOptions'
import type { ISettingsItemProps } from './SettingsTypes'

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

export default function SettingsItem<T>({ label, options, selected = false, onChange, selectedValue }: ISettingsItemProps<T>) {
  const classes = useStyles()

  return (
    <li data-selected={selected} className={classes.root} tabIndex={0}>
      <span className={classes.label}>{label}</span>
      <SettingsItemOptions onChange={onChange} selected={selected} options={options} selectedValue={selectedValue} />
    </li>
  )
}
