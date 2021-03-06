import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { GrTwitter, GrInstagram, GrLinkedinOption, GrGithub, GrMenu } from "react-icons/gr";

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false,
      bodyScroll: true,
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState(prevState => ({ showMobileMenu: !prevState.showMobileMenu }))
  }


  componentDidUpdate() {
    this.state.showMobileMenu? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }
  componentWillUnmount() {
    document.body.style.overflow = 'scroll';
  }
  render() {
    return (
      <div className={styles.cNavigation}>
        <nav role="navigation" className={styles.navigation}>
          <h2 className={styles.navTitle}>shanko</h2>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/blog/">Blog</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/project/">Projects</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about-me/">About me</Link>
            </li>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/natiboi_" aria-label="instagram" target="_blank" rel="noreferrer"><GrInstagram /></a>
              <a href="https://twitter.com/natiboi__" aria-label="twitter" target="_blank" rel="noreferrer"><GrTwitter /></a>
              <a href="https://www.linkedin.com/in/nathan-shanko-5330b4a8/" aria-label="linkedin" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
              <a href="https://github.com/natibekele" aria-label="github" target="_blank" rel="noreferrer"><GrGithub /></a>
            </div>
          </ul>

          <div className={styles.mobileHamburger} onClick={this.toggleMobileMenu}
            onKeyPress={()=>{}}
            role="button" tabIndex="0">
            <GrMenu />
          </div>
          {this.state.showMobileMenu ?
            <div className={styles.cMobileMenu}>

              <ul key={'mobile-menu'} className={styles.mobileMenu}>
                  <li className={styles.menuItem}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/blog/">Blog</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/project/">Projects</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/about-me/">About Me</Link>
                  </li>
              </ul>
            </div> : ''

          }
        </nav>
      </div>
    )
  }
}

export default Navigation
