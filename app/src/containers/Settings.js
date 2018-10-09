/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Settings from 'src/components/Settings';
import {
  toggleSettings,
  changeInputSettings,
  saveSettings,
} from 'src/store/reducers/settings';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  visible: state.settings.visible,
  inputValue: state.settings.input,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleSettings,
    changeInputSettings,
    saveSettings,
  }, dispatch),
  // actions: {
  //   toggleSettings: () => {
  //     dispatch(toggleSettings());
  //   },
  // },
});


/*
 * Container
 */
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
