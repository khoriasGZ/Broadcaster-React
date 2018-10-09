/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Formatizer from 'formatizer';


/*
 * Local import
 */


/*
 * Code
 */
const Message = ({ username, content, myself }) => (
  <div
    className={classNames(
      'message',
      { 'message--myself': myself },
    )}
  >
    <div className="message-username">{username}</div>
    <div className="message-content">
      <Formatizer message={content} />
    </div>
  </div>
);
Message.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  myself: PropTypes.bool.isRequired,
};


/*
 * Export default
 */
export default Message;
