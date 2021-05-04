import MenuMoreArrowSvg from '@assets/icons/list-arrow.svg'
import Colors from '@data/Colors'
import { TelephoneNumbers } from '@data/telephoneNumbers'
import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ColorButtonsFooter from './epg/Footer/ColorButtonsFooter'

const ITEMS_PER_PAGE = 10
const PAGE_COUNT = Math.ceil(TelephoneNumbers.length / ITEMS_PER_PAGE) - 1

const useListStyles = makeStyles({
  list: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '85%',
    margin: 'auto',
    fontFamily: 'ZurichBT',
    fontSize: 26,
    color: '#fff',
    marginTop: 36,
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
  controlButtons: {
    position: 'static',
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    marginTop: 14,
  },
})

const TelephoneList: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const listItems = TelephoneNumbers.slice(ITEMS_PER_PAGE * pageNumber, ITEMS_PER_PAGE * (pageNumber + 1))

  const classes = useListStyles()

  function onColorButtonPress(colorButton: SkyColorButton) {
    if (colorButton === 'red') {
      setPageNumber(p => {
        let newPage = p - 1
        if (newPage < 0) newPage = PAGE_COUNT - 1

        return newPage
      })
    } else if (colorButton === 'green') {
      setPageNumber(p => {
        let newPage = p + 1
        if (newPage >= PAGE_COUNT) newPage = 0

        return newPage
      })
    }
  }

  return (
    <>
      <ul data-more={pageNumber < PAGE_COUNT - 1} data-less={pageNumber > 0} className={classes.list}>
        {listItems.map(phone => (
          <MemoizedTelephoneItem name={phone.name} telephoneNumber={phone.number} key={`${phone.name}__${phone.number}`} />
        ))}
      </ul>

      <ColorButtonsFooter
        className={classes.controlButtons}
        buttonPressHandler={onColorButtonPress}
        buttonsText={{ red: 'Page Up', green: 'Page Down' }}
      />
    </>
  )
}

interface ItemProps {
  name: string
  telephoneNumber: string
}

const useItemStyles = makeStyles({
  root: {
    lineHeight: 1,

    '& > a': {
      display: 'flex',
      cursor: 'pointer',
      textDecoration: 'none',

      '& > span:first-child': {
        flexBasis: '65%',
        background: Colors.main,
        padding: '3px 4px',
      },
      '& > span:last-child': {
        flexBasis: '35%',
        textAlign: 'right',
        background: Colors.mainFaded,
        color: Colors.mainFadedText,
        padding: '3px 4px',
      },

      '&:hover, &:focus, &:active': {
        '& > span:first-child': {
          background: Colors.yellowMain,
          color: Colors.accent,
        },
        '& > span:last-child': {
          background: Colors.yellowDark,
          color: Colors.accent,
        },
      },
    },
  },
})

const TelephoneItem: React.FC<ItemProps> = ({ name, telephoneNumber }) => {
  const classes = useItemStyles()

  const phoneNumberNoSpacing = telephoneNumber.replace(/\s/g, '')

  return (
    <li tabIndex={0} className={classes.root}>
      <a href={`tel:+44${phoneNumberNoSpacing.substr(1)}`}>
        <span>{name}</span>
        <span>{telephoneNumber}</span>
      </a>
    </li>
  )
}

const MemoizedTelephoneItem = React.memo(TelephoneItem)

export default TelephoneList
