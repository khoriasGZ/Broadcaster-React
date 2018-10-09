/*
 * Types
 */
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';


/*
 * Initial state
 */
const initialState = {
  allIds: [],
  byId: {},
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      const { id } = action.message;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: action.message,
        },
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});


/*
 * Selectors
 */
