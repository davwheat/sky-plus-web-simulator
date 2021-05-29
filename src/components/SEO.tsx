import SharingImageUrl from '@assets/images/sharing-image.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link, Meta, Title } from 'react-head'

type MetaEntry = {
  name: string
  content: string
}

interface Props {
  description?: string
  meta?: MetaEntry[]
  title: string
}

const SEO: React.FC<Props> = ({ description, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const realTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title

  return (
    <>
      <Title>{realTitle}</Title>
      <Meta name="description" content={metaDescription} />

      <Meta name="og:locale" content="en_GB" />
      <Meta name="og:title" content={realTitle} />
      <Meta name="og:description" content={metaDescription} />
      <Meta name="og:type" content="website" />
      <Meta name="og:image" content={SharingImageUrl} />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={realTitle} />
      <Meta name="twitter:description" content={metaDescription} />
      <Meta name="twitter:creator" content="@davwheat" />
      <Meta name="twitter:site" content="@davwheat" />
      <Meta name="twitter:image" content={SharingImageUrl} />
      <Meta name="twitter:image:alt" content="Screenshot of the Sky+ Web EPG." />

      {/* Establish connection to Sky's EPG API */}
      <Link rel="preconnect" href="https://awk.epgsky.com/" />

      {meta && meta.map((m, i) => <Meta key={`${m.name}--${i}`} name={m.name} content={m.content} />)}
    </>
  )
}

export default SEO
