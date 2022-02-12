import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './project.module.css'
import Layout from '../components/layout'
import ProjectListItem from '../components/project-list-item/project-list-item'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props)
    this.imgRef = React.createRef();
    this.timeout = null;
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    const projectTimesMap = new Map();
    
    projects.forEach(item => projectTimesMap.set(item, new Date(item.node.publishDate)))
    projects.sort((a,b) => projectTimesMap.get(b) - projectTimesMap.get(a));


    const showImage = url => {
      this.timeout && clearTimeout(this.timeout);

      this.timeout = setTimeout(_ => {
        this.imgRef.current.src = url;
        this.imgRef.current.style.opacity = 0.4;
      }, 300);

    }

    const hideImage = _ => {
        this.imgRef.current.style.opacity = 0;
    }

    return (
      <Layout location={this.props.location}>
        <div className={styles.pagePadding}>
          <Helmet title={siteTitle} />
          <h2 className={styles.heading}>Projects</h2>
          <div className={styles.wrapper}>
            <ul className={styles.projectList}>
              {
                projects.map(({ node }, index) => {
                return (
                  <ProjectListItem project={node} index={index} key={`project-${index}`}
                    showProjectImage={showImage} hideProjectImage={hideImage}
                  />
                )
              })}
            </ul>
          </div>
        <img className={styles.projectImage} ref={this.imgRef} alt="active project"/>
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
        projectTitle
        projectUrl
        publishDate
        slug
        id
        projectImages {
          file {
            url
          }
        }
        toolsUsed {
          fluid(resizingBehavior: FILL, maxWidth: 44, maxHeight: 44) {
            srcWebp
            srcSetWebp
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

            // projectImages {
            //   fluid(maxHeight: 200, maxWidth: 320, resizingBehavior: SCALE) {
            //     ...GatsbyContentfulFluid_tracedSVG
            //   }
            // }
