import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './project-post.module.css';
import RichTextRenderer from '../components/rich-text-renderer'


import heroStyles from '../components/hero.module.css'

class ProjectTemplate extends React.Component {


    render() {
        const project = get(this.props, 'data.contentfulProject')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        console.log(project.projectArticle, 'PROJECT-ARTICLE')

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={`${project.projectTitle} | ${siteTitle}`} />
                    {/* <MultiImageHero data={project.projectImages} /> */}
                    <div className={heroStyles.hero}>
                        <Img
                            className={heroStyles.heroImage}
                            alt={project.title}
                            fluid={project.projectImages[0].fluid}
                        />
                    </div>
                    <div className="wrapper">
                        <div className={styles.cToolsUsed}>
                            <h1 className={styles.projectTitle}>{project.projectTitle}</h1>
                            {project.toolsUsed.map((tool) => {
                                return (
                                    <Img className={styles.tool} key={tool.id} fluid={tool.fluid} />
                                )
                            })}
                        </div>
                        <a className={styles.projectLink} href={project.projectUrl} target={"_blank"} rel={"noreferrer"}>Check out this project here!</a>
                        <p
                            style={{
                                display: 'block',
                            }}
                        >
                            {project.publishDate}
                        </p>
                        <div>
                            <RichTextRenderer node={project.projectArticle} />
                        </div>
                    </div>
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
                fluid(maxHeight:400, maxWidth: 640, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
                }
            }
            slug
            projectUrl
            projectTitle
            projectArticle {
             json
            }
            toolsUsed{
             fluid( maxWidth: 48) {
                ...GatsbyContentfulFluid_tracedSVG
                }
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
