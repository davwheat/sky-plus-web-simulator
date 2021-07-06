import EpgBackgroundImage from '@assets/images/guide-bg.sized.png'
import { controlsState } from '@atoms/controlsState'
import ControlText from '@components/ControlVisualisers/ControlText'
import { Header, TitleHeader } from '@components/epg/Header'
import ErrorMessage from '@components/ErrorMessage'
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
  message: {
    marginTop: 48,
    width: '85%',
    maxWidth: '85%',

    '& > header': {
      textAlign: 'left',
      paddingLeft: 42,
    },

    '& > article': {
      textAlign: 'left',
      paddingLeft: 42,
      fontFamily: 'Zurich',
      fontStretch: 'condensed',
      paddingTop: 0,
    },
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
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    fontSize: 24,
    marginTop: 48,
  },
})

const UsingSkyPlus: React.FC = () => {
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
          <TitleHeader heading="Using your Sky+ box" />
        </Header>

        <ErrorMessage className={classes.message} horizontallyCentered title="HELP INFORMATION" errorCode={null}>
          <ul className={classes.list}>
            <li>For information on recent changes refer to Sky magazine or channel 999</li>
            <li>To find a programme press 'tv guide', then choose the category you need.</li>
            <li>Press 'Box Office' to see what's on and to order an event</li>
            <li>To record a programme press Record instead of Select</li>
            <li>For further information please refer to the 'Using Sky+' booklet</li>
            <li>Press 'Sky' any time to return immediately to TV viewing</li>
          </ul>
        </ErrorMessage>

        <p className={classes.controlPrompt}>
          Press <ControlText>BACK UP</ControlText> to return
        </p>
      </div>
    </InnerLayout>
  )
}

export default UsingSkyPlus
