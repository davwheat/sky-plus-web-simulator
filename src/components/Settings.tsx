import { tvLicenseState } from '@atoms/tvLicenseState'
import chooseMusic, { MusicKeys } from '@data/chooseMusic'
import shouldShowTvLicenseMessage from '@helpers/shouldShowTvLicenseMessage'
import { makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import { useRecoilValue } from 'recoil'

const useStyles = makeStyles({
  flexDown: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'auto',
    background: '#000',
    color: '#fff',
    padding: 16,
    paddingTop: 48,
    gap: 12,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
  },
  tvLicense: {
    fontSize: 16,
  },
})

const Settings: React.FC = () => {
  const classes = useStyles()
  const tvLicenseStateValue = useRecoilValue(tvLicenseState)

  const { hasTvLicense } = tvLicenseStateValue
  const showTvLicenseWarning = shouldShowTvLicenseMessage(tvLicenseStateValue)

  function onBgMusicChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const select = e.target

    if (select.value === 'random') {
      window.localStorage.removeItem('epg-music')
    } else {
      window.localStorage.setItem('epg-music', select.value)
    }

    chooseMusic()
  }

  return (
    <div className={classes.root}>
      <div className={classes.flexDown}>
        <label htmlFor="settings-bg-music">Background music</label>
        <select defaultValue={window.localStorage.getItem('epg-music') || 'random'} onChange={onBgMusicChange} id="settings-bg-music">
          <option value="random">Random</option>
          {MusicKeys.map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.tvLicense}>
        {!showTvLicenseWarning ? (
          <p>
            You said that you {hasTvLicense ? 'do' : 'do not'} have a TV License. <Link to="/tv-license-settings">Not right?</Link>
          </p>
        ) : (
          <p>We don't know if you have a TV License.</p>
        )}
      </div>
    </div>
  )
}

export default Settings
