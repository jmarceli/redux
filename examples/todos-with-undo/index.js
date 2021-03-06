import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

const store = createStore(todoApp);

const rootElement = document.getElementById('root');
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
