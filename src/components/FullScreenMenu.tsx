import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import { controlsState } from '@atoms'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { splitMenuIntoPages } from '@helpers/splitMenuIntoPages'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    width: 680,
    margin: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
    listStyle: 'none',

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

export interface MenuProps<T> {
  /**
   * Array of JS Objects.
   *
   * **Must** include a `key` value that is unique to each item
   * in the list.
   */
  data: T[]
  onBack?: (e: SkyControlPressedEvent) => void
  listItem: (props: Omit<T, 'key'>) => JSX.Element
  moreListItem: ({ onClick, selected }: { onClick: () => void; selected: boolean }) => JSX.Element
  className?: string
  footerItem?: (props: any) => JSX.Element
  onSelectionChange?: (i: number, length: number, footerShown: boolean) => void
}

/**
 * Display an Sky-esque, auto-paginated, keyboard-accessible, fully managed menu!
 *
 * Provide with a list of menu items, a menu item component, and an `onBack` handler and the rest
 * will be handled for you.
 */
const Menu = <T extends { key: string }>({
  className,
  onBack,
  data,
  listItem: ListItem,
  moreListItem: MoreListItem,
  footerItem: FooterItem,
  onSelectionChange,
}: MenuProps<T>) => {
  const classes = useStyles()
  const listRef = useRef<HTMLOListElement>(null)
  // Ensures that the Back Up button state is correctly set when the first page is loaded.
  const lastPageIndex = useRef(-1)

  const setControlsState = useSetRecoilState(controlsState)
  const [pageIndex, setPageIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)

  // Get list of pages. Memoised for speeeeeed!
  const pages = useMemo(() => splitMenuIntoPages(data), [data])
  const thisPage = pages[pageIndex]

  const pageLength = FooterItem ? thisPage.length + 1 : thisPage.length
  console.log('L', pageLength)

  function handleKeyboardNavigation(this: Document, e: KeyboardEvent) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return

    if (e.key === 'ArrowUp') {
      navigateMenuItems('up')
    } else if (e.key === 'ArrowDown') {
      navigateMenuItems('down')
    }
  }

  function handleVirtualButtonNavigation(e: SkyControlPressedEvent) {
    if (e.detail.control === 'upArrow') {
      e.stopImmediatePropagation()
      navigateMenuItems('up')
    } else if (e.detail.control === 'downArrow') {
      e.stopImmediatePropagation()
      navigateMenuItems('down')
    }
  }

  function navigateMenuItems(direction: 'up' | 'down') {
    const pageLength = FooterItem ? thisPage.length + 1 : thisPage.length
    let newIndex = -1

    if (direction === 'up') {
      setSelectedItem(i => {
        if (i !== 0) newIndex = i - 1
        else newIndex = pageLength - 1

        return newIndex
      })
    } else if (direction === 'down') {
      setSelectedItem(i => {
        if (i !== pageLength - 1) newIndex = i + 1
        else newIndex = 0

        return newIndex
      })
    }

    console.log('NI', newIndex)

    typeof onSelectionChange === 'function' && onSelectionChange(newIndex, pageLength, !!FooterItem)
  }

  if (selectedItem < 0 || selectedItem >= pageLength) {
    setSelectedItem(0)
    onSelectionChange(0, pageLength, !!FooterItem)
  }

  function handleBackUp(e: SkyControlPressedEvent) {
    if (e.detail.control === 'backUp') {
      if (pageIndex > 0) {
        e.stopImmediatePropagation()
        setPageIndex(0)
        setSelectedItem(0)
        onSelectionChange(0, pageLength, !!FooterItem)
      } else if (pageIndex === 0 && onBack) {
        e.stopImmediatePropagation()
        onBack(e)
      }
    }
  }

  useEffect(() => {
    if (lastPageIndex.current !== pageIndex) {
      lastPageIndex.current = pageIndex
    }

    setControlsState(controlsShownStateSetter('backUp', !!(onBack || pageIndex > 0)))

    setControlsState(controlsShownStateSetter(['upArrow', 'downArrow'], true))

    document.addEventListener('skyControlPressed', handleVirtualButtonNavigation)
    document.addEventListener('skyControlPressed', handleBackUp)

    document.addEventListener('keydown', handleKeyboardNavigation)

    return () => {
      document.removeEventListener('skyControlPressed', handleVirtualButtonNavigation)
      document.removeEventListener('skyControlPressed', handleBackUp)

      document.removeEventListener('keydown', handleKeyboardNavigation)

      setControlsState(controlsShownStateSetter(['upArrow', 'downArrow', 'backUp'], false))
    }
  }, [pageIndex, listRef, FooterItem, pageLength])

  return (
    <ol
      // Use string values for the styles to work nicely
      data-more={String(pageIndex < pages.length - 1)}
      data-less={String(pageIndex > 0)}
      ref={listRef}
      className={clsx(classes.root, className)}
    >
      {thisPage.map((item, i) => {
        const { key, ...data } = item

        return <ListItem key={key} selected={selectedItem === i} {...data} />
      })}
      {pages.length - 1 !== pageIndex && (
        <MoreListItem selected={selectedItem === thisPage.length - 1} onClick={() => setPageIndex(p => p + 1)} />
      )}
      {FooterItem && <FooterItem selected={selectedItem === pageLength - 1} />}
    </ol>
  )
}

export default Menu
