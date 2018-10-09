/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Message from 'src/components/Messages/Message';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => {
  const message = state.messages.byId[ownProps.id];
  return {
    ...message,
    myself: message.username === state.settings.user,
  };
};

// Actions
const mapDispatchToProps = {};


/*
 * Container
 */
export default connect(mapStateToProps, mapDispatchToProps)(Message);
