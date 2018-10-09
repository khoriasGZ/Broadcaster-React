/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */


/*
 * Code
 */
class Settings extends React.Component {
  /*
   * Actions
   */
  handleChange = (evt) => {
    // Je récupère la valeur de l'input
    const { value } = evt.target;

    // Je veux la mettre dans le state
    this.props.actions.changeInputSettings(value);
  }

  handleSubmit = (evt) => {
    // Empêcher le comportement par défaut de l'event
    // Ici, empêcher le rechargement de la page
    evt.preventDefault();

    // On sauvegarde
    this.props.actions.saveSettings();
  }


  /**
   * Render
   */
  render() {
    const { visible, actions, inputValue } = this.props;
    return (
      <div
        id="settings"
        className={classNames({ 'settings--visible': visible })}
      >
        {/* Bouton On/Off */}
        <button id="settings-btn" onClick={actions.toggleSettings} />

        {/* Form : input + button */}
        <form id="settings-form" onSubmit={this.handleSubmit}>
          <input
            id="settings-input"
            type="text"
            placeholder="Votre username…"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button id="settings-submit">OK</button>
        </form>
      </div>
    );
  }
}
Settings.propTypes = {
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  inputValue: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Settings;
