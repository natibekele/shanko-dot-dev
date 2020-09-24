import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './project-preview.module.css'

export default ({ project }) => (
  <div className={styles.projectPreview}>
    <Link to={`/project/${project.slug}/`}>
      {project.projectImages?
      <Img alt="" fluid={project.projectImages[0].fluid} className={styles.projectImage} />
      : ''
      }
      <div className={styles.projectPreviewBody}>
        <h3 className={styles.projectPreviewTitle}>
          {project.projectTitle}
        </h3>

        <button className={styles.projectPreviewButton}>
          <Link to={`/project/${project.slug}/`}>View Post</Link>
        </button>
      </div>
    </Link>
  </div>
)
