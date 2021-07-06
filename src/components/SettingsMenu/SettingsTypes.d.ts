import type { RecoilState } from 'recoil'

export interface ISettingsItem<T> {
  /**
   * Key used in the settings atom to store the setting's value.
   */
  settingsKey: string
  /**
   * `key` provided to each setting item component.
   */
  key: string
  /**
   * Label shown next to the settings item.
   */
  label: string
  /**
   * Array of all valid options for this setting.
   */
  options: ISettingsItemOption<T>[]
  settingsAtom: RecoilState<unknown>
}

export interface ISettingsItemProps<T> {
  /**
   * Key used in the settings atom to store the setting's value.
   */
  settingsKey: string
  /**
   * `key` provided to each setting item component.
   */
  key: string
  /**
   * Label shown next to the settings item.
   */
  label: string
  /**
   * Array of all valid options for this setting.
   */
  options: ISettingsItemOption<T>[]
  settingsAtom: RecoilState<unknown>
  selected: boolean
}

export interface ISettingsItemOption<T> {
  value: T
  label: string
}

export interface ISettingsItemOptions<T> {
  options: ISettingsItemOption<T>[]
  settingsKey: string
  settingsAtom: RecoilState<unknown>
}

export interface ISettingsItemOptionsProps<T> {
  options: ISettingsItemOption<T>[]
  settingsKey: string
  settingsAtom: RecoilState<unknown>
  selected: boolean
}
