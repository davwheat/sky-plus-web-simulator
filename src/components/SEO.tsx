import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Meta, Title } from 'react-head'

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

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={realTitle} />
      <Meta name="twitter:description" content={metaDescription} />
      <Meta name="twitter:creator" content="@davwheat" />
      <Meta name="twitter:site" content="@davwheat" />

      {meta && meta.map((m, i) => <Meta key={`${m.name}--${i}`} name={m.name} content={m.content} />)}
    </>
  )
}

export default SEO
