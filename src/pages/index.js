import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.css'

const Images = ({ edges }) => (
  <div className={css.callToActionImage}>
    {
      [
        'iphone',
        'android',
      ].map((title, index) =>
        <img
          className={css[`callToAction${title}`]}
          key={index}
          src={edges.find(({ node }) => node.title === title).node.sizes.src}
        />
      )
    }
  </div>
)
Images.propTypes = {
  edges: PropTypes.array.isRequired,
}

const Index = ({
  data: {
    contentfulHomePage: {
      callToAction,
      callToActionSubtitle,
    },
    allContentfulAsset: {
      edges,
    },
  }
}) => (
  <div className={css.callToAction}>
    <div className={css.callToActionCopy}>
      <h1>{callToAction}</h1>
      <h2>{callToActionSubtitle}</h2>
    </div>
    <Images
      edges={edges}
    />
  </div>
)
Index.propTypes = {
  data: PropTypes.object.isRequired,
}
export const IndexPageQuery = graphql`
  query IndexPageQuery {
    contentfulHomePage {
      callToAction
      callToActionSubtitle
    }
    allContentfulAsset {
      edges {
        node {
          id
          title
          sizes (maxWidth: 305, maxHeight: 641) {
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`
export default Index
