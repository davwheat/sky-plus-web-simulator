import chooseMusic, { MusicKeys } from '@data/chooseMusic'
import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
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
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
})

const Settings: React.FC = () => {
  const classes = useStyles()

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
  )
}

export default Settings
