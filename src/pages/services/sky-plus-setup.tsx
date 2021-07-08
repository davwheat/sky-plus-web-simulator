import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { controlsState } from '@atoms/controlsState'
import { skyPlusSetupAtom } from '@atoms/skyPlusSetupAtom'
import ControlArrows from '@components/ControlVisualisers/ControlArrows'
import ControlText from '@components/ControlVisualisers/ControlText'
import ColorButtonsFooter from '@components/epg/Footer/ColorButtonsFooter'
import { Header, TitleHeader } from '@components/epg/Header'
import SettingsMenu from '@components/SettingsMenu/SettingsMenu'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
  settings: {},
  controlPrompt: {
    fontFamily: 'ZurichBT',
    color: Colors.accent,
    fontSize: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: '7.5%',
    margin: 'auto',
    width: '85%',
    maxWidth: '85%',
    display: 'flex',
    flexDirection: 'column',
  },
  colorButtons: {
    gridTemplateColumns: '1fr auto auto auto',
    position: 'static',
    bottom: 'initial',
    left: 'initial',
  },
})

export default function SkyPlusSetupPage() {
  const classes = useStyles()
  const setControlsVisible = useSetRecoilState(controlsState)
  const resetSettings = useResetRecoilState(skyPlusSetupAtom)

  function goBack(e: SkyControlPressedEvent) {
    if (e.detail.control === 'backUp') {
      navigate('/', { state: { selectedTab: 'SERVICES' } })
    }
  }

  function handleColorButtonPressed(btn: SkyColorButton) {
    if (btn === 'red') {
      resetSettings()
    }
  }

  useEffect(() => {
    setControlsVisible(controlsShownStateSetter('backUp', true))
    document.addEventListener('skyControlPressed', goBack)

    return () => {
      setControlsVisible(controlsShownStateSetter('backUp', false))
      document.removeEventListener('skyControlPressed', goBack)
    }
  })

  const [footerType, setFooterType] = useState<'changeSettings' | 'saveSettings'>('changeSettings')

  return (
    <InnerLayout>
      <div className={classes.root}>
        <Header logoText="guide">
          <TitleHeader heading="Sky+ setup" />
        </Header>

        <SettingsMenu
          className={classes.settings}
          settingsAtom={skyPlusSetupAtom}
          onSelectionChange={(i, length, footerItemShown) => {
            console.log('OSC', i, length, footerItemShown)

            if (footerItemShown && i === length - 1) {
              footerType !== 'saveSettings' && setFooterType('saveSettings')
            } else {
              footerType !== 'changeSettings' && setFooterType('changeSettings')
            }
          }}
          settings={[
            {
              key: 'diskSpaceMgmt',
              settingsKey: 'diskSpaceMgmt',
              label: 'Disk Space Management',
              options: [
                { label: 'AUTOMATIC', value: 'auto' },
                { label: 'WARNING', value: 'warning' },
                { label: 'MANUAL', value: 'manual' },
              ],
            },
            {
              key: 'instantRewind',
              settingsKey: 'instantRewind',
              label: 'Instant Rewind',
              options: [
                { label: 'OFF', value: 0 },
                { label: '5 MINS', value: 5 },
                { label: '15 MINS', value: 15 },
                { label: '30 MINS', value: 30 },
                { label: '60 MINS', value: 60 },
              ],
            },
            {
              key: 'addToStartRec',
              settingsKey: 'addToStartRec',
              label: 'Add to Start of Recording',
              options: [
                { label: 'AUTOMATIC', value: -1 },
                { label: '0 MIN', value: 0 },
                { label: '1 MIN', value: 1 },
                { label: '2 MINS', value: 2 },
                { label: '5 MINS', value: 5 },
                { label: '10 MINS', value: 10 },
              ],
            },
            {
              key: 'addToEndRec',
              settingsKey: 'addToEndRec',
              label: 'Add to End of Recording',
              options: [
                { label: 'AUTOMATIC', value: -1 },
                { label: '0 MIN', value: 0 },
                { label: '1 MIN', value: 1 },
                { label: '2 MINS', value: 2 },
                { label: '5 MINS', value: 5 },
                { label: '10 MINS', value: 10 },
              ],
            },
            {
              key: 'frontPanelIndicator',
              settingsKey: 'frontPanelIndicator',
              label: 'Front Panel Indicator',
              options: [
                { label: 'STANDARD', value: 'standard' },
                { label: 'DEMO', value: 'demo' },
                { label: 'OFF', value: 'off' },
              ],
            },
          ]}
          onSave={() => navigate('/', { state: { selectedTab: 'SERVICES' } })}
        />

        <nav className={classes.footer}>
          <ColorButtonsFooter
            className={classes.colorButtons}
            buttonPressHandler={handleColorButtonPressed}
            buttonsText={{ red: 'Reset all settings' }}
          />

          {footerType === 'changeSettings' ? (
            <p className={classes.controlPrompt}>
              Use <ControlArrows variant="horizontal" /> to change setting
            </p>
          ) : (
            <p className={classes.controlPrompt}>
              Press <ControlText>SELECT</ControlText> to save or <ControlText>BACK UP</ControlText> to cancel
            </p>
          )}
        </nav>
      </div>
    </InnerLayout>
  )
}
