import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'tachyons/css/tachyons.min.css'
import css from './index.module.css'
import './index.css'

const Header = () => (
  <div className={css.header}>
    <div className={css.headerNav}>
      <h1 className={css.headerNavLink}>
        <Link
          to="/"
          className={css.headerNavLink}
        >
          Navigation
        </Link>
      </h1>
    </div>
  </div>
)
const Index = ({
  data: {
    allContentfulAsset: {
      edges,
    },
  },
  children,
}) => (
  <div className={css.indexContainer}>
    <Helmet
      title="Gatsby + Contentful Proof-of-Concept"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      className={css.callToActionContainer}
      style={{
        backgroundImage: `url(${
          edges
            .find(({ node }) =>
              node.title === 'background'
            )
            .node.sizes.src
        })`,
      }}
    >
      {children()}
    </div>
  </div>
)
export const IndexLayoutQuery = graphql`
  query IndexLayoutQuery {
    allContentfulAsset {
      edges {
        node {
          id
          title
          sizes (maxWidth: 2500, maxHeight: 1105) {
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`
Index.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
}
export default Index
