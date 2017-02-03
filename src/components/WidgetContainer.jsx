import React from 'react';

const WidgetContainer = ({widgetName}) => {
	const modulePath = './' + widgetName + '/' + widgetName;
	const WidgetComponent = require(modulePath).default;

	return (
		<div className="rh-widget">
			<WidgetComponent />
		</div>
	);
}

export default WidgetContainer;