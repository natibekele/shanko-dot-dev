import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import styles from './layout.module.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container className={styles.pageLayout}>
        <div className={styles.layoutBody} >
          {children}
        </div>
        <Navigation />
      </Container>
    )
  }
}

export default Template
