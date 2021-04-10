import React from 'react'

interface FooterProps {
  className: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      Created by{' '}
      <a target="_blank" href="https://github.com/davwheat">
        David Wheatley
      </a>{' '}
      •{' '}
      <a target="_blank" href="https://github.com/davwheat/sky-digibox-web-simulator">
        View the source code on GitHub
      </a>
    </footer>
  )
}

export default Footer
