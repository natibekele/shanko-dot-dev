import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
    <div>
        <div className={styles.hero}>
            <Img
                className={styles.heroImage}
                alt={data.name}
                fluid={data[0].fluid}
            />
        </div>
        <div className={styles.secondaryImages}>
            <Img
                className={styles.secondaryHeroImage}
                alt={data.name}
                fluid={data[1].fluid}
            />
            <Img
                className={styles.secondaryHeroImage}
                alt={data.name}
                fluid={data[2].fluid}
            />
        </div>
    </div>
)
