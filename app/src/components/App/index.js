/*
 * Npm import
 */

import React from 'react';


/*
 * Local import
 */
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';


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
