/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from 'src/store/reducers';
import socket from 'src/store/socket';


/*
 * Code
 */
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares
const socketMiddleware = applyMiddleware(socket);
const middlewares = compose(socketMiddleware, ...devTools);

// Store
const store = createStore(reducer, middlewares);


/*
 * Export default
 */
export default store;
