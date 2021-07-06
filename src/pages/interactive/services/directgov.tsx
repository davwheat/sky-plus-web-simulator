import DirectGovLogo from '@assets/images/interactive/directgov/logo.inline.svg'
import { controlsState } from '@atoms'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(to bottom, #737373 0%, #383838 100%)`,
    paddingTop: 36,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 112,
  },
  header: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    width: '100%',
  },
  subtitle: {
    color: '#000',
    fontFamily: 'Arial',
    fontSize: 30,
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  instruction: {
    color: '#fff',
    fontSize: 26,
    margin: 'auto',
  },
  select: {
    fontSize: 29,
    display: 'inline-flex',
    color: '#000',
    background: '#fff',
    padding: 8,
    height: 104,
    width: 104,
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    border: '4px solid #000',
    borderRadius: '50%',
    transform: 'translateY(3px)',

    '& > span': {
      transform: 'translateY(-7px)',
    },
  },

  footerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 284,
    width: '85%',
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    background: '#fff',
    width: '100%',
    border: '4px solid black',
    padding: 8,
    fontSize: 24,
    lineHeight: 1.8,
    textAlign: 'center',
    transformOrigin: 'center',
    transform: 'scaleY(0.85) translateY(-50%)',
    paddingBottom: 12,
    letterSpacing: -0.1,
    height: 'max-content',
    top: '50%',
  },
})

const DirectGov: React.FC = () => {
  const classes = useStyles()

  const setControlsVisible = useSetRecoilState(controlsState)
  setControlsVisible(controlsShownStateSetter(['backUp'], true))

  function goBack(e: SkyControlPressedEvent) {
    const control = e.detail.control

    if (['backUp'].includes(control)) {
      navigate('/', { state: { selectedTab: 'INTERACTIVE' } })
    }
  }

  useEffect(() => {
    document.addEventListener('skyControlPressed', goBack)

    return () => {
      document.removeEventListener('skyControlPressed', goBack)
    }
  })

  return (
    <InnerLayout>
      <div className={classes.root}>
        <header className={classes.header}>
          <DirectGovLogo className={classes.logo} />
          <p className={classes.subtitle}>Public services all in one place</p>
        </header>
        <main className={classes.instruction}>
          Press{' '}
          <span className={classes.select}>
            <span>Select</span>
          </span>{' '}
          to enter
        </main>
        <footer className={classes.footerContainer}>
          <div className={classes.footer}>
            From 22 Dec 2010 Directgov will no longer be on Sky
            <br />
            Interactive. However, local services, including job search,
            <br />
            are now available via the red button on channel 539
            <br />
            (Community Channel). You can still get Directgov on mobile
            <br />
            phones and the internet. To access Directgov on a mobile
            <br />
            phone, or find a UK online centre for internet access and
            <br />
            help getting online, text MOBILE to 83377 (texts are free).
          </div>
        </footer>
      </div>
    </InnerLayout>
  )
}

export default DirectGov
