import FullScreenError from '@components/FullScreenError'
import InnerLayout from '@layouts/InnerLayout'
import type { WindowLocation } from '@reach/router'
import { navigate, PageProps } from 'gatsby'
import React from 'react'

type Props = PageProps<object, object, WindowLocation<{ serviceName?: string }>['state']>

const ServiceUnavailablePage: React.FC<Props> = ({ location }) => {
  const serviceName = location?.state?.serviceName || 'This interactive service'

  return (
    <InnerLayout>
      <FullScreenError
        errorCode={null}
        controlPrompt
        controlPromptAction="cancel"
        onControlPressed={() => navigate('/', { state: { selectedTab: 'INTERACTIVE' } })}
      >
        <br />
        {serviceName} is not available.
      </FullScreenError>
    </InnerLayout>
  )
}

export default ServiceUnavailablePage
