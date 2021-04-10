import type { Control } from '../atoms/controlsState'

/**
 * Returns a set state function to be passed into `useSetRecoilState`.
 *
 * If `isShown` is not provided, the control will be toggled.
 *
 * @example <caption>Shows the back up button</caption>
 * useSetRecoilState(controlsState)(controlsShownStateSetter('backUp', true))
 *
 * @param controlName Name of the control to show/hide/toggle
 * @param isShown (optional) Whether it should be shown or not
 * @returns Recoil setState handler function to set the visibility of this control
 */
export default function controlsShownStateSetter(controlName: Control, isShown?: boolean) {
  return controlsRaw => {
    let controls = { ...controlsRaw }
    console.log('start', controls)

    if (Object.keys(controls).includes(controlName)) {
      controls[controlName] = typeof isShown !== 'boolean' ? !controls[controlName] : isShown
    } else {
      throw `Invalid control provided to \`controlsShownStateSetter\`: "${controlName}".`
    }

    console.log(controls)
    return controls
  }
}
