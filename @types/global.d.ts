declare global {
  export type SkyControlPressedEvent = CustomEvent<{ control: Control }>

  export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never

  interface Window {
    __bgAudio: HTMLAudioElement
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
