/*
 * Npm import
 */


/*
 * Local import
 */
import { SEND_MESSAGE } from 'src/store/reducers/form';
import { receiveMessage } from 'src/store/reducers/messages';


/*
 * Types
 */
const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';


/*
 * Code
 */
let socket;

const createMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      // On initialise la connexion
      socket = window.io();

      // On écoute les messages du serveur
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });
      break;

    case SEND_MESSAGE: {
      // Je récupère mon state
      const state = store.getState();

      // Je vérifie que c'est pas vide
      const content = state.form.input.trim();
      if (content !== '') {
        // Je crée mon objet message
        const message = {
          username: state.settings.user,
          content,
        };

        // Et je l'envoie au serveur
        socket.emit('send_message', message);
      }
      break;
    }

    default:
  }

  // On passe l'action au voisin
  next(action);
};


/*
 * Action creators
 */
export const wsConnect = () => ({
  type: WEBSOCKET_CONNECT,
});


/*
 * Export default
 */
export default createMiddleware;
