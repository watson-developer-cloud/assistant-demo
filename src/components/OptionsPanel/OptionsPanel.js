import React from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton/GenericButton';

const OptionsPanel = ({ toggleJson }) => (
  <div className="options-panel">
    <GenericButton
      classes="json-sidebar__button"
      onClick={toggleJson}
    />
    <GenericButton />
    <GenericButton />
  </div>
);

OptionsPanel.propTypes = {
  toggleJson: PropTypes.func.isRequired,
};

export default OptionsPanel;
