import FullScreenError from '@components/FullScreenError'
import { navigate } from 'gatsby'
import React from 'react'
import InnerLayout from '../layouts/InnerLayout'

const Error404: React.FC = () => {
  return (
    <InnerLayout>
      <FullScreenError errorCode={404} controlPrompt controlPromptAction="go home" onControlPressed={() => navigate('/')}>
        This page doesn't exist on the Sky Web EPG. Maybe this page was removed.
      </FullScreenError>
    </InnerLayout>
  )
}

export default Error404
