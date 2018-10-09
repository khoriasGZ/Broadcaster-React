/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Messages from 'src/components/Messages';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  messageIds: state.messages.allIds,
});

// Actions
const mapDispatchToProps = {};


/*
 * Container
 */
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
