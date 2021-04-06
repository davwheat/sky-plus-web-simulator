import React from 'react'
import MainMenu from '../components/epg/pages/MainMenu'
import InnerLayout from '../layouts/InnerLayout'

const IndexPage: React.FC = () => {
  return (
    <InnerLayout>
      <MainMenu />
    </InnerLayout>
  )
}

export default IndexPage
