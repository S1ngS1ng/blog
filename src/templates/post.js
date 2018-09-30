import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

/**
 * @param data - Data from GraphQL query
 * @constructor
 */
export default function Template({ data }) {
  // const post = data.markdownRemark;
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
