/**
 * Determines if the page is being rendered as part of Gatsby's static site generation (SSG).
 */
export default function isSSR(): boolean {
  return typeof window === 'undefined'
}
