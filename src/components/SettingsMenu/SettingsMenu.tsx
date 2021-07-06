import { controlsState } from '@atoms/controlsState'
import FullScreenMenu from '@components/FullScreenMenu'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import SettingsItem from './SettingsItem'
import type { ISettingsItem } from './SettingsTypes'

interface ISettingsMenuProps {
  settings: ISettingsItem<any>[]
  className?: string
}

const MoreItem = ({ onClick, selected }) => {
  return <SettingsItem selected={selected} key="more" label="More" options={[]} settingsKey="" settingsAtom={null} />
}

const useStyles = makeStyles({
  root: {
    marginTop: 36,
  },
})

const SettingsMenu = (props: ISettingsMenuProps) => {
  const classes = useStyles()
  const setControlsState = useSetRecoilState(controlsState)

  useEffect(() => {
    setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], true))

    return () => {
      setControlsState(controlsShownStateSetter(['leftArrow', 'rightArrow'], false))
    }
  })

  return (
    <FullScreenMenu
      className={clsx(classes.root, props.className)}
      data={props.settings}
      listItem={SettingsItem}
      moreListItem={MoreItem}
      onBack={() => navigate('/', { state: { selectedTab: 'SERVICES' } })}
    />
  )
}

export default SettingsMenu
