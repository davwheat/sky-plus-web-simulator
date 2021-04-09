import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import ErrorCodes, { ErrorText } from '../data/ErrorCodes'
import ControlText from './ControlText'
import Colors from '../data/Colors'

const useStyles = makeStyles({
  messageBox: {
    width: '80%',
    overflow: 'hidden',
    maxHeight: '80%',
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
}) => {
  const classes = useStyles()

  useEffect(() => {
    if (backUpPrompt) {
      window.__setControlVisibility('backUp', true)

      function backUpEventListener(e: SkyControlPressedEvent) {
        e.stopImmediatePropagation()

        if (e.detail.control === 'backUp') {
          onBackUp()
        }
      }

      document.addEventListener('skyControlPressed', backUpEventListener as EventListener)

      return () => {
        document.removeEventListener('skyControlPressed', backUpEventListener as EventListener)
        window.__setControlVisibility('backUp', false)
      }
    }
  })

  return (
    <section role="alert" className={classes.messageBox}>
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
