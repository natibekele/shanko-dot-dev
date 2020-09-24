import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import styles from './layout.module.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <div className={styles.topBar} />
        
        <Navigation />
        <div className={styles.layoutBody} >
          {children}
        </div>
      </Container>
    )
  }
}

export default Template

//'linear-gradient(to right, #fff,#fefefe, #661ff2, #6610f2, #d11149,#a0ddff)