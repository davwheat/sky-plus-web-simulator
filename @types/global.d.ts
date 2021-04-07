declare global {
  export interface ControlVisibility {
    backUp: boolean
    select: boolean

    red: boolean
    green: boolean
    yellow: boolean
    blue: boolean
  }

  export type Control = keyof ControlVisibility

  export type SkyControlPressedEvent = CustomEvent<{ control: Control }>

  interface Window {
    __bgAudio: HTMLAudioElement

    __shownControls: ControlVisibility

    /**
     * Sets a control's visibility.
     *
     * If `visible` is omitted, it will toggle.
     */
    __setControlVisibility: (control: Control, visible?: boolean) => void
  }
}

// declare module '*.*' {
//   /**
//    * URL to file
//    */
//   const value: string
//   export default value
// }

export const _ = ''
