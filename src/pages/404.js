import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './404.module.css'
import Layout from '../components/layout'

class ErrorPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const pageNotFoundImage = get(this, 'props.data.contentfulAsset.file.url')

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={siteTitle} />
                    <div className={styles.wrapper}>
                        <div className={styles.errorImage}>
                            <img alt="404 gif" src={pageNotFoundImage} />
                        </div>
                        <div>
                            <h3>Oops, looks like you ended up somewhere unintended...</h3>
                            <p className={styles.goHome}> The page could not be found.
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
          contentfulAsset(contentful_id: {eq: "3AgceIsaPi4Wz3vDEyArtt"}) {
            file {
              url
              fileName
              contentType
            }
            id
          }
        site {
            siteMetadata {
                title
            }
        }
    }
`