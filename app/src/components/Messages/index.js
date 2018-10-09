/*
 * Npm import
 */
import React from 'react';
 /*
 * Local import
 import Message from './Message';
 */

 /*
 * Code
 */
const Messages = () => (

  <div id="messages">

    <div className="message message--myself">
      <div className="message-username">Pseudo 1 (moi) :</div>
      <div className="message-content">Hello world ;)</div>
    </div>

    <div className="message">
      <div className="message-username">Pseudo 2 :</div>
      <div className="message-content">Je suis du texte</div>
    </div>

  </div>

);



 /*
 * Export default
 */

export default Messages;
