import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

import Header from '../components/Header'

const IndexPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }, i) => {
      // if (i === 0) {
      //   return <Header data={node} location={location} />
      // } else {
      return <PostListing key={node.id} post={node} />
      // }
    })}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
