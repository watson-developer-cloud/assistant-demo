import React from 'react';
import PropTypes from 'prop-types';
// import DuoIcons from '../Icon/Icon';

const GenericButton = ({ classes, onClick }) => {
  const buttonStyle = `generic-button options-panel__button ${classes}`;

  return (
    <button
      className={buttonStyle}
      onClick={() => { onClick(); }}
    />
  );
};

GenericButton.propTypes = {
  classes: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenericButton;
