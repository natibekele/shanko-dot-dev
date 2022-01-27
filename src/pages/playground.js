import React from 'react';
import * as styles from './playground.module.css';
import Layout from '../components/layout.js';

class Playground extends React.Component {
	render() {
		return(
			<Layout className={styles.layout} >
			</Layout>
		)
	}
}

export default Playground;