import SEO from '@components/SEO'
import React from 'react'

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
}

const InnerLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <SEO title={title} description={description} />
      {children}
    </>
  )
}

export default InnerLayout
