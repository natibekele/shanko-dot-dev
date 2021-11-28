import React from 'react';
import * as styles from './playground.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js'
class Playground extends React.Component {
	render() {
		return(
			<Layout>
				<div className={styles.titleBorder}>
					<h1 className={styles.title}> Nathan Shanko </h1>
				</div>
			</Layout>
		)
	}
}

export default Playground;