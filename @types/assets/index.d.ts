declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.inline.svg' {
  import { ReactElement, SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.mp3' {
  const value: string
  export default value
}

declare module '*.ogg' {
  const value: string
  export default value
}

declare module '*.woff2' {
  const value: string
  export default value
}
