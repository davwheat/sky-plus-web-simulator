import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'
import BoxOfficeIcon from '../../../assets/icons/epg-header/box-office.inline.svg'
import InteractiveIcon from '../../../assets/icons/epg-header/interactive.inline.svg'
import ServicesIcon from '../../../assets/icons/epg-header/services.inline.svg'
import TVGuideIcon from '../../../assets/icons/epg-header/tv-guide.inline.svg'
import { mainMenuState } from '../../../atoms/mainMenuState'
import Colors from '../../../data/Colors'
import SkyLogo from '../../SkyLogo'

interface Props {
  logoText?: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '24px 32px',
    gap: 32,
    marginBottom: 20,
  },
  logo: {
    marginTop: 6,
  },
})

/**
 * Main EPG Header, containing the Sky logo, with custom text below, and the EPG tabs (TV Guide, Box Office, Services and Interactive).
 */
const Header: React.FC<Props> = ({ logoText }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <SkyLogo text={logoText} className={classes.logo} />
      <HeaderTabs />
    </header>
  )
}

const useTabStyles = makeStyles({
  root: {
    listStyle: 'none',
    display: 'flex',
    gap: 12,
  },
  icon: {
    height: 77,
    color: 'white',
  },
  selectedIcon: {
    color: Colors.headerTabSelected,
  },
})

const HeaderTabs: React.FC = () => {
  const classes = useTabStyles()
  const { selectedTab } = useRecoilValue(mainMenuState)

  return (
    <ul className={classes.root}>
      <li key="tv-guide">
        <TVGuideIcon className={clsx(classes.icon, selectedTab === 'GUIDE' && classes.selectedIcon)} />
      </li>
      <li key="box-office">
        <BoxOfficeIcon style={{ paddingTop: 3 }} className={clsx(classes.icon, selectedTab === 'BOX OFFICE' && classes.selectedIcon)} />
      </li>
      <li key="services">
        <ServicesIcon className={clsx(classes.icon, selectedTab === 'SERVICES' && classes.selectedIcon)} />
      </li>
      <li key="interactive">
        <InteractiveIcon style={{ paddingTop: 3 }} className={clsx(classes.icon, selectedTab === 'INTERACTIVE' && classes.selectedIcon)} />
      </li>
    </ul>
  )
}

export default Header
