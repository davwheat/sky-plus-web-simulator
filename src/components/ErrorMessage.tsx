import { controlsState as controlsStateAtom } from '@atoms'
import Colors from '@data/Colors'
import ErrorCodes, { ErrorText } from '@data/ErrorCodes'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import ControlText from './ControlVisualisers/ControlText'

const useStyles = makeStyles({
  messageBox: {
    width: '80%',
    overflow: 'hidden',
    maxHeight: '80%',
  },
  messageBoxWider: {
    width: '92%',
  },
  messageBoxHorizCenter: {
    margin: 'auto',
  },
  messageBoxHeader: {
    background: Colors.yellowMain,
    color: Colors.main,
    textTransform: 'uppercase',
    lineHeight: '29px',
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',

    fontFamily: 'Zurich',
    fontStretch: 'expanded',
    fontWeight: 700,
    letterSpacing: 0.4,
  },
  messageBoxErrorCode: {
    position: 'absolute',
    right: 4,
  },
  messageBoxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
    paddingBottom: 1,
    fontFamily: 'ZurichBT',
    fontWeight: 400,
    background: Colors.mainLight,
    color: Colors.mainText,
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: '32px',
    minHeight: 32 * 4 + 4 + 4,
  },
  messageBoxFooter: {
    color: Colors.yellowText,
    paddingBottom: 1,
  },
})

export interface ErrorMessageProps {
  /**
   * Error message title
   *
   * @default "For your information"
   */
  title?: string
  /**
   * Error message number
   *
   * @default 28
   */
  errorCode?: number | null
  /**
   * Error message content
   *
   * @default "No Satellite Signal is being received. [...]"
   */
  children?: React.ReactNode
  /**
   * Whether to show the Back Up prompt or not
   *
   * @default false
   */
  controlPrompt?: boolean
  /**
   * Custom Back Up prompt action text.
   *
   * Results in: `Press BACK UP to <text here>`
   */
  controlPromptAction?: string
  onControlPressed?: () => void
  /**
   * Info to be used to choose a custom control to watch for.
   *
   * `text` is shown as part of the `controlPrompt`, and `control` is used for the event listener.
   */
  customControlData?: {
    text: string
    control: SkyControl
  }
  /**
   * Use the wider variant of error message. This is used when the error message is shown within the EPG itself.
   */
  wider?: boolean
  /**
   * Horizontally center the message box within the parent container.
   *
   * (Applies `margin: auto`.)
   */
  horizontallyCentered?: boolean
  /**
   * Classes to apply to the message box's root node.
   */
  className?: string
}

/**
 * Displays a Sky-themed error message.
 *
 * Defaults to a No Satellite error.
 *
 * Title is almost always "FOR YOUR INFORMATION" on a real box.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'For your information',
  errorCode = ErrorCodes.NO_SATELLITE_SIGNAL,
  children = ErrorText[ErrorCodes.NO_SATELLITE_SIGNAL],
  customControlData = { text: 'BACK UP', control: 'backUp' },
  controlPrompt = false,
  controlPromptAction = 'return',
  onControlPressed = () => {},
  wider = false,
  horizontallyCentered = false,
  className,
}) => {
  const classes = useStyles()
  const [controlsState, setControlsState] = useRecoilState(controlsStateAtom)
  const wasBackupShown = controlsState.backUp

  if (controlPrompt && !controlsState.backUp) {
    setControlsState(controlsShownStateSetter('backUp', true))
  }

  useEffect(() => {
    if (controlPrompt) {
      function backUpEventListener(e: SkyControlPressedEvent) {
        if (e.detail.control === customControlData.control) {
          e.stopImmediatePropagation()
          onControlPressed()
        }
      }

      document.addEventListener('skyControlPressed', backUpEventListener)

      return () => {
        document.removeEventListener('skyControlPressed', backUpEventListener)
        !wasBackupShown && setControlsState(controlsShownStateSetter('backUp', false))
      }
    }
  })

  return (
    <section
      role="alert"
      className={clsx(classes.messageBox, wider && classes.messageBoxWider, horizontallyCentered && classes.messageBoxHorizCenter, className)}
    >
      <header className={classes.messageBoxHeader}>
        {title}
        <span className={classes.messageBoxErrorCode}>
          {errorCode !== null && typeof errorCode !== 'undefined' && String(errorCode).padStart(2, '0')}
        </span>
      </header>
      <article className={classes.messageBoxContent}>
        {children}
        {controlPrompt && (
          <footer className={classes.messageBoxFooter}>
            Press <ControlText>{customControlData.text}</ControlText> to {controlPromptAction}
          </footer>
        )}
      </article>
    </section>
  )
}

export default ErrorMessage
