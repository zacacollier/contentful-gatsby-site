import React from 'react'
import { map } from 'lodash'
import uuidv4 from 'uuid'
import Link from 'gatsby-link'

const Index = ({ data: { allContentfulHomePage, allContentfulAsset }}) => (
  <div>
    {
      map(allContentfulHomePage.edges, ({ node }, key) => (
        <div key={uuidv4()}>
          <h1>{node.callToAction}</h1>
          <h2>{node.callToActionSubtitle}</h2>
        </div>
      ))
    }
    {console.log(allContentfulAsset)}
    <img src={allContentfulAsset.edges[0].node.file.url} />
    <blockquote>{allContentfulAsset.edges[0].node.description}</blockquote>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const query = graphql`
  query IndexPageQuery {
    allContentfulHomePage {
      edges {
        node {
          callToAction
          callToActionSubtitle
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          file {
            url
            fileName
            contentType
          }
          description
        }
      }
    }
  }
`

export default Index
