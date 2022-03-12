import React from 'react';
import * as styles from './home.module.css';
import { graphql } from 'gatsby';
import get from 'lodash/get'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import ImageSway from '../components/3d/scenes/ImageSway';

class RootIndex extends React.Component {
    render() {

    const { title, meta }  = get(this, 'props.data.site.siteMetadata')
    return(
      <Layout className={styles.layout} >
        <Helmet title={title} meta={meta} />
        <div className={ styles.imageContainer }>
          <StaticImage className={styles.titleImage}
          alt="title image"
          src="../../static/jesus-van.jpg"/>
        </div>
        <div className={styles.titleBorder}>
          <h1 className={styles.title}> Nathan Shanko </h1>
        </div>

        <h3 className={styles.nati}>ナティ</h3>

        <video id="video" playsInline className={styles.video} crossOrigin='anonymous' muted loop>
          <source src='/test-video-2.mp4' type='video/mp4 '/>
        </video>

        <ImageSway />
        <div className={styles.scroll} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query RootQuery {
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