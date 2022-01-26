import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './project-post.module.css';
import RichTextRenderer from '../components/rich-text-renderer'
import { GrLinkPrevious } from "react-icons/gr";


import heroStyles from '../components/hero.module.css'

class ProjectTemplate extends React.Component {


    render() {
        const project = get(this.props, 'data.contentfulProject')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')


        return (
            <Layout location={this.props.location}>
                <div className={styles.pagePadding}>
                    <Helmet title={`${project.projectTitle} | ${siteTitle}`} />

                            <h1 className={styles.projectTitle}>
                                <Link className={styles.headerLinkWrapper} to={'/project'}>
                                    <GrLinkPrevious className={styles.backArrow}/>
                                    <span className={styles.prefix}> Projects / </span>
                                    {project.projectTitle}
                                </Link>
                            </h1>

                            <h3 className={styles.toolsUsed}> {project.toolsUsedStr}</h3>

                        { project.projectUrl && 
                            <a className={styles.projectLink} href={project.projectUrl} target={"_blank"} rel={"noreferrer"}>Check out this project here!</a> 
                        }

                        {project.projectImages.map((image,index) => {
                            return  <div className={index % 2 == 0 ? styles.left : styles.right} 
                                            key={`${project.projectTitle} project image ${index}`}>
                                        
                                        <img src ={image.file.url} className={styles.projectImage} 
                                             alt={`project image ${index}`}/>

                                        {project.projectImages.length -1 !== index && <div className={styles.decorativeBox} />}
                                    </div>
                        })}
                    </div>
            </Layout>
        )
    }
}

export default ProjectTemplate

export const pageQuery = graphql`
    query ProjectBySlug($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            id
            projectImages {
                file {
                url
              }
            }
            slug
            projectUrl
            projectTitle
            toolsUsedStr
            projectArticle {
             json
            }
            toolsUsed{
                description
            }
        }
        site {
            siteMetadata {
              title
            }
          }
    }
`
