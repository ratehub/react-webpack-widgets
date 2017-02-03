import React from 'react';
import styles from './Tricolour.css';

const Tricolour = (props) =>
	<div className={styles.container}>
		<div className={styles.left} />
		<div className={styles.middle} />
		<div className={styles.right} />
	</div>;

export default Tricolour;