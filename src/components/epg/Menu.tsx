import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import Colors from '../../data/colors'

import MenuMoreArrowSvg from '../../assets/icons/list-arrow.svg'

/**
 * Excludes the "More..." item
 */
const ITEMS_PER_PAGE = 9

const useStyles = makeStyles({
  root: {
    width: 560,
    margin: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    position: 'relative',

    '&[data-more="true"]::after, &[data-less="true"]::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 24,
      width: 32,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${MenuMoreArrowSvg})`,
      right: 0,
      transformOrigin: 'center',
    },

    '&[data-more="true"]::after': {
      bottom: 0,
      transform: 'translateY(100%)',
    },

    '&[data-less="true"]::before': {
      top: 0,
      transform: 'translateY(-100%) rotate(0.5turn)',
    },
  },
})

export interface ListItem {
  text: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

interface ListProps {
  listItems: ListItem[]
  onBack?: (e: SkyControlPressedEvent) => void
}

const Menu: React.FC<ListProps> = ({ onBack, listItems }) => {
  const classes = useStyles()
  const listRef = useRef<HTMLOListElement>(null)

  function HandleMenuNav(e: React.KeyboardEvent<HTMLOListElement>) {
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

  /**
   * 0-based
   */
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (listRef.current) {
      const firstLi = listRef.current.firstElementChild as HTMLLIElement
      firstLi && firstLi.focus()
    }

    function goToFirstPage(e: SkyControlPressedEvent) {
      e.stopImmediatePropagation()

      if (page > 0 && e.detail.control === 'backUp') {
        setPage(0)
      } else if (page === 0 && onBack) {
        onBack(e)
      }
    }

    if (window.__setControlVisibility) window.__setControlVisibility('backUp', !!(onBack || page > 0))

    document.addEventListener('skyControlPressed', goToFirstPage as EventListener)

    return () => {
      document.removeEventListener('skyControlPressed', goToFirstPage as EventListener)
    }
  }, [page, listRef])

  /**
   * 0-based
   */
  const lastPage = listItems.length > ITEMS_PER_PAGE + 1 ? Math.floor(listItems.length / ITEMS_PER_PAGE) : 0

  const itemsOnPage = listItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)

  console.log(listItems)
  console.log(itemsOnPage)

  console.log(page, lastPage)

  return (
    <ol data-more={page < lastPage} data-less={page > 0} onKeyDown={HandleMenuNav} ref={listRef} className={clsx('thick-text', classes.root)}>
      {itemsOnPage.map(item => (
        <MenuItem key={item.text} {...item} />
      ))}
      {lastPage !== page && <MenuItem text="More..." onClick={() => setPage(p => p + 1)} />}
    </ol>
  )
}

const useItemStyles = makeStyles({
  root: {
    cursor: 'pointer',
    paddingLeft: 6,
    height: 32,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    background: Colors.main,
    color: Colors.mainText,
    textTransform: 'uppercase',
    counterIncrement: 'menu',

    outline: 'none',

    '&::before': {
      width: 80,
      alignSelf: 'stretch',
      textAlign: 'center',
      lineHeight: '32px',
      marginRight: 12,

      background: Colors.accent,
      color: Colors.accentText,

      content: 'counter(menu)',
      display: 'inline-block',
    },

    '&:hover, &:focus-visible': {
      background: Colors.mainHover,
      color: Colors.mainTextHover,

      '&::before': {
        background: Colors.accentHover,
        color: Colors.accentTextHover,
      },
    },

    '&:nth-child(10)::before': {
      content: '"0"',
    },
  },
})

type ListItemProps = {
  customNumber?: number
} & ListItem

const MenuItem: React.FC<ListItemProps> = ({ customNumber, text, onClick }) => {
  const classes = useItemStyles()

  function triggerClickOnEnter(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.key === 'Enter') {
      const li = e.target as HTMLLIElement
      li.click()
    }
  }

  return (
    <li data-number={customNumber} onKeyDown={triggerClickOnEnter} onClick={onClick} tabIndex={0} className={classes.root}>
      {text}
    </li>
  )
}

export default Menu
