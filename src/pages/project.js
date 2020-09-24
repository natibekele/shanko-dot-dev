import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './project.module.css'
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          {/* <div className={styles.hero}>Blog</div> */}
          <div className="wrapper">
            {/* <h2 className="section-headline">Recent articles</h2> */}
            <ul className={styles.projectList}>
              {projects.map(({ node }) => {
                return (
                  <ProjectPreview project={node} />
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allContentfulProject {
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
            projectImages {
              fluid(maxHeight: 200, maxWidth: 320, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            projectUrl
            slug
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
