/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
class Form extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    value: PropTypes.string.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  }


  /*
   * Actions
   */
  handleChange = (evt) => {
    // Je récupère la valeur de l'input
    const { value } = evt.target;

    // Je veux la mettre dans le state
    this.props.actions.changeInputMessage(value);
  }

  handleSubmit = (evt) => {
    // Empêcher le comportement par défaut de l'event
    // Ici, empêcher le rechargement de la page
    evt.preventDefault();

    // On envoie le message
    this.props.actions.sendMessage();
  }


  /**
   * Render
   */
  render() {
    const { value } = this.props;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          id="form-input"
          type="text"
          placeholder="Ecrivez votre message…"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}


/*
 * Export default
 */
export default Form;
