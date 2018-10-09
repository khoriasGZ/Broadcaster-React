/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Form from 'src/components/Form';
import { changeInputMessage, sendMessage } from 'src/store/reducers/form';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  value: state.form.input,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeInputMessage, sendMessage }, dispatch),
});


/*
 * Container
 */
export default connect(mapStateToProps, mapDispatchToProps)(Form);
