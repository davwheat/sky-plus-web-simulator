import React from 'react'

interface Props {
  htmlAttributes?: Record<string, unknown>
  headComponents?: React.ReactNode
  bodyAttributes?: Record<string, unknown>
  preBodyComponents?: React.ReactNode
  body?: string
  postBodyComponents?: React.ReactNode
}

const HTML: React.FC<Props> = props => {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
