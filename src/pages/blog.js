import React from 'react'
// import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from './blog.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: 'transparent' }}>
          <Helmet title={siteTitle} />
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>Blog</h2>
            <ul className={styles.articleList}>
              {
                posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              }) 
            }
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MM / DD / YYYY")
          tags
          heroImage {
            fluid(resizingBehavior: PAD) {
              srcWebp
              srcSetWebp
              srcSet
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
