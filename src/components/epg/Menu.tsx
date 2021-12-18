import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import { controlsState as controlsStateAtom } from '@atoms'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { splitMenuIntoPages } from '@helpers/splitMenuIntoPages'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    width: 585,
    margin: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    position: 'relative',

    fontFamily: 'Zurich',
    fontStretch: 'expanded',
    fontWeight: 700,
    letterSpacing: 0.4,

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

export interface MenuProps {
  listItems: ListItem[]
  onBack?: (e: SkyControlPressedEvent) => void
  /**
   * Whether to disable forced uppercase menu items.
   *
   * Notably used for Sky Interactive listings.
   */
  noForcedUpperCase?: boolean
}

/**
 * Display an Sky-esque, auto-paginated, auto-numbered, keyboard-accessible, fully managed menu!
 *
 * Provide with a list of menu items, containing text and onClick handlers, and this component will handle the rest.
 *
 * If changing the `listItems` prop, remember to also pass a `key` prop to ensure the page gets reset.
 */
const Menu: React.FC<MenuProps> = ({ onBack, listItems, noForcedUpperCase = false }) => {
  const classes = useStyles()
  const listRef = useRef<HTMLOListElement>(null)
  // Ensures that the Back Up button state is correctly set when the first page is loaded.
  const lastPageIndex = useRef(-1)

  const [controlsState, setControlsState] = useRecoilState(controlsStateAtom)
  const [pageIndex, setPageIndex] = useState(0)

  if (lastPageIndex.current !== pageIndex) {
    lastPageIndex.current = pageIndex

    const shouldBackShow = !!(onBack || pageIndex > 0)
    controlsState.backUp !== shouldBackShow && setControlsState(controlsShownStateSetter('backUp', shouldBackShow))
  }

  // Get list of pages. Memoised for speeeeeed!
  const pages = useMemo(() => splitMenuIntoPages(listItems), [listItems, splitMenuIntoPages])
  const thisPage = pages[pageIndex]

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

  useEffect(() => {
    if (listRef.current) {
      const firstLi = listRef.current.firstElementChild as HTMLLIElement
      firstLi && firstLi.focus()
    }

    function goToFirstPage(e: SkyControlPressedEvent) {
      if (pageIndex > 0 && e.detail.control === 'backUp') {
        e.stopImmediatePropagation()
        setPageIndex(0)
      } else if (pageIndex === 0 && onBack) {
        e.stopImmediatePropagation()
        onBack(e)
      }
    }

    document.addEventListener('skyControlPressed', goToFirstPage)

    return () => {
      document.removeEventListener('skyControlPressed', goToFirstPage)
    }
  }, [pageIndex, listRef])

  return (
    <ol
      // Use string values for the styles to work nicely
      data-more={String(pageIndex < pages.length - 1)}
      data-less={String(pageIndex > 0)}
      onKeyDown={HandleMenuNav}
      ref={listRef}
      className={classes.root}
    >
      {thisPage.map(item => (
        <MenuItem noForcedUpperCase={noForcedUpperCase} key={item.text} {...item} />
      ))}
      {pages.length - 1 !== pageIndex && <MenuItem text="More..." onClick={() => setPageIndex(p => p + 1)} />}
    </ol>
  )
}

const useItemStyles = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
  root: {
    cursor: 'pointer',
    paddingLeft: 6,
    height: 32,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    background: Colors.main,
    color: Colors.mainText,
    counterIncrement: 'menu',
    letterSpacing: -0.15,
    lineHeight: '32px',

    outline: 'none',

    '&::before': {
      width: 72,
      alignSelf: 'stretch',
      textAlign: 'center',
      lineHeight: '32px',
      marginRight: 8,

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
  noForcedUpperCase?: boolean
} & ListItem

const MenuItem: React.FC<ListItemProps> = ({ customNumber, text, onClick, noForcedUpperCase = false }) => {
  const classes = useItemStyles()

  function triggerClickOnEnter(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.key === 'Enter') {
      const li = e.target as HTMLLIElement
      li.click()
    }
  }

  return (
    <li
      data-number={customNumber}
      onKeyDown={triggerClickOnEnter}
      onClick={onClick}
      tabIndex={0}
      className={clsx(classes.root, !noForcedUpperCase && classes.uppercase)}
    >
      {text}
    </li>
  )
}

export default Menu
