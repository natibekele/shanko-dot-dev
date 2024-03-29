import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './about-me.module.css'
import Layout from '../components/layout'
import { GrTwitter, GrInstagram, GrLinkedinOption, GrGithub } from "react-icons/gr";

class AboutMe extends React.Component {
    render() {
        const { title, meta }  = get(this, 'props.data.site.siteMetadata')
        const person = get(this, 'props.data.allContentfulPerson.edges[0].node')

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={title} meta={meta} />
                    <div className={styles.wrapper}>
                        <h2 className={styles.heading}>About</h2>
                        <div className={styles.aboutMeImage}>
                            <Img fluid={person.image.fluid} />
                        </div>
                        <div className={styles.aboutMeInfo}>
                            <h3 className={styles.name}>{person.name}</h3>
                            <div className={styles.card}>
                                <div className={styles.cardItem}><span>{person.title}</span></div>
                                <div className={styles.cardItem}><span>{person.company}</span></div>
                            </div>
                        </div>
                        <div className={styles.contactMe}>
                            <a className={styles.contactOption} aria-label="instagram" href="https://instagram.com/natiboi_" target="_blank" rel="noreferrer"><GrInstagram /></a>
                            <a className={styles.contactOption} aria-label="twitter" href="https://twitter.com/natiboi_" target="_blank" rel="noreferrer"><GrTwitter /></a>
                            <a className={styles.contactOption} aria-label="linkedin" href="https://www.linkedin.com/in/nathan-shanko-5330b4a8/" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
                            <a className={styles.contactOption} aria-label="github" href="https://github.com/natibekele" target="_blank" rel="noreferrer"><GrGithub /></a>
                        </div>

                        <div className={styles.details} 
                            dangerouslySetInnerHTML={{ __html: person.shortBio.childMarkdownRemark.html }}>

                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}

export default AboutMe

export const pageQuery = graphql`
query AboutMeQuery {
    allContentfulPerson(filter: {contentful_id: {eq: "6FdEy4JbK00flYHnfwtFq2"}}) {
        edges {
          node {
            company
            email
            github
            name
            shortBio {
              childMarkdownRemark {
                html
              }
            }
            image {
                fluid(maxWidth: 500, background: "rgb:000000") {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            title
            twitter
          }
        }
      }

    site {
        siteMetadata {
            title
            meta {
                content
                property
            }
        }
    }
  }
`