import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { GrMenu } from "react-icons/gr";

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
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/project/">Projects</Link>
            </li>
            {/*<li className={styles.menuItem}>
              <Link to="/fun/">Fun</Link>
            </li>*/}
            <li className={styles.menuItem}>
              <Link to="/about-me/">About</Link>
            </li>
          </ul>


          <div className={styles.mobileHamburger} onClick={this.toggleMobileMenu}>
            <GrMenu />
          </div>

            <div className={this.state.showMobileMenu? styles.activeMobileMenu: styles.cMobileMenu }>

              <ul key={'mobile-menu'} className={styles.mobileMenu}>
                  <li className={styles.menuItem}>
                    <Link to="/">/ Home</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/project/">/ Projects</Link>
                  </li>
                  {/*<li className={styles.menuItem}>
                    <Link to="/fun/">Fun</Link>
                  </li> */}
                  <li className={styles.menuItem}>
                    <Link to="/about-me/">/ About</Link>
                  </li>
              </ul>
            </div> 
        </nav>
      </div>
    )
  }
}

export default Navigation
