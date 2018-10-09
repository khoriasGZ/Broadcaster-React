/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';


/*
 * Code
 */
const App = () => (
  <div id="app">
    <h1 id="app-title">Broadcaster</h1>
    <Messages />
    <Form />
    <Settings />
  </div>
);


/*
 * Export default
 */
export default App;
