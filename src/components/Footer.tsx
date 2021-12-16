import React from 'react'
import PackageJson from '../../package.json'

const { version } = PackageJson

interface FooterProps {
  className: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      Version {version} • Created by{' '}
      <a target="_blank" rel="noopener" href="https://davwheat.dev">
        David Wheatley
      </a>{' '}
      •{' '}
      <a target="_blank" rel="noopener" href="https://github.com/davwheat/sky-digibox-web-simulator">
        View the source code on GitHub
      </a>
    </footer>
  )
}

export default Footer
