/*
 * Types
 */
const INPUT_CHANGE_MESSAGE = 'INPUT_CHANGE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


/*
 * Initial state
 */
const initialState = {
  input: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE_MESSAGE:
      return {
        ...state,
        input: action.value,
      };

    case SEND_MESSAGE: {
      // On récupère la valeur de l'input
      // et on enlève les espaces en trop
      const content = state.input.trim();

      // Si la valeur est vide, alors on ne fait rien
      if (content === '') {
        return state;
      }

      // Sinon
      return {
        ...state,
        input: '',
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const changeInputMessage = value => ({
  type: INPUT_CHANGE_MESSAGE,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});


/*
 * Selectors
 */
