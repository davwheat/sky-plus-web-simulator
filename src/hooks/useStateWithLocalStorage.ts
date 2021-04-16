import { useState } from 'react'

type StateSetterFunc<T> = (currentValue: T) => T

/**
 * A value to set the state to, or a setter function.
 *
 * Same syntax as `React.useState`'s `setState` function.
 */
type SetStateType<T> = (setter: StateSetterFunc<T> | T) => void

/**
 * Clears the saved value from LocalStorage and sets the state to the default value.
 */
type ResetStateFunc = () => void

/**
 * Hook that combines React's `useState` and persists the value across loads with browser local storage.
 *
 * @param key LocalStorage key
 * @param initialValue Default value
 * @returns
 */
export default function useLocalStorage<T>(key: string, initialValue: T): [T, SetStateType<T>, ResetStateFunc] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore: T = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  const resetState = () => {
    window.localStorage.removeItem(key)
    setStoredValue(initialValue)
  }

  return [storedValue, setValue, resetState]
}
