import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <div className={styles.previewBody}>
        <h3 className={styles.previewTitle}>
          {article.title}
        </h3>

        <small>{article.publishDate}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
          className ={styles.previewIntro}
        />
        <button className={styles.previewButton}>
          <label to={`/blog/${article.slug}`}>View Post</label>
        </button>
      </div>
    </Link>
  </div>
)
