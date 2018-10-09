/*
 * Types
 */
const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
const INPUT_CHANGE_SETTINGS = 'INPUT_CHANGE_SETTINGS';
const SAVE_SETTINGS = 'SAVE_SETTINGS';


/*
 * Initial state
 */
const initialState = {
  user: 'anonymous',
  visible: false,
  input: 'anonymous',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        visible: !state.visible,
      };

    case INPUT_CHANGE_SETTINGS:
      return {
        ...state,
        input: action.value,
      };

    case SAVE_SETTINGS: {
      // On récupère la valeur de l'input
      // et on enlève les espaces en trop
      const user = state.input.trim();

      // Si la valeur est vide, alors on ne fait rien
      if (user === '') {
        return state;
      }

      // Sinon, on enregistre l'user
      return {
        ...state,
        // J'enregistre mon username à partir de
        // la valeur de l'input settings
        user,

        // Et en plus, je cache le form settings
        visible: false,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeInputSettings = value => ({
  type: INPUT_CHANGE_SETTINGS,
  value,
});

export const saveSettings = () => ({
  type: SAVE_SETTINGS,
});


/*
 * Selectors
 */
