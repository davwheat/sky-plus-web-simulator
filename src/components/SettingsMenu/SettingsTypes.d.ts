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
}

export interface ISettingsItemProps<T> {
  /**
   * Label shown next to the settings item.
   */
  label: string
  /**
   * Array of all valid options for this setting.
   */
  options: ISettingsItemOption<T>[]
  selected: boolean
  onChange: (newValue: T) => void
  selectedValue: T
}

export interface ISettingsItemOption<T> {
  value: T
  label: string
}

export interface ISettingsItemOptions<T> {
  options: ISettingsItemOption<T>[]
  onChange: (key: string, newValue: T) => void
}

export interface ISettingsItemOptionsProps<T> {
  options: ISettingsItemOption<T>[]
  selected: boolean
  onChange: (newValue: T) => void
  selectedValue: T
}
