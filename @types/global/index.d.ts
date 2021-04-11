import type { Control } from '../../src/atoms/controlsState'

declare global {
  export type SkyControlPressedEvent = CustomEvent<{ control: Control }>

  export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never

  interface Window {
    __bgAudio: HTMLAudioElement
  }
}

export const _ = ''
