import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { controlsState } from '../atoms'
import Colors from '../data/Colors'
import ErrorCodes, { ErrorText } from '../data/ErrorCodes'
import controlsShownStateSetter from '../helpers/controlsShownStateSetter'
import ControlText from './ControlText'

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
    paddingBottom: 0,
    fontFamily: 'ZurichBT',
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
   * @default 29
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
  backUpPrompt?: boolean
  /**
   * Custom Back Up prompt action text.
   *
   * Results in: `Press BACK UP to <text here>`
   */
  backUpPromptTextAction?: string
  onBackUp?: () => void
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
  backUpPrompt = false,
  backUpPromptTextAction = 'return',
  onBackUp = () => {},
  wider = false,
  horizontallyCentered = false,
}) => {
  const classes = useStyles()
  const setControlsState = useSetRecoilState(controlsState)

  if (backUpPrompt) {
    setControlsState(controlsShownStateSetter('backUp', true))
  }

  useEffect(() => {
    if (backUpPrompt) {
      function backUpEventListener(e: SkyControlPressedEvent) {
        if (e.detail.control === 'backUp') {
          e.stopImmediatePropagation()
          onBackUp()
        }
      }

      document.addEventListener('skyControlPressed', backUpEventListener as EventListener)

      return () => {
        document.removeEventListener('skyControlPressed', backUpEventListener as EventListener)
        setControlsState(controlsShownStateSetter('backUp', false))
      }
    }
  })

  return (
    <section
      role="alert"
      className={clsx(classes.messageBox, wider && classes.messageBoxWider, horizontallyCentered && classes.messageBoxHorizCenter)}
    >
      <header className={clsx('thick-text', classes.messageBoxHeader)}>
        {title}
        <span className={classes.messageBoxErrorCode}>{String(errorCode).padStart(2, '0')}</span>
      </header>
      <article className={classes.messageBoxContent}>
        {children}
        {backUpPrompt && (
          <footer className={classes.messageBoxFooter}>
            Press <ControlText>BACK UP</ControlText> to {backUpPromptTextAction}
          </footer>
        )}
      </article>
    </section>
  )
}

export default ErrorMessage
