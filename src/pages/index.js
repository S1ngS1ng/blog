import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            tags
            categories
          }
        }
      }
    }
  }
`

export default IndexPage
