import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { controlsState } from '@atoms/controlsState'
import ControlText from '@components/ControlVisualisers/ControlText'
import { Header, TitleHeader } from '@components/epg/Header'
import TelephoneList from '@components/TelephoneList'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    background: `url(${EpgBackgroundImage})`,
  },
  list: {
    listStyle: 'none',
    '& > li': {
      position: 'relative',
      '&::before': {
        content: '"–"',
        display: 'inline-block',
        position: 'absolute',
        verticalAlign: 'middle',
        transform: 'translate(-24px, -2px) scaleX(1.25)',
      },
    },
  },
  controlPrompt: {
    fontFamily: 'ZurichBT',
    color: Colors.accent,
    margin: 'auto',
    fontSize: 24,
    width: '85%',
    maxWidth: '85%',
    marginTop: 4,
  },
})

const TelephoneNumbers: React.FC = () => {
  const classes = useStyles()
  const setControlsVisible = useSetRecoilState(controlsState)

  function goBack(e: SkyControlPressedEvent) {
    if (e.detail.control === 'backUp') {
      navigate('/', { state: { selectedTab: 'SERVICES' } })
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

  return (
    <InnerLayout>
      <div className={classes.root}>
        <Header logoText="guide">
          <TitleHeader heading="Telephone numbers" />
        </Header>

        <TelephoneList />

        <p className={classes.controlPrompt}>
          Press <ControlText>BACK UP</ControlText> to return
        </p>
      </div>
    </InnerLayout>
  )
}

export default TelephoneNumbers
