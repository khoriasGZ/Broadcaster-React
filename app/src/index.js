/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


/*
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';
import { wsConnect } from 'src/store/socket';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  // On rend l'application
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

  // On se connecte au websocket
  store.dispatch(wsConnect());
});
