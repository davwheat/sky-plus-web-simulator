/**
 * Returns a random number between two values
 */
export function randomNumber(min: number, max: number): number {
  return Math.ceil(Math.random() * (max - min)) + min
}
