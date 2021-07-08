import { controlsState } from '@atoms/controlsState'
import FullScreenMenu from '@components/FullScreenMenu'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import deepEqual from 'deep-equal'
import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { RecoilState, useRecoilState, useSetRecoilState } from 'recoil'
import { createSaveSettingsItem } from './SaveSettingsItem'
import SettingsItem from './SettingsItem'
import type { ISettingsItem } from './SettingsTypes'

interface ISettingsMenuProps {
  settings: ISettingsItem<any>[]
  className?: string
  settingsAtom: RecoilState<any>
  onSelectionChange?: (i: number, length: number, footerShown: boolean) => void
  onSave?: () => void
}

// const MoreItem = ({ onClick, selected }) => {
//   return <SettingsItem selected={selected} key="more" label="More" options={[]} />
// }

const useStyles = makeStyles({
  root: {
    marginTop: 36,
  },
})

const SettingsMenu = ({ className, settings, settingsAtom, onSelectionChange, onSave }: ISettingsMenuProps) => {
  const classes = useStyles()
  const setControlsState = useSetRecoilState(controlsState)

  const [savedValues, setSavedValues] = useRecoilState(settingsAtom)
  const [currentValues, setCurrentValues] = useState(savedValues)
  const haveSettingsChanged = !deepEqual(savedValues, currentValues, { strict: true })

  console.log(currentValues)

  useEffect(() => {
    setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], true))

    return () => {
      setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], false))
    }
  })

  let data = settings.reduce(
    (acc, { key, settingsKey, label, options }) => [
      ...acc,
      {
        key,
        label,
        options,
        selectedValue: currentValues[settingsKey],
        onChange: (val: unknown) => {
          console.log('xxx', val)

          setCurrentValues(settings => {
            return { ...settings, [settingsKey]: val }
          })
        },
      },
    ],
    [],
  )

  console.log('t', currentValues)

  return (
    <FullScreenMenu
      onSelectionChange={onSelectionChange}
      className={clsx(classes.root, className)}
      data={data}
      listItem={SettingsItem}
      moreListItem={() => null}
      onBack={() => navigate('/', { state: { selectedTab: 'SERVICES' } })}
      footerItem={
        haveSettingsChanged
          ? createSaveSettingsItem(() => {
              setSavedValues(currentValues)
              typeof onSave === 'function' && onSave()
            })
          : null
      }
    />
  )
}

export default SettingsMenu
