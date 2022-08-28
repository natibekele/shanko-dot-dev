import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <img key={article.slug} alt="blog post hero image" src={article.heroImage.fluid.srcWebp} />
      <div className={styles.previewBody}>
        <h3 className={styles.previewTitle}>
          {article.title}
        </h3>
        <small>{article.publishDate}</small>
      </div>
    </Link>
  </div>
)
