import React from 'react'
import EpgBackgroundImage from './assets/images/guide-bg.sized.png'
import SkyInfo from './fonts/Sky/SkyInfoText-Regular.woff2'
import SkyLogo from './fonts/Sky/SkyLogo-Thick.woff2'
import SkyScreen from './fonts/Sky/SkyScreen-Regular.woff2'
import ZurichBT_Bold_Cond from './fonts/Zurich/Zurich Bold Condensed.woff2'
import ZurichBT_Bold_Ext from './fonts/Zurich/Zurich Bold Extended.woff2'
import ZurichBT_Black from './fonts/Zurich/ZurichBT-Black.woff2'
import ZurichBT_Bold from './fonts/Zurich/ZurichBT-Bold.woff2'

const ALL_FONTS = [ZurichBT_Black, ZurichBT_Bold, ZurichBT_Bold_Cond, ZurichBT_Bold_Ext, SkyInfo, SkyLogo, SkyScreen]

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

        {/* Preload EPG background */}
        <link rel="preload" as="image" href={EpgBackgroundImage} />

        {/* Preload fonts -- only WOFF2s */}
        {ALL_FONTS.map(font => (
          <link key={font} rel="preload" href={font} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}

        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "c8cca799c00748039d7a9cd8c3ae5b7b"}' />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
