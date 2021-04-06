import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const COLORS = {
  main: '#0025c9',
  mainText: '#fff',
  mainHover: '#fcda25',
  mainTextHover: '#0000b3',

  accent: '#001a8f',
  accentText: '#7e7eff',
  accentHover: '#fec200',
  accentTextHover: '#0000b3',
}

const useStyles = makeStyles({
  root: {
    width: 520,
    margin: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    // Show the first list item as selected if no items have focus
    '&:not(:focus-within)': {
      '& li:first-child': {
        background: COLORS.mainHover,
        color: COLORS.mainTextHover,

        '&::before': {
          background: COLORS.accentHover,
          color: COLORS.accentTextHover,
        },
      },
    },
  },
})

export interface ListItem {
  text: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

interface ListProps {
  listItems: ListItem[]
}

const Menu: React.FC<ListProps> = ({ listItems }) => {
  const classes = useStyles()
  const listRef = useRef<HTMLOListElement>(null)

  function HandleMenuNav(e: React.KeyboardEvent<HTMLOListElement>) {
    // debugger

    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return

    const li = e.target as HTMLLIElement
    const list = e.currentTarget as HTMLOListElement

    if (e.key === 'ArrowUp') {
      const prev = li.previousElementSibling as HTMLLIElement | null
      let elToFocus = prev

      if (!prev) {
        // Top of list
        // Wrap to bottom
        elToFocus = list.lastElementChild as HTMLLIElement
      }

      elToFocus.focus()
    } else if (e.key === 'ArrowDown') {
      const next = li.nextElementSibling as HTMLLIElement | null
      let elToFocus = next

      if (!next) {
        // Bottom of list
        // Wrap to top
        elToFocus = list.firstElementChild as HTMLLIElement
      }

      elToFocus.focus()
    }
  }

  useEffect(() => {
    if (listRef.current) {
      const firstLi = listRef.current.firstElementChild as HTMLLIElement
      firstLi.focus()
    }
  })

  return (
    <ol onKeyDown={HandleMenuNav} ref={listRef} className={clsx('thick-text', classes.root)}>
      {listItems.map(item => (
        <MenuItem key={item.text} {...item} />
      ))}
    </ol>
  )
}

const useItemStyles = makeStyles({
  root: {
    cursor: 'pointer',
    paddingLeft: 4,
    height: 32,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    background: COLORS.main,
    color: COLORS.mainText,
    textTransform: 'uppercase',
    counterIncrement: 'menu',

    outline: 'none',

    '&::before': {
      width: 80,
      alignSelf: 'stretch',
      textAlign: 'center',
      lineHeight: '32px',
      marginRight: 12,

      background: COLORS.accent,
      color: COLORS.accentText,

      content: 'counter(menu)',
      display: 'inline-block',
    },

    '&:hover, &:focus-visible': {
      background: COLORS.mainHover,
      color: COLORS.mainTextHover,

      '&::before': {
        background: COLORS.accentHover,
        color: COLORS.accentTextHover,
      },
    },
  },
})

type ListItemProps = {} & ListItem

const MenuItem: React.FC<ListItemProps> = ({ text, onClick }) => {
  const classes = useItemStyles()

  function triggerClickOnEnter(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.key === 'Enter') {
      const li = e.target as HTMLLIElement
      li.click()
    }
  }

  return (
    <li onKeyDown={triggerClickOnEnter} onClick={onClick} tabIndex={0} className={classes.root}>
      {text}
    </li>
  )
}

export default Menu
