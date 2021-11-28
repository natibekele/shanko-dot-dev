import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    // const insta = get(this, 'props.data.allInstaNode.edges')

    // insta.sort((a, b) => b.node.timestamp - a.node.timestamp)


    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="row">
            <div className="column">
              {
                // insta.map(({ node }, index) => {
                //   return (
                //     // <label> yo </label>
                //     index < 2 ? <Img key={node.id} fluid={node.localFile.childImageSharp.fluid} /> : null
                //   )
                // })
              }
            </div>
            <div className="column">
              {
                // insta.map(({ node }, index) => {
                //   return (
                //     // <label> yo </label>
                //     2 <= index && index < 4 ? <Img key={node.id} fluid={node.localFile.childImageSharp.fluid} /> : null
                //   )
                // })
              }
            </div>
            <div className="column">
              {
                // insta.map(({ node }, index) => {
                //   return (
                //     // <label> yo </label>
                //     4 <= index && index < 6 ? <Img key={node.id} fluid={node.localFile.childImageSharp.fluid} /> : null
                //   )
                // })
              }
            </div>
            {/* <img alt="scroll" src={"/scroll.gif"} className="scroll-animation"/> */}
          </div>

          <div className="wrapper">
            <h2 className="section-headline"> Who am I? </h2>
            <div className="c-introVideo">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lS4XKHnduxg "
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title="who-am-i"></iframe>
            </div>

            <h2 className="section-headline">Recent projects </h2>
            <div className="project-section">
              {
                projects.map(({ node }) => {
                  return (
                    <div className="project-card">
                      <Link to={`/project/${node.slug}`}>
                        <Img className="project-tool"
                          key={node.id} fluid={node.toolsUsed[0].fluid} />
                        <p className="project-title">{node.projectTitle}</p>

                        <button className="project-link">
                          <Link to={`/project/${node.slug}`}>
                            Open
                        </Link>
                        </button>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
            <h2 className="section-headline">Recent posts</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } } 
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulProject(limit: 8) {
      edges {
        node {
          id
          projectTitle
          toolsUsed {
            fluid(maxHeight: 48, maxWidth: 48) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            description
          }
          slug
        }
      }
    }
  }
`   