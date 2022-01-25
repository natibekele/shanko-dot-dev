import React, { useRef, Suspense, useEffect } from 'react';
import * as styles from './playground.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

class Fun extends React.Component {
	render() {
		return(
			<Layout className={styles.layout} >
			</Layout>
		)
	}
}

export default Fun;