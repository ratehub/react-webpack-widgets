import React from 'react';
import styles from './Tricolour.css';

const Tricolour = (props) => {
	const onClick = (event) => {
		event.preventDefault();
		fetch('http://ratehub.dev:4000')
			.then(res => res.json().then(data => {
				alert(JSON.stringify(data));
			}));
	}
	return (
		<div className={styles.container}>
			<div className={styles.left} />
			<div className={styles.middle}>
				<a href="http://qhacks.io" onClick={onClick}>QHacks!</a>
			</div>
			<div className={styles.right} />
		</div>
	);
}

export default Tricolour;