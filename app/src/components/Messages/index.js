/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Message from 'src/containers/Messages/Message';


/*
 * Code
 */
const Messages = ({ messageIds }) => (
  <div id="messages">
    {messageIds.map(messageId => (
      <Message
        key={messageId}
        id={messageId}
      />
    ))}
  </div>
);
Messages.propTypes = {
  messageIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};


/*
 * Export default
 */
export default Messages;
