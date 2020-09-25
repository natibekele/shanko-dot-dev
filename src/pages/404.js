import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './404.module.css'
import Layout from '../components/layout'

class ErrorPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const pageNotFoundImage = get(this, 'props.data.allContentfulAsset.edges[0].node')

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={siteTitle} />
                    <div className="wrapper">
                        <div className={styles.errorImage}>
                            <Img fluid={pageNotFoundImage.fluid} />
                        </div>
                        <div>
                            <h3>Oops, looks like you ended up somewhere unintended...</h3>
                            <p> The page could not be found.
                                 Click <span className={styles.goHome}><Link to={"/"}>here</Link></span> to go back home.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ErrorPage

export const pageQuery = graphql`
    query FourOFourQuery {
        allContentfulAsset(filter: {contentful_id: {eq: "3AgceIsaPi4Wz3vDEyArtt"}}) {
            edges {
              node {
                id
                fluid(maxHeight: 250, maxWidth: 250, resizingBehavior: SCALE) {
                    ...GatsbyContentfulFluid_tracedSVG
                }
                title
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