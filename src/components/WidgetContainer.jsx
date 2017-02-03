import React from 'react';
import classNames from 'classnames'
import styles from './WidgetContainer.scss';

const WidgetContainer = ({widgetName}) => {
	const modulePath = './' + widgetName + '/' + widgetName;
	const WidgetComponent = require(modulePath).default;

	return (
		<div className={classNames(styles.container)}>
			<WidgetComponent />
		</div>
	);
}

export default WidgetContainer;