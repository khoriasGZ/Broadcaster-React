/*
 * Npm import
 */
import { combineReducers } from 'redux';


/*
 * Local import
 */
import form from './form';
import settings from './settings';
import messages from './messages';


/*
 * Code
 */
const reducer = combineReducers({
  form,
  settings,
  messages,
});


/*
 * Export default
 */
export default reducer;
