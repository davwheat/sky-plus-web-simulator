import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

interface FooterProps {
  className: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      gitCommit(latest: { eq: true }) {
        hash
      }
    }
  `)

  return (
    <footer className={className}>
      Version{' '}
      <a target="_blank" rel="noopener" href={`https://github.com/davwheat/sky-plus-web-simulator/commit/${data.gitCommit.hash}`}>
        {(data.gitCommit.hash as string).substring(0, 6)}
      </a>{' '}
      • Created by{' '}
      <a target="_blank" rel="noopener" href="https://davwheat.dev">
        David Wheatley
      </a>{' '}
      •{' '}
      <a target="_blank" rel="noopener" href="https://github.com/davwheat/sky-plus-web-simulator">
        View the source code on GitHub
      </a>
    </footer>
  )
}

export default Footer
