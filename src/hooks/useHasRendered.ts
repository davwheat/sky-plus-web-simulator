import { useEffect, useState } from 'react'

export default function useHasRendered(): boolean {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (!rendered) setRendered(true)
  })

  return rendered
}
