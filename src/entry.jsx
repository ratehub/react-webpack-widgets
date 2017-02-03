import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import WidgetContainer from './components/WidgetContainer';
import './scss/widget-reset.scss';

let widget = (widgetName, Container) => {
  return (
    <AppContainer errorReporter={Redbox}>
       <Container widgetName={widgetName} />
    </AppContainer>
  );
};

const widgetElements = document.querySelectorAll('[data-widget]');
widgetElements.forEach(widgetElement => {
   const widgetName = widgetElement.dataset.widget;
   render(
      widget(widgetName, WidgetContainer),
      widgetElement
   );

   if (module.hot) {
      module.hot.accept('./components/WidgetContainer', () => {
         const NextContainer = require('./components/WidgetContainer').default;
         render(
            widget(widgetName, NextContainer),
            widgetElement
         );
      });
   }
})
