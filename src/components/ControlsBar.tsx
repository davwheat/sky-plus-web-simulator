import LeftRightArrowIcon from '@assets/icons/remote/lr-arrow-button.inline.svg'
import { controlsState } from '@atoms'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'
import ColorButton from './ControlVisualisers/ColorButton'
import ControlText from './ControlVisualisers/ControlText'
import SelectButton from './ControlVisualisers/SelectButton'

interface ControlItemProps {
  children: React.ReactNode
  controlName: SkyControl
  /**
   * Show a tooltip with the control name when hovering.
   */
  tooltip?: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowY: 'hidden',
    overflowX: 'auto',
    userSelect: 'none',
    height: 96,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 12,
    marginTop: -56,

    '& > *': {
      cursor: 'pointer',
    },
  },
  arrowIcon: {
    height: 16,
    transformOrigin: 'center',
  },
  rightArrow: {
    transform: 'rotate(180deg)',
  },
  upArrow: {
    transform: 'rotate(90deg)',
  },
  downArrow: {
    transform: 'rotate(-90deg)',
  },
  noRightMargin: {
    marginRight: 0,
  },
})

const ControlsBar: React.FC = () => {
  const shownControls = useRecoilValue(controlsState)
  const classes = useStyles()

  function triggerKeyPress(control: SkyControl) {
    document.dispatchEvent(
      new CustomEvent('skyControlPressed', {
        bubbles: true,
        cancelable: true,
        composed: false,
        detail: {
          control,
        },
      }),
    )
  }

  /**
   * Helper to create a control item -- saves having to copy-paste all the
   * accessibility attributes we *should* be using.
   */
  const ControlItem: React.FC<ControlItemProps> = ({ children, controlName, tooltip = undefined }) => (
    <div
      tabIndex={0}
      role="button"
      onClick={() => triggerKeyPress(controlName)}
      style={!shownControls[controlName] ? { visibility: 'hidden' } : {}}
      data-tooltip={tooltip}
      aria-label={tooltip}
    >
      {children}
    </div>
  )

  return (
    <footer className={classes.root}>
      <ControlItem tooltip="Select" controlName="select">
        <SelectButton />
      </ControlItem>
      <ControlItem controlName="backUp">
        <ControlText>BACK UP</ControlText>
      </ControlItem>

      {/* Coloured buttons */}
      <ControlItem tooltip="Red button" controlName="red">
        <ColorButton className={classes.noRightMargin} buttonColor="red" />
      </ControlItem>
      <ControlItem tooltip="Green button" controlName="green">
        <ColorButton className={classes.noRightMargin} buttonColor="green" />
      </ControlItem>
      <ControlItem tooltip="Yellow button" controlName="yellow">
        <ColorButton className={classes.noRightMargin} buttonColor="yellow" />
      </ControlItem>
      <ControlItem tooltip="Blue button" controlName="blue">
        <ColorButton className={classes.noRightMargin} buttonColor="blue" />
      </ControlItem>

      {/* Arrow buttons */}
      <ControlItem tooltip="Up arrow" controlName="upArrow">
        <LeftRightArrowIcon className={clsx(classes.arrowIcon, classes.upArrow)} />
      </ControlItem>
      <ControlItem tooltip="Down arrow" controlName="downArrow">
        <LeftRightArrowIcon className={clsx(classes.arrowIcon, classes.downArrow)} />
      </ControlItem>
      <ControlItem tooltip="Left arrow" controlName="leftArrow">
        <LeftRightArrowIcon className={classes.arrowIcon} />
      </ControlItem>
      <ControlItem tooltip="Right arrow" controlName="rightArrow">
        <LeftRightArrowIcon className={clsx(classes.arrowIcon, classes.rightArrow)} />
      </ControlItem>
    </footer>
  )
}

export default ControlsBar
